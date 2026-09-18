# Figma implementation spec

Источник: публичный Figma scene graph, файл `uSUtDWU8Rc4fL1CsOfvtRd`.

## Зафиксированные frames

| Состояние | Device | Node | Frame | Modal |
|---|---|---|---:|---:|
| Commissione | Desktop | `1:230` | `1440×910` | `681×761`, `x=380`, `y=75` |
| Commissione | Mobile | `33:6906` | `390×1620` | `350×701`, `x=20`, `y=140` |
| Coordinate | Desktop | `1:389` | `1440×910` | `681×858`, `x=380`, `y=26` |
| Coordinate | Mobile | `33:7157` | `390×1620` | `350×713`, `x=20`, `y=140` |

Visual exports в `comparison/` получены при Figma zoom `100%`, без апскейла thumbnail.

## Typography

- Основной commission flow: `Inter`.
- Coordinate desktop использует `Geist` для content/data styles; mobile — `Inter` с отдельными Geist fragments.
- Подключены exact variable font binaries, загружаемые самим Figma (`Inter_1`, `Geist_wght__1`), с локальным диапазоном весов `100–900`.
- Commission title: `26/31`, weight `600`.
- Mobile coordinates title: `24/29`, weight `600`.
- Amount: `48/58`, weight `700`.
- Fee rows: `14/17`, regular/semibold.
- CTA: `16/20`, weight `600`.

## Core tokens

```text
primary       #2491AA
primary-dark  #1A7488
ink           #1A2332
muted         #71717A
line          #E4E4E7
surface       #F4F4F5
surface-blue  #EAF4F6
page          #F8FAFB
overlay        #1A2332 @ 45%
```

## Border radii

| Element | Radius |
|---|---:|
| Modal shell | `23px` |
| Amount/details/dashboard cards | `16px` |
| Notice and payment-method control | `12px` |
| Primary CTA | `8px` |
| Stepper outer corners | `8px` |
| Payment icon | desktop `8px`, mobile `4.4px` |
| Balance card | `20px` |
| Balance-card CTA | `14px` |
| Circular controls | `50%` — equivalent to Figma's clamped `100px` |
| Pills/progress segments | `99px` |

У stepper радиус применяется только к двум внешним сторонам: первая ячейка имеет левые углы `8px`, последняя — правые, центральная ячейка остаётся прямоугольной.

## Commission modal geometry

Desktop uses `24px` Figma inset, `24px` vertical rhythm and `23px` radius. CSS uses a `23px` padding value because the 1px inside border participates in `border-box`; this places content at the same absolute `x/y` as Figma.

Mobile uses a `16px` Figma inset, `20px` vertical rhythm and the same `23px` radius. Amount card switches from `#EAF4F6` to `#2491AA`.

## Assets

- Avanti mark is the exact two-path Figma vector.
- Marco Rossi avatar is the Figma image asset, stored locally at `src/assets/marco_rossi_avatar.jpg`.
- UI icons remain semantic SVG components and match the source dimensions/stroke widths.

## Verification

The implementation is compared only under deterministic conditions:

- exact frame dimensions;
- browser device scale factor `1`;
- loaded fonts awaited through `document.fonts.ready`;
- transitions disabled or pointer moved away;
- same flow state;
- 100% Figma render rather than a resized canvas overview.
