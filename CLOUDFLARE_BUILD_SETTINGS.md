# Cloudflare Pages Build Settings Configuration

## Exact Settings to Use

When reconnecting or setting up your Cloudflare Pages project, use these **exact settings**:

### Basic Configuration

- **Project name**: `baytech-cloud` (or your preferred name)
- **Production branch**: `main`

### Build Settings

- **Framework preset**: Select **"None"** from the dropdown
  - This tells Cloudflare you're not using a framework like Next.js, React, etc.

- **Build command**: Leave this field **completely empty** or blank
  - Do NOT enter anything here
  - Since you're deploying static files, no build step is needed

- **Build output directory**: Enter exactly: `baytech.cloud`
  - This is the folder where your static files (HTML, CSS, JS, etc.) are located
  - Make sure there's no leading slash: use `baytech.cloud` not `/baytech.cloud`

- **Root directory**: Leave this as `/` (the default)
  - This means Cloudflare will look at the root of your repository

### Environment Variables

- Leave this section empty for now (you can add variables later if needed)

### Summary

```
Project name: baytech-cloud
Production branch: main
Framework preset: None
Build command: (empty/blank)
Build output directory: baytech.cloud
Root directory: /
Environment variables: (none)
```

## What Happens Next

After clicking **"Save and Deploy"**:

1. Cloudflare will clone your repository
2. It will look for files in the `baytech.cloud` directory
3. It will deploy those files to your Pages site
4. Your site will be live at `https://baytech-cloud.pages.dev`

## If You Get Stuck

### Build Command Field Won't Accept Empty

If the form requires something in the build command field:
- Try entering: `echo "No build needed"`
- Or: `exit 0`
- But ideally, it should accept an empty field

### Build Output Directory Not Found

If you get an error that the directory doesn't exist:
1. Make sure you've pushed your code to GitHub
2. Verify the `baytech.cloud` folder exists in your repository
3. Check that you spelled it correctly: `baytech.cloud` (with the dot)

### Still Having Issues?

1. **Take a screenshot** of the build settings page
2. **Check the exact error message** Cloudflare shows
3. Make sure your repository is accessible (not private, or Cloudflare has access)

## After Deployment

Once deployed successfully:
- Your site will be at: `https://baytech-cloud.pages.dev`
- Any files you add to `baytech.cloud/` will be deployed
- Future pushes to `main` will auto-deploy

