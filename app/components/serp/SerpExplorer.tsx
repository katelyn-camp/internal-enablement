"use client";

import { serpHotspots, SerpHotspot } from "@/lib/serp-hotspots";
import { useHotspotSelection } from "@/lib/annotated-diagram/useHotspotSelection";
import { HotspotMarker } from "@/app/components/annotated-diagram/HotspotMarker";
import { DefinitionPanel } from "@/app/components/annotated-diagram/DefinitionPanel";
import { PaaItem } from "./PaaItem";

function byId(id: string) {
  return serpHotspots.find((h) => h.id === id)!;
}

const PAA_QUESTIONS = [
  {
    question: "What's the difference between Asana and Monday.com?",
    answer:
      "Asana is generally stronger for cross-team task dependencies and reporting; Monday.com leans more visual and customizable for teams that want to build their own workflow views.",
  },
  {
    question: "Is there a free project management tool for remote teams?",
    answer:
      "Most major tools offer a limited free tier (Asana, ClickUp, Trello) that works for small teams, but time-zone scheduling and advanced automation are usually paid-only features.",
  },
  {
    question: "What is the best software for small remote teams?",
    answer:
      "For teams under 10 people, lightweight tools like Notion or Trello tend to win over heavier platforms — the overhead of a full PM suite often isn't worth it until a team scales past a few concurrent projects.",
  },
];

const LOCAL_RESULTS = [
  { name: "Remote Ops Consulting", rating: "4.8", reviews: 112, blurb: "Workflow & tooling audits" },
  { name: "Distributed Team Co.", rating: "4.6", reviews: 74, blurb: "Remote process consulting" },
  { name: "Northline Advisory", rating: "4.9", reviews: 203, blurb: "PM software implementation" },
];

