# Game Privacy / App Store Submission Checklist (not a published privacy notice)

The shared **TRi30 Studios Privacy Policy** at `privacy.html` is designed to cover all games published under the TRi30 Studios name and the studio website. It is a general framework, **not proof of compliance for every game**: SDK, hosting, advertising, age ratings, data retention, consent, and app-store disclosures must be verified for each released build. Do not guess. Where a game collects materially different data or law requires specifics, add a title-specific supplemental notice and link it from the game and store listing.

For EACH game (Snake Rush Endless, Ghost Run, Jugaad – Fix Anything, Breaker Evolution), confirm:

- Publisher legal entity and privacy contact / business address as required by applicable law.
- App platforms, age rating, whether children are targeted, and any age-gating or parental consent.
- Exact third-party SDK names and purposes (e.g. analytics, crash reports, ads, mediation, attribution, game services).
- Each data category collected (device ID/advertising ID, IP, app interactions, approximate location, username/profile, leaderboard scores, purchases, support communications, crash logs).
- Which data is mandatory, optional, shared with processors, linked to identity, or used for tracking.
- Actual user consent and opt-out handling, including ATT for iOS where relevant.
- Purchase/payment processing and account/username behavior if present.
- Retention/deletion periods, how players can request deletion, and whether any data is stored in Firebase/Supabase/other backend.
- Data transfer countries and safeguards, access controls, and incident response contact.
- Links to each third party's official privacy information if required.
- Accuracy of Apple App Privacy labels and Google Play Data safety answers relative to actual builds.
- Local legal review for the markets served (e.g. Indian DPDP Act as implemented, GDPR/UK GDPR, COPPA, US state laws), as applicable.

**Do not publish a blanket claim such as "we do not collect personal data" without checking SDKs and backends.**

## Snake Rush Endless: additional points to verify before public release

- Verify whether Firebase anonymous authentication is actually used; otherwise remove that conditional example. Confirm Supabase usage and which tables/fields retain leaderboard data and display names.
- Verify the published iOS/Android builds for advertising, analytics, attribution, and crash-reporting SDKs. Name providers and link their notices where applicable.
- Confirm the exact method to identify accounts and delete backend records upon request; uninstalling the game does not necessarily delete server-side data.
- Confirm whether a user can opt out of public leaderboard display and whether deletion requests remove historical/weekly data and bot data associations.
- Check whether the game is directed to children and whether parental consent/age measures are needed in launch regions.
- Match app store privacy/data-safety disclosures, any in-app privacy link and website terms with real data flows.
