# 10reps / RepStart AI website concept

Responsive, buildless HTML, CSS and JavaScript implementation based on the supplied `10reps-v2.html` prototype.

## Preview locally

Run `python -m http.server 4173 --directory dist` in this directory, then open http://localhost:4173.

Edit `dist/index.html`, `dist/style.css`, and `dist/enhancements.js` directly. No package install or build is required. `refine.py` records the initial transformation of the supplied Downloads prototype; it is not required to run the website.

## Included

- Outcome-led hero and RepStart AI positioning.
- Feature panels rotate every three seconds when in view; pause during hover, keyboard interaction, hidden-tab viewing, or reduced-motion preferences. No feature countdown bars.
- Workout filters, session cards, locally bundled video with play/pause.
- Original draggable feature carousel with keyboard-accessible previous, next and pause controls.
- Personalisation, community and recognition stories; original three-step onboarding.
- Keyboard/touch-accessible illustrative training history.
- Reference-inspired staggered five-photo training wall.
- Original scroll/click reveal interaction, now labelled Built for everyone.
- Validated signup demo, Escape dismissal, focus trapping and return focus.

## Prototype boundaries

This is a website concept, not the fitness app. Phone interfaces, AI guidance, workout statistics and community activity are illustrative. Signup does not store or transmit data. Connect the approved signup service and confirm product capabilities, availability and policies before public launch.

## Assets

`dist/assets/training-editorial.png`: generated with the built-in ImageGen tool. Prompt: “Premium editorial fitness photography contact sheet: exactly five equal-width panels in a dark modern gym; South Asian woman portrait, man performing landmine press, woman dumbbell row, man box step-up, woman overhead press; charcoal environment, olive/lime accents, natural skin texture, realistic anatomy, no logos or text.” Individual panels are displayed with CSS background positioning. These are fictional athletes, not customer testimonials.

`dist/assets/workout-preview.mp4`: Tima Miroshnichenko, Pexels, https://www.pexels.com/video/man-doing-work-out-5319753/ . Locally bundled preview, credited in the page.

Layout reference: https://10reps.app/ — Krafttraining mit System photo-grid composition. Original reference images, wording and customer data are not used.

## Verification

Checked desktop and 390px mobile layouts, modal validation and demo confirmation, workout video playback (readyState 4), photo loading, and the card unlock/reveal. JavaScript syntax checked with Node.
