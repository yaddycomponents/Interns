# Guide for Interns

## Two Ways to Organize Projects

You can organize your projects in **two ways** - pick what works for you!

### Option 1: Folder-Based (Recommended for Multiple Projects)

```
your-name/
├── portfolio/
│   ├── index.html          ← MUST be named index.html
│   ├── styles.css
│   ├── main.js
│   └── images/
├── todoapp/
│   ├── index.html          ← MUST be named index.html
│   ├── style.css
│   └── script.js
└── calculator/
    ├── index.html          ← MUST be named index.html
    └── app.js
```

**⚠️ CRITICAL: Each folder MUST have `index.html` as the main file**

**Result URLs:**
- `yoursite.vercel.app/your-name/` → Landing page
- `yoursite.vercel.app/your-name/portfolio/`
- `yoursite.vercel.app/your-name/todoapp/`
- `yoursite.vercel.app/your-name/calculator/`

**Benefits:**
- Each project is self-contained
- No file naming conflicts
- Assets organized per project
- Cleaner structure for multiple projects

### Option 2: Flat Files (Simple for Few Projects)

```
your-name/
├── profile.html
├── profile.css
├── todo.html
├── todo.css
├── style.css
└── script.js
```

**Result URLs:**
- `yoursite.vercel.app/your-name/` → Landing page
- `yoursite.vercel.app/your-name/profile.html`
- `yoursite.vercel.app/your-name/todo.html`

**Benefits:**
- Simple and straightforward
- Good for 2-3 projects
- Less folder navigation

---

## Important Rules (Both Patterns)

### ✅ DO:

1. **For folder-based: Name your main file `index.html`**
   ```
   ✅ portfolio/index.html
   ✅ todoapp/index.html

   ❌ portfolio/portfolio.html
   ❌ todoapp/todo.html
   ```
   **Why?** Servers automatically load `index.html` when you visit a folder URL.

2. **Use relative paths in your code**
   ```html
   ✅ <link href="style.css">
   ✅ <img src="images/logo.png">
   ✅ <script src="app.js">

   ❌ <link href="/style.css">
   ❌ <img src="/images/logo.png">
   ```

2. **Match filenames exactly**
   ```html
   <!-- If your file is style.css -->
   ✅ <link href="style.css">
   ❌ <link href="styles.css">
   ❌ <link href="main.css">
   ```

3. **Test locally before pushing**
   ```bash
   # Just open your HTML file in browser
   open index.html
   # Check console (F12) for errors
   ```

### ❌ DON'T:

1. **Don't mix both patterns**
   ```
   ❌ your-name/
      ├── portfolio/        (folder-based)
      ├── todo.html         (flat file)
      └── profile.html      (flat file)
   ```
   Pick ONE pattern and stick to it!

2. **Don't edit index.html in your root folder**
   - We auto-generate this landing page
   - It lists all your projects automatically

3. **Don't use absolute paths**
   ```html
   ❌ href="/style.css"
   ✅ href="style.css"
   ```

---

## Adding a New Project

### Folder-Based Approach:

```bash
# Create new project folder
mkdir your-name/new-project

# Add your files
touch your-name/new-project/index.html
touch your-name/new-project/style.css
```

### Flat File Approach:

```bash
# Add new HTML file
touch your-name/new-project.html
touch your-name/new-project.css
```

Then **push**:
```bash
git add .
git commit -m "Add new project"
git push
```

The landing page updates automatically!

---

## Common Mistakes & Fixes

### Mistake 1: Mixing patterns
```
Problem: Some projects in folders, some as files
Fix: Pick one pattern and convert all projects to it
```

### Mistake 2: Wrong paths after moving to folders
```
Problem: <img src="/images/logo.png"> breaks
Fix: Use relative paths: <img src="images/logo.png">
```

### Mistake 3: CSS not loading
```
Problem: File is style.css but linked as main.css
Fix: Match filenames exactly
```

### Mistake 4: Assets not found
```
Problem: Images/fonts not loading
Fix: Check paths are relative, not absolute
```

---

## Testing Locally

### Folder-Based Projects:
```bash
# Navigate to project folder
cd your-name/portfolio

# Open in browser
open index.html
```

### Flat File Projects:
```bash
# Open from root
open your-name/profile.html
```

**Always check:**
1. Page loads correctly
2. CSS applies
3. JavaScript runs
4. Images/assets load
5. No console errors (F12)

---

## Push Changes

```bash
git pull                          # Get latest changes
git add .                         # Stage your changes
git commit -m "Update project"    # Commit
git push                          # Push to GitHub
```

Then ask admin to deploy!

---

## Examples

### Good Folder Structure (Folder-Based):
```
jaiakaash/
├── portfolio/
│   ├── index.html
│   ├── styles.css
│   ├── main.js
│   ├── profile.jpeg
│   └── background.mp4
├── todoapp/
│   ├── index.html
│   ├── todo.css
│   └── todo.js
└── simpleproject/
    ├── index.html
    ├── style.css
    └── script.js
```

### Good Flat Structure (Flat Files):
```
rohan-kumar/
├── subscription.html
├── subscription.css
├── todo.html
├── todo.css
├── portfolio.html
├── portfolio.css
├── style.css
├── script.js
└── images/
    └── profile.png
```

---

## Need Help?

Ask these questions:
1. **CSS not showing?** → Check filename matches link
2. **Images broken?** → Use relative paths
3. **Which pattern should I use?** → Folders for 3+ projects, flat for 2-3
4. **Can I switch patterns?** → Yes, but convert ALL projects at once

Talk to the team if you're stuck!
