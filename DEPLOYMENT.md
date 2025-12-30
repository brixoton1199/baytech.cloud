# Cloudflare Pages Deployment Guide

This project is ready to be deployed on Cloudflare Pages.

## Quick Deploy Steps

### Option 1: Via Cloudflare Dashboard (Recommended)

1. **Connect to Git:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to Pages
   - Click "Create a project"
   - Connect your GitHub/GitLab repository

2. **Build Configuration:**
   ```
   Build command: npm run build
   Build output directory: baytech.cloud
   Root directory: (leave empty)
   ```

3. **Environment Variables:**
   - Node version: 18 or higher (automatically detected)

4. **Deploy:**
   - Click "Save and Deploy"
   - Your site will be live in minutes!

### Option 2: Via Wrangler CLI

1. **Install Wrangler:**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Deploy:**
   ```bash
   wrangler pages deploy baytech.cloud --project-name=baytech-cloud
   ```

## Custom Domain Setup

1. In Cloudflare Pages dashboard, go to your project
2. Click "Custom domains"
3. Add `baytech.cloud` and `www.baytech.cloud`
4. Cloudflare will automatically configure DNS

## Features Included

✅ SPA routing with `_redirects` file
✅ Optimized build output
✅ Static assets in `/assets` folder
✅ Fast global CDN delivery
✅ Automatic HTTPS

## Local Development

```bash
npm install
npm run dev
```

## Build Locally

```bash
npm run build
npm run preview
```

## Project Structure

```
baytech/
├── src/
│   ├── main.js          # Entry point
│   ├── router.js        # Client-side routing
│   ├── style.css        # Global styles
│   └── pages/           # Page components
├── public/
│   ├── _redirects       # SPA routing config
│   └── assets/          # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.js       # Build configuration
```

## Support

For issues or questions, contact: support@baytech.cloud

