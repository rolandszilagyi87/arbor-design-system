# Színrendszer dokumentáció

## Cél

A színrendszer célja, hogy átlátható módon biztosítsa az alkalmazott színek konzisztens használatát a teljes design system-ben. A rendszer felosztja a színeket márka-, semleges-, állapot- és szemantikus kategóriákra.

----------

## Alapszínek (Base Colors)

### Márka színek

```scss
$color-primary-400: #00a6fb;
$color-primary-500: #0582ca;
$color-primary-700: #006494;
$color-primary-900: #003554;

$color-secondary-400: #90a955;
$color-secondary-500: #4f772d;
$color-secondary-700: #31572c;
$color-secondary-900: #132a13;
```

### Semleges színek

```scss
$color-neutral-100: #ffffff;
$color-neutral-200: #ebebeb;
$color-neutral-800: #dddddd;
$color-neutral-900: #181a1f;
```

### Állapot színek

```scss
$color-success-400: #5dbf6e;
$color-success-500: #4caf50;
$color-success-700: #388e3c;
$color-success-900: #2c6b2f;

$color-warning-400: #ffcc66;
$color-warning-500: #ffb84d;
$color-warning-700: #e68a00;
$color-warning-900: #cc7a00;

$color-error-400: #ff6666;
$color-error-500: #ff3333;
$color-error-700: #e60000;
$color-error-900: #cc0000;

$color-info-400: #66ccff;
$color-info-500: #33b5e5;
$color-info-700: #1f90cc;
$color-info-900: #1a75b3;
```

----------

## Szemantikus színek (Semantic Colors)

### Márka színek

```scss
$color-primary:   $color-primary-500;
$color-secondary: $color-secondary-500;
```

### Háttér színek

```scss
$color-bg-light:    $color-neutral-100;
$color-bg-medium:   $color-neutral-200;
$color-bg-semidark: $color-neutral-800;
$color-bg-dark:     $color-neutral-900;
```

### Szöveg színek

```scss
$color-text-light:      $color-neutral-100;
$color-text-medium:     $color-neutral-200;
$color-text-semidark:   $color-neutral-800;
$color-text-dark:       $color-neutral-900;
$color-text-link:       $color-primary-400;
$color-text-link-hover: $color-primary-700;
```

### Állapot színek

```scss
$color-state-success: $color-success-400;
$color-state-warning: $color-warning-400;
$color-state-error:   $color-error-400;
$color-state-info:    $color-info-400;
```

### Border színek

```scss
$color-border-light:    $color-neutral-100;
$color-border-medium:   $color-neutral-200;
$color-border-semidark: $color-neutral-800;
$color-border-dark:     $color-neutral-900;
```

----------

## Használati példák

```scss
background-color: $color-bg-light;
color: $color-text-dark;
border: 1px solid $color-border-semidark;
a {
  color: $color-text-link;
  &:hover {
    color: $color-text-link-hover;
  }
}
```

----------

## Legjobb gyakorlatok

- Mindig használj szemantikus színneveket (`color-bg-dark`, `color-text-link`) ahelyett, hogy konkrét HEX kódokat írnál be.
- Használj kontrasztos színeket az olvashatóság javítása érdekében.
- Márkaelemekhez mindig a `primary` és `secondary` színeket használd.
- Állapot visszajelzésekhez a `success`, `warning`, `error`, `info` színek álljanak rendelkezésre.