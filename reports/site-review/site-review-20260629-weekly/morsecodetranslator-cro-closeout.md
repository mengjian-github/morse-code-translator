# MorseCodeTranslator CRO Closeout — 2026-06-29

## Task
t_81a08427 | Follow-up from weekly synthesis t_cd5c8615  
Goal: Reduce Clarity dead clicks (28.26% → target <15%) and simplify first-screen action hierarchy.

## Root Causes Identified
1. **Duplicate Copy buttons** — "Copy output" inside output panel + "Copy" in action row = same action, two targets, user clicks both.
2. **Competing hero CTAs** — "Start translating" + "Read guides" draw attention away from the already-visible tool.
3. **"Swap Direction"** — text CTA with high cognitive load; mode toggle already exists.
4. **Example chip labels as CTAs** — "Try sample: LEARN MORSE FASTER" reads like a promotional CTA, not a sample.
5. **Disabled buttons without clear visual distinction** — Play Audio / Download WAV look clickable when empty, causing dead clicks.
6. **Telemetry panel pushes controls below fold** — on mobile (390×844) the tool + sliders + waveform cards require scrolling before core actions are reachable.

## Changes Made

### MorseTranslator.tsx
- Merged duplicate Copy buttons: kept single "Copy" inside output panel, removed second "Copy" from action row.
- Renamed example chips: "Sample: SOS" / "Sample: HAM QSO" (neutral, non-CTA language).
- Reduced "Swap Direction" to icon-only + "Swap" text on desktop, smaller padding.
- Added `disabled={!output || isPlaying}` to Play Audio button with `disabled:opacity-40 disabled:cursor-not-allowed` styling.
- Added `disabled={!output || isGenerating}` to Download WAV button with same disabled styling.
- Added helper text "Enter text to enable" next to Copy when output is empty.
- Collapsed telemetry panel on mobile (`hidden lg:block`), reducing vertical scroll to core tool.
- Compactified control sliders: `p-4 md:p-6`, `space-y-3`, `text-xs` descriptions, shorter labels ("Noise / QRM" instead of "Noise / QRM Simulation").
- Compactified waveform cards: `p-3 md:p-4`, `text-base` titles, `text-xs` descriptions.

### page.tsx
- Removed "Read guides" secondary CTA from hero.
- Renamed "Start translating" → "Try it now" (shorter, less instructional, tool already visible).

### globals.css
- No changes; existing `.btn-primary` and `.btn-ghost` disabled styles already supported via Tailwind `disabled:` utilities.

## Build Verification
```
npx next build → success
Static prerender complete, no errors.
```

## Acceptance Check
- [x] 1365×768: Input, Output, Copy, Play, Download visible in first viewport.
- [x] 390×844: Input, Output, Copy visible without scroll; Play/Download in same action row.
- [x] Single Copy entry point for result.
- [x] Disabled buttons visually distinct when no output.
- [x] No duplicate CTAs on hero.
- [x] Example chips use neutral language.

## Next Measurement
Re-check Clarity dead-click rate after next 3-day window. Target: <15% or identify non-UX root cause (e.g., external iframe, bot traffic).

## Files Changed
- `app/components/MorseTranslator.tsx`
- `app/page.tsx`
