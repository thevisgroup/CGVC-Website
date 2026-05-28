# CGVC website maintainer guide

This website is generated using [Jekyll](https://jekyllrb.com/), which uses [Liquid](https://shopify.github.io/liquid) as the template language.

Most yearly content lives in two places:

1. `CGVCYYYY/` contains that year's pages.
1. `_data/CGVCYYYY/` contains structured data used by those pages.

You can use HTML or Markdown in content pages. You do not need deep Jekyll knowledge for normal yearly updates.

## Access to this repository

The repository is read-only for non-maintainers, in order to make changes you need to be invited as a maintainer:

1. Email Kai (kai.xu"at"nottingham.ac.uk), or
2. Contact the chair of the [previous CGVC conference](https://cgvc.org.uk/).

### Submit changes

1. All changes **must** include a commit message explaining the changes you've made.
1. A commit **must** focus on a single subject only, so it's easier to follow and debug.

By doing so you are also leaving a useful guide to the future maintainers.

## Add a new conference

Run the generator from the repository root. Replace `2027` with the new conference year:

```bash
./scripts/new-conference-year 2027
```

The script creates `CGVC2027/` and `_data/CGVC2027/` from the clean templates in `_templates/`, updates `_config.yml`, updates the homepage year in `index.md`, and adds a placeholder for the previous conference in `_data/pastyears.yml`.

Then update the new files:

1. `_data/CGVC2027/general_information.yml`
   - `conference_number`
   - `host_name`
   - `homepage_announcement`
   - `host_intro`
   - `logo`
   - submission and registration flags/links
   - conference and programme chairs
1. `_data/CGVC2027/important_dates.yml`
1. `_data/CGVC2027/steering_committee.yml`
1. `_data/CGVC2027/organizing_committee.yml`
1. `_data/CGVC2027/programme_committee.yml`
1. `_data/CGVC2027/sponsors.yml`
1. Every generated page in `CGVC2027/`: `index.html`, `dates.html`, `cfp.md`, `submission.html`, `reviewer.html`, `presenter.html`, `committee.md`, `keynote.md`, `venue.md`, `travel.md`, `accomodation.md`, `registration.html`, `programme.html`, `award.html`, `social-events.html`, `sponsor/current-sponsor.html`, and `sponsor/call-for-sponsors.md`
1. `_data/pastyears.yml`, replacing the generated `TODO` entry for the previous year with the real title, location, date, website, and proceedings link

Put images and documents for the new year in:

- `assets/img/CGVC2027/`
- `CGVC2027/documents/`

Reference documents from a page like this:

```html
<a href="documents/Guideline.pdf">Guideline.pdf</a>
```

## Check your work

Run the year checker after edits:

```bash
./scripts/check-conference-year CGVC2027
```

Warnings usually mean something still needs manual review, such as an old `CGVC2026` reference. Errors must be fixed before publishing.

Preview the site locally before pushing. See `Deploy.md` for Docker and Ruby options. The usual Ruby commands are:

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Navigation and templates

- Navigation links are in `_data/navigation.yml`.
- New-year templates are in `_templates/CGVCYYYY/` and `_templates/_data/CGVCYYYY/`.
- If a standard page is added or removed, update the templates, `_data/navigation.yml`, and `scripts/check-conference-year` together.

## Manual page and style updates

1. Year pages can be HTML or Markdown.
1. Shared layouts are in `_layouts/`.
1. Shared snippets are in `_includes/`.
1. Styles are in `_sass/` and `assets/css/main.scss`.

## Update email forwarding

1. This is currently controlled by Qiru using Cloudflare.

## Preview and Deploy

1. Check the `Deploy.md` file on how to preview changes locally, and then deploy them on GitHub Pages.

## Help

1. Open an issue on CGVC's github page: <https://github.com/thevisgroup/CGVC/issues/new>
1. Email Bob (robert.laramee"at"nottingham.ac.uk)
1. Email the last CGVC maintainer(s).

<https://github.com/thevisgroup/CGVC>

Good luck.

---

Updated on 28 May 2026
