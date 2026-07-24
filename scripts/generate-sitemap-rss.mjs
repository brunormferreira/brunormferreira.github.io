import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const SITE_URL = 'https://brunormferreira.github.io';
const SITE_TITLE = 'Bruno Ramires — Senior Frontend Engineer';
const SITE_DESCRIPTION =
  'Senior Frontend Engineer portfolio with 7+ years experience. Angular & React specialist with AI-first workflow.';

const rootDir = process.cwd();
const postsDir = path.join(rootDir, 'public', 'posts');
const publicDir = path.join(rootDir, 'public');

const SUPPORTED_LOCALES = ['pt-br', 'en-us'];

// ── Read posts ──────────────────────────────────────────────────────

function toSlug(fileName) {
  return fileName
    .replace(/\.md$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function readPublishedPosts() {
  const posts = [];

  for (const locale of SUPPORTED_LOCALES) {
    const localeDir = path.join(postsDir, locale);
    if (!fs.existsSync(localeDir)) continue;

    const files = fs
      .readdirSync(localeDir)
      .filter((name) => name.toLowerCase().endsWith('.md'));

    for (const fileName of files) {
      const absolutePath = path.join(localeDir, fileName);
      const raw = fs.readFileSync(absolutePath, 'utf8');
      const { data, content } = matter(raw);

      if (data.draft) continue;

      posts.push({
        slug: toSlug(fileName),
        locale,
        title: data.title || '',
        description: data.description || '',
        publishedAt: data.date || '',
        category: data.category || '',
        content: content.trim(),
      });
    }
  }

  return posts.sort((a, b) =>
    (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''),
  );
}

// ── Sitemap generation ──────────────────────────────────────────────

function generateSitemap(posts) {
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/posts', priority: '0.9', changefreq: 'weekly' },
  ];

  // Dedupe posts by slug (same post in different locales should appear once)
  const uniqueSlugs = new Map();
  for (const post of posts) {
    if (!uniqueSlugs.has(post.slug)) {
      uniqueSlugs.set(post.slug, post);
    }
  }

  const postPages = [...uniqueSlugs.values()].map((post) => ({
    loc: `/posts/${post.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: post.publishedAt,
  }));

  const allPages = [...staticPages, ...postPages];

  const urlEntries = allPages
    .map((page) => {
      const lastmod = page.lastmod || today;
      return `  <url>
    <loc>${SITE_URL}${page.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
}

// ── RSS feed generation ─────────────────────────────────────────────

function escapeXml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateRssFeed(posts) {
  // Filter to English posts for the main feed (international audience)
  const enPosts = posts.filter((p) => p.locale === 'en-us').slice(0, 20);

  const buildDate = new Date().toUTCString();

  const items = enPosts
    .map((post) => {
      const pubDate = new Date(post.publishedAt + 'T12:00:00Z').toUTCString();
      const link = `${SITE_URL}/posts/${post.slug}`;

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.description)}</description>
      <category>${escapeXml(post.category)}</category>
    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;
}

// ── Run ─────────────────────────────────────────────────────────────

const posts = readPublishedPosts();

// Generate sitemap
const sitemap = generateSitemap(posts);
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
const uniquePostCount = new Set(posts.map((p) => p.slug)).size;
console.log(`✓ Generated sitemap.xml (${2 + uniquePostCount} URLs)`);

// Generate RSS feed
const rssFeed = generateRssFeed(posts);
fs.writeFileSync(path.join(publicDir, 'feed.xml'), rssFeed, 'utf8');
const enPostCount = posts.filter((p) => p.locale === 'en-us').length;
console.log(`✓ Generated feed.xml (${enPostCount} items)`);
