# J.Oli Origins Collaboration Protocol

## Purpose
This protocol keeps work consistent across multiple accounts and long project duration.

## Golden Rules
1. Keep all production intent in versioned files, not only in chat.
2. Do not change brand tone, UX strategy, or compliance language without documenting why.
3. Every implementation session must end with a handover entry.
4. Avoid undocumented "quick fixes".
5. Respect project boundaries: edit only inside this repository and designated workspace.

## Session Start Checklist
1. Read `docs/MASTER_SPECIFICATION.md`.
2. Read the last 5 entries in `docs/HANDOVER_LOG.md`.
3. Confirm current priorities in `todolist.md` and align tasks before coding.
4. Verify local build status before major changes.

## Session End Checklist
1. Confirm build and lint status.
2. Update `docs/HANDOVER_LOG.md` with:
   - date/time
   - account/session tag
   - changes completed
   - open items
   - risks or assumptions
3. If scope changed, update `docs/MASTER_SPECIFICATION.md`.
4. Update `todolist.md` progress markers.

## Branch and Commit Hygiene
1. Prefer feature branches for larger changes.
2. Use clear commit naming:
   - `feat(homepage): ...`
   - `feat(cms): ...`
   - `fix(tracking): ...`
   - `docs(spec): ...`
3. Never force-push shared branch history without explicit agreement.

## Documentation Standards
1. All key decisions must be traceable.
2. When requirements conflict, newest written decision in repository docs wins.
3. Keep docs practical: what was changed, why, and what is next.
4. Keep terminology stable across docs:
   - "ritual-first commerce"
   - "dark quiet luxury"
   - "human approval gate"
   - "no discount language"

## Quality Gates
1. No major UI merge without responsive check.
2. No content automation feature without approval status enforcement.
3. No customer-facing copy merge with prohibited claims.
4. No tracking-related merge without event naming consistency.

## Escalation Path
If uncertainty appears in architecture, compliance, or brand tone:
1. Pause implementation.
2. Write open question into `HANDOVER_LOG.md`.
3. Propose 2-3 options with tradeoffs.
4. Continue only after direction is selected.

