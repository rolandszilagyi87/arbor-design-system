# Arbor Design System

A reusable design system built with SCSS. Provides design tokens, components, and utility classes for consistent UI development.

---

## Installation

### Via NPM

```bash
npm install arbor-design
```

### Via CDN

```html
<link rel="stylesheet" href="https://unpkg.com/arbor-design-system@latest/dist/arbor-design.css" />
```

---

## Usage

### In HTML

```html
<link rel="stylesheet" href="node_modules/arbor-design/dist/arbor-design.css" />

<button class="button-primary">Click me</button>
```

### In SCSS

```scss
@use 'arbor-design/tokens/index' as *;

.my-box {
  background-color: $color-primary;
  font-size: $font-size-lg;
}
```

---

## Structure

- `tokens/` – SCSS variables (colors, typography, spacing, etc.)
- `components/` – SCSS-based reusable components (button, card, input)
- `utilities/` – Mixins, helpers, and utility classes
- `dist/arbor-design.css` – Compiled CSS ready to use

---

## License

MIT © 2025 Roland Szilágyi