# How to Find Cloudflare Pages Build Settings

## Where to Find Build Settings in Cloudflare Dashboard

### Method 1: During Project Creation

If you're creating a NEW project:
1. Go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
2. After selecting your repository, you'll see the build configuration form
3. Look for these fields (they may be labeled differently):
   - **"Framework"** or **"Framework preset"** - Select "None"
   - **"Build command"** - Leave empty
   - **"Output directory"** or **"Build output directory"** - Enter `baytech.cloud`
   - **"Root directory"** - Leave as `/` or empty

### Method 2: Edit Existing Project Settings

1. Go to **Workers & Pages** in left sidebar
2. Click on your project name (`baytech-cloud`)
3. Click the **"Settings"** tab at the top
4. Scroll down to find **"Builds & deployments"** section
5. Click **"Edit configuration"** or the pencil/edit icon
6. You should see build settings here

### Method 3: Alternative Interface Locations

The interface may vary. Look for:
- **"Build configuration"** section
- **"Build settings"** 
- **"Deployment settings"**
- **"Configuration"** tab
- A gear icon ⚙️ or settings icon

### Method 4: If You Can't Find the Fields

If the interface doesn't show these fields, try:

1. **Delete and recreate the project:**
   - Go to Settings → General → Delete project
   - Create a new project and configure during setup

2. **Use Cloudflare API or CLI:**
   - We can set up a configuration file instead (see below)

3. **Contact Cloudflare Support:**
   - They can help locate the settings in your account

## Alternative: Use Configuration File

If the dashboard doesn't show these options, we can use a configuration file that Cloudflare reads automatically.

See `_cloudflare_pages.json` in the repository - this file should help, but Cloudflare Pages primarily uses the dashboard settings.

## What to Look For (Different Labels)

The fields might be labeled as:
- **Framework preset** = "Framework" or "Build framework"
- **Build command** = "Build command" or "Command"
- **Build output directory** = "Output directory" or "Publish directory" or "Output folder"
- **Root directory** = "Root directory" or "Base directory"

## Screenshot Locations

When you're in the Cloudflare dashboard, look for:
- A form with fields for build configuration
- A section that says "Build settings" or "Deployment configuration"
- Settings that appear when you click "Edit" or "Configure"

## Quick Checklist

- [ ] Found the Settings tab in your Pages project
- [ ] Found "Builds & deployments" section
- [ ] Found "Edit configuration" button
- [ ] See fields for build settings

If you can't find these, describe what you DO see in the Settings page, and I can help you locate the correct options!

