<!-- ENG -->
# Arbor Design System

A reusable design system built with SCSS.  
Provides design tokens, utility mixins, and components to build consistent and scalable UIs fast.

---

## Installation

Install the design system and set up the project:

```bash
npm init -y
npm install arbor-design
npm install --save-dev sass
npm run build
npm run watch
```

> 💡 After install, your project will contain:
> - `src/styles/` with entry point SCSS files (`main.scss`, `globals.scss`)
> - basic layout structure in `layout/` and `pages/`
> - `index.html` with a demo scaffold
> - preconfigured build/watch scripts

---

## Usage

### SCSS (recommended)

SCSS files in `main.scss` automatically load Arbor tokens, utilities, base styles, and components:

```scss
@use './globals.scss';

.container {
  background-color: $color-primary;
  @include elevation-sm;
}
```

Build your CSS (already included in `npm run build`):

```bash
sass --load-path=node_modules src/styles/main.scss dist/main.css
```

Include in HTML:

```html
<link rel="stylesheet" href="dist/main.css" />
```

---

## What’s inside

- `tokens/` – SCSS design tokens (color, spacing, typography, etc.)
- `utilities/` – Mixins, functions, helpers
- `base/` – Reset, base styles
- `components/` – SCSS-based reusable components (button, card, etc.)
- `dist/` – Generated CSS after build

---

## License

MIT © 2025 Roland Szilágyi

<!-- HUN -->
# Arbor Design System

Egy újrahasználható design rendszer SCSS alapokon.  
Design tokeneket, segéd mixineket és komponenseket biztosít gyors és konzisztens UI fejlesztéshez.

---

## Telepítés

Telepítsd a design rendszert, és állítsd be a projektet:

```bash
npm init -y
npm install arbor-design
npm install --save-dev sass
npm run build
npm run watch
```

> 💡 A telepítés után a projekted tartalmazni fogja:
> - `src/styles/` SCSS belépési pontokat (`main.scss`, `globals.scss`)
> - alapszintű layout struktúrát (`layout/` és `pages/` mappák)
> - `index.html` fájlt demo tartalommal
> - előre beállított build/watch parancsokat

---

## Használat

### SCSS (ajánlott)

A `main.scss` automatikusan betölti az Arbor tokeneket, utility-ket, alapszintű stílusokat és komponenseket:

```scss
@use './globals.scss';

.container {
  background-color: $color-primary;
  @include elevation-sm;
}
```

CSS fordítása (`npm run build` már tartalmazza):

```bash
sass --load-path=node_modules src/styles/main.scss dist/main.css
```

Használat HTML-ben:

```html
<link rel="stylesheet" href="dist/main.css" />
```

---

## Mit tartalmaz?

- `tokens/` – SCSS design tokenek (színek, térközök, tipográfia stb.)
- `utilities/` – Mixinek, függvények, segédek
- `base/` – Reset és alapszintű stílusok
- `components/` – Újrahasználható SCSS komponensek (pl. gomb, kártya stb.)
- `dist/` – A buildelt CSS kimenet

---

## Licenc

MIT © 2025 Szilágyi Roland