# 10reps — Sticky mobile website prototype

Built from the supplied `10reps.ai — Early access.html`, using the latest section-order and six-feature references.

## Run and edit

Run `python -m http.server 4175 --directory dist`, then open http://localhost:4175.

Current files: `dist/index.html`, `dist/prototype.css`, `dist/interactions.js`. No build or dependency installation is needed. Python transformation scripts and the older CSS/JS files record earlier iterations; edit the current files directly.

## Page order

1. Sticky mobile experience: hero, equipment-aware planning, sustainable routine.
2. Automatic six-card semicircle covering the supplied feature ecosystem.
3. The 10reps Wall: reference-matched grid with left/right scroll entrance.
4. Not for everyone. By design: founding membership gate and invitation card.
5. Compact questions.
6. Final invitation and coming-soon store badges.
7. Product, community, support and legal-information footer.

The redesigned phone uses a metallic frame, camera island, status bar, app navigation and three custom screens tied to scroll position. Neon CTAs use layered crystal facets and a moving sheen. Reduced-motion styles disable decorative movement. Invitation modals support focus trapping, Escape and focus return.

## Assets

`dist/assets/wall-editorial-v3.png` was generated using the built-in ImageGen tool. Final prompt: "Editorial fitness photography contact sheet, exactly five equal vertical panels side by side, landscape 1536x1024. No borders or text. Diverse South Asian athletes, neutral gym backgrounds, cinematic documentary photography. Woman athlete face with damp hair and sweat in warm light; full-length man in dark hoodie doing landmine press; woman doing bent-over dumbbell row; close-up legs and sneakers jumping onto plyometric box; overhead view of man walking towards training box. Realistic anatomy and equipment. No logos or watermarks." CSS background positions show individual panels without changing the generated image.

`dist/assets/training-editorial.png` is an earlier ImageGen asset used in the phone's workout preview. Generated athletes are fictional, not customer testimonials. The supplied photo-wall reference informed its grid and activity selection; its original photographs and wording are not copied.

## Prototype boundaries

This is a marketing website concept, not a working fitness app. Phone data, coaching, workout planning, analytics and squad activity are illustrative. Invitation details are not stored or transmitted. Store badges say coming soon and open an explanatory dialog. Legal/support dialogs are pre-launch notices pending approved policies and contact details.

## Verification

Checked desktop and 390px mobile layouts, sticky positioning and screen transitions, all three phone screen contents fitting above navigation, wall assembly, store notices, invitation validation/confirmation and browser error logs. JavaScript syntax checked with Node.

## Four-tab walkthrough update

`dist/walkthrough.js` adds automatically scrolling in-phone interface previews. The hero cycles through Home, Workout, Community and Profile. The planning chapter loops session planning and exercise execution; the routine chapter loops routine/recovery, profile analytics and community. Playback follows the section at the viewport reading line, pauses off-screen, while a dialog is open or while preview tabs have keyboard focus, and respects reduced-motion preferences. These are DOM-based interface concepts, not video recordings of the actual app. The founding gate now says “Not for everyone. Invitation only.” and its copy consistently explains invitation-based access.

## CTA, phone and copy refinement

The hero uses a wider Request your invitation CTA. Other considered labels: Request founding access, Apply to join, Join the founding crew. The copy now leads with training clarity, useful progress and invitation-only access. The device uses a straight-on silver iPhone 17 Pro-inspired front treatment: uniform bezel, rounded screen, camera island and neutral metal controls. Design reference: https://www.apple.com/newsroom/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/ . This is an illustrative CSS device, not an exact hardware reproduction.

Hero walkthroughs are separate from the detailed planning and routine walkthroughs. One scroll controller selects the section at the reading line, eliminating competing observers; mobile planning was verified with Your gym. Your plan. displayed. The semicircle's central number and label, and their animation updates, were removed. The invitation gate now uses a founding-crew eyebrow, invitation-only headline, outlined SVG lock button and supporting message. The inside reveal card remains intact. Verified desktop/mobile appearance, content changes, gate reveal and clean browser error logs.
