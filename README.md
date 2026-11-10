# Discover Bangladesh

**A Land of Stories, Rivers & Wonders**

A modern, high-performance, fully client-side travel guide for Bangladesh.  
Built with pure HTML, CSS and vanilla JavaScript — no frameworks, no build step.

🔗 **Live Demo** (after GitHub Pages is enabled): `https://mdyasin-mollah.github.io/bangladesh-visit`

---

## Features

- Beautiful glassmorphism UI with smooth animations
- Responsive design (mobile-first)
- Animated Bangladesh flag preloader
- Hero image slideshow + typing effect
- Destination cards with search & category filters
- Detailed destination pages with image slider
- Interactive trip planner (days, interest, budget)
- History timeline, Culture & Food sections
- Travel essentials with official links
- Dark mode support via `prefers-color-scheme`
- Full accessibility (ARIA, keyboard, reduced-motion)
- SEO-ready (Open Graph, Twitter Cards, JSON-LD)
- Extremely easy to maintain

---

## Project Structure

```
bangladesh-visit/
├── index.html              # Main entry point (clean & lightweight)
├── css/
│   └── styles.css          # All styles (design tokens, components, animations)
├── js/
│   ├── data.js             # ★ All content lives here (destinations, images, history…)
│   └── app.js              # Application logic (routing, UI, planner, etc.)
├── README.md
├── LICENSE
└── .gitignore
```

### Why this structure?

| File            | Purpose                                      | When to edit                          |
|-----------------|----------------------------------------------|---------------------------------------|
| `js/data.js`    | Destinations, images, history, culture, food | Adding places, changing descriptions  |
| `css/styles.css`| Visual design & animations                   | Changing colors, layout, effects      |
| `js/app.js`     | Routing & interactions                       | Almost never (unless adding features) |
| `index.html`    | Page skeleton                                | Rarely                                |

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mdyasin-mollah/bangladesh-visit.git
cd bangladesh-visit
```

### 2. Open locally

Simply open `index.html` in any modern browser,  
or use a local server (recommended):

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then visit → http://localhost:8000

### 3. Deploy with GitHub Pages

1. Go to repository **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / folder: `/ (root)`
4. Save → your site will be live at  
   `https://mdyasin-mollah.github.io/bangladesh-visit`

---

## Customization Guide

### Adding / Editing Destinations

Open `js/data.js` and edit the `D` array:

```js
{
  id: "my-place",                 // unique id (used in URL)
  n: "My Beautiful Place",        // display name
  r: "Division Name",             // region
  c: ["nature", "photography"],   // categories
  s: "Short description...",      // card text
  o: "Longer overview...",        // detail page
  t: "Best time to visit",
  d: "Suggested stay",
  x: "How to get there",
  cl: "#1f6f78",                  // accent color for SVG fallback
  u: "https://...",               // optional UNESCO link
  adv: "Optional advisory note"
}
```

### Adding Images

In the same file, update the `IMAGES` object:

```js
"my-place": [
  "https://images.unsplash.com/photo-xxxx.jpg",
  "https://another-image.jpg"
]
```

- First image → used on cards  
- Rest → appear in the detail page slider  
- Empty array `[]` → beautiful SVG illustration is shown instead

### Changing Site Links

```js
const SITE = {
  about: "https://your-site.com/about",
  clients: "https://your-site.com/clients",
  admin: "https://your-site.com/admin"
};
```

---

## Tech Stack

- **HTML5** – semantic & accessible
- **CSS3** – custom properties, glassmorphism, modern animations
- **Vanilla JavaScript** – hash-based SPA routing
- **No dependencies** – zero build tools required

---

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge).  
Gracefully degrades for `prefers-reduced-motion` and older browsers.

---

## Credits

- Design & Engineering: **NEXTIT-BD**
- Photos: Unsplash & Wikimedia Commons
- Official data sources linked throughout the site

---

## License

This project is open source under the [MIT License](LICENSE).

---

**Made with ❤️ for Bangladesh**
