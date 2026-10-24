# Meter

A labelled horizontal measure: an ink-framed track cut into tenths, a fill in one primary, and the value in mono.

- The consumer provides `label`, `value`, optionally `max` (default 100), `tone` and `format` for the value text.
- `blue` (circle) for progress and neutral measures, `yellow` (triangle) when nearing a limit, `red` (square) when below a threshold. The tone's glyph sits beside the label.
- Use it for a known range. For an unknown duration, show text instead.
