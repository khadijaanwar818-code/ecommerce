# Aura. — Curated Tech eCommerce Store

A fully functional, multi-page eCommerce website built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies — just clean, modern front-end code.

---

## 📁 Project Structure

```
aura-store/
├── index.html          # Homepage — hero slider, category nav, featured products
├── products.html       # Shop page — product grid with filters, sort, search
├── product-detail.html # Individual product page — dynamic, URL-param driven
├── cart.html           # Shopping cart — quantities, order summary, promo code
├── app.js              # All JS logic — product data, cart, rendering, UI
└── style.css           # All styles — design system, components, animations
```

---

## ✨ Features

### 🛍️ Shopping
- **30 real products** across 7 categories: Audio & Sound, Computers & Gaming, Smart Living & IoT, Mobile & Gear, Creative Gear, Office & Desk Setup, Personal Care Tech
- **Add to cart** from product cards or product detail page
- **Cart persistence** via `localStorage` — cart survives page refreshes
- **Quantity controls** — increment, decrement, remove items
- **Order summary** — live subtotal, 8% tax calculation, free shipping
- **Promo code input** (simulated demo)

### 🔍 Browse & Discover
- **Search** — filters products by name and category in real time
- **Category filters** — multi-select checkboxes in sidebar
- **Price range filters** — Under $50 / $50–$150 / Over $150
- **Sort** — Default, Price Low–High, Price High–Low, Top Rated
- **URL-based category routing** — e.g. `products.html?category=Audio%20%26%20Sound`
- **Pagination** UI (simulated)

### 🏠 Homepage
- **Auto-rotating hero slider** — 3 slides, dot navigation, auto-advance every 4s
- **Category sidebar** with icons linking to filtered shop pages
- **Featured products** section
- **User profile card** and featured collection widget

### 🎨 UI & Design
- **Dark/Light mode toggle** — persists via `localStorage`
- **Glassmorphism design** — frosted glass panels throughout
- **Warm neutral color palette** — earthy browns, cream tones
- **Fully responsive** layout
- **Toast notifications** — feedback for add-to-cart, wishlist, newsletter
- **Wishlist / heart button** on every product card
- **Animated transitions** — smooth hover effects, slide animations

### 📄 Product Detail Page
- Driven by `?id=` URL parameter
- Full product description, specs, rating display
- Related products section
- Add to cart with quantity selector

---

## 🚀 Getting Started

No build step, no install required.

```bash
# Just open index.html in your browser
# OR serve with any static file server:

npx serve .
# or
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

---

## 🗂️ Product Categories

| Category | # Products |
|---|---|
| Audio & Sound | 4 |
| Computers & Gaming | 5 |
| Smart Living & IoT | 4 |
| Mobile & Gear | 4 |
| Creative Gear | 4 |
| Office & Desk Setup | 5 |
| Personal Care Tech | 4 |

---

## 🧠 How It Works

All product data lives in a `const products = [...]` array inside `app.js`. Each product has:

```js
{
  id: "audio-1",
  name: "AeroSound Pro ANC",
  category: "Audio & Sound",
  subcategory: "Over-Ear Headphones",
  price: 249.99,
  originalPrice: 299.99,   // optional — triggers "SAVE X%" badge
  rating: 4.8,
  reviewsCount: 312,
  imageUrl: "https://images.unsplash.com/...",
  description: "...",
  specs: { ... }
}
```

The `Cart` module (in `app.js`) handles all state and is exposed globally so HTML `onclick` attributes can call `Cart.addItem()`, `Cart.removeItem()`, `Cart.showToast()`, etc.

---

## 📦 Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox, backdrop-filter) |
| Logic | Vanilla JavaScript (ES6+) |
| Storage | localStorage (cart + theme preference) |
| Images | Unsplash CDN |
| Fonts | System font stack + Google Fonts (display) |

---

## 🖼️ Pages Overview

### `index.html` — Homepage
The entry point. Features a 3-slide auto-rotating hero banner, a left-side category nav panel, and a right-side user card + featured collection widget. Featured products are rendered dynamically from `app.js`.

### `products.html` — Shop
Full product catalog. Sidebar filters (category + price), a sort dropdown, and a live result count. Reads the `?category=` URL param on load to pre-filter. All product cards are rendered by `app.js`.

### `product-detail.html` — Product Page
Reads `?id=` from the URL, finds the matching product in the data array, and renders a full detail view with image, specs, description, rating, and an add-to-cart button.

### `cart.html` — Cart
Shows either the filled cart (grid of items + order summary sidebar) or an empty-state illustration depending on cart contents. All data comes from `localStorage`.

---

## 🎓 Project Context

Built as a personal front-end project by **Khadija** (BS Artificial Intelligence, UET Lahore) to practice multi-page vanilla JS architecture, CSS design systems, and eCommerce UI patterns.

---

*© Aura Curation Inc. — Designed for aesthetic spaces.*
