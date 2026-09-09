# Humble Fern LLC

Company website for [Humble Fern LLC](https://www.humblefern.com/).

Grove product pages (privacy, terms, support) live on the [Grove waitlist](https://grove-waitlist-silk.vercel.app/). This domain redirects `/privacy`, `/terms`, and `/support` there.

## Live URLs

- Home: https://www.humblefern.com/
- Contact: `hello@humblefern.com`

## Local preview

```bash
python -m http.server 4173
```

Then open http://127.0.0.1:4173/

## Checks

```bash
node scripts/check-pages.mjs
```

## Deploy on Vercel

This folder is the `humblefern` Vercel project (custom domain `humblefern.com`). Push to GitHub `myamin0516/humble-fern-web`. Production deploys from `master`.
