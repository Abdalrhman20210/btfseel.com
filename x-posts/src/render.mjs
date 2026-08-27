// Slide -> HTML. Every slide type used by posts.mjs is built here.
import { CSS, BRAND } from './theme.mjs';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Inline markup allowed inside list/row text: `code` and *bold*
const rich = (s) =>
  esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*([^*]+)\*/g, '<b>$1</b>');

/* ───────────────────────── syntax highlighting ───────────────────────── */

const KEYWORDS = {
  js: 'const let var function return if else for while await async import from export default new class extends try catch finally throw typeof instanceof interface type as in of do switch case break continue null undefined true false this void public private readonly implements enum static satisfies keyof infer never unknown yield delete',
  sql: 'SELECT FROM WHERE JOIN LEFT RIGHT INNER OUTER ON GROUP BY ORDER LIMIT OFFSET INSERT INTO VALUES UPDATE SET DELETE CREATE INDEX TABLE EXPLAIN ANALYZE AND OR NOT NULL AS IN EXISTS DISTINCT COUNT SUM DESC ASC WITH UNION ALL',
  css: 'display grid flex place-items justify-content align-items position absolute relative top left transform translate margin auto inset gap grid-template-columns grid-template-areas flex-direction flex-wrap',
  docker: 'FROM AS RUN COPY WORKDIR ENV EXPOSE CMD ENTRYPOINT USER ARG LABEL HEALTHCHECK',
  bash: 'git npm npx docker curl cd sudo echo export',
  http: '',
};

const COMMENT = { js: '//', sql: '--', css: '//', docker: '#', bash: '#', http: '#' };
// escaped form of each trailing-comment marker, for the tokenizer regex
const CMARK_RE = { '//': '\\/\\/', '--': '--', '#': '#' };

function highlight(code, lang = 'js') {
  const kw = new Set(KEYWORDS[lang] ? KEYWORDS[lang].split(/\s+/) : []);
  const ci = lang === 'sql' || lang === 'docker' || lang === 'bash';
  const cmark = COMMENT[lang] || '//';

  let inBlock = false; // /* ... */ spanning several lines

  return code
    .split('\n')
    .map((line) => {
      const trimmed = line.trimStart();
      if (inBlock) {
        if (line.includes('*/')) inBlock = false;
        return `<span class="tok-com">${esc(line)}</span>`;
      }
      if (trimmed.startsWith('/*')) {
        if (!line.includes('*/')) inBlock = true;
        return `<span class="tok-com">${esc(line)}</span>`;
      }
      // whole-line comments
      if (trimmed.startsWith(cmark) || (lang === 'js' && trimmed.startsWith('//'))) {
        return `<span class="tok-com">${esc(line)}</span>`;
      }

      let out = '';
      // Only this language's comment marker starts a trailing comment. Sharing one
      // marker set across languages ate everything after `--omit=dev` in Dockerfiles.
      const re = new RegExp(
        `(${CMARK_RE[cmark]}[^\\n]*)` +
          "|(`(?:[^`\\\\]|\\\\.)*`|\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*')" +
          '|(\\b\\d+(?:\\.\\d+)?(?:ms|s|px|kb|mb|%)?\\b)' +
          '|([A-Za-z_$][\\w$-]*)' +
          '|([{}()[\\];,.:<>=+\\-*/%!?&|@]+)' +
          '|(\\s+)',
        'g'
      );
      let m;
      let last = 0;
      while ((m = re.exec(line))) {
        if (m.index > last) out += `<span class="tok-txt">${esc(line.slice(last, m.index))}</span>`;
        last = re.lastIndex;
        const [tok, com, str, num, word, punc] = m;
        if (com !== undefined) {
          out += `<span class="tok-com">${esc(line.slice(m.index))}</span>`;
          last = line.length;
          break;
        } else if (str !== undefined) {
          out += `<span class="tok-str">${esc(tok)}</span>`;
        } else if (num !== undefined) {
          out += `<span class="tok-num">${esc(tok)}</span>`;
        } else if (word !== undefined) {
          const key = ci ? tok.toUpperCase() : tok;
          const isKw = kw.has(key) || kw.has(tok);
          const nextChar = line[re.lastIndex];
          const prevChar = line[m.index - 1];
          if (isKw) out += `<span class="tok-key">${esc(tok)}</span>`;
          else if (nextChar === '(') out += `<span class="tok-fn">${esc(tok)}</span>`;
          else if (prevChar === '.') out += `<span class="tok-prop">${esc(tok)}</span>`;
          else out += `<span class="tok-txt">${esc(tok)}</span>`;
        } else if (punc !== undefined) {
          out += `<span class="tok-punc">${esc(tok)}</span>`;
        } else {
          out += esc(tok); // whitespace and anything else, verbatim
        }
      }
      if (last < line.length) out += `<span class="tok-txt">${esc(line.slice(last))}</span>`;
      return out;
    })
    .join('\n');
}

