# Intern Projects

## For Interns

📖 **[READ THE FULL GUIDE](INTERN_GUIDE.md)** - Complete instructions

🚀 **[QUICK REFERENCE](QUICK_REFERENCE.md)** - Keep this open while coding

### Two Ways to Organize

**Choose what works for you:**

**Folder-Based** (3+ projects):
```
your-name/
├── portfolio/
├── todoapp/
└── calculator/
```
→ Clean URLs: `site.com/your-name/portfolio/`

**Flat Files** (2-3 projects):
```
your-name/
├── profile.html
├── todo.html
└── calculator.html
```
→ Simple URLs: `site.com/your-name/profile.html`

### Golden Rules

1. ✅ **Use relative paths** (`href="style.css"` not `/style.css`)
2. ✅ **Match filenames exactly** (file: `style.css` → link: `style.css`)
3. ✅ **Pick ONE pattern** - don't mix folders + flat files
4. ❌ **Don't edit index.html** in your root (auto-generated)

### Push Changes

```bash
git pull && git add . && git commit -m "Update" && git push
```

Then ask admin to deploy!

---

## For Admin

### Smart Build System

The build script automatically detects each intern's pattern:

```
→ jaiakaash/
  Mode: Folder-based (3 folders)    ← Has subfolders
    ✓ portfolio/
    ✓ todoapp/
    ✓ simpleproject/

→ rohan-kumar/
  Mode: Flat files (3 pages)        ← Has HTML files
    ✓ subscription.html
    ✓ todo.html
    ✓ portfolio.html
```

### How It Works

1. **Scans each intern folder**
2. **Detects pattern:**
   - Has subfolders → Folder-based routing
   - Has .html files → Flat file routing
3. **Generates landing page** listing all projects
4. **Deploys everything** to Vercel

### Commands

```bash
npm run build   # Build all projects
npm run dev     # Build + serve locally
```

### Deploy

**Actions → Deploy to Vercel → Run workflow → Choose environment**

### Adding New Interns

1. Create folder: `interns/new-intern-name/`
2. They add their projects (folders or files)
3. Deploy - everything auto-detected!

### URL Structure

```
Main site:
  yoursite.vercel.app/                    → Main HQ dashboard

Intern landing:
  yoursite.vercel.app/jaiakaash/          → Auto-generated landing

Projects (folder-based):
  yoursite.vercel.app/jaiakaash/portfolio/
  yoursite.vercel.app/jaiakaash/todoapp/

Projects (flat files):
  yoursite.vercel.app/rohan/profile.html
  yoursite.vercel.app/rohan/todo.html
```

---

## Project Structure

```
Interns/
├── README.md                    # This file
├── INTERN_GUIDE.md              # Full intern guide
├── QUICK_REFERENCE.md           # Quick cheat sheet
├── package.json
├── vercel.json
├── scripts/
│   └── build.js                 # Smart build script
├── .github/workflows/
│   └── deploy.yml               # Manual deploy workflow
└── interns/
    ├── jaiakaash/               # Folder-based pattern
    │   ├── portfolio/
    │   ├── todoapp/
    │   └── simpleproject/
    ├── rohan-kumar/             # Flat file pattern
    │   ├── profile.html
    │   ├── todo.html
    │   └── portfolio.html
    └── ...
```

---

## Key Features

✨ **Auto-detection** - Supports both folder & flat patterns
✨ **Auto-generated landing pages** - Lists all projects
✨ **Manual deploys only** - Cost control via GitHub Actions
✨ **HUD-themed UI** - Futuristic cyan design
✨ **Flexible** - Interns choose their own organization
