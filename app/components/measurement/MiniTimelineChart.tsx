const WIDTH = 560;
const HEIGHT = 130;
const PAD = 20;

export function MiniTimelineChart({
  label,
  data,
  color,
  markWeekIndex,
  markLabel,
}: {
  label: string;
  data: number[];
  color: string;
  markWeekIndex?: number;
  markLabel?: string;
}) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const stepX = (WIDTH - PAD * 2) / (data.length - 1);

  const points = data.map((v, i) => {
    const x = PAD + i * stepX;
    const y = HEIGHT - PAD - ((v - min) / range) * (HEIGHT - PAD * 2);
    return { x, y, v };
  });

  const polyline = points.map((p) => `${p.x},${p.y}`).join(" ");
  const markX = markWeekIndex !== undefined ? PAD + markWeekIndex * stepX : null;

  return (
    <div>
      <p className="mb-1 text-caption font-semibold uppercase tracking-wide text-ink/55">{label}</p>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full" role="img" aria-label={`${label}, illustrative weekly trend`}>
        <line x1={PAD} y1={HEIGHT - PAD} x2={WIDTH - PAD} y2={HEIGHT - PAD} stroke="#E7E4E0" strokeWidth={1} />
        {markX !== null && (
          <line x1={markX} y1={PAD / 2} x2={markX} y2={HEIGHT - PAD} stroke="#1D1B19" strokeOpacity={0.25} strokeDasharray="3,3" />
        )}
        <polyline points={polyline} fill="none" stroke={color} strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={2.5} fill={color} />
        ))}
        {markX !== null && markLabel && (
          <text x={markX} y={12} textAnchor="middle" className="text-[10px]" fill="#1D1B19">
            {markLabel}
          </text>
        )}
        <text x={PAD} y={HEIGHT - 4} className="text-[10px]" fill="#1D1B19" fillOpacity={0.45}>
          Week 1
        </text>
        <text x={WIDTH - PAD} y={HEIGHT - 4} textAnchor="end" className="text-[10px]" fill="#1D1B19" fillOpacity={0.45}>
          Week {data.length}
        </text>
      </svg>
    </div>
  );
}
