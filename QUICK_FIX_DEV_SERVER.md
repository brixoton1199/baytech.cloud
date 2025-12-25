# Quick Fix: Dev Server Not Working

## Try These Steps

### Step 1: Stop Any Running Servers

If you have a server running in another terminal:
- Press `Ctrl+C` in that terminal to stop it

### Step 2: Update Configuration

I've updated `vite.config.js` to auto-open the browser. Now try:

```powershell
npm run dev
```

The browser should open automatically.

### Step 3: If Browser Doesn't Open

Manually open:
- `http://localhost:5173`
- Or try: `http://127.0.0.1:5173`

### Step 4: Check Terminal Output

When you run `npm run dev`, you should see:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**If you see this:** The server is running! Open the URL in your browser.

**If you see errors:** Share the error message.

### Step 5: Try Different Port

If port 5173 is busy, edit `vite.config.js` and change:

```javascript
server: {
  port: 3000,  // Change to 3000
  // ...
}
```

Then run `npm run dev` and go to `http://localhost:3000`

### Step 6: Alternative - Use Preview

If dev server still doesn't work:

```powershell
npm run build
npm run preview
```

This serves the built files (usually on port 4173).

## What Error Do You See?

Please share:
1. What happens when you run `npm run dev`?
2. What do you see in the terminal?
3. What happens when you open `http://localhost:5173` in browser?
4. Any error messages?

This will help me give you a specific solution!

