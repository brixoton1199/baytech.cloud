# Website Editing Guide

## Current Website Structure

Your website files are located in the `baytech.cloud/` directory:

```
baytech.cloud/
├── index.html          # Main homepage
└── test.txt            # Test file
```

## How to Edit Your Website

### 1. Edit the Homepage (`index.html`)

The main file is `baytech.cloud/index.html`. This is what visitors see when they visit your site.

**To edit:**
- Open `baytech.cloud/index.html` in your code editor
- Make your changes
- Save the file
- Commit and push to deploy

### 2. Add New Pages

To add new pages (like `about.html`, `contact.html`, etc.):

1. Create a new HTML file in `baytech.cloud/` directory
2. Use similar structure to `index.html`
3. Link to it from your homepage

**Example:**
```html
<!-- In index.html, add a link -->
<a href="about.html">About</a>
```

### 3. Add CSS Styling

You can:
- **Inline styles** (already in `index.html` in `<style>` tag)
- **External CSS file**: Create `baytech.cloud/styles.css` and link it
- **Both**: Use inline for quick changes, external for organization

### 4. Add JavaScript

You can:
- **Inline scripts** (already in `index.html` in `<script>` tag)
- **External JS file**: Create `baytech.cloud/script.js` and link it

### 5. Add Images, Fonts, etc.

Create subdirectories in `baytech.cloud/`:
```
baytech.cloud/
├── images/          # Put images here
├── css/            # Put CSS files here
├── js/             # Put JavaScript files here
└── fonts/          # Put font files here
```

## Deployment Workflow

After making changes:

1. **Edit files** in `baytech.cloud/` directory
2. **Test locally** (open `index.html` in browser)
3. **Commit changes:**
   ```powershell
   git add baytech.cloud/
   git commit -m "Update website: [describe your changes]"
   git push origin main
   ```
4. **Auto-deploy** (if enabled):
   - Cloudflare will automatically deploy your changes
   - Wait 1-2 minutes
   - Visit your site to see changes

## Current Homepage Features

Your current `index.html` includes:
- ✅ Responsive design (works on mobile/desktop)
- ✅ Gradient background
- ✅ Centered content
- ✅ Timestamp display (shows last update time)

## Quick Start: Make Your First Edit

1. Open `baytech.cloud/index.html`
2. Find the line: `<h1>baytech.cloud</h1>`
3. Change it to: `<h1>Your Title Here</h1>`
4. Save the file
5. Commit and push:
   ```powershell
   git add baytech.cloud/index.html
   git commit -m "Update homepage title"
   git push origin main
   ```

## Tips

- **Test locally first**: Open `index.html` in your browser before pushing
- **Use a code editor**: VS Code, Sublime Text, or any editor works
- **Keep it organized**: Use folders for images, CSS, JS files
- **Commit often**: Small, frequent commits are better than large ones
- **Check deployment**: After pushing, check Cloudflare dashboard to see deployment status

## Need Help?

- **HTML/CSS/JS**: Check MDN Web Docs (https://developer.mozilla.org/)
- **Cloudflare Deployment**: See `CLOUDFLARE_QUICK_START.md`
- **Git Commands**: See `GITHUB_SSH_SETUP.md`

---

**Ready to edit?** Open `baytech.cloud/index.html` and start making changes! 🚀

