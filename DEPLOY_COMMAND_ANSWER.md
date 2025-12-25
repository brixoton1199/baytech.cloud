# What to Fill in for Deploy Command

## Answer: LEAVE IT EMPTY

For a **static site** on Cloudflare Pages, the **Deploy command** (or **Build command**) field should be:

### ✅ **EMPTY / BLANK**

**Do NOT enter:**
- ❌ `npx wrangler deploy`
- ❌ `npm run build`
- ❌ `echo "deploy"`
- ❌ Any command at all

**DO enter:**
- ✅ **Nothing** - leave the field completely empty
- ✅ **Blank** - no text, no spaces, nothing

## Why?

Cloudflare Pages has two deployment modes:

1. **Static Pages** (what you need):
   - No build command needed
   - Just deploy files from a directory
   - Command field = **EMPTY**

2. **Workers/Pages Functions**:
   - Requires build command
   - Uses `npx wrangler deploy` or similar
   - Command field = has a command

Since you're deploying static files from `baytech.cloud/`, you need **NO command**.

## Exact Settings

When setting up your Cloudflare Pages project:

```
Project name: baytech-cloud
Production branch: main
Framework preset: None
Build command: [EMPTY - leave blank]
Deploy command: [EMPTY - leave blank]
Build output directory: baytech.cloud
Root directory: /
```

## If the Field Won't Accept Empty

Some Cloudflare interfaces require something in the field. If that's the case, try:

- `echo "Static site, no build needed"`
- Or: `exit 0`

But ideally, it should accept an empty field.

## Summary

**Deploy command = EMPTY (nothing)**

That's it! Just leave it blank. 🎯

