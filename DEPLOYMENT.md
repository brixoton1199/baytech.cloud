# Deployment Guide - Step by Step

## Step 1: Push to GitHub

### 1.1 Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Repository name: `baytech` (or your preferred name)
5. Description: (optional) "Website for baytech.cloud"
6. Choose **Public** or **Private**
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click **Create repository**

### 1.2 Connect Your Local Repository to GitHub

Open PowerShell in your project directory (`C:\Users\LocalAdmin\Desktop\baytech`) and run:

```powershell
# Add the GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/baytech.git

# Verify the remote was added
git remote -v

# Push your code to GitHub
git push -u origin main
```

**Note:** If you haven't set up GitHub authentication, you may need to:
- Use a Personal Access Token instead of password
- Or set up SSH keys
- Or use GitHub CLI (`gh auth login`)

### 1.3 Verify Push

1. Go to your GitHub repository page
2. You should see all your files (`.gitignore`, `README.md`, `wrangler.toml`, `baytech.cloud/`)
3. The commit message "Initial commit: Setup repository for GitHub and Cloudflare" should be visible

---

## Step 2: Connect to Cloudflare Pages

### 2.1 Access Cloudflare Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Sign in or create an account if needed

### 2.2 Create a Pages Project

1. In the left sidebar, click **Workers & Pages**
2. Click **Create application**
3. Click **Pages** tab
4. Click **Connect to Git**

### 2.3 Connect GitHub Account

1. You'll see a list of Git providers - click **GitHub**
2. If not already authorized, click **Authorize Cloudflare**
3. You may be redirected to GitHub to authorize
4. Select the repositories you want to give access to, or select **All repositories**
5. Click **Install & Authorize**

### 2.4 Select Your Repository

1. After authorization, you'll see a list of your repositories
2. Find and click on **baytech** (or whatever you named it)
3. Click **Begin setup**

### 2.5 Configure Build Settings

Fill in the following:

- **Project name**: `baytech-cloud` (or your preferred name)
- **Production branch**: `main`
- **Framework preset**: Select **None** (or your framework if applicable)
- **Build command**: Leave **empty** (unless you have a build process)
- **Build output directory**: `baytech.cloud`
- **Root directory**: Leave as `/` (root of repository)

### 2.6 Environment Variables (Optional)

If you need environment variables:
1. Click **Add environment variable**
2. Add any required variables
3. Set them for Production, Preview, or both

### 2.7 Deploy

1. Review your settings
2. Click **Save and Deploy**
3. Cloudflare will start building and deploying your site
4. Wait for the deployment to complete (usually 1-2 minutes)

### 2.8 Access Your Site

1. Once deployment completes, you'll see a success message
2. Your site will be available at: `https://baytech-cloud.pages.dev` (or your custom domain if configured)
3. Click the URL to visit your live site

---

## Step 3: Set Up Custom Domain (Optional)

### 3.1 Add Custom Domain in Cloudflare

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain: `baytech.cloud`
4. Click **Continue**

### 3.2 Configure DNS

1. Cloudflare will show you DNS records to add
2. If your domain is already on Cloudflare, it will auto-configure
3. If not, add the CNAME record shown to your DNS provider
4. Wait for DNS propagation (can take a few minutes to 24 hours)

---

## Step 4: Verify Everything Works

### 4.1 Test Your Deployment

1. Visit your Cloudflare Pages URL
2. Verify your site loads correctly
3. Check that all files are accessible

### 4.2 Test Auto-Deployment

1. Make a small change to a file (e.g., update `README.md`)
2. Commit and push:
   ```powershell
   git add .
   git commit -m "Test deployment"
   git push
   ```
3. Go to Cloudflare Pages dashboard
4. You should see a new deployment start automatically
5. Wait for it to complete and verify the changes are live

---

## Troubleshooting

### GitHub Push Issues

- **Authentication failed**: Use a Personal Access Token or set up SSH keys
- **Repository not found**: Check the repository name and your GitHub username
- **Permission denied**: Ensure you have write access to the repository

### Cloudflare Deployment Issues

- **Build failed**: Check the build logs in Cloudflare dashboard
- **Files not found**: Verify the build output directory is correct
- **Site not loading**: Check DNS settings and wait for propagation

### Need Help?

- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- GitHub Docs: https://docs.github.com/
- Wrangler CLI Docs: https://developers.cloudflare.com/workers/wrangler/

