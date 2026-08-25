# Humble Fern LLC

Static one-page company site for [Humble Fern LLC](https://humblefern.vercel.app).

## Deploy on Vercel (free)

1. Push this folder to a GitHub repo (or use the Vercel CLI).
2. In [vercel.com/new](https://vercel.com/new), import the repo.
3. **Project Name:** `humblefern` (gives `https://humblefern.vercel.app`)
4. **Framework Preset:** Other
5. **Root Directory:** `.` (project root — no build step)
6. Deploy. Confirm the live page shows **HUMBLE FERN LLC** in the HTML.

### CLI alternative

```bash
npx vercel --name humblefern --yes
```

Production:

```bash
npx vercel --prod --name humblefern --yes
```

No build command. No output directory. Static files at the repo root.
