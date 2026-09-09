# Humble Fern LLC

Company website for [Humble Fern LLC](https://www.humblefern.com/).

## Live URLs

- Home: https://www.humblefern.com/
- About: https://www.humblefern.com/about
- Privacy: https://www.humblefern.com/privacy
- Terms: https://www.humblefern.com/terms
- Support: https://www.humblefern.com/support

Contact / support email: `hello@humblefern.com`

## Local preview

```bash
python -m http.server 4173
```

Then open http://127.0.0.1:4173/

## Checks

```bash
node scripts/check-pages.mjs
```

Fails if any required page is missing `Humble Fern LLC` or `hello@humblefern.com`, or still contains the old Gmail address.

## Deploy on Vercel

This folder is the `humblefern` Vercel project (custom domain `humblefern.com`).

**Option A — Git push**

Push to GitHub `myamin0516/humble-fern-web`. Production deploys from `master`.

**Option B — CLI**

```bash
npx vercel --prod --yes
```

Framework: Other. No build command. Static files at the repo root. `cleanUrls` is enabled in `vercel.json`.
