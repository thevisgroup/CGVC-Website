# CGVC - How to update

This website is generated using [Jekyll](https://jekyllrb.com/), which uses [Liquid](https://shopify.github.io/liquid) as the template language.

Everything has been made reusable, and minimal effort is required to create a new conference.

You may use HTML or markdown in all content pages.

## Access to this repository

The repository is read-only for non-maintainers, in order to make changes you need to be invited as a maintainer:

1. Email Kai (kai.xu"at"nottingham.ac.uk), or
2. Contact the chair of the [previous CGVC conference](https://cgvc.org.uk/).

### Submit changes

1. All changes **must** include a commit message explaining the changes you've made.
1. A commit **must** focus on a single subject only, so it's easier to follow and debug.

By doing so you are also leaving a useful guide to the future maintainers.

## Add a new conference

For example we are adding a new conference for the CGVC in 2024, follow the steps below:

1. Duplicate the last year's folder `CGVC2023` and rename it to `CGVC2024`. **This folder contains the webpage structure (HTML/md files)**. And in this folder, you likely need to update the following :
   1. Search and replace `year: CGVC2023` with `year: CGVC2024`.
   1. Based on the information supplied from conference chairs:
      1. Update `cfp` for Call for Papers.
      1. Update `keynote` for keynotes.
      1. Update `venue-accommodation` for venue and accommodation.
1. In the `_data` folder located in the root directory, duplicate the last year's folder `CGVC2023` and rename it to `CGVC2024`. The yml files here will be used to populate HTML/md pages duplicated in Step 1.

   1. Based on the information supplied from conference chairs:
      1. Update the corresponding files in `_data/CGVC2024`. There are 7 files in the folder, their names are self-explanatory.
   1. Update `pastyears.yml` to include CGVC 2023 (the previous year so it shows up in the Past Year list).

1. Update `index.md` in the root directory, replace `CGVC2023` with `CGVC2024`.

## Manual update/tweak for webpages

1. All webpages are HTML or markdown based.
1. To update the style, go to `_sass/base.scss`, which supports scss, sass and css syntax.
1. In each year's folder, there is a `documents` folder which contains static files such as latex templates, guidelines for that year. Referencing them is easy: `<a href="documents/Guideline.pdf">Guideline.pdf</a>.`

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

Updated on 6 Dec 2024 by Qiru Wang
