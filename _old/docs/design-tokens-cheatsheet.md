# Design Token Cheat Sheet

## 1. Spacing (Térközök)

| Token    | Érték |
|----------|-------|
| xs       | 2px   |
| sm       | 4px   |
| md       | 8px   |
| lg       | 16px  |
| xl       | 32px  |
| xxl      | 64px  |

**Használat**:
```scss
@include inset-square(md);   // padding minden oldalon
@include margin-stack(lg);   // margin-bottom
```

----------

## 2. Borders (Szegélyek)

**Vastagságok**:
- none: 0
- thin: 1px
- regular: 2px
- bold: 4px

**Lekerekítés**:
- sm: 4px
- md: 8px
- lg: 16px
- full: 1000px

**Használat**:
```scss
border: $border-width-regular solid $border-color-medium;
border-radius: $border-radius-md;
```

----------

## 3. Typography (Tipográfia)

**Méret skála (1rem alap)**:
- xs: 0.83rem
- sm: 1rem
- md: 1.2rem
- lg: 1.44rem
- xl: 1.73rem
- xxl: 2.07rem

**Súly**:
- regular: 300
- medium: 500
- bold: 700
- heavy: 900

**Sorköz**:
- tight: 1.4
- normal: 1.6
- relaxed: 1.8
- loose: 2

**Használat**:
```scss
font-size: $font-size-md;
font-weight: $font-weight-medium;
```

----------

## 4. Elevation (Árnyék)

**Szintek**:
- level-1: 0 1px 2px rgba(0,0,0,0.12)
- level-2: 0 2px 4px rgba(0,0,0,0.20)
- level-3: 0 4px 8px rgba(0,0,0,0.25)
- level-4: 0 8px 16px rgba(0,0,0,0.25)

**Állapotok**:
- hover-1: 0 2px 4px rgba(0,0,0,0.16)
- active-1: 0 1px 2px rgba(0,0,0,0.18)

**Használat**:
```scss
@include elevation(2); // alkalmazás box-shadow szinten
```

----------

## 5. Colors (Színek)

**Alap színek**:
- primary: #0582ca
- secondary: #4f772d
- neutral-100: #ffffff
- neutral-900: #181a1f

**Állapot színek**:
- success: #5dbf6e
- warning: #ffcc66
- error: #ff6666
- info: #66ccff

**Szöveg & háttér**:
- color-text-dark: #181a1f
- color-bg-light: #ffffff

**Használat**:
```scss
color: $color-text-dark;
background-color: $color-bg-light;
```