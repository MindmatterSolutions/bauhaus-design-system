# Button

A square, uppercase action button in three weights. Use **primary** (red) once per view, for the thing the page is for; **secondary** (ink outline) for the alternatives beside it; **quiet** (underlined text) for cancel and low-stakes links.

- The consumer provides the label as children, an `onClick`, and `type="submit"` inside forms (the default is `button`).
- Labels are one to three words, verb first: "Submit", "Save draft", "Add module".
- `size="sm"` (32px) is for dense rows and toolbars only.
- Hover lifts the button into its `shadow-block` offset; focus draws the `focus` outline.
- Do not put two primary buttons in one view, and do not round the corners.
