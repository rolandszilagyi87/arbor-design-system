# Design System Alapelvek

Ez a dokumentum leírja a design rendszer alapelveit, a konzisztens, újrafelhasználható és jól skálázható UI-komponensek fejlesztése érdekében.

---

## 1. Komponensrendszer: Atomic Design

A rendszer az 'Atomic Design' metodikát követi:

### Használt szintek:

- **atoms** – alapvető elemek (pl. gomb, inputmező, címke)
- **molecules** – kisebb elemek kombinációi (pl. keresőmező ikon + input)
- **organisms** – összetett funkcionális egységek (pl. fejléc, navigációs blokk)

> A Templates és Pages szinteket később vezetem be, amikor eljutok az oldalstruktúrák szintjére.

---

## 2. Névkonvenció: BEM

A projektben a Block–Element–Modifier (BEM) névkonvenciót követem
ami biztosítja a skálázhatóságot és az átlátható osztályelnevezéseket.

- A `Block` egy önálló komponens (pl. egy kártya vagy egy navigáció).
- Az `Element` a blokk része (pl. a navigáció gombja).
- A `Modifier` a blokk vagy elem módosított állapota (pl. elsődleges vagy inaktív verzió).

---

## 3. Technológia: SCSS alapú rendszer

A design rendszer SCSS preprocessor segítségével készül. Az SCSS lehetővé teszi a moduláris felépítést, változók, mixin-ek és struktúrált fájlrendszer használatát.

---

## 4. Design Tokenek

A rendszer alapját előre definiált design tokenek adják. Ezek biztosítják a konzisztens megjelenést az egész rendszerben:

- Színek
- Térközök (spacing)
- Tipográfiai értékek (méret, vastagság, sortáv)
- Border és árnyék értékek

A tokenek külön fájlokban, jól szervezett struktúrában vannak tárolva.

---

## 5. Saját skálák

A spacing (térközök) és a tipográfiai méretek egy előre definiált skálát követnek. Ez biztosítja a vizuális ritmust és egységességet minden komponens között.

---

## 6. Mixin alapú fejlesztés

A stílusok kialakítását SCSS mixin-ekkel oldom meg. Minden ismétlődő vagy típus alapú stílushoz saját mixin tartozik (pl. cím stílus, szövegtörzs, gomb alapszabályok). Ez lehetővé teszi a kód újrafelhasználását és a gyors fejlesztést.

---

## 7. Rendszer célja

A rendszer célja egyedi weboldalak gyors és strukturált fejlesztése, prototípus készítésére optimalizálva. Fókuszban van a rugalmasság és az egyszerű testreszabhatóság.

---

## 8. Dokumentáció

A dokumentáció Markdown fájlokban készül. Később bevezethető egy interaktív dokumentációs felület is (pl. Storybook vagy saját megoldás), ha a rendszer elér egy összetettebb szintet.

---

## 9. Verziózás és skálázás

A rendszer folyamatosan bővíthető. Verziózással és modularizálással biztosított a fenntarthatóság. Csak azok a komponensek kerülnek be, amelyek ténylegesen használatban vannak.

**Jelenlegi verzió:** `v0.1-alpha`