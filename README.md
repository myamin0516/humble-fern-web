# Humble Fern LLC

Static one-page company site. Local preview: open `index.html`, or `python -m http.server` in this folder.

Target URL after deploy: `https://humblefern.vercel.app`

## Deploy on Vercel (free)

**Option A — Dashboard**

1. Create a GitHub repo and push this folder (`git remote add origin …` then `git push -u origin master`).
2. Open [vercel.com/new](https://vercel.com/new) and import that repo.
3. **Project Name:** `humblefern`
4. **Framework Preset:** Other
5. Leave **Build Command** empty; **Output Directory** empty / `.`
6. Deploy. Confirm the live page shows **HUMBLE FERN LLC**.

**Option B — CLI** (from this folder, after `npx vercel login`)

```bash
npx vercel --yes
npx vercel --prod --yes
```

When prompted, set the project name to `humblefern`. No build step; static files at the repo root.
