# Arbor Design System

A reusable design system built with SCSS.
Provides design tokens, components, and utility mixins for building consistent, scalable UI.

---

## Installation

```bash
npm install arbor-design
```

> 💡 Make sure you also have `sass` installed:
> ```bash
> npm install --save-dev sass
> ```

---

## Usage

### Option 1 – SCSS (recommended)

```scss
@use 'arbor-design/packages/tokens' as *;
@use 'arbor-design/packages/utilities' as *;
@use 'arbor-design/packages/base' as *;
@use 'arbor-design/packages/components' as *;

.container {
  background-color: $color-primary-500;
  @include elevation-sm;
}
```

Build it:

```bash
npx sass --load-path=node_modules src/styles/main.scss dist/main.css
```

Include the result in your HTML:

```html
<link rel="stylesheet" href="dist/main.css" />
```

---

### Option 2 – CDN (prebuilt CSS)

If you only need the compiled CSS without SCSS customization:

```html
<link rel="stylesheet" href="https://unpkg.com/arbor-design-system@latest/dist/arbor-design.css" />

<button class="button-primary">Click me</button>
```

---

## Project structure

- `tokens/` – SCSS design tokens (colors, spacing, typography, etc.)
- `utilities/` – Mixins and helper functions
- `components/` – Reusable SCSS components (e.g. button, card, input)
- `base/` – Reset and base styles
- `dist/` – Optional compiled CSS

---

## License

MIT © 2025 Roland Szilágyi