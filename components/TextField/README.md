# TextField

A labelled text input on `surface-sunk` with a heavy ink baseline instead of a box.

- The consumer provides `label` and any input attributes (`value`, `onChange`, `placeholder`, `type`). Pass `hint` for guidance and `error` to mark the field invalid; the error replaces the hint.
- Focus turns the baseline into a 4px `focus` bar. An error turns it red and adds a square glyph to the message.
- Error messages say how to fix the value: "Enter a number, like 12."
