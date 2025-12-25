# ⚠️ IMPORTANT: Update Cloudflare Pages Build Settings

## What Changed

Your website now uses **npm build** instead of static files. You need to update your Cloudflare Pages configuration.

## Update Cloudflare Build Settings

### Step 1: Go to Cloudflare Dashboard

1. Visit: https://dash.cloudflare.com/
2. Navigate to **Workers & Pages** → Your project (`baytech-cloud`)
3. Click **Settings** tab

### Step 2: Update Build Configuration

1. Scroll to **Builds & deployments** section
2. Click **Edit configuration**
3. Update these settings:

```
Framework preset: None (or Vite if available)
Build command: npm run build
Build output directory: baytech.cloud
Root directory: /
Node version: 18 (or latest)
```

### Step 3: Save and Deploy

1. Click **Save**
2. Go to **Deployments** tab
3. Click **Retry deployment** or wait for auto-deploy

## What This Does

- **Before**: Cloudflare deployed static files directly
- **Now**: Cloudflare runs `npm install` then `npm run build`, then deploys the built files

## Verification

After updating, check the deployment logs:
- Should see: `npm install` running
- Should see: `npm run build` running
- Should see: Files being deployed from `baytech.cloud/`

## If Build Fails

1. Check deployment logs in Cloudflare
2. Verify Node version is set (18 or higher)
3. Make sure `package.json` is in the repository root
4. Verify `vite.config.js` is correct

---

**Update your Cloudflare settings now to use the new build system!** 🚀

