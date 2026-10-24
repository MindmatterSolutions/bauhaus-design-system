# Switch

An on/off control whose knob turns from a square (off) to a disc (on) as the track fills blue.

- The consumer provides `label` and either `checked` with `onChange` (controlled) or `defaultChecked`.
- Use it for settings that apply immediately. For choices that need a submit, use a checkbox in a form.
- The label states the setting, not the action: "Notifications", not "Turn on notifications".
