# MD Landing Pages

Landing pages for .md domain clients. Each site lives in `sites/<name>/`.

## Sites

| Client | Domain | Status |
|--------|--------|--------|
| Dr. Farah Eskandari | drfarah.md | Demo |

## Deployment

Each site is a Vite project. Build with:

```bash
cd sites/<name>
npm install
npm run build
# Output in dist/
```

Cloudflare Pages deploys from the `sites/drfarah/dist` directory.
