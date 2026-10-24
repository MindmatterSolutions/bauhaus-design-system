A design system after the Bauhaus: three primary shapes, three primary colours, heavy rules on an asymmetric grid, and type set in one geometric sans. It is dark-first. **Night** (warm black) is the default theme; **Paper** (cream poster stock) is for print, posters and documents.

## Principles

- **Form follows function.** Every shape, colour and rule carries a meaning. If it carries none, remove it.
- **Square, triangle, circle.** The system follows Kandinsky's correspondence: red is the square, yellow the triangle, blue the circle. Keep the pairs together everywhere: in status glyphs, tags, illustrations and compositions.
- **No rounded rectangles.** Rectangles use `radius-0`. A curve is a whole circle (`radius-disc`) or a half-round, never a softened corner.
- **Asymmetric, not centred.** Align to the left edge and the 8px grid. Balance a heavy block with empty ground, not with a matching block on the other side.
- **Colour sits on the ground at full strength.** No gradients, tints or transparency. Overlap shapes instead of blending them.

## Content fundamentals

- Write short and concrete. Lead with the noun or the verb: "Add module", "3 deadlines this week".
- Labels (buttons, tabs, tags, field labels) are uppercase in the `label` style: one to three words.
- Body text, headings and messages are sentence case. Use no exclamation marks and no emoji.
- Address the reader as "you". Error messages say what happened and how to fix it: "Enter a module code, like INGB122."
- Numbers are figures, in the `mono` or `numeral` style: "14:00", "72%", "3 of 8".

## Colour

- Set the page on `surface`; cards and menus on `surface-raised`; inputs and tracks on `surface-sunk`.
- Set text in `ink`, secondary text in `ink-muted`. Both read on all three surfaces in both themes.
- Use `red` for the one primary action per view, the active-tab bar and danger. Text on a red fill is `on-red`.
- Use `blue` for information, progress and on states. Text on it is `on-blue`.
- Use `yellow` as a fill only, for warnings and highlights. Text on it is `on-yellow`. Never set text in yellow.
- `orange`, `teal` and `pink` are secondary accents for compositions and chart series only. Never use them for text or UI state.
- Status always pairs a colour with its shape and a word: `danger` with the square, `warning` with the triangle, `info` with the circle. Colour alone never carries meaning.
- Keyboard focus is a solid `stroke-2` outline in `focus`, offset 3px: yellow at Night, blue on Paper.

## Type

- One family: Jost, a geometric sans in the line of Futura (Google Fonts, weights 400–800). DM Mono sets figures and codes.
- Load both: `https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap`. `components/bundle.css` imports it already.
- Use `poster` at most once per view. Use `display` for page titles, `headline` for sections and `title` for cards.
- Running text is `body`; a lead paragraph is `body-lg`; hints and metadata are `caption` in `ink-muted`.
- `label` is always uppercase with its 0.08em tracking.
- Figures use `numeral` or `mono` with tabular numerals.

## Layout and space

- Build on the 8px grid: `space-2` is the base unit. Card padding is `space-6`, gaps between cards `space-8`, between sections `space-12`.
- Structure with rules, not boxes. A `stroke-2` rule in `ink` frames a card. A `stroke-4` bar marks the active item. `stroke-1` hairlines in `line` divide without meaning.
- Use one diagonal or one overlapping shape per composition at most. In product UI, use none.

## Shape and iconography

- Use the `Shape` component (circle, square, triangle, half-disc, quarter-disc) for status glyphs, empty states and section marks.
- No icon set ships with the system. When an icon is needed, use a stroke icon set with square caps at `stroke-2` weight, coloured `ink`, and keep it beside a word.
- There is no logo. Set the name in the `poster` or `display` style.

## Depth and motion

- Everything is flat. The one shadow is `shadow-block`, a hard 4px offset in ink, shown on button hover and open menus.
- Motion is mechanical: 120ms linear for state changes (the switch knob turning from square to disc, a button lifting into its offset). No easing curves, no bounce.
- Under `prefers-reduced-motion`, state changes are instant.

## Components

Components are React 18 function components on `window.Bauhaus`: `Button`, `Tag`, `Card`, `TextField`, `Switch`, `Tabs`, `Meter` and `Shape`. Load `components/bundle.css` after the tokens, then React, then `components/bundle.js`. Class names are prefixed `bh-`.
