# Typography rendszer dokumentáció

## Cél

A typography rendszer célja, hogy egységes szövegstílusokat biztosítson a design system-ben. A rendszer meghatározza a betűcsaládokat, méreteket, súlyokat és sorközöket, így támogatva a vizuális hierarchiát és olvashatóságot.

----------

## Betűcsaládok (font-family)

```scss
$font-primary: 'NewYork';
$font-secondary: 'SFPro';
```

| Token             | Érték     |
|-------------------|-----------|
| `$font-primary`   | NewYork   |
| `$font-secondary` | SFPro     |

----------

## Betűméretek (font-size)

A betűméretek egy alapméretből (1rem) indulnak és a `1.2` skála szerint növekednek.

```scss
$font-scale: 1.2;

$font-size-sm: 1rem;
$font-size-xs: calc($font-size-sm / $font-scale);
$font-size-md: calc($font-size-sm * $font-scale);
$font-size-lg: calc($font-size-md * $font-scale);
$font-size-xl: calc($font-size-lg * $font-scale);
$font-size-xxl: calc($font-size-xl * $font-scale);
```

| Token           | Leírás          |
|------------------|------------------|
| `$font-size-xs`  | Extra kicsi      |
| `$font-size-sm`  | Kicsi (alapméret)|
| `$font-size-md`  | Közepes          |
| `$font-size-lg`  | Nagy             |
| `$font-size-xl`  | Extra nagy       |
| `$font-size-xxl` | Szuper nagy      |

----------

## Betűsúlyok (font-weight)

```scss
$font-weight-regular: 300;
$font-weight-medium: 500;
$font-weight-bold: 700;
$font-weight-heavy: 900;
```

| Token                | Érték |
|----------------------|-------|
| `$font-weight-regular` | 300 |
| `$font-weight-medium`  | 500 |
| `$font-weight-bold`    | 700 |
| `$font-weight-heavy`   | 900 |

----------

## Sorközök (line-height)

```scss
$line-height-tight: 1.4;
$line-height-normal: 1.6;
$line-height-relaxed: 1.8;
$line-height-loose: 2;
```

| Token               | Érték |
|---------------------|-------|
| `$line-height-tight`  | 1.4 |
| `$line-height-normal` | 1.6 |
| `$line-height-relaxed`| 1.8 |
| `$line-height-loose`  | 2.0 |

----------

## Használati példák

```scss
font-family: $font-primary;
font-size: $font-size-md;
font-weight: $font-weight-medium;
line-height: $line-height-normal;
```

----------

## Legjobb gyakorlatok

- Mindig tokeneket használj manuális értékek helyett.
- Az `xs` és `sm` méretek kisebb UI elemekhez vagy meta információkhoz valók.
- A `lg`–`xxl` méreteket címekhez, kiemelésekhez ajánlott használni.
- A sorközök segítenek az olvashatóság javításában – hosszabb szövegekhez használj `relaxed` vagy `loose` értékeket.