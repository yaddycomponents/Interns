# Quick Reference for Interns

## Two Organization Patterns

### Pattern 1: Folder-Based ✨ (For 3+ projects)
```
✅ your-name/
   ├── portfolio/
   │   └── index.html      ← MUST be index.html
   ├── todoapp/
   │   └── index.html      ← MUST be index.html
   └── calculator/
       └── index.html      ← MUST be index.html
```
**⚠️ Each folder needs index.html (not todo.html or portfolio.html)**

### Pattern 2: Flat Files 📄 (For 2-3 projects)
```
✅ your-name/
   ├── profile.html
   ├── todo.html
   └── calculator.html
```

**Pick ONE** - don't mix them!

---

## Golden Rules

✅ **Use relative paths**
```html
<link href="style.css">        <!-- Good -->
<link href="/style.css">       <!-- Bad -->
```

✅ **Match filenames exactly**
```
File: style.css → Link: href="style.css"
```

✅ **Don't edit index.html** (auto-generated)

❌ **Don't mix patterns** (folders + flat files)

---

## Quick Test

```bash
# Open in browser
open your-project/index.html

# Check console (F12)
# No errors = ready to push
```

---

## Push Changes

```bash
git add .
git commit -m "Add project"
git push
```

---

## Common Fixes

| Problem | Fix |
|---------|-----|
| CSS not loading | Check filename matches link |
| Images broken | Use relative paths |
| Multiple projects messy | Use folder pattern |

---

## Need Help?

Read: `INTERN_GUIDE.md` for full details
