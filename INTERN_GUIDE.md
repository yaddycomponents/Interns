# Guide for Interns

## Project Structure Rules

Your folder should look like this:

```
your-name/
├── index.html          ← Landing page (DO NOT TOUCH - we create this)
├── profile.html        ← Your first project
├── style.css
├── script.js
├── todo.html           ← Your second project
├── todo.css
└── todo.js
```

---

## Important Rules

### ✅ DO:
1. **Keep all files in the root of your folder**
   ```
   ✅ your-name/todo.html
   ❌ your-name/todoapp/todo.html
   ```

2. **Use clear, descriptive filenames**
   ```
   ✅ todo.html, profile.html, calculator.html
   ❌ project1.html, test.html, new.html
   ```

3. **Match your CSS/JS links to actual filenames**
   ```html
   <!-- If your file is named style.css -->
   <link rel="stylesheet" href="style.css">

   <!-- NOT -->
   <link rel="stylesheet" href="main.css">
   ```

4. **Use relative paths for links**
   ```html
   ✅ <link href="style.css">
   ✅ <script src="script.js">
   ✅ <img src="image.png">

   ❌ <link href="/style.css">      (wrong - uses absolute path)
   ❌ <link href="../style.css">    (wrong - goes up directory)
   ```

### ❌ DON'T:
1. **Don't create subfolders**
   ```
   ❌ your-name/project1/index.html
   ❌ your-name/todoapp/todo.html
   ```

2. **Don't edit index.html** - We manage this for you

3. **Don't use different names in code vs files**
   ```
   ❌ File: style.css
       Link: <link href="main.css">
   ```

---

## Adding a New Project

### Step 1: Create your HTML file
```bash
# In your folder: your-name/
touch calculator.html
```

### Step 2: Add your CSS/JS if needed
```bash
touch calculator.css
touch calculator.js
```

### Step 3: Link them properly
```html
<!-- calculator.html -->
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="calculator.css">
</head>
<body>
    <!-- Your code -->
    <script src="calculator.js"></script>
</body>
</html>
```

### Step 4: Push to GitHub
```bash
git add .
git commit -m "Add calculator project"
git push
```

### Step 5: Tell us!
Message the team that you added a new project. We'll update your landing page.

---

## Common Mistakes & Fixes

### Mistake 1: CSS not loading
```
Problem: Created style.css but linked main.css
Fix: Match the filename exactly
```

### Mistake 2: Created a subfolder
```
Problem: your-name/todoapp/todo.html
Fix: Move files to root
   mv todoapp/todo.html .
   mv todoapp/todo.css .
   rm -rf todoapp
```

### Mistake 3: Absolute paths
```
Problem: <link href="/style.css">
Fix: <link href="style.css">
```

### Mistake 4: Spaces in filenames
```
Problem: my project.html
Fix: my-project.html (use hyphens, not spaces)
```

---

## File Naming Conventions

| Type | Good Names | Bad Names |
|------|-----------|-----------|
| HTML | `todo.html`, `profile.html` | `project1.html`, `new.html` |
| CSS | `todo.css`, `style.css` | `styles.css`, `main.css` |
| JS | `todo.js`, `script.js` | `app.js`, `index.js` |

---

## Testing Locally

Before pushing, always test:

1. **Open your HTML file in browser**
   ```bash
   open todo.html
   # or just double-click the file
   ```

2. **Check browser console** (F12)
   - Look for errors
   - Common: "Failed to load resource" = wrong filename in link

3. **Verify all styles/scripts load**
   - If page looks broken, check CSS link
   - If JavaScript doesn't work, check script src

---

## Your URLs After Deployment

```
Main site:
https://yoursite.vercel.app/

Your landing page:
https://yoursite.vercel.app/your-name/

Your projects:
https://yoursite.vercel.app/your-name/profile.html
https://yoursite.vercel.app/your-name/todo.html
https://yoursite.vercel.app/your-name/calculator.html
```

---

## Need Help?

1. **CSS not showing?** → Check filename matches link
2. **Created subfolder by mistake?** → Move files to root
3. **Want to add new project?** → Create new HTML file in root
4. **Forgot to link CSS/JS?** → Add `<link>` or `<script>` tags

Ask the team if you're stuck!
