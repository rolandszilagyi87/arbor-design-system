# Border rendszer dokumentáció

## Cél

A border rendszer célja, hogy egységes megközelítést biztosítson a szegélyek (`border`) használatához a design system-ben. Tartalmaz alapértelmezett vastagságokat, lekerekítéseket, színeket és stílusokat, így biztosítva a konzisztens megjelenést az interfészelemek között.

----------

## Border vastagságok

```scss
$border-width-none:    0;
$border-width-thin:    1px;
$border-width-regular: 2px;
$border-width-bold:    4px;
```

| Token                  | Érték |
|------------------------|-------|
| `$border-width-none`   | 0     |
| `$border-width-thin`   | 1px   |
| `$border-width-regular`| 2px   |
| `$border-width-bold`   | 4px   |

----------

## Border lekerekítések (radius)

```scss
$border-radius-none: 0;
$border-radius-sm:   4px;
$border-radius-md:   8px;
$border-radius-lg:   16px;
$border-radius-full: 1000px;
```

| Token               | Érték   |
|---------------------|---------|
| `$border-radius-none` | 0     |
| `$border-radius-sm`   | 4px   |
| `$border-radius-md`   | 8px   |
| `$border-radius-lg`   | 16px  |
| `$border-radius-full` | 1000px|

----------

## Border színek

A színek a `colors` fájlból származó színváltozókra épülnek.

```scss
$border-color-light:    $color-border-light;
$border-color-medium:   $color-border-medium;
$border-color-semidark: $color-border-semidark;
$border-color-dark:     $color-border-dark;
$border-color-primary:  $color-primary;
```

| Token                  | Színforrás            |
|------------------------|------------------------|
| `$border-color-light`   | `$color-border-light` |
| `$border-color-medium`  | `$color-border-medium`|
| `$border-color-semidark`| `$color-border-semidark`|
| `$border-color-dark`    | `$color-border-dark`  |
| `$border-color-primary` | `$color-primary`      |

----------

## Border stílusok

```scss
$border-style-solid: solid;
```

| Token               | Érték  |
|---------------------|--------|
| `$border-style-solid` | solid |

----------

## Használati példák

```scss
border: $border-width-regular $border-style-solid $border-color-medium;
border-radius: $border-radius-md;
```

----------

## Legjobb gyakorlatok

- Mindig tokeneket használj kézi értékek helyett.
- Használj `border-radius`-t interaktív elemeknél a vizuális konzisztencia érdekében.
- A `solid` stílus az alapértelmezett, de szükség esetén bővíthető más típusokkal (pl. dashed, dotted).
- Színek kiválasztásakor a vizuális hierarchia és a kontraszt legyen a fő szempont.