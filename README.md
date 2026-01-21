# Intern Projects

## For Interns

📖 **[READ THE FULL GUIDE](INTERN_GUIDE.md)** - Everything you need to know

🚀 **[QUICK REFERENCE](QUICK_REFERENCE.md)** - Keep this open while coding

### Basic Rules

1. **All files go in your root folder** (no subfolders!)
   ```
   interns/your-name/
   ├── index.html        ← Don't touch (we manage this)
   ├── profile.html      ← Your projects
   ├── todo.html
   ├── style.css
   └── script.js
   ```

2. **Match filenames to links**
   ```html
   ✅ File: style.css → Link: <link href="style.css">
   ❌ File: style.css → Link: <link href="main.css">
   ```

3. **Use relative paths** (no `/` at the start)
   ```html
   ✅ <link href="style.css">
   ❌ <link href="/style.css">
   ```

### Push Your Changes

```bash
git pull
git add .
git commit -m "Update my project"
git push
```

Then ask admin to deploy!

---

## For Admin

### Auto-Discovery System

Any folder inside `interns/` is automatically detected and deployed.

```
interns/
├── akshaya-maha-marish-ls/    → yoursite.vercel.app/akshaya-maha-marish-ls/
├── alla-janardhan/            → yoursite.vercel.app/alla-janardhan/
├── jaiakaash/                 → yoursite.vercel.app/jaiakaash/
└── new-intern/                → yoursite.vercel.app/new-intern/
```

### Local Testing

```bash
npm run build   # Build all projects
npm run dev     # Build + serve locally
```

### Deploy

**Actions → Deploy to Vercel → Run workflow → production**

### When Interns Add New Projects

1. Intern creates new HTML file (e.g., `calculator.html`)
2. Update their `index.html` landing page to include new project link
3. Deploy

### Common Fixes

| Issue | Fix |
|-------|-----|
| Subfolder created | Move files to root, delete subfolder |
| CSS not loading | Check filename matches link |
| Wrong paths | Use relative paths only |

---

## Project Structure

```
Interns/
├── README.md              # This file
├── INTERN_GUIDE.md        # Comprehensive intern guide
├── QUICK_REFERENCE.md     # Quick reference card
├── package.json
├── vercel.json
├── scripts/
│   └── build.js          # Auto-aggregation script
├── .github/
│   └── workflows/
│       └── deploy.yml    # Manual deploy workflow
└── interns/              # All intern folders
    ├── intern-name/
    │   ├── index.html    # Landing page (admin manages)
    │   ├── project1.html
    │   ├── project2.html
    │   └── ...
    └── ...
```
