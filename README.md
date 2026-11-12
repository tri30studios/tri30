# TRi30 Studios Website

A complete responsive, static, multi-page studio website. Built using **HTML, CSS, and vanilla JavaScript**, with original SVG artwork and no frameworks or build tools.

## Pages

- `index.html` — homepage: hero, all five services, detailed player experience services (store reviews, review responses, community management, weekly reports), four games, creative process, studio story, FAQ, contact.
- `games/*.html` — four dedicated game project pages.
- `privacy.html` — canonical, 14-section TRi30 Studios Privacy Policy for all games published under TRi30 Studios and for the studio website.
- `games/snake-rush-privacy.html` — legacy compatibility link that forwards visitors to the common policy, so old links are not broken.
- `404.html` — custom not-found page (host support required).
- `assets/` — Official uploaded TRi30 logo (cropped for responsive placement; original preserved), matching favicon, game-inspired illustrations, and branded social preview.
- `css/styles.css` — all styling and responsive rules.
- `js/site.js` — accessible mobile menu, copy email, active navigation, year.
- `robots.txt` and `sitemap.xml` — search engine basics.

## Local preview

Simplest: open `index.html` in a modern browser.

Recommended: from this folder, run `python -m http.server 8080`, then open `http://localhost:8080`.

## Hosting / domain

Upload **the contents of this folder** (not its parent folder) to the web root on a static host, e.g. Netlify, Cloudflare Pages, GitHub Pages, Vercel, or traditional `public_html` hosting. Point `www.tri30studios.com` and your root domain to the selected host using the host's DNS instructions. Enable HTTPS. Configure `404.html` as the not-found page if supported.

This package does not register a domain, change DNS, create a mailbox, or deploy automatically. `hello@tri30studios.com` must exist and accept messages for contact links to work.

## Critical publishing checklist

1. **Privacy**: `privacy.html` is one shared policy for all games **published by TRi30 Studios** and for the website. The policy is deliberately conditional where features differ by title. Before app store submission, validate the actual Android/iOS release builds individually (Firebase/Supabase, account sign-in, ads, analytics, crash reporting, leaderboards, purchases, child-directed settings, and deletion handling). App-store data-safety and privacy nutrition labels must accurately reflect each specific game. For a game with materially different practices, add an app-specific supplemental notice where required. The shared policy is a draft and not legal clearance.
2. **Games**: Studio project artwork and descriptions are marketing/editorial concepts, not verified screenshots. Adjust copy if final gameplay differs. Replace the project showcase labels and add verified Google Play, App Store, or playable web links when available. Do not use misleading "Download" calls-to-action without a live destination.
3. **Services**: Confirm each service bullet reflects the actual TRi30 scope and capabilities.
4. **Contact**: Test your email address and `mailto:` links. The site intentionally avoids an email form/backend, databases, and newsletter scripts.
5. **Content**: Add business address and social profiles only when verified. The site intentionally does not invent clients, awards, downloads, founding year, reviews, or release dates.
6. **SEO/social**: Change domain URLs in the source and `sitemap.xml` if you deploy to another permanent domain. `assets/social-preview.png` is the social sharing preview.
7. **Future trackers/cookies**: If you add analytics, ad tags, embedded videos, forms, or third-party fonts, revise the common policy and cookie/consent implementation as required before launch.

## Personalize

- Colors and general appearance: CSS custom properties at the top of `css/styles.css`.
- Homepage text/services/FAQs: `index.html`.
- Game descriptions: edit individual `games/*.html` pages. `build_game_pages.py` was used to generate the initial pages; if you edit an HTML page directly, don't rerun the script without transferring changes, because it regenerates pages.
- Email/domain: search for `hello@tri30studios.com` and `tri30studios.com` across the HTML if changed.

## Implementation notes

- Responsive breakpoints at 1120px, 820px, and 600px.
- Keyboard-accessible navigation and FAQ; `prefers-reduced-motion` support; skip navigation; semantic document regions and descriptive image alt text.
- No trackers, cookies, remote fonts, analytics, third-party libraries, or API keys in this build.
- SVG game art is original illustrative content, not screenshots of playable game builds.

## Official TRi30 branding

- Official supplied logo: `assets/tri30-original-logo.png` (unaltered uploaded 512 × 512 asset).
- Website display logo: `assets/tri30-official-logo.png` (cropped only to remove unused black margins).
- The favicon uses the controller-button “0” cropped from that same logo, and the social preview uses the original supplied brand image.
- **Official tagline (verbatim):** “The Passion Become Reality with Dedication”. Keep this wording until the studio approves a change.
- Website uses a black/silver/orange/red-inspired accent system.
- Source artwork contains a near-black background. The site displays it on dark surfaces with `mix-blend-mode: screen` for a clean appearance. Avoid placing the cropped wordmark on white surfaces without checking legibility.
