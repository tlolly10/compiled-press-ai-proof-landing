# Compiled Press landing page

Static landing page for **How to Use AI and Avoid Plagiarism (2nd Edition) + The PROOF Toolkit**.

## Run locally

Open `index.html` in a browser. The page is static and can be hosted by GitHub Pages, Netlify, or any similar host.

## Tracking

The page preserves `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term` when visitors click through to Gumroad. The optional Meta click hook in `script.js` will use `fbq` when a Meta Pixel base script is added.

Meta currently has no dataset or pixel for the Anzakuje business portfolio. After creating one in Events Manager, add Meta's base pixel script to `index.html` and replace the placeholder pixel ID. Gumroad checkout itself remains on Gumroad, so purchase tracking needs a Gumroad webhook or a supported server-side Conversions API integration.