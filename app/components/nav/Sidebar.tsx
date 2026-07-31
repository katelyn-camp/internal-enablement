"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { navGroups, NavItemConfig } from "@/lib/nav-tree";
import { workflows } from "@/lib/workflows";
import { pageTypes } from "@/lib/page-anatomy";
import { useNavUiState } from "@/lib/nav-ui/useNavUiState";
import { useProgress } from "@/lib/progress/useProgress";
import { ProgressPill } from "./ProgressPill";

interface ResolvedChild {
  id: string;
  label: string;
  href: string;
}

function resolveChildren(item: NavItemConfig): ResolvedChild[] | undefined {
  if (item.childrenSource === "workflows") {
    return workflows.map((w) => ({ id: `workflows:${w.slug}`, label: w.title, href: `/workflows/${w.slug}` }));
  }
  if (item.childrenSource === "pageAnatomy") {
    return pageTypes.map((pt) => ({ id: `anatomy-of-pages:${pt.slug}`, label: pt.title, href: `/anatomy-of-pages/${pt.slug}` }));
  }
  return undefined;
}

function VisitedDot({ visited }: { visited: boolean }) {
  return <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${visited ? "bg-signal" : "bg-transparent"}`} aria-hidden />;
}

interface FlatEntry {
  id: string;
  label: string;
  href: string;
  groupLabel: string;
  parentLabel?: string;
}

export function Sidebar({ mobileOpen, onClose }: { mobileOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const { isExpanded, toggle } = useNavUiState();
  const { state: progress, hydrated } = useProgress();
  const [filter, setFilter] = useState("");

  const resolvedGroups = useMemo(
    () =>
      navGroups.map((group) => ({
        ...group,
        items: group.items.map((item) => ({ ...item, children: resolveChildren(item) })),
      })),
    [],
  );

  const flatEntries = useMemo(() => {
    const entries: FlatEntry[] = [];
    for (const group of resolvedGroups) {
      for (const item of group.items) {
        entries.push({ id: item.id, label: item.label, href: item.href, groupLabel: group.label });
        for (const child of item.children ?? []) {
          entries.push({ id: child.id, label: child.label, href: child.href, groupLabel: group.label, parentLabel: item.label });
        }
      }
    }
    return entries;
  }, [resolvedGroups]);

  const query = filter.trim().toLowerCase();
  const filteredEntries = query ? flatEntries.filter((e) => e.label.toLowerCase().includes(query)) : null;

  const isVisited = (id: string) => hydrated && progress.pagesVisited.includes(id);

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-ink/30 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col border-r border-line bg-paper transition-transform lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between gap-2 border-b border-line px-5 py-4">
          <Link href="/" onClick={onClose} className="font-display text-lg font-medium text-ink">
            SAM/SA Enablement
          </Link>
          <button type="button" onClick={onClose} className="rounded-full border border-line px-2.5 py-1 text-caption lg:hidden">
            Close
          </button>
        </div>

        <div className="border-b border-line px-4 py-3">
          <label htmlFor="nav-filter" className="sr-only">
            Filter pages by title
          </label>
          <div className="flex items-center gap-2 rounded-full border border-line bg-paper-2 px-3 py-1.5">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden className="shrink-0 text-ink/40">
              <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M18 18L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              id="nav-filter"
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Filter pages…"
              className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none"
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-3" aria-label="Primary">
          {filteredEntries ? (
            filteredEntries.length === 0 ? (
              <p className="px-3 py-4 text-sm text-ink/45">No matching page.</p>
            ) : (
              <ul className="space-y-0.5">
                {filteredEntries.map((entry) => (
                  <li key={entry.id}>
                    <Link
                      href={entry.href}
                      onClick={onClose}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${
                        pathname === entry.href ? "bg-ink text-paper" : "text-ink/75 hover:bg-paper-2"
                      }`}
                    >
                      <VisitedDot visited={isVisited(entry.id)} />
                      <span>
                        {entry.parentLabel && <span className="text-ink/40">{entry.parentLabel} / </span>}
                        {entry.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )
          ) : (
            <div className="space-y-5">
              {resolvedGroups.map((group) => (
                <div key={group.id}>
                  <button
                    type="button"
                    onClick={() => toggle(group.id)}
                    className="flex w-full items-center justify-between px-3 py-1.5 text-caption font-semibold uppercase tracking-wide text-ink/45"
                  >
                    {group.label}
                    <span className={`transition-transform ${isExpanded(group.id) ? "rotate-180" : ""}`} aria-hidden>
                      ⌄
                    </span>
                  </button>

                  {isExpanded(group.id) && (
                    <ul className="mt-1 space-y-0.5">
                      {group.items.map((item) => {
                        const active = pathname === item.href;
                        const hasChildren = !!item.children?.length;
                        return (
                          <li key={item.id}>
                            <div className={`flex items-center rounded-lg ${active ? "bg-ink text-paper" : "text-ink/80 hover:bg-paper-2"}`}>
                              <Link href={item.href} onClick={onClose} className="flex flex-1 items-center gap-2 px-3 py-2 text-sm">
                                <VisitedDot visited={isVisited(item.id)} />
                                {item.label}
                              </Link>
                              {hasChildren && (
                                <button
                                  type="button"
                                  onClick={() => toggle(item.id)}
                                  aria-label={`${isExpanded(item.id) ? "Collapse" : "Expand"} ${item.label}`}
                                  className="px-3 py-2 text-ink/40"
                                >
                                  <span className={`inline-block transition-transform ${isExpanded(item.id) ? "rotate-180" : ""}`} aria-hidden>
                                    ⌄
                                  </span>
                                </button>
                              )}
                            </div>
                            {hasChildren && isExpanded(item.id) && (
                              <ul className="ml-4 mt-0.5 space-y-0.5 border-l border-line pl-3">
                                {item.children!.map((child) => (
                                  <li key={child.id}>
                                    <Link
                                      href={child.href}
                                      onClick={onClose}
                                      className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm ${
                                        pathname === child.href ? "bg-ink text-paper" : "text-ink/65 hover:bg-paper-2"
                                      }`}
                                    >
                                      <VisitedDot visited={isVisited(child.id)} />
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </nav>

        <div className="border-t border-line p-3">
          <ProgressPill />
        </div>
      </aside>
    </>
  );
}
