# Ms. Ms. Bumble's Furniture

Live site: https://bumbles-furniture.netlify.app

A funrniture Web Development job posting wanted someone who could use Bootstrap, jQuery, and A/B testing, so I wanted to get a rep in and build a furniture website owned by my current favorite mtg commander / fictional character, Ms. Bumbleflower.

## What's in it
- Bootstrap: Used to make responsive design for the navbar, hero, and products card grid.
- jQuery: Used to target the headline and cta stuff for A/B testing.
- A/B test: Something new for me, and was asked by job posters. Used to check which variation has more engagement.

## Lighthouse results
| | Before | After |
|---|---|---|
| Performance | 96 | 97 |
| Accessibility | 96 | 100 |
| Best Practices | 100 | 100 |
| SEO | 91 | 100 |

- SEO 91 to 100: Added <meta name="description" content="..."> tag in the head.

- Accessibility 96 to 100: Heading skipped levels going from h1, h2, and hen h5. used <h3 class="card-title h5"> to make the order correct but to make it look the same.
- Forgot <main> landmark. Corrected it.
- Image dimension had issues added width="600" height="400".

## What I learned
- Bootstrap, jQuery, Lighthouse

## What I'd do next
- Use Typescript, build an email template