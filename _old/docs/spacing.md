# Spacing rendszer dokumentáció

## Cél

Ez a spacing rendszer egységes és skálázható módot biztosít a `padding` és `margin` értékek használatára a teljes design system-ben. Egy alap értéken (2px) és egy skálázási szorzón (2) alapul, így a távolságok kiszámíthatóak és könnyen karbantarthatóak.

----------

## Skála

Minden spacing token a `2px` alapértékből indul, és egy skála szerint növekszik.

| Token        | Érték   |
|--------------|---------|
| `$space-xs`  | 2px     |
| `$space-sm`  | 4px     |
| `$space-md`  | 8px     |
| `$space-lg`  | 16px    |
| `$space-xl`  | 32px    |
| `$space-xxl` | 64px    |

----------

## Spacing koncepciók

### square
Minden oldalon azonos érték.

```scss
@include inset-square(md); // padding: 8px
@include margin-square(lg); // margin: 16px
```

### stack
Csak az alsó részre alkalmazott térköz – tipikus vertikális elrendezésekhez.

```scss
@include inset-stack(sm); // padding-bottom: 4px
```

### inline
Csak jobb oldali távolság – inline elemekhez.

```scss
@include inset-inline(md); // padding-right: 8px
```

### squish
Aszimmetrikus elrendezés: függőleges kisebb, vízszintes nagyobb.

```scss
@include inset-squish(md); // padding: 8px 16px
```

### stretch
Aszimmetrikus elrendezés: függőleges nagyobb, vízszintes kisebb.

```scss
@include inset-stretch(md); // padding: 12px 8px
```

----------

## Használati példák

```scss
@include inset-square(md);
@include margin-stack(xl);
@include margin-top($space-md);
@include inset-left($space-lg);
```

----------

## Legjobb gyakorlatok

- Mindig spacing mixint vagy tokent használj – ne keménykódolt értékeket!
- stack: komponensek közti vertikális távolsághoz.
- inline: horizontális távolság elemek között.
- squish vagy stretch: komponens belső térközéhez (pl. card-ok).
- Egyoldalas mixinokat (inset-top, margin-left) csak szükség esetén használj.

----------