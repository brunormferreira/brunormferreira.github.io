import fs from 'node:fs';
import path from 'node:path';

const rawTitle = process.argv.slice(2).join(' ').trim();

if (!rawTitle) {
  console.error('Usage: pnpm run post:new -- "My Post Title"');
  process.exit(1);
}

const slug = rawTitle
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-');

if (!slug) {
  console.error('Could not generate a valid slug from the provided title.');
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const fileName = `${today}-${slug}.md`;
const filePath = path.join(process.cwd(), 'public', 'posts', fileName);

if (fs.existsSync(filePath)) {
  console.error(`Post already exists: ${fileName}`);
  process.exit(1);
}

const template = `---
title: "${rawTitle}"
description: ""
date: "${today}"
category: ""
tags: []
draft: true
---

`;

fs.mkdirSync(path.dirname(filePath), { recursive: true });
fs.writeFileSync(filePath, template, 'utf8');

console.log(`\n✓ Created: public/posts/${fileName}\n`);
console.log('Next steps:');
console.log('  1. Fill in description, category, and tags');
console.log('  2. Write the post content below the frontmatter');
console.log('  3. Set draft: false');
console.log('  4. Run: pnpm start  (generation is automatic)\n');
