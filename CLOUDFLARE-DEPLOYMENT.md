# Cloudflare deployment

Production: https://giveback.seanllms.workers.dev in Sean’s personal account `7a7a08127b6d6744c838413b4473ecf1`.

`npm ci && npm run build` creates the Vite static bundle. `wrangler.jsonc` serves `dist` with client-side routing support. No application runtime secrets are required.

Pull requests validate the bundle; merging into `main` deploys through GitHub Actions using the repository secret `CLOUDFLARE_API_TOKEN`.
