# Armin Moallemi — Cybersecurity-Inspired Portfolio

A production-ready, responsive one-page portfolio for Armin Moallemi, a Toronto Metropolitan University Computer Science co-op student. The interface uses a restrained cybersecurity visual language with subtle dashboard influences while keeping the content clear and appropriate for recruiters, co-op employers, academic contacts, and industry professionals.

## Features

- Complete education, skills, experience, project, volunteering, award, and certification content
- Every volunteer activity from the current résumé
- Dark cybersecurity command-center interface with steel-gray borders, cyan/blue glow, HUD separators, scanning states, and system-status panels
- Lightweight hero animation with digital clouds, animated network paths, and drifting security/technology symbols
- Reduced particle count on mobile
- Full `prefers-reduced-motion` support
- Responsive Bootstrap navigation with active-section tracking
- Accessible focus states, skip navigation, semantic landmarks, and descriptive image text
- Downloadable PDF résumé
- Supplied email and LinkedIn destinations
- Secure project modules, system-event timelines, credential record badges, and clearly marked placeholders instead of invented links
- Search, answer-engine, local-context, structured-data, and social-sharing metadata

## Technologies

- HTML5
- Bootstrap 5.3.8 through jsDelivr
- Custom CSS
- Vanilla JavaScript
- Inline SVG symbols

There is no framework, build process, backend, database, jQuery dependency, animation library, or paid service.

## File structure

```text
/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── images/
    │   ├── armin-moallemi-portrait.jpg
    │   └── social-preview.png
    ├── icons/
    │   └── favicon.svg
    └── resume/
        └── armin-moallemi-resume.pdf
```

Original source documents can remain in the repository root for private maintenance. The deployed page only references files inside the structure above.

## Run locally

The simplest option is to open `index.html` directly in a current browser.

For production-like behaviour, run a static server from the project directory:

```powershell
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

An internet connection is needed for the Bootstrap CDN. All project-specific files use relative paths and work from a GitHub Pages repository subpath.

## Placeholders requiring input

The following information was not supplied and has not been invented:

- `[Add public URL]` — currently used in `og:url`; replace after deployment.
- `[Add GitHub URL]` — shown as a non-interactive contact placeholder.
- `[Add link]` — project GitHub and demo placeholders.
- `[Add document]` — project case-study or design-document placeholders.
- `[Add project image]` — add only when a real screenshot or project image is available.
- `[Confirm whether to display phone number]` — the phone number is intentionally omitted from the public page.

Disabled project controls are deliberate placeholders and do not create broken navigation.

## Update content

### Personal details and section content

Edit the appropriate semantic section in `index.html`. Keep dates inside `<time>` elements and maintain the existing heading order.

When changing name, email, location, education, profile URLs, or knowledge areas, also update:

- Page title and meta description
- Open Graph and Twitter/X metadata
- JSON-LD structured data
- Footer and contact links

### Replace the résumé

Replace:

```text
assets/resume/armin-moallemi-resume.pdf
```

Keep the same filename to avoid changing links. If the filename changes, search `index.html` for the old path and update every occurrence.

### Replace the portrait

Replace:

```text
assets/images/armin-moallemi-portrait.jpg
```

If the new image has different dimensions, update its `width`, `height`, and alt text in `index.html`. The supplied portrait is displayed without cropping.

## Add project screenshots and links

### Add a screenshot

1. Save the optimized image under `assets/images/`.
2. Add an `<img>` inside the relevant `.project-visual` element.
3. Provide accurate alt text describing the real project screen.
4. Add `loading="lazy"` and explicit `width` and `height`.
5. Remove or hide the abstract placeholder artwork for that card.

### Add a verified project link

Replace a disabled placeholder such as:

```html
<button type="button" disabled>GitHub · [Add link]</button>
```

with a descriptive link:

```html
<a href="VERIFIED_URL" target="_blank" rel="noopener noreferrer">
  View project repository
</a>
```

Do not use `href="#"` for missing destinations.

### Add a new project

1. Copy an existing `.project-card` article.
2. Update the title, course/context, dates, objective, contributions, and supported technologies.
3. Add only verified repository, demo, document, or screenshot destinations.
4. Keep the project inside `.project-grid` so the responsive layout is preserved.

## Customize colors

The primary design tokens are at the top of `css/style.css`:

```css
:root {
  --bg: #060d18;
  --surface: #091423;
  --surface-raised: #0d1a2c;
  --line: #22334a;
  --text: #edf5fc;
  --muted: #8fa0b3;
  --blue: #2684ff;
  --cyan: #2bd8f7;
  --status: #27d69b;
}
```

After changing colors, recheck body text, button, border, focus-ring, and placeholder contrast.

## Customize animation intensity

The hero particle field is created in `js/script.js`.

To change particle counts, adjust:

```js
const particleCount = isMobile ? 6 : isTablet ? 10 : 18;
```

CSS variables assigned in `createCyberParticles()` control:

- horizontal position
- icon size
- opacity
- duration
- delay
- horizontal drift
- start and end rotation

The `cyber-drift` keyframes are in `css/style.css`. Keep opacity low and movement slow so content remains readable. Do not remove the reduced-motion media query.

## Deploy free with GitHub Pages

1. Create a GitHub repository.
2. Upload the project so `index.html` is in the repository root.
3. Commit and push to the `main` branch.
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select `main` and `/ (root)`.
7. Save and wait for GitHub to publish the site.
8. Copy the final Pages address.
9. Replace `[Add public URL]` in the Open Graph metadata.
10. Change `og:image` and `twitter:image` to the absolute URL of `assets/images/social-preview.png`.
11. Add a canonical link in `<head>`:

```html
<link rel="canonical" href="YOUR_PUBLIC_URL">
```

12. Test every navigation, email, LinkedIn, and résumé-download link on the published site.

A project-site URL normally looks like:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

## Accessibility considerations

- Semantic `header`, `nav`, `main`, `section`, `article`, and `footer` elements
- One logical H1 and structured H2/H3 headings
- Skip-to-content link
- Accessible Bootstrap navigation labels and expanded state
- `aria-current` applied to the active navigation destination
- Visible keyboard focus indicators
- Descriptive portrait alt text
- Decorative artwork and animation hidden from assistive technology
- No information communicated through color alone
- All content remains visible if JavaScript is unavailable
- Moving particles and scan effects disabled for reduced-motion users
- Nonexistent project destinations shown as disabled placeholders

Keyboard-test with Tab, Shift+Tab, Enter, Space, and Escape.

## Performance considerations

- Only Bootstrap is loaded externally
- No video, GIF, web font, icon font, or animation library
- Cybersecurity icons reuse inline SVG symbols
- Particle counts are limited and reduced on mobile
- Animation uses transforms and opacity
- Portrait dimensions are declared to prevent layout shift
- Relative asset paths support local and GitHub Pages use
- Below-the-fold project images should use `loading="lazy"` when added

## Final testing checklist

Check current Chrome, Edge, Firefox, and Safari at approximately:

- 360 px
- 768 px
- 1024 px
- 1440 px

Verify:

- No horizontal scrolling
- No overlapping navigation, headings, cards, or timelines
- Mobile menu opens, closes, and remains keyboard accessible
- Animated symbols stay behind content
- Mobile shows fewer animated elements
- Reduced-motion mode removes moving background effects
- All nine navigation destinations work
- Resume downloads correctly
- Email and LinkedIn links open correctly
- No console errors or missing asset requests
- Social preview remains 1200 × 630 after visual changes
