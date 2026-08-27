// Renders every slide to PNG with headless Chromium, then writes CAPTIONS.md.
//   node x-posts/src/build.mjs            -> build everything
//   node x-posts/src/build.mjs 4 7        -> rebuild only posts 4 and 7
import { chromium } from 'playwright-core';
import { mkdir, writeFile, rm, readdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { posts } from './posts.mjs';
import { slideHtml } from './render.mjs';
import { BRAND } from './theme.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'images');
const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

// Singles get 16:9 (X shows them uncropped). Multi-image posts get 1:1,
// which survives X's 2x2 / 1+2 grid crops far better than a wide frame.
const SIZE = { single: { w: 1600, h: 900 }, carousel: { w: 1200, h: 1200 } };

const only = process.argv.slice(2).map(Number).filter(Boolean);
const pad = (n) => String(n).padStart(2, '0');

async function main() {
  const targets = only.length ? posts.filter((p) => only.includes(p.id)) : posts;
  const browser = await chromium.launch({ executablePath: CHROME, args: ['--no-sandbox'] });
  const clipped = [];

  for (const post of targets) {
    const { w, h } = SIZE[post.format];
    const dir = resolve(OUT, `${pad(post.id)}-${post.slug}`);
    await rm(dir, { recursive: true, force: true });
    await mkdir(dir, { recursive: true });

    const page = await browser.newPage({ viewport: { width: w, height: h } });

    for (const [i, slide] of post.slides.entries()) {
      const meta = { w, h, index: i + 1, total: post.slides.length, kicker: post.topic };
      await page.setContent(slideHtml(slide, meta), { waitUntil: 'load' });
      await page.waitForFunction(() => document.documentElement.dataset.fit === 'done');
      await page.screenshot({ path: resolve(dir, `${pad(post.id)}-${i + 1}.png`) });

      // The in-page fit pass flags anything it could not squeeze into the canvas.
      if (await page.evaluate(() => document.documentElement.hasAttribute('data-overflow')))
        clipped.push(`${pad(post.id)}-${i + 1}`);
      process.stdout.write(`  ${pad(post.id)}-${i + 1}`);
    }
    await page.close();
    console.log(`  ✓ ${pad(post.id)} ${post.slug} (${post.slides.length} images)`);
  }

  await browser.close();
  await writeCaptions();
  console.log('\nImages in x-posts/images/, captions in x-posts/CAPTIONS.md');
  if (clipped.length) console.log(`⚠ still overflowing after fit: ${clipped.join(', ')}`);
  else console.log('✓ no clipped slides');
}

async function writeCaptions() {
  const lines = [
    '# 20 posts for X — captions + image order',
    '',
    `Handle on every image: **${BRAND.handle}** — change it in \`src/theme.mjs\`, then run \`node x-posts/src/build.mjs\` to re-render all of them.`,
    '',
    'Copy the caption as-is, then attach that post\'s images **in the listed order**.',
    'X allows at most 4 images per post, so no post here exceeds 4.',
    '',
    '---',
    '',
  ];

  for (const p of posts) {
    const dir = `${pad(p.id)}-${p.slug}`;
    let files = [];
    try {
      files = (await readdir(resolve(OUT, dir))).filter((f) => f.endsWith('.png')).sort();
    } catch {}
    lines.push(
      `## ${pad(p.id)} · ${p.topic}`,
      '',
      `**Format:** ${
        p.format === 'single'
          ? 'single image (1600×900)'
          : `carousel, ${p.slides.length} images (1200×1200)`
      }`,
      '',
      '**Caption**',
      '',
      '```',
      p.caption,
      '',
      p.hashtags.join(' '),
      '```',
      '',
      '**Images**',
      '',
      ...files.map((f, i) => `${i + 1}. \`x-posts/images/${dir}/${f}\``),
      '',
      '---',
      ''
    );
  }
  await writeFile(resolve(ROOT, 'CAPTIONS.md'), lines.join('\n'), 'utf8');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