const codeBlock = (c) =>
  `<pre class="code ${c.size || ''} ${c.flush ? 'flush' : ''}">${highlight(
    c.code.trim(),
    c.lang || 'js'
  )}</pre>`;

/* ───────────────────────── panels ───────────────────────── */

function panel(p) {
  const badge =
    p.verdict === 'good'
      ? '<span class="badge v">✓</span>'
      : p.verdict === 'bad'
      ? '<span class="badge x">✕</span>'
      : p.num
      ? `<span class="badge n">${esc(p.num)}</span>`
      : '';
  const label = p.label ? `<div class="p-label">${badge}${rich(p.label)}</div>` : '';
  const inner = p.code
    ? codeBlock({ ...p, flush: p.flush ?? true })
    : p.items
    ? `<div class="list tight">${p.items.map(item).join('')}</div>`
    : '';
  const note = p.note ? `<div class="p-note">${rich(p.note)}</div>` : '';
  const cls = p.verdict === 'good' ? 'good' : p.verdict === 'bad' ? 'bad' : '';
  return `<div class="panel ${cls}">${label}${inner}${note}</div>`;
}

const item = (it, i) => {
  const mark =
    it.mark === '✓' ? 'ok' : it.mark === '✕' ? 'no' : '';
  const n = it.mark || (it.n ?? (i !== undefined ? i + 1 : ''));
  return `<div class="item ${mark}"><div class="n">${esc(n)}</div><div class="txt"><div class="t">${rich(
    it.t
  )}</div>${it.d ? `<div class="d">${rich(it.d)}</div>` : ''}</div></div>`;
};

const row = (r) =>
  `<div class="row ${r.tone || ''}"><div class="k">${esc(r.k)}</div><div class="v">${rich(
    r.v
  )}</div></div>`;

const step = (s) =>
  `<div class="step"><div class="s">${esc(s.n)}</div><div class="st">${rich(
    s.t
  )}</div><div class="sd">${rich(s.d)}</div></div>`;

/* ───────────────────────── slide shell ───────────────────────── */

function head(s, meta) {
  if (s.type === 'cover') return '';
  const k = s.kicker || meta.kicker;
  const counter = meta.total > 1 ? `<div class="counter">${meta.index}/${meta.total}</div>` : '';
  return `<div class="head"><div class="kicker ${s.accent === 'v' ? 'v' : ''}">${esc(
    k
  )}</div>${counter}</div>`;
}

function foot(meta) {
  return `<div class="foot"><div class="mark">&lt;/&gt;</div><span class="h">${esc(
    BRAND.handle
  )}</span><span class="tag">${esc(BRAND.tagline)}</span></div>`;
}

function bodyFor(s, meta) {
  switch (s.type) {
    case 'cover': {
      const counter = meta.total > 1 ? `<div class="counter">${meta.index}/${meta.total}</div>` : '';
      return `
        <div class="head"><div class="kicker">${esc(s.kicker || meta.kicker)}</div>${counter}</div>
        <div class="cover">
          <h1>${s.title.replace(/\*([^*]+)\*/g, '<span class="g">$1</span>')}</h1>
          ${s.sub ? `<div class="sub">${rich(s.sub)}</div>` : ''}
          ${s.chips ? `<div class="chips">${s.chips.map((c) => `<span class="chip">${esc(c)}</span>`).join('')}</div>` : ''}
          ${meta.total > 1 ? `<div class="swipe">→ &nbsp;swipe</div>` : ''}
        </div>`;
    }
    case 'code':
      return `<div class="body">${s.title ? `<h2>${rich(s.title)}</h2>` : ''}${
        s.sub ? `<div class="sub">${rich(s.sub)}</div>` : ''
      }<div class="win"><i></i><i></i><i></i></div>${codeBlock({
        ...s,
        flush: s.flush ?? true,
      })}${s.note ? `<div class="p-note">${rich(s.note)}</div>` : ''}</div>`;
    case 'duo':
      return `<div class="body">${s.title ? `<h2>${rich(s.title)}</h2>` : ''}<div class="grid-2">${s.panels
        .map(panel)
        .join('')}</div></div>`;
    case 'trio':
      return `<div class="body">${s.title ? `<h2>${rich(s.title)}</h2>` : ''}<div class="grid-3">${s.panels
        .map(panel)
        .join('')}</div></div>`;
    case 'list': {
      const c2 = s.cols === 2 ? `cols2" style="--rowcount:${Math.ceil(s.items.length / 2)}` : '';
      return `<div class="body">${s.title ? `<h2>${rich(s.title)}</h2>` : ''}${
        s.sub ? `<div class="sub">${rich(s.sub)}</div>` : ''
      }<div class="list ${s.tight ? 'tight' : ''} ${c2}">${s.items.map(item).join('')}</div></div>`;
    }
    case 'rows': {
      const c2 = s.cols === 2 ? `cols2" style="--rowcount:${Math.ceil(s.rows.length / 2)}` : '';
      return `<div class="body" style="--kw:${s.keyWidth || 250}">${
        s.title ? `<h2>${rich(s.title)}</h2>` : ''
      }${s.sub ? `<div class="sub">${rich(s.sub)}</div>` : ''}<div class="rows ${c2}">${s.rows
        .map(row)
        .join('')}</div></div>`;
    }
    case 'flow':
      return `<div class="body" style="--sw:${s.stepWidth || 300}">${
        s.title ? `<h2>${rich(s.title)}</h2>` : ''
      }<div class="flow">${s.steps
        .map((st, i) => (i ? `<div class="arrow">▼</div>` : '') + step(st))
        .join('')}</div></div>`;
    case 'stat':
      return `<div class="body"><div class="stat"><div class="big">${esc(
        s.value
      )}</div><div class="cap">${rich(s.caption)}</div></div></div>`;
    default:
      throw new Error('unknown slide type: ' + s.type);
  }
}

