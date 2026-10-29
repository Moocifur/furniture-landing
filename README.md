# Ms. Bumble's Furniture

Live site: https://bumbles-furniture.netlify.app

A front-end web developer job posting asked for Bootstrap, jQuery, and A/B testing, so I built a practice project to get some reps in. It's a landing page for a fictional furniture store owned by my current favorite MTG commander / fictional character, Ms. Bumbleflower.

## What's in it
- **Bootstrap 5:** responsive navbar (collapses to a hamburger on phones), hero section, and a product card grid.
- **jQuery:** loads the products from a JSON file with `$.getJSON` and builds the cards, and targets the headline and button for the A/B test.
- **A/B test (new for me):** two versions of the headline and button text, used to check which one gets more engagement.
  - Each visitor is randomly assigned A or B and stays on that version, saved in `localStorage`.
  - Adding `?variant=a` or `?variant=b` to the URL previews a version without counting it as a real visitor.
  - Impressions and button clicks are logged to the console with the variant name, the way a real testing tool would report them.

## Lighthouse results
| | Before | After |
|---|---|---|
| Performance | 96 | 94 |
| Accessibility | 96 | 100 |
| Best Practices | 100 | 100 |
| SEO | 91 | 100 |

What Lighthouse flagged, and what I changed:
- **SEO (91 to 100):** added a `<meta name="description">` tag in the `<head>`.
- **Accessibility (96 to 100):** the headings skipped levels (h1, h2, then h5). I used `<h3 class="card-title h5">` so the order is correct but the text looks the same.
- **Main landmark:** the page was missing a `<main>` element, so I wrapped the hero and products sections in one.
- **Image dimensions:** added `width="600" height="400"` to the card images so the page doesn't jump while they load.

Performance dipped to 48 when I added the real photos, because two of them were uncompressed 2 MB originals. I resized and compressed them in Squoosh, and it recovered to 94.

## What I learned
- Bootstrap's ready-made components, coming from Tailwind
- jQuery for selecting elements, changing them, and loading data
- How A/B tests assign and remember visitors, and why previews shouldn't be counted
- Reading a Lighthouse report and fixing what it flags
- Compressing images before using them

## What I'd do next
- Port the A/B script to TypeScript
- Build an email template