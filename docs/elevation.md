# Elevation rendszer dokumentáció

## Cél

Az elevation rendszer árnyékokat (box-shadow) biztosít a felhasználói felület különböző rétegeihez, hogy vizuálisan elkülönítsük az elemeket egymástól. A szintek konzisztens hierarchiát biztosítanak a komponensek között, míg az interaktív állapotok (hover, active) vizuális visszajelzést nyújtanak.

----------

## Alap elevációs szintek

```scss
$elevation-level-1: 0 1px 2px rgba(0, 0, 0, 0.12);
$elevation-level-2: 0 2px 4px rgba(0, 0, 0, 0.20);
$elevation-level-3: 0 4px 8px rgba(0, 0, 0, 0.25);
$elevation-level-4: 0 8px 16px rgba(0, 0, 0, 0.25);
$elevation-flyout:  0 0 12px rgba(0, 0, 0, 0.30);
```

| Token              | Leírás                      |
|--------------------|-----------------------------|
| `$elevation-level-1` | Alap szint (kártyák, dobozok) |
| `$elevation-level-2` | Kiemeltebb elemek             |
| `$elevation-level-3` | Modálisok, lebegő panelek     |
| `$elevation-level-4` | Felső rétegű elemek           |
| `$elevation-flyout`  | Popover, tooltip típusú UI    |

----------

## Interaktív állapotok

```scss
$elevation-hover-1: 0 2px 4px rgba(0, 0, 0, 0.16);
$elevation-hover-2: 0 3px 6px rgba(0, 0, 0, 0.25);
$elevation-hover-3: 0 5px 10px rgba(0, 0, 0, 0.27);

$elevation-active-1: 0 1px 2px rgba(0, 0, 0, 0.18);
$elevation-active-2: 0 2px 4px rgba(0, 0, 0, 0.22);
$elevation-active-3: 0 4px 6px rgba(0, 0, 0, 0.26);
```

| Token                 | Leírás                         |
|-----------------------|--------------------------------|
| `hover` szintek       | Hover állapot visszajelzése     |
| `active` szintek      | Aktív (pl. nyomott) állapot     |

----------

## Mixin használat

A `@mixin elevation($level)` mixin segítségével egyszerűen hozzárendelhető az adott szintű árnyék:

```scss
@mixin elevation($level) {
  @if $level == 0 {
    box-shadow: $elevation-none;
  } @else if $level == 1 {
    box-shadow: $elevation-sm;
  } @else if $level == 2 {
    box-shadow: $elevation-md;
  } @else if $level == 3 {
    box-shadow: $elevation-lg;
  } @else if $level == 4 {
    box-shadow: $elevation-xl;
  } @else if $level == 5 {
    box-shadow: $elevation-xxl;
  } @else {
    box-shadow: none;
  }
}
```

----------

## Használati példák

```scss
@include elevation(1); // Alap szintű árnyék
@include elevation(3); // Erősebb árnyék például modálishoz
```

----------

## Legjobb gyakorlatok

- Az alapértelmezett szinteket komponens típushoz rendeld (pl. `card` → level-1).
- Interaktív elemekhez használj `hover` és `active` elevációs értékeket.
- Kerüld a túl sok vagy túl nagy árnyékot, hogy ne veszítse el a rendszer a mélységi hierarchiát.
- A mixin segít egységesen alkalmazni a shadow szinteket, és egyszerűsíti a karbantartást.