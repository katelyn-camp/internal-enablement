/**
 * Illustrative data only — clearly fake, for demonstrating the shape
 * of the leading/lagging pattern, not a real client's numbers.
 */
export const leadingIndicator = {
  label: "Citation share (%)",
  data: [8, 9, 11, 14, 18, 22, 25, 27, 29, 31],
};

export const laggingIndicator = {
  label: "Branded search volume (indexed)",
  data: [40, 41, 40, 42, 44, 48, 55, 63, 70, 76],
};

export const lagWindowWeeks = 3;

export interface TalkTrackSnippet {
  id: string;
  text: string;
  isAvoid: boolean;
  note: string;
}

export const talkTrackSnippets: TalkTrackSnippet[] = [
  {
    id: "safe-timing-pattern",
    text: "Citation share moved up about three weeks before we saw branded search start climbing — that's the pattern we typically see, and it's a good sign the visibility work is translating into brand awareness.",
    isAvoid: false,
    note: "Names the pattern and the timing without claiming the first thing caused the second.",
  },
  {
    id: "safe-cant-say-caused",
    text: "We can't say the citation increase directly caused the traffic bump, but the timing and direction both line up with what we'd expect if it did.",
    isAvoid: false,
    note: "Explicitly disclaims causation while still making the correlation useful to the client.",
  },
  {
    id: "safe-historical-pattern",
    text: "The leading indicators are moving in the right direction. Historically, when we've seen this pattern hold for a few more weeks, the lagging business metrics have followed.",
    isAvoid: false,
    note: "Grounds the claim in a historical pattern rather than a guarantee for this specific client.",
  },
  {
    id: "avoid-direct-lift",
    text: "This citation increase caused a 15% lift in traffic.",
    isAvoid: true,
    note: "Overclaims a direct causal link that a correlation this size can't actually support.",
  },
  {
    id: "avoid-revenue-attribution",
    text: "AEO is why revenue went up this quarter.",
    isAvoid: true,
    note: "Skips every other variable that could explain the change and states certainty the data doesn't have.",
  },
];
