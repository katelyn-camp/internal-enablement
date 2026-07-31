# SAM/SA SEO + AEO Enablement Reference

Internal reference site for AirOps Strategic Account Managers and Solution
Architects — SERP anatomy, an SEO/AEO/GEO glossary, how LLM retrieval works,
and the AirOps audit-workflow library. Not an LMS: no locked sequence, no
login wall, no grading. Built to be searched and deep-linked into during a
live client call as much as it's read top-to-bottom during onboarding.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4, deployed on Vercel.
Content lives as data (`lib/*.ts`), not hardcoded in components — see below.

## Run it

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Editing content (no engineering required)

- `lib/glossary.ts` — glossary terms. Add an object to `glossaryTerms`.
- `lib/workflows.ts` — the workflow library. Add an object to `workflows`;
  it appears in the index and gets its own page automatically.
- `lib/serp-hotspots.ts` — the SERP Anatomy hotspot definitions.
- `lib/llm-comparison.ts` — the LLMs & Retrieval comparison content and
  check-yourself scenarios.

Entries with `contentPending: true` (or missing fields on a workflow) render
a visible "Content pending" tag instead of failing — safe to add a stub now
and fill in the real write-up later.

## Progress tracking — open decision

Progress ("which hotspots/themes/workflows have you been through") is
tracked client-side only, in `localStorage`, via the `useProgress()` hook in
`lib/progress/`. There is no account and no server. This means:

- Progress doesn't follow a person across devices or browsers.
- A manager can't see anyone's completion centrally — the `/progress` page
  only shows what the current browser has recorded, with a "copy summary to
  paste in Slack" button as an intentionally informal stand-in for real
  reporting.

If cross-device tracking or manager-visible completion becomes a real
requirement, swap `lib/progress/storage.ts`'s `LocalStorageProgressStore`
for one backed by a real API (Postgres + a lightweight auth layer, e.g.
magic-link or AirOps SSO) — every component talks to progress state only
through `useProgress()`, so no page/component code should need to change.

## Design system

Tokens live in `app/globals.css` (`--color-*`, the type scale, `--radius-card`)
and are wired into Tailwind via `@theme`. This is a deliberately different,
quieter direction from the standard AirOps product brand kit — see the
project brief for the full rationale. Serrif VF (display, `app/fonts/SerrifVF.ttf`)
is AirOps' real licensed display face. Inter (body) is still a placeholder —
swap for Saans in `app/layout.tsx` if that gets confirmed too.

## Deploy

```bash
git add .
git commit -m "your message"
git push origin main
```

Vercel auto-deploys from `main` once the repo is connected — if this is a
fresh repo, remember to set the Framework Preset to Next.js under
Settings → General after the first connect (it defaults to "Other" for an
empty repo).
