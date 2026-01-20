# Quick Reference Card for Interns

## File Structure (Always Follow This)

```
✅ CORRECT:
your-name/
├── index.html       (don't touch)
├── project1.html
├── project1.css
├── project1.js
├── project2.html
├── project2.css
└── project2.js

❌ WRONG:
your-name/
├── project1/
│   ├── index.html
│   └── style.css
└── project2/
    └── index.html
```

---

## Checklist Before Pushing

- [ ] All files in root folder (no subfolders)
- [ ] Filenames match links (`style.css` file → `href="style.css"`)
- [ ] Used relative paths (no `/` at start)
- [ ] Tested in browser (double-click HTML file)
- [ ] No errors in console (press F12)

---

## Common Errors & Quick Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| CSS not loading | Filename mismatch | Rename file OR fix link |
| Broken after deploy | Absolute paths (`/style.css`) | Use relative (`style.css`) |
| Wrong folder structure | Created subfolder | Move files to root, delete folder |

---

## Template for New Project

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Project</title>
    <link rel="stylesheet" href="myproject.css">
</head>
<body>

    <!-- Your code here -->

    <script src="myproject.js"></script>
</body>
</html>
```

---

## Push Changes

```bash
git add .
git commit -m "Add my new project"
git push
```

Then tell admin to deploy!
