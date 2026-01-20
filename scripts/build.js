const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const INTERNS_DIR = path.join(ROOT, 'interns');
const PUBLIC = path.join(ROOT, 'public');

function getProjects() {
    if (!fs.existsSync(INTERNS_DIR)) return [];
    return fs.readdirSync(INTERNS_DIR).filter(name => {
        const fullPath = path.join(INTERNS_DIR, name);
        return fs.statSync(fullPath).isDirectory() && !name.startsWith('.');
    });
}

function copyFolder(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) {
        const srcPath = path.join(src, item);
        const destPath = path.join(dest, item);
        if (fs.statSync(srcPath).isDirectory()) {
            copyFolder(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

function generateIndex(projects) {
    const cards = projects.map(name => {
        const displayName = name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        return `<a href="/${name}/" class="card"><h2>${displayName}</h2></a>`;
    }).join('\n        ');

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intern Projects</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: system-ui, sans-serif; min-height: 100vh; background: #0f0f0f; color: white; padding: 2rem; }
        h1 { text-align: center; margin-bottom: 2rem; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; max-width: 900px; margin: 0 auto; }
        .card { background: #1a1a2e; border-radius: 10px; padding: 1.5rem; text-decoration: none; color: white; border: 1px solid #333; text-align: center; transition: transform 0.2s; }
        .card:hover { transform: translateY(-3px); border-color: #667eea; }
        .empty { text-align: center; opacity: 0.5; padding: 4rem; }
    </style>
</head>
<body>
    <h1>Intern Projects</h1>
    <div class="grid">
        ${projects.length ? cards : '<p class="empty">No projects yet</p>'}
    </div>
</body>
</html>`;
}

// Main
console.log('Building...\n');

if (fs.existsSync(PUBLIC)) fs.rmSync(PUBLIC, { recursive: true });
fs.mkdirSync(PUBLIC);

const projects = getProjects();
console.log('Found:', projects.length ? projects.join(', ') : 'none');

for (const name of projects) {
    console.log(`  → ${name}/`);
    copyFolder(path.join(INTERNS_DIR, name), path.join(PUBLIC, name));
}

fs.writeFileSync(path.join(PUBLIC, 'index.html'), generateIndex(projects));
console.log(`\nDone! ${projects.length} project(s)`);
