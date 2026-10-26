# AGENTS.md

Guidance for AI coding agents working in this repository.

## What this is

Kunal Lad's personal website, served at https://kunal10.github.io. It is a Jekyll static site built on the
[al-folio](https://github.com/alshedivat/al-folio) theme. Most of the repo is upstream theme code. The personal content lives in a
small set of files (listed below), and most changes should touch only those.

The theme docs that ship with the repo are worth reading before larger changes: `CUSTOMIZE.md` (how every section works),
`INSTALL.md` (local setup and deployment), and `FAQ.md`. `README.md` is the upstream al-folio README, not a description of this site.

## Where the content lives

| What                                 | File(s)                                                                                |
| ------------------------------------ | -------------------------------------------------------------------------------------- |
| Home / about page                    | `_pages/about.md` (bio text, profile image, toggles for announcements, posts, socials) |
| Profile photo                        | `assets/img/prof_pic.jpg`                                                              |
| Projects                             | `_projects/<Name>.md`, one file per project                                            |
| Project images                       | `assets/img/<ProjectName>/` (e.g. `thumbnail.png`)                                     |
| Projects index page                  | `_pages/projects.md` (`display_categories: [work, academic]`)                          |
| CV page                              | `assets/json/resume.json` (JSON Resume format), rendered by `_layouts/cv.liquid`       |
| CV PDF download link                 | `cv_pdf:` in `_pages/cv.md` front matter (a Google Drive link)                         |
| Publications                         | `_bibliography/papers.bib` (jekyll-scholar)                                            |
| Social links                         | `_data/socials.yml`                                                                    |
| Site-wide settings and feature flags | `_config.yml`                                                                          |

**CV gotcha:** `_layouts/cv.liquid` uses `site.data.resume` (loaded from `assets/json/resume.json` via `jekyll-get-json`) whenever it
exists, and ignores `_data/cv.yml`. Edit `resume.json` to change the CV. `_data/cv.yml` is leftover theme data.

### Navigation

Nav entries come from `nav: true` and `nav_order:` in each `_pages/*.md` front matter. The visible pages are about, projects (3),
publications (4) and cv (5). Blog, books, people, repositories and teaching exist but have `nav: false`. Turn one on only when asked.
There is no `_posts/` or `_news/` directory, so blog posts and announcements are effectively unused.

## Adding a project

Copy the front-matter shape of an existing file in `_projects/`, for example `BreakItDown.md`:

```yaml
---
layout: page
title: Break It Down
description: One-line summary shown on the project card
img: assets/img/BreakItDown/thumbnail.png
importance: 4 # lower numbers sort first within a category
category: work # must be one of display_categories in _pages/projects.md: work | academic
---
```

- Name the file in PascalCase (`VisualDiary.md`) and put its images in a matching `assets/img/<Name>/` folder.
- Existing project bodies use `## Overview` and `## Announcements` sections, with Bootstrap `row`/`col-sm-*` wrappers for embeds
  (YouTube iframes, scrollable announcement panels). Match that pattern to keep the pages consistent.
- If the project also belongs on the CV, add it to the `projects` array in `assets/json/resume.json`. Keep the descriptions short and
  the dates accurate.
- Image paths in front matter and markdown are root-relative without a leading slash (`assets/img/...`). That is how the existing
  files do it.

## Build and preview

Docker is the most reliable way to build locally (it is the theme's recommended route):

```bash
docker compose pull && docker compose up   # serves on http://localhost:8080 with live reload
```

Native Ruby (CI uses Ruby 3.4.1):

```bash
bundle install
bundle exec jekyll serve --lsi             # http://localhost:4000
JEKYLL_ENV=production bundle exec jekyll build   # production build into _site/
```

The build also needs Python with `jupyter` and `nbconvert` for the notebook plugin, and ImageMagick for responsive images.
`_site/`, `.jekyll-cache/` and `vendor/` are build output and are already gitignored, so never commit them.

## Formatting and checks

CI runs Prettier on every push and PR to `main`, and a formatting failure blocks the merge. Run this before committing:

```bash
npm install                 # installs prettier 3.1.1 + @shopify/prettier-plugin-liquid
npx prettier . --check      # or --write to fix
```

Config: `.prettierrc` (`printWidth: 150`, `trailingComma: es5`, Liquid plugin). `.prettierignore` excludes minified assets,
`_scripts/*`, `lighthouse_results/**` and a few vendored files.

`.pre-commit-config.yaml` also enforces trailing whitespace, end-of-file newlines, valid YAML, and no large files. Compress images
before adding them under `assets/img/`.

## Deployment

Pushing to `main` deploys the site, so don't push without the owner's go-ahead. Two deploy workflows exist:

- `.github/workflows/pages.yml` builds with jekyll-scholar and deploys through GitHub Pages Actions.
- `.github/workflows/deploy.yml` is the upstream al-folio workflow. It builds and pushes to the `gh-pages` branch.

The live site is served by `pages.yml` (the Pages source is GitHub Actions; the `gh-pages` branch is not what visitors get). The PR
check named `deploy` runs `deploy.yml`, so a passing PR build does not exercise `pages.yml`. Keep the two build steps in sync: both
must install ImageMagick (otherwise the responsive `-480/-800/-1400.webp` images are missing and every page falls back to the full-size
originals, with 404s in the console) and both must run PurgeCSS. Don't delete either workflow without checking the Pages setting.

Performance-related flags in `_config.yml`: `enable_math` (MathJax) and the Altmetric/Dimensions entries in `enable_publication_badges`
are off because nothing uses them and their scripts load on every page. Turn them back on only if a page needs LaTeX or a bib entry
gets an `altmetric=`/`dimensions=` field. `third_party_libraries.download: true` makes the build download every CDN library
(jQuery, MDB, Masonry, Google Fonts, ...) into `assets/libs/` (gitignored) and serve it from this site; MDB's stylesheet is linked
from the local `assets/css/mdb.min.css` instead so PurgeCSS trims it. Other workflows (broken links, axe, lighthouse, CodeQL, Docker images, TOC updates) are inherited
from the theme.

## Conventions

- Keep changes scoped to content files. Avoid editing theme internals (`_layouts/`, `_includes/`, `_sass/`, `_plugins/`) unless the
  task requires it. Those edits make upstream al-folio updates harder to merge.
- Prefer turning features on and off with the `enable_*` flags in `_config.yml` over removing code.
- Commit messages are short, imperative and specific: `Add Visual Diary project`, `Fix image and text alignment in project cards`.
- The site is public. Don't add personal details beyond what the owner provides, and treat existing personal fields in data files
  as the owner's call.
- Verify visual changes in a local build (light and dark mode, since `enable_darkmode: true`, and a mobile width) before calling
  them done.
