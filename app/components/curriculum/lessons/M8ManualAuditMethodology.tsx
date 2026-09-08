import { auditMethodologyVideos } from "@/lib/audit-methodology-videos";
import { PageOutline } from "@/app/components/nav/PageOutline";
import { LoomVideoEmbed } from "./LoomVideoEmbed";
import { auditVideoIcons } from "./audit-methodology-icons";
import { SectionHeading } from "./shared";

const OUTLINE = auditMethodologyVideos.map((v) => ({ id: v.slug, label: v.title }));

function FolderIcon({ className, color }: { className?: string; color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className={className} style={color ? { color } : undefined}>
      <path
        d="M3 6.5a2 2 0 012-2h4.4l1.8 2.2H19a2 2 0 012 2V17a2 2 0 01-2 2H5a2 2 0 01-2-2V6.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function M8ManualAuditMethodology() {
  return (
    <div className="space-y-12">
      <PageOutline sections={OUTLINE} />

      <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
        An eight-part walkthrough of one full manual audit, start to finish, recorded on a real (anonymized)
        account. Watch in order, since each step builds on the folders and files the previous one produced.
      </p>

      {auditMethodologyVideos.map((video) => (
        <section id={video.slug} key={video.slug}>
          <SectionHeading>
            {video.step}: {video.title}
          </SectionHeading>
          <LoomVideoEmbed
            loomId={video.loomId}
            step={video.step}
            title={video.title}
            durationSeconds={video.durationSeconds}
            accentColor={video.accentColor}
            icon={auditVideoIcons[video.slug]}
          />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/80">{video.synopsis}</p>

          {video.folderStructure && (
            <div className="mt-3 max-w-md rounded-card border border-line bg-paper-2 p-5">
              <div className="flex items-center gap-2 text-sm font-medium text-ink">
                <FolderIcon className="shrink-0" color={video.accentColor} />
                {video.folderStructure.root}
              </div>
              <ul className="mt-3 space-y-2.5 border-l border-line pl-4">
                {video.folderStructure.children.map((child) => (
                  <li key={child} className="flex items-center gap-2 text-sm text-ink/70">
                    <FolderIcon className="shrink-0 text-ink/35" />
                    {child}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
