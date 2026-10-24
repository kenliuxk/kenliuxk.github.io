# Ken Liu — Personal Site

**[kenliuxk.github.io](https://kenliuxk.github.io/)**

Personal website covering experience, skills, publications, and contact. Static HTML, CSS, and vanilla JavaScript — no build step, no frameworks, no dependencies.

## Structure

| Path | Purpose |
|---|---|
| `index.html` | The whole page |
| `styles.css` | Layout, type scale, light and dark palettes |
| `script.js` | English / 中文 content, appearance switch, scroll behaviour |
| `assets/` | Resume PDF and company marks |

## Notes

- Light or dark follows the system setting by default; the three-way control in the header can override it, and the choice is remembered.
- `?lang=zh` links straight to the Chinese version, e.g. [kenliuxk.github.io/?lang=zh](https://kenliuxk.github.io/?lang=zh).
- Bump the `?v=` query on `styles.css` and `script.js` in `index.html` whenever either file changes, so returning visitors never pair new markup with a cached stylesheet.
- Content is authored in English in the markup and translated in `script.js`; both dictionaries must stay in sync.
