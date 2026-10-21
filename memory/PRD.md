# RevaSure Website - PRD

## Original problem statement
Pixel-perfect, responsive clone of the RevaSure B2B platform (brand: Deep Trust Blue #022F71, Digital Teal #049297, Poppins). Multi-page React app: Home, About, Privacy, Terms, and now a Hospicash product page with a compliant Buy Now flow.

## Architecture
React 19 + Tailwind + React Router. Frontend-only, data in src/mock.js and src/data/hospicash.js. Backend not started.

## Implemented
- Home, About (/about), Privacy (/privacy), Terms (/terms), SEO/OG tags (earlier sessions)
- 2026-06: Hospicash product page at /products/hospicash: hero, benefits, how it works, checkout card with required T&C + Privacy checkboxes (Buy Now is disabled until both are checked), policy modals with an "I agree" button, a Refund Policy modal, a Refund Process section, support and disclaimer
- 2026-06: Full legal pages at /products/hospicash/{terms,privacy,refund}. Shared LegalSections component used by LegalPage and the modals
- 2026-06: Navbar Products dropdown (Explore markets, Hospicash) and a footer Hospicash link
- Tested: iteration_1.json, 100% frontend

- 2026-06: Live Buy Now link connected (https://staging-app.revasure.biz/mpay/revasure/basket/b_a285ae2c8892b5f91eef78595bc806de). It opens in a new tab once both consents are ticked.
- 2026-06: Compared the site with the GPT-5.6 Luna content spec. The user chose to KEEP all current copy (Infinite Possibilities tagline, hero copy, extra markets/items, custom headings). No changes made.

## Backlog
- P1: Backend (FastAPI/Mongo) for the partner form and replacing mock.js
