#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

// Create folder structure
console.log('Creating folder structure...');
fs.mkdirSync('src/styles', { recursive: true });

// Create main.scss file
console.log('Creating main.scss...');
fs.writeFileSync(
  'src/styles/main.scss',
  `@use 'arbor-design/packages/tokens/index' as *;\n`
);

// Create index.html file
console.log('Creating index.html...');
fs.writeFileSync(
  'index.html',
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arbor Project</title>
  <link rel="stylesheet" href="dist/main.css">
</head>
<body>
  <h1>Arbor Design</h1>
</body>
</html>\n`
);

// Create .gitignore file if it doesn't exist, or append lines safely
console.log('Creating .gitignore...');
const gitignorePath = '.gitignore';
const ignoreEntries = ['node_modules/', 'dist/', '.gitignore'];

let existing = '';
if (fs.existsSync(gitignorePath)) {
  existing = fs.readFileSync(gitignorePath, 'utf8');
}

const newEntries = ignoreEntries.filter(entry => !existing.includes(entry));
if (newEntries.length > 0) {
  fs.appendFileSync(gitignorePath, newEntries.join('\n') + '\n');
}

// Add scripts to package.json
console.log('Adding scripts to package.json...');
const pkgPath = 'package.json';
if (fs.existsSync(pkgPath)) {
  const packageJson = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  packageJson.scripts = packageJson.scripts || {};
  packageJson.scripts.build = "npx sass --load-path=node_modules src/styles/main.scss dist/main.css";
  packageJson.scripts.watch = "npx sass --watch --load-path=node_modules src/styles/main.scss dist/main.css";
  fs.writeFileSync(pkgPath, JSON.stringify(packageJson, null, 2));
}

console.log('Done! Run: npm run watch');