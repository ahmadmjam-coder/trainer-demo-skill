## Environment
- On this machine, `python` and `python3` are non-functional Windows Store
  stubs. Always use `py` to run Python. Never attempt to install Python.
- OS is Windows, shell is PowerShell.

## Language
- The site is Arabic, full RTL. `<html lang="ar" dir="rtl">`.
- All UI text is Arabic. Code, comments and filenames stay English.
- Never apply `letter-spacing` to Arabic text — it breaks letter joining and words render as disconnected characters.
- Never apply `text-transform` to Arabic text — Arabic script has no uppercase.
- All user-facing copy is Palestinian colloquial Arabic, never Modern Standard Arabic. Write the way a person in Jerusalem speaks.
- Colloquial means Palestinian specifically, not Egyptian or Gulf usage. Examples: "ما زبطت" not "مش شغلت", "حدا" not "أحد", "هالمرة" not "هذه المرة".
- Never write copy that guarantees a result: no weight-loss amounts, no success rates, no promised outcomes.

## Generated imagery
- Never generate AI images of the trainer, clients, testimonial subjects,
  or any before/after imagery. Generated people on a commercial page are a
  false claim. Those slots stay empty until real photos exist.
- Never use SplitText (GSAP) anywhere in this project. SplitText splits words
  into individual characters, which breaks Arabic letter joining — the same
  failure as letter-spacing.

## Hard rules
- Never use a fixed height, max-height, or aspect-ratio on cards, card
  sections, or grid containers. Equal heights only via CSS grid stretch.
- Never use absolute positioning or negative margins to place text, prices,
  titles, or badges inside a card. They are normal elements in flow.
- Never use `overflow: hidden` on any ancestor of text content.
- Tailwind v4 ignores arbitrary-value classes that contain CSS variables.
  Do not write them. Use plain CSS for anything variable-driven.
- Report before building. Never build a section I have not approved.
