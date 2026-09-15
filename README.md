# Portfolio site — setup

## File map

```
index.html              the homepage (hero + scrolling project list + index rail)
css/style.css            all styling
js/projects.js           <-- EDIT THIS to add/remove/reorder projects
js/main.js                renders projects.js into the page, runs the scroll-spy
projects/truss-bridge.html   example detail page (linked)
projects/cnc-fixture.html    example detail page (linked)
images/                  placeholder SVGs — swap in real photos, same filenames or update projects.js
```

## Adding a project

Open `js/projects.js` and add an object to the `PROJECTS` array. That's the whole workflow —
the homepage, the side index, and the card layout all update automatically. If you want it to
link somewhere, either point `link` at a new file in `projects/` (copy one of the two examples
as a starting point) or set it to `null` to leave it as a summary-only card, like the drone
frame entry.

## Running it locally

Because `main.js` loads `projects.js` and builds the DOM at runtime, opening `index.html`
directly by double-clicking it (a `file://` URL) will work in most browsers, but it's safer to
serve it locally so relative paths and any future `fetch()` calls behave the same as they will
on GitHub Pages:

```bash
cd site
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publishing on GitHub Pages

1. **Create the repo.** On GitHub, create a new repository — for a *user* site the name must be
   exactly `<your-username>.github.io`; for a *project* site any name works and the site will be
   published at `<your-username>.github.io/<repo-name>`.

2. **Push this folder's contents to it** (run from inside `site/`):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. **Turn on Pages.** In the repo, go to *Settings → Pages*. Under "Build and deployment",
   set Source to "Deploy from a branch", branch `main`, folder `/ (root)`. Save.

4. **Wait a minute, then visit the URL** GitHub shows on that same Pages settings screen
   (usually `https://<your-username>.github.io/` or `.../<repo-name>/`). Pages rebuilds
   automatically on every push to `main` after this.

5. **Swap in real content:** replace the images in `images/`, update the copy in `index.html`'s
   hero section, update `js/projects.js` with your real projects, and fill in the placeholder
   paragraphs in the two example detail pages (or delete them and point `link` at your own).

## Notes for the next step you mentioned

- The side index (`#index-rail`) already highlights the section currently in view as you
  scroll — that's the scroll-spy behavior in `js/main.js` via `IntersectionObserver`. It's
  driven off the same `PROJECTS` array, so new sections get index entries for free.
- Detail pages are plain, uncoupled HTML files that reuse `css/style.css` — add as many as you
  want under `projects/` without touching the homepage's rendering logic.
