# Connect Your Repository to Cloudflare Pages

## Step-by-Step Guide

### Step 1: Access Cloudflare Dashboard

1. Go to **[Cloudflare Dashboard](https://dash.cloudflare.com/)**
2. Sign in with your Cloudflare account (or create one if needed)

### Step 2: Navigate to Pages

1. In the left sidebar, click **"Workers & Pages"**
2. Click the **"Create application"** button (top right)
3. Click the **"Pages"** tab
4. Click **"Connect to Git"**

### Step 3: Authorize GitHub

1. You'll see a list of Git providers - click **"GitHub"**
2. If you haven't authorized Cloudflare before:
   - Click **"Authorize Cloudflare"**
   - You'll be redirected to GitHub
   - Sign in to GitHub if needed
   - Review the permissions Cloudflare is requesting
   - Choose one of these options:
     - **"Only select repositories"** (recommended) - then select `baytech.cloud`
     - **"All repositories"** (if you trust Cloudflare with all repos)
   - Click **"Install & Authorize"**
3. You'll be redirected back to Cloudflare

### Step 4: Select Your Repository

1. After authorization, you'll see a list of your GitHub repositories
2. Find and click on **"baytech.cloud"** (or `brixoton1199/baytech.cloud`)
3. Click **"Begin setup"**

### Step 5: Configure Build Settings

Fill in the configuration form:

#### Basic Settings:
- **Project name**: `baytech-cloud` (or your preferred name)
  - This will be your site URL: `https://baytech-cloud.pages.dev`

#### Build Settings:
- **Production branch**: `main`
- **Framework preset**: Select **"None"** (unless you're using a specific framework)
- **Build command**: Leave **empty** (unless you have a build process like `npm run build`)
- **Build output directory**: `baytech.cloud`
  - This is where your static files are located
- **Root directory**: Leave as `/` (root of repository)

#### Environment Variables (Optional):
- Click **"Add environment variable"** if you need any
- Add variables for Production, Preview, or both

### Step 6: Review and Deploy

1. Review all your settings
2. Click **"Save and Deploy"**
3. Cloudflare will:
   - Clone your repository
   - Build your project (if you have a build command)
   - Deploy your site
   - This usually takes 1-2 minutes

### Step 7: Access Your Live Site

1. Once deployment completes, you'll see a success message
2. Your site will be live at: **`https://baytech-cloud.pages.dev`**
   - (Replace `baytech-cloud` with whatever project name you chose)
3. Click the URL or the **"Visit site"** button to view it

---

## Automatic Deployments

Once connected, Cloudflare will automatically:
- ✅ Deploy every time you push to the `main` branch
- ✅ Create preview deployments for pull requests
- ✅ Show deployment status in the Cloudflare dashboard

### Test Automatic Deployment

1. Make a small change to a file:
   ```powershell
   # Edit a file, then:
   git add .
   git commit -m "Test Cloudflare deployment"
   git push
   ```

2. Go to Cloudflare Pages dashboard
3. You should see a new deployment start automatically
4. Wait for it to complete (usually 1-2 minutes)
5. Your changes will be live!

---

## Custom Domain Setup (Optional)

### Add Your Custom Domain

1. In your Cloudflare Pages project, go to **"Custom domains"** tab
2. Click **"Set up a custom domain"**
3. Enter your domain: `baytech.cloud`
4. Click **"Continue"**

### DNS Configuration

**If your domain is already on Cloudflare:**
- DNS will be automatically configured
- Just wait a few minutes for propagation

**If your domain is NOT on Cloudflare:**
1. Cloudflare will show you a CNAME record to add
2. Go to your DNS provider (where you manage your domain)
3. Add the CNAME record:
   - **Name**: `@` (or `baytech.cloud`)
   - **Value**: The CNAME target shown by Cloudflare
4. Wait for DNS propagation (can take a few minutes to 24 hours)

---

## Troubleshooting

### Repository Not Showing Up

- **Refresh the page** after authorizing GitHub
- **Check GitHub permissions**: Go to GitHub Settings → Applications → Authorized OAuth Apps → Cloudflare Pages
- **Re-authorize**: Disconnect and reconnect GitHub in Cloudflare

### Build Failed

- **Check build logs**: Click on the failed deployment to see error messages
- **Verify build output directory**: Make sure `baytech.cloud` contains your files
- **Check build command**: If you added one, make sure it's correct

### Site Not Loading

- **Check deployment status**: Make sure the deployment succeeded (green checkmark)
- **Verify build output**: Ensure files exist in the `baytech.cloud` directory
- **Check DNS**: If using custom domain, verify DNS records are correct

### Files Not Found (404 errors)

- **Verify build output directory**: Should be `baytech.cloud`
- **Check file structure**: Make sure your HTML files are in the correct location
- **Root directory**: Should be `/` unless your files are in a subdirectory

---

## Quick Reference

- **Cloudflare Dashboard**: https://dash.cloudflare.com/
- **Your Repository**: https://github.com/brixoton1199/baytech.cloud
- **Pages Documentation**: https://developers.cloudflare.com/pages/

---

## Next Steps After Connection

1. ✅ Test your site at the `.pages.dev` URL
2. ✅ Set up a custom domain (if desired)
3. ✅ Make changes and push to see automatic deployments
4. ✅ Configure environment variables if needed
5. ✅ Set up preview deployments for pull requests

Your site will automatically update every time you push to GitHub! 🚀

