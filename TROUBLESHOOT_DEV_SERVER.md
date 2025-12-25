# Troubleshooting Dev Server (localhost:5173)

## Common Issues and Solutions

### Issue 1: Server Not Starting

**Symptoms:** Nothing happens when you run `npm run dev`

**Solutions:**
1. **Check if port 5173 is already in use:**
   ```powershell
   netstat -ano | findstr :5173
   ```
   If something is using it, either:
   - Stop that process
   - Or change Vite port (see below)

2. **Check for errors:**
   - Look at the terminal output
   - Check for missing dependencies: `npm install`

3. **Try a different port:**
   - Edit `vite.config.js` to use a different port (see below)

### Issue 2: "Cannot GET /" or 404 Error

**Solutions:**
1. Make sure `index.html` exists in the root directory
2. Check that `src/main.js` exists
3. Verify file paths in `index.html` are correct

### Issue 3: Browser Shows "This site can't be reached"

**Solutions:**
1. **Check if server is actually running:**
   - Look at terminal - should show "Local: http://localhost:5173"
   - Should NOT show errors

2. **Try different browsers:**
   - Chrome, Firefox, Edge

3. **Check firewall:**
   - Windows Firewall might be blocking
   - Try disabling temporarily to test

4. **Try 127.0.0.1 instead:**
   - `http://127.0.0.1:5173`

### Issue 4: Port Already in Use

**Solution: Change the port in vite.config.js:**

```javascript
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,  // Use port 3000 instead
    open: true   // Auto-open browser
  },
  build: {
    outDir: 'baytech.cloud',
    emptyOutDir: true
  }
})
```

Then run `npm run dev` again.

### Issue 5: Module Not Found Errors

**Solutions:**
1. **Reinstall dependencies:**
   ```powershell
   rm -rf node_modules
   npm install
   ```

2. **Check file structure:**
   - `src/main.js` should exist
   - `src/style.css` should exist
   - `index.html` should be in root

## Step-by-Step Troubleshooting

### Step 1: Verify Files Exist

Check these files exist:
- ✅ `index.html` (in root)
- ✅ `src/main.js`
- ✅ `src/style.css`
- ✅ `vite.config.js`
- ✅ `package.json`

### Step 2: Check Dependencies

```powershell
npm install
```

### Step 3: Start Server and Watch Output

```powershell
npm run dev
```

**Look for:**
- ✅ "Local: http://localhost:5173"
- ❌ Any error messages

### Step 4: Check Browser Console

1. Open browser
2. Press F12 to open DevTools
3. Check Console tab for errors
4. Check Network tab for failed requests

## Alternative: Use Preview Mode

If dev server doesn't work, build and preview:

```powershell
npm run build
npm run preview
```

This will serve the built files at a different port (usually 4173).

## Quick Fix: Update vite.config.js

Add server configuration to auto-open browser and use a specific port:

```javascript
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    host: true,  // Allow external connections
    open: true    // Auto-open browser
  },
  build: {
    outDir: 'baytech.cloud',
    emptyOutDir: true
  }
})
```

## Still Not Working?

1. **Check terminal output** - copy any error messages
2. **Check browser console** - F12 → Console tab
3. **Try different port** - update vite.config.js
4. **Verify Node.js version** - `node --version` (should be 16+)

---

**What error message do you see?** Share the terminal output or browser error for more specific help!

