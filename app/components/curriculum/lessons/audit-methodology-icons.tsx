/** One glyph per M8 video, used as the bespoke poster art on each video card. */

function FolderIcon() {
  return (
    <path
      d="M3 6.5a2 2 0 012-2h4.4l1.8 2.2H19a2 2 0 012 2V17a2 2 0 01-2 2H5a2 2 0 01-2-2V6.5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  );
}

function MessageCircleIcon() {
  return (
    <path
      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  );
}

function TargetIcon() {
  return (
    <g stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.2" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </g>
  );
}

function SearchIcon() {
  return (
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="M20 20l-4.35-4.35" />
    </g>
  );
}

function LayersIcon() {
  return (
    <g stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 17.5l9 5 9-5" />
    </g>
  );
}

function ToolIcon() {
  return (
    <path
      d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  );
}

function TrendingUpIcon() {
  return (
    <g stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
      <path d="M23 6L13.5 15.5 8.5 10.5 1 18" />
      <path d="M17 6h6v6" />
    </g>
  );
}

function CheckSquareIcon() {
  return (
    <g stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
      <path d="M9 11l3 3 10-10" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </g>
  );
}

/** Slug -> icon glyph (a <path>/<g>, meant to sit inside a parent <svg viewBox="0 0 24 24">). */
export const auditVideoIcons: Record<string, React.ReactElement> = {
  "step-1": <FolderIcon />,
  "step-2a": <MessageCircleIcon />,
  "step-2b": <TargetIcon />,
  "step-3": <SearchIcon />,
  "step-4": <LayersIcon />,
  "step-5": <ToolIcon />,
  "step-6": <TrendingUpIcon />,
  "step-7": <CheckSquareIcon />,
};
