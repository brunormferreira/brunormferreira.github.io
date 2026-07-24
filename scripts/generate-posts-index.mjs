import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const rootDir = process.cwd();
const postsDir = path.join(rootDir, 'public', 'posts');
const outputFile = path.join(
  rootDir,
  'src',
  'app',
  'content',
  'generated',
  'posts.generated.ts',
);

// ── Validation helpers ──────────────────────────────────────────────

function collectError(errors, fileName, message) {
  errors.push(`[${fileName}] ${message}`);
}

function assertDate(value, fileName, errors) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    collectError(
      errors,
      fileName,
      'Missing or invalid "date". Expected YYYY-MM-DD.',
    );
    return null;
  }

  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) {
    collectError(errors, fileName, `Invalid date value: ${value}`);
    return null;
  }

  return value;
}

function assertString(fieldName, value, fileName, errors) {
  if (typeof value !== 'string' || !value.trim()) {
    collectError(errors, fileName, `Missing or empty "${fieldName}".`);
    return '';
  }

  return value.trim();
}

function normalizeTags(value, fileName, errors) {
  if (!value) {
    return [];
  }

  if (!Array.isArray(value)) {
    collectError(errors, fileName, '"tags" must be an array.');
    return [];
  }

  return value
    .map((tag) => String(tag).trim())
    .filter(Boolean)
    .filter((tag, index, list) => list.indexOf(tag) === index);
}

function toSlug(fileName) {
  return fileName
    .replace(/\.md$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function estimateReadTime(text) {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  return `${minutes} min read`;
}

// ── Core pipeline ───────────────────────────────────────────────────

function readPosts() {
  if (!fs.existsSync(postsDir)) {
    return { posts: [], errors: [] };
  }

  const files = fs
    .readdirSync(postsDir)
    .filter((name) => name.toLowerCase().endsWith('.md'));

  const errors = [];

  const posts = files
    .map((fileName) => {
      const absolutePath = path.join(postsDir, fileName);
      const raw = fs.readFileSync(absolutePath, 'utf8');
      const { data, content } = matter(raw);

      const title = assertString('title', data.title, fileName, errors);
      const description = assertString(
        'description',
        data.description,
        fileName,
        errors,
      );
      const publishedAt = assertDate(data.date, fileName, errors);
      const category = assertString(
        'category',
        data.category,
        fileName,
        errors,
      );
      const tags = normalizeTags(data.tags, fileName, errors);
      const draft = Boolean(data.draft);
      const markdownContent = content.trim();

      if (!markdownContent) {
        collectError(errors, fileName, 'Markdown body is empty.');
      }

      return {
        slug: toSlug(fileName),
        title,
        description,
        publishedAt,
        category,
        tags,
        content: markdownContent,
        readTime: estimateReadTime(markdownContent),
        draft,
      };
    })
    .filter((post) => !post.draft)
    .sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''));

  // Detect duplicate slugs
  const slugCount = new Map();
  for (const post of posts) {
    slugCount.set(post.slug, (slugCount.get(post.slug) ?? 0) + 1);
  }
  for (const [slug, count] of slugCount) {
    if (count > 1) {
      collectError(
        errors,
        slug,
        `Duplicate slug detected (${count} posts resolve to "${slug}").`,
      );
    }
  }

  return { posts, errors };
}

function writeOutput(posts) {
  // Strip draft from output (always false after filtering)
  const cleanPosts = posts.map(({ draft, ...rest }) => rest);
  const serializedPosts = JSON.stringify(cleanPosts, null, 2);

  const fileContent = [
    '// Auto-generated — do not edit manually.',
    '// Run: pnpm run posts:generate',
    '',
    "import { Post } from '../posts.models';",
    '',
    `export const POSTS: ReadonlyArray<Post> = ${serializedPosts};`,
    '',
  ].join('\n');

  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, fileContent, 'utf8');
}

// ── Run ─────────────────────────────────────────────────────────────

const { posts, errors } = readPosts();

if (errors.length > 0) {
  console.error('\n⚠ Posts validation errors:\n');
  for (const error of errors) {
    console.error(`  ✗ ${error}`);
  }
  console.error('');
  process.exit(1);
}

writeOutput(posts);

const draftCount =
  fs.readdirSync(postsDir).filter((n) => n.endsWith('.md')).length -
  posts.length;

console.log(
  `✓ Generated ${posts.length} post(s)` +
    (draftCount > 0 ? ` (${draftCount} draft(s) skipped)` : '') +
    ` → src/app/content/generated/posts.generated.ts`,
);
