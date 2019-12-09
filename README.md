CGVC - How to update
===============

## Add a new conference

For example we are adding a new conference for the CGVC in 2021, follow the steps below:

1. Duplicate the last year's folder `CGVC2020` and rename it to `CGVC2021`. **This folder contains the webpage structure (HTML files)**.
	1. Search and replace `site.data.CGVC2020` with `site.data.CGVC2021` within the `CGVC2021` folder created.
1. In the `_data` folder located in the root directory, duplicate the last year's folder `CGVC2020` and rename it to `CGVC2021`. **This folder contains the data (important dates and committees) for the conference.**
1. Update `index.md` in the root directory to point to CGVC 2021:
	1. The file supports HTML and markdown syntax.
	1. Update the conference location, and the description if necessary.
	1. Search and replace `CGVC2020` with `CGVC2021`.

## Update data for a conference

1. Update the corresponding files in `_data/CGVC2021`. There are 3 files in the folder, their names are self-explanatory.
1. Update `pastyears.yml` in the `_data` folder to include CGVC 2021. **Indentation matters in these files.**
1. Update `committee.yml` in the `_data` folder if necessary. **Indentation matters in these files.**

## Manual update/tweak for webpages

1. All webpages are HTML based, and they support markdown syntax.
1. To update the style, go to `_sass/base.scss`, which supports scss, sass and css syntax.
1. In each year's folder, there is a `documents` folder which contains static files such as latex templates, guidelines for that year. Referencing them is easy: `<a href="documents/Guideline.pdf">Guideline.pdf</a>.`

## Preview

1. Check the `Deploy.md` file on how to preview changes.

## Help

1. Open an issue on CGVC's github page: https://github.com/swanseavisgroup/CGVC/issues/new
