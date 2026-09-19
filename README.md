# Kente Cuts – Local Business Landing Page

**Student:** Yasir Abdul-Rahaman  
**Course:** Thrive Africa – Frontend Development Essential  
**Project:** Local Business Landing Page Capstone  
**Assigned industry:** Barber / Grooming services (chosen business within the grooming industry)  
**Business:** Kente Cuts Barbershop (fictional)  
**Location / service area:** Osu, Accra – Greater Accra, Ghana  
**Target customers:** Men in Accra who want quality classic and modern haircuts, beard grooming, and traditional hot towel services  
**Main goal of the page:** Introduce the barbershop, show its services and recent work, and make it easy for visitors to send an enquiry (Book a Visit / Contact)

---

## Features

### Page sections
1. **Hero** – Business name, headline, short introduction, hero image, and primary “Book a Visit” button  
2. **Our Services** – Three offerings: Classic Haircut, Beard Grooming, Hot Towel Shave (title + short description each)  
3. **How We Work** – Three-step process: Enquire → Confirm → Sit & Style  
4. **Recent Work** – Three example cuts with image, title, and short description  
5. **Contact Us** – Labeled form (name, email, message) + location, phone, hours  
6. **Footer** – Business name, copyright, navigation and social links  

### Navigation
Sticky header with links that smoothly scroll to each section (`#services`, `#how-we-work`, `#recent-work`, `#contact`).

### JavaScript interaction
**Contact form validation** (required interaction):
- On submit the form checks that name, email, and message are filled.
- Email is checked with a simple format pattern.
- Missing or invalid fields show clear red error messages next to the inputs.
- When all fields are valid, a green success message appears (demo only – no real email is sent).
- Errors clear as the user types.

**Bonus interaction:** Mobile hamburger menu that opens/closes the navigation on smaller screens.

---

## Design research

Inspiration was drawn from clean single-page business and barbershop landing patterns commonly seen on:
- Landbook
- Dribbble (barbershop / grooming landing pages)
- Behance local-business templates

**Ideas adapted:**
- Strong dark-blue header and hero for trust and professionalism  
- Orange primary buttons for clear calls-to-action  
- Card-based services and recent-work sections for easy scanning  
- Numbered “How we work” steps  
- Clear contact form with immediate validation feedback  

Placeholder images were generated for this educational project (hero, services, recent work). In a real project they would be replaced with original photos of the shop and client work, with proper credit.

A `moodboard/` folder is included for optional inspiration screenshots.

---

## Build process

1. Chose the barbershop concept and defined name, location, services, and main call-to-action.  
2. Reviewed common landing-page patterns for layout and section order.  
3. Created the local project folder matching the intended repository name.  
4. Built semantic HTML structure with all six required sections and navigation ids.  
5. Wrote CSS for a clean laptop layout (flexbox cards, sticky header, consistent spacing and colours).  
6. Added plain JavaScript for form validation and mobile nav toggle.  
7. Added basic mobile media queries (bonus) so the layout stacks cleanly on smaller screens.  
8. Wrote this README documentation.  
9. Ready for GitHub push and optional Netlify deploy.

---

## How to run and test

1. Download or clone the repository.  
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).  
3. No build step or server is required – it is a static site.

**What was tested**
- All navigation links scroll to the correct sections.  
- Form validation: empty fields show errors; invalid email shows error; valid submission shows success message.  
- Layout on laptop (~1366px) and mobile (~375px) widths.  
- Images load with alt text.  
- Sticky header and buttons remain usable.

**Known issues**
- Images are simple colour placeholders (not real photos).  
- Form is a front-end demo only; it does not send real emails.

---

## Reflection and links

**Challenge solved:** Making form feedback clear and accessible without a backend, while keeping the JavaScript simple and readable for a first-year frontend project.

**What I learned:** Combining semantic HTML sections, consistent CSS layout with Flexbox, and practical form validation in plain JavaScript. Also the value of sticky navigation and clear visual hierarchy on a single landing page.

**GitHub repository:** *(add your repository URL after pushing)*  

**Live Netlify link (bonus):** *(add if published)*  

---

© Yasir 2026 – Built for Thrive Africa Frontend Development Essential Course
