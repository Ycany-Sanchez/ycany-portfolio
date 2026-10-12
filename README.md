# Ycany Ashra Sanchez · Portfolio

A responsive, light-theme personal portfolio with Parola and BantAI Buddy case studies, education, certifications, public GitHub repositories, and LinkedIn contact. Built with semantic HTML, native CSS, and JavaScript. No runtime dependencies, accounts, or API keys.

## Run locally

Requires Node.js 20 or newer.

```sh
npm run dev
```

Open http://127.0.0.1:4173. Re-run the command after editing source files.

## Personalize

Edit `content.mjs` to update the copy, links, education, certifications, featured projects, and optional email. The build renders this content into HTML for search engines and visitors without JavaScript. Replace `assets/cover.png` with your own artwork or a real project screenshot and update its alt text in `index.html`.

The workshop renders IMentia, FoodPantry, DocTient1, and tinHealth in the selected order at build time. Edit the workshop list in content.mjs to change names, repository slugs, or descriptions. No GitHub API request is needed.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. Import that repository in Vercel.
3. Choose **Other** for the framework preset. `vercel.json` sets `npm run build` and the `dist` output directory.
4. Deploy. No environment variables are required.

Alternatively, from this folder run `npx vercel` and follow the Vercel account and project prompts. Run `npx vercel --prod` for production.

Official guidance: https://vercel.com/docs/builds/configure-a-build

After deploying, set an absolute Open Graph image URL and `og:url` in `index.html` using your final domain if you want reliable social previews across all platforms.

## Verify

```sh
npm run check
npm run build
```

## Content provenance

The education, certifications, and BantAI Buddy project details were taken from public search-indexed content for the supplied LinkedIn profile:
https://www.linkedin.com/in/ycany-ashra-sanchez-bb987937a/

Parola details were supplied directly by the portfolio owner from their LinkedIn post: https://www.linkedin.com/feed/update/urn:li:activity:7515284028795625472/

The GitHub profile could not be inspected from the build environment. Workshop names were supplied by the owner; links use those repository names under the supplied GitHub account. Repository contents have not been independently verified. The cover is original AI-generated abstract artwork; it does not depict the extension’s interface. There are no invented employers, testimonials, project URLs, technical stack claims, or availability claims.

The owner should review the sourced personal copy before publication. No deployment has been performed by this project’s build scripts.

Typography uses the native system sans-serif stack to avoid third-party font requests.
