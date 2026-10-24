# Shape

A geometric primitive (circle, square, triangle, half-disc, quarter-disc) filled with a colour token, for status glyphs, empty states and compositions.

- The consumer provides `kind`, `color` and `size`; pass `title` when the shape carries meaning on its own, otherwise it is hidden from assistive tech.
- Keep the Kandinsky pairs in UI: red square, yellow triangle, blue circle. Secondary colours (orange, teal, pink) are for compositions only.
- Overlap shapes rather than blending them; never add gradients or soft shadows.
