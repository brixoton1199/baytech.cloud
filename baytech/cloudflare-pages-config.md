# Cloudflare Pages Configuration Reference

## Quick Setup Instructions

When connecting this repository to Cloudflare Pages, use these exact settings:

### Build Configuration
- **Framework preset**: `None`
- **Build command**: (leave empty)
- **Build output directory**: `baytech.cloud`
- **Root directory**: `/` (default)

### Branch Configuration
- **Production branch**: `main`

## Repository Structure

```
baytech/
├── baytech.cloud/          # Build output directory (static files)
│   ├── index.html         # Main HTML file
│   └── test.txt           # Test file
├── .gitignore             # Git ignore rules
├── README.md              # Project documentation
├── wrangler.toml          # Cloudflare Workers/Pages config
└── [documentation files]
```

## Verification Checklist

Before connecting to Cloudflare, ensure:
- [x] Repository is pushed to GitHub
- [x] `baytech.cloud/` directory exists
- [x] `baytech.cloud/index.html` exists (or other static files)
- [x] All files are committed
- [x] GitHub repository is accessible

## Common Issues

### Issue: "Build output directory not found"
**Solution**: Make sure `baytech.cloud` directory exists and contains files

### Issue: "Repository fetch failed"
**Solution**: 
1. Check GitHub repository permissions
2. Re-authorize Cloudflare in GitHub settings
3. Ensure repository is accessible (not private, or Cloudflare has access)

### Issue: "No files to deploy"
**Solution**: Ensure `baytech.cloud/` contains at least one file (like `index.html`)

