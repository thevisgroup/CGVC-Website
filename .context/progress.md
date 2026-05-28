# Progress

Goal: make annual CGVC conference rollover easier for future maintainers with limited Jekyll knowledge.

Notes:
- Pre-existing modified file: `CGVC2024/documents/ELF-EG-CGVC2024.pdf`. Leave untouched and exclude from commits.
- Local build initially cannot run because this checkout has no installed Jekyll executable; verify again after dependency setup if available.

Todos:
- [x] 1. Add a new-year generation workflow.
  - Added `scripts/new-conference-year`.
  - Verified Ruby syntax and a temp 2027 rollover.
  - Adversarial review passed after stale-reference and past-years placeholder fixes.
- [ ] 2. Move repeated yearly facts into `_data`.
- [ ] 3. Add rollover validation checks.
- [ ] 4. Make navigation easier to maintain.
- [ ] 5. Add template year/data folders.
- [ ] 6. Refresh `README.md` with clear maintainer instructions.
