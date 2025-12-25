# How to Disable Auto-Deployment in Cloudflare Pages

## Method 1: Disable Auto-Deploy in Settings

### Step-by-Step:

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com/
   - Navigate to **Workers & Pages** → Your project (`baytech-cloud`)

2. **Go to Build Settings**
   - Click **Settings** tab
   - Scroll down to **Builds & deployments** section

3. **Disable Auto-Deploy**
   - Look for **"Auto-deploy"** or **"Automatic deployments"** toggle/checkbox
   - **Turn it OFF** or **uncheck it**
   - This will disable automatic deployments on push

4. **Save Changes**
   - Click **Save** or the changes may auto-save

## Method 2: Disable for Specific Branches

If you want to disable auto-deploy only for certain branches:

1. Go to **Settings** → **Builds & deployments**
2. Look for **"Production branch"** or **"Branch deployments"**
3. You can configure which branches trigger deployments
4. Remove branches you don't want to auto-deploy

## Method 3: Use Manual Deploy Only

1. Go to **Settings** → **Builds & deployments**
2. Disable **"Auto-deploy"** toggle
3. Now you can only deploy manually:
   - Go to **Deployments** tab
   - Click **"Retry deployment"** or **"Create deployment"**
   - Or use the **"Deploy"** button

## After Disabling

- ✅ Pushes to GitHub will **NOT** trigger automatic deployments
- ✅ You can still deploy manually from the Cloudflare dashboard
- ✅ You have full control over when deployments happen

## Re-enable Auto-Deploy Later

To turn it back on:
1. Go to **Settings** → **Builds & deployments**
2. Turn **"Auto-deploy"** toggle **ON**
3. Save changes

## Alternative: Use Git Hooks or CI/CD

If you want more control, you can:
- Use GitHub Actions to trigger deployments conditionally
- Use webhooks to control when deployments happen
- Deploy only when you manually trigger it

---

**Note:** The exact location of the auto-deploy setting may vary slightly in the Cloudflare dashboard interface, but it's typically in the **Settings** → **Builds & deployments** section.

