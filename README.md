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

- elöször minden demo html csak mobil nezetre lesz lefejlesztve
- minden egyes demo html-ben a 'body'-nak a file neve az osztaly neve
- az .scss fileokban maximum 2 szint mélység megengedett
- minden oldalon van egy h1 es h2 osztaly aminek van egy 'margin: 1 rem' attributuma
- minden oldal aljan van egy 'div.links' ami display flex-es, margin-al
- minden .html file stilusa az .scss-ben scoope-olva van a body-ban


SPACING:

inset-square    |     padding     |     minden oldalon azonos
inset-stack     |     padding     |     bottom
inset-inline    |     padding     |     right

inset-squish    |     padding     |     x:y - 2:1
inset-stretch   |     padding     |     x:y - 1:2

inset-top       |     padding     |     top
inset-left      |     padding     |     left

-------------------------------------------------------------

margin-square   |     margin      |     minden oldalon azonos
margin-stack    |     margin      |     bottom
margin-inline   |     margin      |     right

margin-squish   |     margin      |     x:y - 2:1
margin-stretch  |     margin      |     x:y - 1:2

margin-top      |     margin      |     top
margin-left     |     margin      |     left

--------------------------------------------

Ami kész:
 foundations:
	-	colors.scss
	- typography.scss
	- spacing.scss
	- borders.scss	 (html nincs kesz)
	- elevation.scss (html nincs)
	- box-shadow.scss (html + scss nincs)

Kötelezö minimum:
	•	Colors
	•	Typography
	•	Spacing
	•	Elevation
	•	Borders
	•	Layout
	•	Breakpoints

✅ : KÉSZ
⚠️ : IN PROGRESS
⏳ : FÉLKÉSZ
❌ : HIBÁS
🗺️ : MAP
⭐️⚙️⚜️


--- EDDIGI MIXIN-EK

--- BORDER ---
@include border-regular(dark);        |   van map struktura
@include border-radius(lg);           |   van map struktura

--- SPACE ---
@include inset-square(md);            |   van map struktura
@include margin-square(lg);           |   



---------------------------
ARBOR DESIGN

🔹 1. Bevezetés (Introduction / Overview)
	•	A design system céljának rövid leírása
	•	A rendszer filozófiája és alapelvei (pl. “accessibility first “mobile first”, “modularitás”)
	•	Kiknek szól: fejlesztők, designerek, product csapat, stb.

⸻

🔹 2. Alapok (Foundations / Core)

Ezek az alapelemek, amelyek minden komponens és stílus kiindulópontjai:
	•	Színek (Colors)
    •	Alapszínek, semleges színek, árnyalatok (tint/shade)
    •	SCSS/JS változók, hex/RGB/HSLA kódok
	•	Tipográfia (Typography)
    •	Betűtípusok, betűméretek, sortávok, súlyok
    •	Használati szabályok (pl. címek, szövegtörzs)
	•	Rácsrendszer & térközök (Grid & Spacing)
    •	Oszloprendszer (pl. 12-column grid)
    •	Margin/padding skálák
	•	Árnyékok & Elevation (Shadows & Elevation)
    •	Shadow tokenek vagy SCSS változók
    •	Használati útmutatók: pl. hover-állapot, kártyák, modálok
	•	Áttűnések, mozgás (Transitions & Motion)
    •	Használható animációk, időzítések
    •	Példák: hover, modális nyitás
	•	Szegélyek, lekerekítések (Borders & Radius)
	  •	Border-radius szintek, vonalvastagságok

⸻

🔹 3. Komponensek (Components)

Részletes dokumentáció újrahasználható UI elemekről:
	•	Gombok (Buttons)
	•	Űrlap elemek (Input, Checkbox, Select, Textarea)
	•	Kártyák, modális ablakok, értesítések
	•	Navigációs elemek (Navbars, Tabs, Drawers)

Jellemzők:
	•	Változatok (pl. primary, secondary, disabled)
	•	Kódpéldák (HTML/CSS/React/JSX stb.)
	•	Interaktív demók
	•	Hozzáférhetőségi megjegyzések

⸻

🔹 4. Irányelvek (Guidelines / Best Practices)
	•	Hozzáférhetőség (Accessibility / a11y)
	•	Írási stílus (Voice & Tone)
	•	Responsive viselkedés / mobil nézetek

⸻

🔹 5. Tokenek és API elérés (Design Tokens / Theme API)
	•	Exportálható változók SCSS/JS/JSON formátumban
	•	Token hierarchia: color.primary.500, spacing.md, radius.sm
	•	Téma váltás támogatása (dark/light mode)

⸻

🔹 6. Verziózás és frissítések (Changelog / Versioning)
	•	Verziók, új komponensek
	•	Deprecált elemek
	•	Migrációs útmutatók

⸻

🔹 7. Keresés / Navigációs menü
	•	Oldalsáv vagy felső menü (kategoriák szerint)
	•	Keresőmező: komponens, token vagy irányelv keresésére

⸻

🔹 8. Letöltés / használat módja
	•	Hogyan lehet integrálni (pl. NPM, CDN, Figma link)
	•	Setup guide (fejlesztőknek és designereknek)

WEBOLDAL Fé PONTJAI:

  Get started
    - What's News (frissítések, egyfajta log)
    - Installation (hogyan telepítsd)

  Foundations
    - Color
    - Typography
    - Spacing
    - Elevation
    - Icongraphy
    - Motion (áttünések késöbb)
    - Shapes (alakzatok)
  
  Coomponents
    - Button
    - Card
    ...