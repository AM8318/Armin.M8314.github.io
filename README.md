# Armin Moallemi — CV & Portfolio Website

A production-ready, responsive one-page portfolio built from Armin Moallemi's résumé and supplied portrait. The site is designed for recruiters, academic contacts, and industry professionals, with email contact actions available in the hero, contact section, and floating quick-contact control.

## Technology

- Semantic HTML5
- Bootstrap 5.3.8 via jsDelivr CDN
- Custom CSS
- Vanilla JavaScript
- SVG favicon

No build process, package manager, backend, database, or JavaScript framework is required.

## Project structure

```text
/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── armin-moallemi-portrait.jpg
    └── favicon.svg
```

The original source files may remain in the project root for reference, but they are not required by the published website.

## Run locally

You can open `index.html` directly in a browser. For the most accurate production-like behaviour, serve the folder with any static web server:

```powershell
# If Python is installed
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

Upload `index.html`, `css/`, `js/`, and `assets/` to any static hosting service, such as GitHub Pages, Netlify, Cloudflare Pages, or a standard web host. Keep the directory structure unchanged.

Before publishing on a custom domain:

1. Add the canonical production URL with `<link rel="canonical" href="https://your-domain.example/">`.
2. Add the same absolute URL to `og:url`.
3. Replace relative schema image paths with absolute production URLs if required by the target search platform.
4. Test email, telephone, and LinkedIn links on both desktop and mobile.

## Content and contact maintenance

Primary contact details are currently present in several visitor-facing and metadata locations:

- Email: `armin8314@gmail.com`
- Phone: `+1 437-989-9351`
- LinkedIn: `linkedin.com/in/armin-moallemi-43057739b`

When a contact detail changes, search `index.html` for the old value and update every occurrence, including the JSON-LD structured data.

Portfolio content is organized into these sections:

- Hero and summary
- About
- Technical skills and education
- Academic projects
- Work and volunteer experience
- Awards and certifications
- Contact

## Search, answer-engine, and local relevance

The page includes:

- A focused page title and meta description
- Open Graph and X/Twitter sharing metadata
- `Person` JSON-LD structured data
- Clear heading hierarchy and concise section summaries
- Semantic landmarks and machine-readable dates
- Richmond Hill, Ontario location information
- Descriptive image alternative text

Once a live domain is available, submit it to relevant search engines and add a `sitemap.xml` and `robots.txt` at the domain root.

## Accessibility and responsive behaviour

- Keyboard-visible focus indicators and a skip link
- Semantic navigation and section labelling
- Descriptive portrait alternative text; decorative graphics are hidden from assistive technology
- Reduced-motion support
- Responsive Bootstrap navbar with mobile collapse
- Layouts optimized for mobile, tablet, and desktop breakpoints
- Content remains visible if JavaScript is unavailable

## JavaScript features

`js/script.js` provides small progressive enhancements:

- Subtle reveal-on-scroll animation
- Active navigation state as the reader moves through the page
- Header shadow after scrolling
- Automatic closing of the mobile navigation menu
- Automatic current year in the footer

The site remains readable and navigable without these enhancements.

## Browser support

Use current versions of Chrome, Edge, Firefox, or Safari. Bootstrap and the custom styles cover modern evergreen browsers. The page requires an internet connection for the Bootstrap CDN unless those files are downloaded and served locally.

## Asset guidance

The supplied portrait is stored at `assets/armin-moallemi-portrait.jpg` and displayed uncropped in its original 2:3 aspect ratio. If it is replaced, preserve the filename or update the image path in the HTML, Open Graph metadata, and JSON-LD. Use an optimized JPEG or WebP and keep the alternative text accurate.

## Quality checklist

Before launch:

- Validate HTML at the W3C Markup Validation Service.
- Run Lighthouse for performance, accessibility, best practices, and SEO.
- Check layouts at approximately 360 px, 768 px, 1024 px, and 1440 px widths.
- Confirm the Bootstrap CDN is permitted by the host's Content Security Policy.
- Compress the portrait if page-load performance needs further improvement.
