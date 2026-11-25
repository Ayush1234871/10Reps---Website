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


## Complete phone presentation redesign

The current app-preview files are `dist/walkthrough.js`, `dist/product-preview.css` and `dist/assets/iphone-pro-frame.svg`. The rest of the website remains unchanged. The old auto-scrolling DOM walkthrough has been replaced with complete, bounded screens: Home (workout hero, coaching, weekly rhythm and quick cards); Workout (plan, equipment match, exercise thumbnails and start action); Community (squad avatars, photo-led Squad Snaps and a challenge card); Profile (identity, animated progress chart, milestones and preferences). Planning has its own equipment selection and movement scenes; the routine chapter shows progress and recovery. Scenes replace one another with a short entrance transition rather than overlapping or scrolling. SVG app icons and a detailed masked device shell replace the simple frame and placeholder status glyphs. Layout uses container-relative dimensions to scale with the device.

The movement scene includes locally bundled stock video by Tima Miroshnichenko / Pexels: https://www.pexels.com/video/man-doing-work-out-5319753/ . This is illustrative movement footage, not a screen recording of the app. All app data is demonstrative. Videos pause before another scene appears, and decorative animation respects reduced-motion preferences.

Validation: local server returned HTTP 200, JavaScript syntax and Git whitespace checks passed. The preview-browser service repeatedly timed out, including inventory and reconnect calls, so visual verification of this redesign could not be completed.

## Bright reference theme

`dist/bright-theme.css` restores the original prototype's exact root palette: background #050706, panel #0b100d, line #1b2a20, text #eef3ee, secondary #8a9a8f, accent #a6ff3f and green #2bd67b. The supplied button reference's dominant fill was sampled as RGB(183,255,0), #B7FF00. Primary CTA styling now uses that solid lime, bold black Sora text, rounded corners and a green glow. The hero button is 342 × 54px with an 18px radius, adapting to mobile width. The existing button-only white hover glaze retains its 1s duration and 60ms delay. Invitation labels and page structure remain unchanged. The saturated accent is also carried into the in-phone app UI. Final browser visual review was unavailable due a preview service timeout.

## Button consistency and copy review

The reference lime/black treatment is now shared across primary CTAs, store badges, footer actions and dialog controls. The slowed white sweep remains button-only. Invitation CTAs use consistent wording. Supporting copy was tightened across the hero, planning and routine sections, six feature cards, founding invitation, FAQs, final CTA and footer, without adding claims about customers or results. Feature names and the selected page structure remain intact. FAQs now distinguish unconfirmed launch, pricing and availability details. Browser verification succeeded: computed desktop hero button fill rgb(183,255,0), 342×54px, 18px radius; original #a6ff3f accent and rgb(5,7,6) background. Mobile review verified CTA/dialog styling and identified a store-badge wrapping issue, corrected using a two-column grid. No JavaScript errors were recorded.

Interaction polish: restored black store badges, refined card surfaces and borders, added lock-shackle unlock motion before gate opening, and animated FAQ height with reduced-motion support. Verified desktop/mobile layout, unlock state and reveal, FAQ expansion cleanup, JavaScript syntax and browser console (no errors).

Pain-point copy revision: hero, planning, routine, feature cards, community wall, invitation and final CTA now connect user concerns to concrete product features. Added newcomer/schedule FAQs, contextual phone benefit cards, consistent SVG icons, and button-matched wordmark accents. Verified desktop/mobile, chapter-specific cards, feature overflow, wall entrance, and browser console.

Reference status-card revision: wide label/status cards, animated equalizer, three newly generated workout photos (retained the dumbbell-row and gym-back images), shared Sora font stack and slower frame-rate-independent invitation easing. Desktop/mobile cards and imagery, equalizer transforms, completed unlock/reveal and browser console verified. Image prompts and asset locations are in image-generation-notes.md.
