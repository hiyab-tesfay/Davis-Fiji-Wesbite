# Phi Gamma Delta — Delta Chi at UC Davis

A responsive, dependency-free chapter website for the Delta Chi Chapter of Phi Gamma Delta at UC Davis.

## Preview locally

From this folder, run:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Replacing image placeholders

Every image slot is deliberately labeled **INSERT IMAGE HERE**. Keep the placeholder wrapper, add the `has-image` class, and replace its label with an image. Example:

```html
<div class="photo-placeholder">
  <span class="placeholder-label">...</span>
</div>
```

becomes:

```html
<div class="photo-placeholder has-image">
  <img src="assets/your-photo.jpg" alt="Describe the people, setting, and event shown">
</div>
```

Use landscape images at least 1600 pixels wide for page heroes and 1000 pixels wide for other large slots. Keep meaningful `alt` text on every image.

## Files

- `index.html` — home and chapter overview
- `recruitment.html` — quarterly recruitment information
- `philanthropy.html` — service, partner organizations, and events
- `brotherhood.html` — chapter brotherhood
- `parents.html` — information for parents and families
- `contact.html` — social links, chapter location, and external resources
- `styles.css` — shared design system and responsive layouts
- `script.js` — shared navigation, footer, mobile menu, and subtle reveal effects

The existing `decode.py` utility is unrelated and has been left unchanged.

## Before publishing

- Confirm that `217 Russell Boulevard` is the chapter's current public-facing location. The address was supplied for this build, but older public listings associate it with a different fraternity.
- Confirm the reporting period behind the chapter-provided `$20,000+` philanthropy total, then add that timeframe if one is available.
- Confirm the current Davis IFC Instagram handle; this draft uses the link supplied for the build.
- Obtain approval to display each community partner's logo. The draft loads logos from the organizations' official sites and links each card back to its source.
- Replace the simple text-only `FIJI` badge with an approved official chapter/fraternity logo if desired; official brand files are available through Phi Gamma Delta's media resources.

## Content sources

- [Phi Gamma Delta chapter roster](https://connect.phigam.org/chapterroster) — Delta Chi Chapter and May 19, 2018 charter date
- [UC Davis Phi Gamma Delta profile](https://csi.ucdavis.edu/sorority-fraternity-life/chapters/phi-gamma-delta) — February 28, 2016 colony date
- [Phi Gamma Delta](https://phigam.org/) — national history, values, programs, and policies
- [UC Davis Interfraternity Council](https://csi.ucdavis.edu/sorority-fraternity-life/councils/ifc) — council role, member chapters, and fall Rush Week
- [Empower Yolo](https://empoweryolo.org/), [Homeward Bound Golden Retriever Rescue & Sanctuary](https://homewardboundgoldens.org/), and [Feed Sacramento Homeless](https://www.feedsachomeless.org/) — organization names and service descriptions

The `$20,000+` total, quarterly Week 1 recruitment schedule, current location, and the full list of community partnerships are chapter-provided facts from the project brief.
