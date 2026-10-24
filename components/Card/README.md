# Card

A framed block on `surface-raised` with a `stroke-2` ink border, an optional eyebrow, title, body and footer, and an optional geometric mark bled off the top-right corner.

- The consumer provides `title`, optionally `eyebrow` (a code or category, shown uppercase), body content as children and a `footer` (tags, timestamps).
- `mark` and `markColor` add a 64px shape. Keep the Kandinsky pairs: a red square, a yellow triangle, a blue circle. Use a mark to tell kinds of card apart, not to decorate every card.
- Cards sit in a grid with `space-8` gaps. Do not nest cards.
