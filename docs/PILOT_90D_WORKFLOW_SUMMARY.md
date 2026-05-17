# 90-Day Pilot Workflow Summary (Reference Alignment)

Source document reviewed:
- `/Users/radekvrnak/Desktop/JoliOrigins/JOli Origins Implementacni Zadani v1.docx`

Purpose:
- keep the "big picture" aligned across all collaborating accounts
- translate the long implementation brief into practical execution constraints
- preserve strategic intent without relying on chat history

## 1. Strategic Frame
1. This is a 90-day pilot, not instant full automation.
2. Trust, references, and measurable commercial validation come before scale automation.
3. AI is an accelerator of routine tasks, not the source of brand credibility.
4. Every phase ends with go/no-go logic.

## 2. Primary Outcomes of Pilot
1. Acquire first meaningful B2B salon traction.
2. Build trust-rich content engine with compliance guardrails.
3. Establish reliable web measurement and decision reporting.
4. Prove operating rhythm before heavy automation.

## 3. Operating Principles
1. Compliance and claim safety are non-negotiable.
2. Human approval gate is mandatory for sensitive/public outputs.
3. Architecture is modular state-machine, not one monolithic flow.
4. Workflow state must live in DB/audit tables, not only in automation history.

## 4. Content Strategy Direction (0-6 months)
Priority pillars:
1. Founder and hand-made production (trust first)
2. Generation Perfect ritual education
3. Ingredients and evidence
4. Salon partnerships
5. Lifestyle (low weight in early phase)

Implication:
- early content should over-index on proof and authority, not aesthetic-only lifestyle volume.

## 5. Eliška Governance (Critical)
1. Eliška is a transparent virtual guide, not a real founder/expert persona.
2. AI disclosure must be explicit in profile/web-policy context.
3. Visual and narrative usage must stay inside defined boundaries.
4. Trust layer must remain anchored in real founder, product, and partner salons.

## 6. Product Visual Safety Model
1. Real product imagery is the source of truth.
2. AI may support scene/background, but product/label integrity cannot be hallucinated.
3. Deterministic QA + visual QA + human approval in pilot phase.
4. Never publish deformed labels, logo, or unreadable packaging.

## 7. Claim Matrix Requirement
1. AI outputs must stay inside explicit claim matrix rules.
2. Every claim class needs allowed/forbidden wording and substantiation level.
3. Post-generation QA blocks forbidden claims before approval/publish.
4. Approval logs must retain claim traceability.

## 8. B2B Acquisition Model
1. Emphasis on personalized outreach, lead magnet, and warm referrals.
2. Mass cold outreach is not default strategy.
3. High-value steps remain manager-approved during pilot.
4. CRM pipeline discipline and call-note quality directly affect automation usefulness.

## 9. Manager Operating System
1. Telegram = approvals and daily decisions.
2. ClickUp = tasks and deal operations.
3. Looker Studio = weekly steering/reporting.
4. Manager should not need to operate n8n/Supabase directly for routine decisions.

## 10. Web and Analytics Implications
1. Consent-first measurement architecture.
2. /pro-salony conversion path is a strategic asset, not side content.
3. Event taxonomy and UTM discipline are mandatory early.
4. Reporting must separate facts, interpretation, and recommendations.

## 11. Definition of Done Mindset
1. "Built" is not "done."
2. Each module is done only when:
   - technically functional
   - measurable
   - auditable
   - operationally usable by manager

## 12. Implementation Guidance for This Repository
1. Keep homepage and future pages consistent with ritual-first and trust-first positioning.
2. Preserve no-discount language and no-medical-claim communication.
3. Build with future Directus/Medusa/n8n integration boundaries in mind.
4. Document every major step in `HANDOVER_LOG.md`.