export function SerpExplorer() {
  const { activeItem, activeId, selectItem, viewedIds, hydrated } = useHotspotSelection(serpHotspots, "serp");

  function marker(id: string) {
    const h = byId(id);
    return (
      <HotspotMarker
        number={h.marker}
        label={h.label}
        active={activeId === id}
        viewed={hydrated && viewedIds.has(id)}
        onClick={() => selectItem(id)}
      />
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
      {/* The mock SERP — built from real markup, not a screenshot, so it stays crisp and editable. */}
      <div className="space-y-5">
        {/* fake search bar */}
        <div className="flex items-center gap-3 rounded-full border border-line bg-white px-5 py-3 shadow-sm">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden className="shrink-0 text-ink/40">
            <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.6" />
            <path d="M18 18L14 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span className="text-sm text-ink/80">best project management software for remote teams</span>
        </div>

        {/* Ad / paid result */}
        <div id="paid-result" className="relative rounded-card border border-line bg-white p-4">
          {marker("paid-result")}
          <p className="mb-1 text-caption font-semibold text-ink/45">Sponsored</p>
          <div className="mb-0.5 flex items-center gap-1.5 text-[13px] text-ink/50">
            <span className="h-3.5 w-3.5 rounded-full bg-paper-3" aria-hidden />
            www.monday.com/pm-software
          </div>
          <p className="text-base font-medium text-ink">Monday Work Management | Project Management Tool</p>
          <p className="mt-1 text-sm text-ink/70">
            Plan, track, and deliver work in one place. Trusted by 225k+ teams. Start a free 14-day trial.
          </p>
        </div>

        {/* AI Overview */}
        <div id="ai-overview" className="relative rounded-card border border-line bg-paper-3 p-5">
          {marker("ai-overview")}
          <div className="mb-2 flex items-center gap-2">
            <span className="text-signal" aria-hidden>
              ✦
            </span>
            <p className="text-caption font-semibold uppercase tracking-wide text-ink/60">AI Overview</p>
          </div>
          <p className="text-sm leading-relaxed text-ink/85">
            The best project management software for remote teams typically combines async-friendly task tracking,
            built-in chat or video, and time-zone-aware scheduling. Popular options include Monday.com and Asana for
            visual workflows, ClickUp for all-in-one flexibility, and Notion for lightweight teams that want docs and
            tasks in one place<sup className="text-[10px]">[1]</sup>
            <sup className="text-[10px]">[2]</sup>. Most reviewers recommend testing 2–3 tools with a real project
            before committing, since remote-team fit depends heavily on the existing chat and calendar
            stack<sup className="text-[10px]">[3]</sup>.
          </p>
          <p className="mt-3 text-caption text-ink/40">
            Generative AI is experimental — citations for this summary are shown below.
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {["monday.com", "asana.com", "clickup.com"].map((src) => (
              <span key={src} className="rounded-full border border-line bg-white px-2 py-0.5 text-[11px] text-ink/60">
                {src}
              </span>
            ))}
          </div>
        </div>

        {/* Featured snippet */}
        <div id="featured-snippet" className="relative rounded-card border border-line bg-white p-4">
          {marker("featured-snippet")}
          <p className="mb-2 text-sm font-medium text-ink">
            Best project management software for remote teams — quick answer
          </p>
          <ol className="ml-4 list-decimal space-y-1 text-sm text-ink/80">
            <li>Monday.com — best for visual, customizable workflows</li>
            <li>Asana — best for cross-team task tracking</li>
            <li>ClickUp — best all-in-one for budget-conscious teams</li>
          </ol>
          <div className="mt-2 flex items-center gap-1.5 text-[13px] text-ink/45">
            <span className="h-3.5 w-3.5 rounded-full bg-paper-3" aria-hidden />
            www.pmtoolreview.com
          </div>
        </div>

        {/* Organic result — annotated */}
        <div id="organic-result" className="relative rounded-card border border-line bg-white p-4">
          {marker("organic-result")}
          <div className="mb-0.5 flex items-center gap-1.5 text-[13px] text-ink/50">
            <span className="h-3.5 w-3.5 rounded-full bg-paper-3" aria-hidden />
            www.pmtoolreview.com › blog › best-pm-tools-remote
          </div>
          <p className="text-base font-medium text-ink">10 Best Project Management Tools for Remote Teams in 2026</p>
          <p className="mt-1 text-sm text-ink/70">
            We tested 24 tools over six weeks with fully distributed teams across 5 time zones — here&rsquo;s what
            actually held up beyond the free trial.
          </p>
        </div>

        {/* Organic result — unannotated, shown for scale/realism */}
        <div className="rounded-card border border-line bg-white p-4">
          <div className="mb-0.5 flex items-center gap-1.5 text-[13px] text-ink/50">
            <span className="h-3.5 w-3.5 rounded-full bg-paper-3" aria-hidden />
            www.remoteworkhub.com › tools › pm-software-guide
          </div>
          <p className="text-base font-medium text-ink">The Remote Team&rsquo;s Guide to Choosing PM Software</p>
          <p className="mt-1 text-sm text-ink/70">
            A buyer&rsquo;s framework for matching tool complexity to team size, not just feature checklists.
          </p>
        </div>

        {/* People Also Ask */}
        <div id="people-also-ask" className="relative rounded-card border border-line bg-white p-4">
          {marker("people-also-ask")}
          <p className="mb-1 text-sm font-medium text-ink">People also ask</p>
          <div>
            {PAA_QUESTIONS.map((q) => (
              <PaaItem key={q.question} question={q.question} answer={q.answer} />
            ))}
          </div>
        </div>

        {/* Local pack */}
        <div id="local-pack" className="relative rounded-card border border-line bg-white p-4">
          {marker("local-pack")}
          <p className="mb-3 text-sm font-medium text-ink">Workflow consultants near you</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {LOCAL_RESULTS.map((biz) => (
              <div key={biz.name} className="rounded-lg border border-line p-3">
                <div className="mb-2 h-14 rounded bg-paper-3" aria-hidden />
                <p className="text-sm font-medium text-ink">{biz.name}</p>
                <p className="text-caption text-ink/55">
                  {biz.rating} ★ ({biz.reviews}) · {biz.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge panel */}
        <div id="knowledge-panel" className="relative rounded-card border border-line bg-white p-4">
          {marker("knowledge-panel")}
          <div className="flex items-start gap-3">
            <div className="h-12 w-12 shrink-0 rounded-full bg-paper-3" aria-hidden />
            <div>
              <p className="text-base font-medium text-ink">Monday.com</p>
              <p className="text-sm text-ink/60">Project management software</p>
            </div>
          </div>
          <dl className="mt-3 space-y-1 text-sm">
            <div className="flex justify-between">
              <dt className="text-ink/50">Founded</dt>
              <dd className="text-ink/80">2012</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink/50">Headquarters</dt>
              <dd className="text-ink/80">Tel Aviv, Israel</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink/50">CEO</dt>
              <dd className="text-ink/80">Roy Mann</dd>
            </div>
          </dl>
          <p className="mt-3 text-caption text-ink/40">Typically shown in the right rail on desktop.</p>
        </div>

        {/* Image/video carousel */}
        <div id="carousel" className="relative rounded-card border border-line bg-white p-4">
          {marker("carousel")}
          <p className="mb-3 text-sm font-medium text-ink">Videos</p>
          <div className="flex gap-3 overflow-x-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative h-20 w-32 shrink-0 rounded-lg bg-paper-3">
                <span className="absolute inset-0 flex items-center justify-center text-ink/35" aria-hidden>
                  ▶
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DefinitionPanel<SerpHotspot>
        activeItem={activeItem}
        allItems={serpHotspots}
        viewedIds={viewedIds}
        hydrated={hydrated}
        onSelect={selectItem}
        emptyTitle="Explore the SERP"
        emptyDescription={
          <>
            Click any <span className="mx-0.5 inline-block h-2 w-2 rounded-full bg-signal align-middle" /> marker on
            the mock to see what that element is — and why it matters in a client conversation.
          </>
        }
        renderDetail={(h) => (
          <>
            <p className="mb-4 text-sm leading-relaxed text-ink/85">{h.definition}</p>
            <p className="mb-1 text-caption font-semibold uppercase tracking-wide text-ink/55">
              Why a SAM/SA should care
            </p>
            <p className="text-sm leading-relaxed text-ink/85">{h.whyItMatters}</p>
          </>
        )}
      />
    </div>
  );
}
