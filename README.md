# Brett Sanderson Portfolio

A responsive, static portfolio website for GitHub + Vercel. No build step or package manager is required.

## Preview locally

Open `index.html` in a browser, or run a local static server from this directory:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy to Vercel

1. Create a GitHub repository and upload the contents of this folder to the repository root.
2. In Vercel, import the GitHub repository.
3. Framework preset: **Other**. Build command: leave blank. Output directory: `.` (or leave the default if Vercel detects the static site correctly).
4. Deploy and test the generated preview URL.
5. In Vercel project Settings → Domains, add `brettrsanderson.com` and `www.brettrsanderson.com`.
6. Follow the exact DNS records Vercel displays in GoDaddy. Do not remove existing MX or email-related records.

## Before launch

- Confirm the public contact email and LinkedIn URL.
- Add approved project examples and any verified outcome metrics.
- Review all copy for confidentiality and accuracy.
- Add a custom social preview image and favicon if desired.
- The source diagram `assets/ai-gtm-reference-private.png` is retained only as a private design reference and is not used by the site. Do not publish it in the deployed repository unless you intentionally want the full source diagram public. Remove it from the repository before deployment.
