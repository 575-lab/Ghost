# Dataiku theme for Ghost

A build-free Ghost theme that follows the Dataiku brand guidelines.

## Brand mapping

| Guideline                                                     | Where it is applied                                                                                                      |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Dark Green `#06312E` + Core White `#FFFEF9`                   | Homepage hero, tag/author headers, footer, code blocks, error page                                                       |
| Beige `#F8F4E4` + Core Black `#1A1A1A`                        | Featured story, related posts, newsletter call to action                                                                 |
| Core White canvas                                             | Page background, header, article body                                                                                    |
| Green `#3EDAB2` (accent only)                                 | Buttons (with Core Black text), link underlines, quote rule, labels on Dark Green. Never used as text on light surfaces. |
| Light Green `#C7FFF1`                                         | Hover states, meta text on Dark Green                                                                                    |
| Gradient Blue Grey → Green → Beige, with grain                | Hero illustration and image-less post cards                                                                              |
| Signifier Light, 110% leading                                 | Headlines (H1), sentence case only                                                                                       |
| Untitled Sans, 130% leading                                   | Section headings (H2) and body copy                                                                                      |
| Söhne Mono, 4% tracking                                       | Labels, dates, captions, metadata                                                                                        |
| Material Symbols Sharp (Fill 1, wght 500, grade 200, opsz 24) | Interface icons                                                                                                          |

## Fonts

Signifier, Untitled Sans and Söhne Mono are licensed fonts and are not bundled.
The theme uses them when they are available, otherwise it falls back to the
approved substitutes: Georgia for headlines and Inter (loaded from Google Fonts)
or Arial for body copy. To self-host the brand fonts, add the files to
`assets/fonts/` and declare them with `@font-face` at the top of
`assets/css/screen.css` using the family names above.

## Logo

Upload the official Dataiku logo (bird symbol left of the wordmark, Core Black
or Core White only) in **Settings → Design → Brand**. Without a logo the theme
shows the site title. The theme renders the logo at 28px high, above the 22px
web minimum, and applies no effects.

## Custom settings

Homepage hero heading, label and text, the hero illustration toggle, footer
surface (Dark Green or Core Black), newsletter copy and related posts are all
editable in **Settings → Design**.

## Develop

No build step: edit the `.hbs` templates, `assets/css/screen.css` and
`assets/js/main.js` directly. Validate with:

```bash
pnpm --dir ghost exec gscan --fatal --verbose content/themes/dataiku
```
