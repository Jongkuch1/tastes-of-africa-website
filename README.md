# 🌍 Tastes of Africa

A multi-page website celebrating Africa's rich and diverse culinary traditions. Built with semantic HTML5, CSS3, and vanilla JavaScript as part of the Advanced Front-End Web Development course at ALU.

---

## Table of Contents

- [Overview](#overview)
- [Pages](#pages)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [JavaScript Features](#javascript-features)
- [How to Run](#how-to-run)
- [Rubric Coverage](#rubric-coverage)

---

## Overview

Tastes of Africa is a culturally rich culinary website that takes users on a journey through the continent's most vibrant food traditions — from West African Jollof Rice to North African Tagine, from East African Injera to South African Bunny Chow. The site is designed to be visually engaging, fully responsive, and interactive.

---

## Pages

| Page | File | Description |
| ------ | ------ | ------------- |
| Home | `index.html` | Hero section, featured dishes, region explorer, food trends |
| Recipes | `recipes.html` | Filterable recipe catalogue |
| Jollof Rice | `recipe-jollof.html` | Full recipe detail — West Africa |
| Moroccan Tagine | `recipe-tagine.html` | Full recipe detail — North Africa |
| Injera & Doro Wot | `recipe-injera.html` | Full recipe detail — East Africa |
| Bunny Chow | `recipe-bunny-chow.html` | Full recipe detail — South Africa |
| Egusi Soup | `recipe-egusi.html` | Full recipe detail — West Africa |
| Isombe | `recipe-isombe.html` | Full recipe detail — Central Africa |
| Culinary Regions | `regions.html` | West, North, and East Africa deep-dives |
| About Us | `about.html` | Mission, history, and a Google Maps landmark |
| Contact | `contact.html` | Validated contact form with dynamic feedback |

---

## Features

### Home Page

- **Hero section** — full-viewport background image with a dark gradient overlay, welcome text, call-to-action button, and an embedded YouTube video introducing African food culture.
- **Featured Dishes** — 4 recipe cards using `<figure>` + `<figcaption>`, each with an image, description, region tag, "View Recipe" link, and a Favorite button.
- **Explore by Region** — 3 visual region cards linking to the Culinary Regions page.
- **Latest Food Trends** — 3 `<article>` news cards with `<time>` elements and `<mark>`-highlighted key ingredients.
- **Footer** — quick links, newsletter signup with instant feedback.

### Recipe Pages (×6)

Each recipe page includes:

- Recipe hero banner with title and cultural introduction.
- High-quality dish image.
- Expandable sections using `<details>` + `<summary>` for Ingredients, Cooking Instructions, and Cultural Background.
- Embedded YouTube tutorial video.
- **Ingredient Scaler** — a range slider (0.5×–4×) that dynamically recalculates every ingredient amount in real time using `data-amount` and `data-unit` attributes.
- **Favorite/Save button** — persists to `localStorage`; heart turns red and button text updates on click.
- Nutritional facts table (`<table>`).
- Embedded Google Maps `<iframe>` showing the dish's country of origin.

### Culinary Regions Page

- Dedicated sections for West Africa, North Africa, and East Africa.
- Each section covers food culture, staple ingredients, key spices (highlighted with `<mark>`), signature dishes, and an embedded YouTube video.
- Alternating two-column grid layout (text + image).

### About Us Page

- Mission statement in a styled callout box.
- Detailed history of African cuisine from ancient civilisations through global influence today.
- Embedded Google Map of the Marrakech Medina as a cultural food landmark.

### Contact Page

- Full form with `<label>` for every field:
  - Name (`<input type="text">`)
  - Email (`<input type="email">`)
  - Country (`<select>` with 20+ country options)
  - Subject dropdown (`<select>`)
  - Message (`<textarea>`)
  - Submit button
- JavaScript validation intercepts submission, checks message length (>20 characters), and on success hides the form and renders a personalised confirmation message using the user's name.

---

## Technologies Used

| Technology | Usage |
| ------------ | ------- |
| HTML5 | Semantic page structure across 11 pages |
| CSS3 | Styling, layout, animations, dark mode |
| JavaScript (ES6+) | DOM manipulation, localStorage, event listeners |
| Google Fonts | Playfair Display (headings) + Lato (body) |
| YouTube iframes | Embedded video on Home, Recipe, and Region pages |
| Google Maps iframes | Country-of-origin maps on recipe pages and About page |
| Unsplash | External high-quality food photography |
| localStorage | Favorites persistence + dark mode preference |

---

## Project Structure

```text
Tastes-of-Africa/
│
├── index.html              # Home page
├── recipes.html            # Recipe catalogue with filter
├── regions.html            # Culinary regions explorer
├── about.html              # About Us page
├── contact.html            # Contact form
│
├── recipe-jollof.html      # Jollof Rice (West Africa)
├── recipe-tagine.html      # Moroccan Tagine (North Africa)
├── recipe-injera.html      # Injera & Doro Wot (East Africa)
├── recipe-bunny-chow.html  # Bunny Chow (South Africa)
├── recipe-egusi.html       # Egusi Soup (West Africa)
├── recipe-isombe.html      # Isombe (Central Africa)
│
├── styles.css              # All styles (global, components, dark mode, responsive)
└── script.js               # All JavaScript (7 features, see below)
```

---

## JavaScript Features

All JavaScript lives in `script.js` and runs after `DOMContentLoaded`.

### 1. Hamburger Menu Toggle

Toggles the `.open` class on `.nav-links` on mobile breakpoints (≤700 px) so the navigation collapses into a hamburger icon.

### 2. Recipe Region Filter

Filter buttons on the Recipes page carry a `data-filter` attribute. On click, each `.recipe-card` is shown or hidden by toggling a `.hidden` class based on whether its `data-region` attribute matches the selected filter. The "All" button always shows every card.

### 3. Favorites with localStorage

Every recipe card and recipe detail page has a `.fav-btn` with a `data-id`. Clicking it:

- Pushes / splices the ID in a `savedFavs` array.
- Saves the array to `localStorage` under the key `toa-favorites`.
- Updates the button's visual state (border colour, background, emoji text).
- On page load, previously saved favourites are automatically restored.

### 4. Ingredient Scaler

On each recipe detail page a `<input type="range">` (0.5–4, step 0.5) is linked to every `[data-amount]` span. On `input` events, each ingredient amount is multiplied by the selected factor and written back to the DOM, giving instant visual feedback without a page reload.

### 5. Dark / Light Mode Toggle

A 🌙/☀️ button in the header:

- On click, toggles `data-theme="dark"` on `<html>`.
- Saves the preference to `localStorage` under `toa-theme`.
- On every page load, the saved preference is read and applied before the page renders — no flash of unstyled content.
- Dark mode overrides CSS custom properties to switch to a deep warm-brown palette while preserving the brand's earth-tone feel.

### 6. Contact Form Validation

Intercepts `submit` with `event.preventDefault()`. If the message field is fewer than 20 characters, an inline error is shown. On success, the form is hidden and a dynamically generated `<p>` displays: *"Thank you, [Name]! We've received your message."*

### 7. Newsletter Signup

Intercepts the footer newsletter form, replaces its content with a styled confirmation message on valid submission.

---

## How to Run

No build tools or dependencies required.

1. Clone or download the repository.
2. Open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge).
3. All pages are linked internally — navigate using the top navigation bar.

> **Note:** The contact form and newsletter use client-side JavaScript only. No data is transmitted to a server.

---

## Rubric Coverage

| Criterion | Implementation |
| ----------- | ---------------- |
| **Completeness** | All 5 required page types present; 6 recipe sub-pages (exceeds 3–5 requirement); newsletter footer; hero video |
| **HTML Structure** | Semantic HTML5 throughout (`header`, `nav`, `section`, `article`, `figure`, `figcaption`, `details`, `summary`, `mark`, `time`); labelled forms; alt text on all images |
| **CSS & Styling** | African earth-tone palette; Google Fonts; card shadows; hover animations; form focus states; `<mark>` gradient highlight; responsive typography with `clamp()` |
| **Responsiveness** | Mobile hamburger menu; CSS Grid with `auto-fill` + `minmax()`; `%`, `rem`, `vw/vh` units throughout; single-column stacking on small screens |
| **Code Quality** | Organised CSS and JS; consistent naming conventions; shared utility classes instead of inline styles; enhancements beyond requirements (ingredient scaler, dark mode) |
| **DOM Manipulation** | Recipe filter (`addEventListener`, `data-*`, `.hidden`); favorites (`localStorage`); ingredient scaler (live DOM updates); dark/light mode toggle (`localStorage`, `data-theme`); form validation with dynamic confirmation message |

---

## Credits

Built by Jongkuch Isaac, 2026 Term.
