#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Projekt gyökere
const root = process.env.INIT_CWD || process.cwd();
const srcDir = path.join(root, 'src');
const stylesDir = path.join(srcDir, 'styles');
const layoutDir = path.join(stylesDir, 'layout');
const pagesDir = path.join(stylesDir, 'pages');

// 1. Mappák létrehozása
[ srcDir, stylesDir, layoutDir, pagesDir ].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log(`📁 ${path.relative(root, dir)} mappa létrehozva`);
  }
});

// 2. Alap fájlok létrehozása
const files = [
  {
    path: path.join(stylesDir, 'main.scss'),
    content: `// Main entry point
@use './globals.scss';

// Layouts
@use './layout/header';
@use './layout/main';
@use './layout/footer';

// Pages
@use './pages/home';
`
  },
  {
    path: path.join(stylesDir, 'globals.scss'),
    content: `// Centralized SCSS forward module
@forward 'arbor-design/packages/tokens';
@forward 'arbor-design/packages/utilities';
@forward 'arbor-design/packages/base';
@forward 'arbor-design/packages/components';
`
  },
  {
    path: path.join(layoutDir, '_header.scss'),
    content: `@use '../globals.scss' as *;

header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;

  p {
    color: $color-primary;
    font-family: $font-primary;
  }
}
`
  },
  {
    path: path.join(layoutDir, '_main.scss'),
    content: `@use '../globals.scss' as *;

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 65vh;

  h1 {
    color: $color-secondary;
    font-family: $font-secondary;
  }

  svg {
    width: 5rem;
    height: auto;
    fill: $color-primary;
    stroke: $color-primary;
  }
}
`
  },
  {
    path: path.join(layoutDir, '_footer.scss'),
    content: `@use '../globals.scss' as *;

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;

  p {
    color: $color-text-semidark;
    font-family: $font-primary;
  }
}
`
  },
  { path: path.join(pagesDir, '_home.scss'), content: `// Home page styles\n` },
  { path: path.join(pagesDir, '_about.scss'), content: `// About page styles\n` },
  { path: path.join(pagesDir, '_contact.scss'), content: `// Contact page styles\n` },
];

// 3. Fájlok létrehozása
files.forEach(file => {
  if (!fs.existsSync(file.path)) {
    fs.writeFileSync(file.path, file.content);
    console.log(`📝 ${path.relative(root, file.path)} létrehozva`);
  }
});

// 4. index.html létrehozása
const indexHtmlPath = path.join(root, 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="dist/main.css">
  <title>Arbor Design</title>
</head>
<body>
  <header>
    <p>homepage</p>
  </header>
  <main>
    <h1>Arbor Design</h1>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  </main>
  <footer>
    <p>Roland Szilágyi 2025</p>
  </footer>
</body>
</html>
`;
  fs.writeFileSync(indexHtmlPath, html);
  console.log('📝 index.html létrehozva a projekt gyökerében');
}

// 5. Scripts hozzáadása a package.json-hoz
const packageJsonPath = path.join(root, 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  pkg.scripts = pkg.scripts || {};

  if (!pkg.scripts.build) {
    pkg.scripts.build = "sass --load-path=node_modules src/styles/main.scss dist/main.css && npm run copy-assets";
    console.log('🔧 build script hozzáadva a package.json-hoz');
  }

  if (!pkg.scripts["copy-assets"]) {
    pkg.scripts["copy-assets"] = "mkdir -p dist/assets && cp -R node_modules/arbor-design/packages/assets/* dist/assets";
    console.log('🔧 copy-assets script hozzáadva a package.json-hoz');
  }

  if (!pkg.scripts.watch) {
    pkg.scripts.watch = "sass --watch --load-path=node_modules src/styles/main.scss dist/main.css";
    console.log('🔧 watch script hozzáadva a package.json-hoz');
  }

  fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2));
}