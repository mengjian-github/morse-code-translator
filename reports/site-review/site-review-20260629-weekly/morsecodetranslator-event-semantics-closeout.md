# MorseCodeTranslator P1 Event Semantics Closeout — tool events + source/UTM split

Date: 2026-06-29
Task: t_736342aa
Site: https://morsecodetranslator.app
Scope: internal analytics event semantics, attribution props, and reporting interpretation only. No production data writes, no external publishing, no ads.

## Verdict

P1 event-semantics gap is closed in code and build-verified.

Root cause: `tool_success` and `tool_result` were fired for every unique live preview input/output pair. GA4 reports eventCount, so every character-level or realtime preview update inflated counts. Plausible weekly report was read at visitor-level, so the same user could count once there while contributing many GA4 events.

## Event contract after this change

Task-level funnel events:
- `tool_start`: first non-empty input per mode + surface in a page session.
- `tool_result`: first valid translated result per mode + surface in a page session.
- `tool_success`: first valid translated result per mode + surface in a page session; same task-level scope as `tool_result` for current static frontend.
- `copy_output`: explicit copy action only.
- `audio_play`: explicit play action only.
- `download_wav`: explicit WAV generation/download action only.

Realtime preview event:
- `result_update`: debounced live preview update after 900ms idle.
- `result_update` carries `event_scope=live_preview` and `realtime_preview=true` and must not be used as task completion.

Shared event props now attached by `trackEvent`:
- `page_path`
- `tool_name=morse_code_translator`
- `source`
- `medium`
- `channel`
- `campaign`
- `term`
- `content`
- `referrer_host`
- `landing_page`

Channel rules:
- Google / Bing / DuckDuckGo / Yahoo / Yandex referrers => `channel=organic_search`.
- ChatGPT / OpenAI / Perplexity-like referrers => `channel=ai_referral`.
- UTM values override referrer and persist for the session.
- No referrer and no UTM => `source=direct`, `medium=none`, `channel=direct`.

## GA4 vs Plausible interpretation

The observed mismatch is expected under the old implementation:
- Plausible 7d `tool_start` / `tool_result` / `tool_success`: 17 visitors each.
- GA4 7d eventCount: `tool_start=28`, `tool_result=387`, `tool_success=461`.

Explanation:
- Plausible report was visitor-level.
- GA4 eventCount counted every event dispatch.
- Old `tool_result` / `tool_success` dispatched once per unique `mode:variant:input:output`, so normal typing produced many completion events.

New reporting guidance:
- Use `tool_start`, `tool_result`, `tool_success`, `copy_output`, `audio_play`, `download_wav` for funnel/event-count reporting.
- Use `result_update` only for UX diagnostics of live preview behavior.
- For channel reporting, split tool events by `channel`, `source`, `medium`, and `campaign`.
- Compare GA4 eventCount to Plausible visitors only after stating the level: event-level vs visitor-level.

## Files changed

- `lib/analytics.ts`
  - Added session-persisted attribution fields for `channel`, `referrer_host`, and `landing_page`.
  - Added Google/Bing/DuckDuckGo/Yahoo/Yandex organic mapping and ChatGPT/OpenAI/Perplexity AI-referral mapping.
  - Ensured all tracked events carry source/UTM/referrer props.

- `app/components/MorseTranslator.tsx`
  - Changed `tool_result` / `tool_success` from per-input live preview events to task-level once-per-mode/surface events.
  - Added debounced `result_update` for live preview updates.
  - Added `event_scope` and `realtime_preview` props so reports can separate task completion from preview churn.

## Analytics gap status

Closed:
- GA4 high eventCount root cause identified and fixed.
- `tool_result` / `tool_success` no longer count every realtime preview update.
- Source/UTM/channel/referrer props are available on tool events.
- Google / Direct / Yandex / ChatGPT-like source paths can be split in GA4/Plausible custom props after fresh traffic arrives.

Still dependent on fresh data:
- Existing 7d GA4 rows remain historically inflated.
- Next weekly data package should validate the new contract on traffic after this deployment/build.

## Validation

- `npm run build`: passed.
- Static export generated 28/28 pages.
- Static JS scan confirmed event names present in the built client bundle: `tool_start`, `tool_result`, `tool_success`, `result_update`, `copy_output`, `audio_play`, `download_wav`, `channel`, `referrer_host`, `landing_page`.

## Safety

No external publishing, no ad changes, no production business-data writes, no secrets printed.