/* Shrink-to-fit pass. Runs in the page before the screenshot: code blocks give up
   font size first, then the whole layout scales down through --u if anything still
   overflows. Sets data-overflow="1" when even that was not enough, which the
   verify step in build.mjs greps for. */
const FIT_SCRIPT = /* js */ `
function fitCode() {
  var blocks = [].slice.call(document.querySelectorAll('pre.code'));
  var sizes = blocks.map(function (el) {
    el.style.fontSize = '';
    el.style.flex = '';
    el.style.height = '';
    var fs = parseFloat(getComputedStyle(el).fontSize), g = 90;
    while ((el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 1)
           && fs > 6 && g--) {
      fs *= 0.975;
      el.style.fontSize = fs + 'px';
    }
    return fs;
  });
  // Side-by-side code panels must share one type size and one window height,
  // or the slide reads as three unrelated screenshots.
  document.querySelectorAll('.grid-2, .grid-3').forEach(function (grid) {
    var inGrid = blocks.filter(function (el) { return grid.contains(el); });
    if (inGrid.length < 2) return;
    var min = Math.min.apply(null, inGrid.map(function (el) { return sizes[blocks.indexOf(el)]; }));
    inGrid.forEach(function (el) {
      el.style.fontSize = min + 'px';
      el.style.flex = 'none';
      el.style.height = 'auto';
    });
    var tallest = Math.max.apply(null, inGrid.map(function (el) { return el.offsetHeight; }));
    inGrid.forEach(function (el) { el.style.height = tallest + 'px'; });
  });
}
function overflows() {
  var b = document.body.getBoundingClientRect();
  var foot = document.querySelector('.foot');
  var pb = parseFloat(getComputedStyle(document.body).paddingBottom);
  // Compare against the canvas, not the viewport: the layout is sized by --W/--H,
  // which has nothing to do with the browser window headless happens to give us.
  if (foot && foot.getBoundingClientRect().bottom > b.bottom - pb + 1) return true;
  var sel = '.body,.cover,.list,.rows,.flow,.panel,.item,.row,.step,.chips';
  var els = document.querySelectorAll(sel);
  for (var i = 0; i < els.length; i++) {
    var e = els[i];
    if (e.scrollHeight > e.clientHeight + 1 || e.scrollWidth > e.clientWidth + 1) return true;
  }
  return false;
}
var u = U0;
fitCode();
for (var i = 0; i < 30 && overflows(); i++) {
  u *= 0.975;
  document.documentElement.style.setProperty('--u', u + 'px');
  fitCode();
}
if (overflows()) document.documentElement.setAttribute('data-overflow', '1');
document.documentElement.setAttribute('data-fit', 'done');
`;

export function slideHtml(slide, meta) {
  const { w, h } = meta;
  const u = Math.min(w, h) / 1000;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
:root { --W:${w}px; --H:${h}px; --u:${u.toFixed(4)}px; }
${CSS}
</style></head><body>${head(slide, meta)}${bodyFor(slide, meta)}${foot(meta)}
<script>var U0=${u.toFixed(4)};${FIT_SCRIPT}</script></body></html>`;
}
