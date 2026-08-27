// Visual system for the X (Twitter) post images.
// Change BRAND.handle once and every image picks it up on the next build.

export const BRAND = {
  handle: '@yourhandle',
  tagline: 'web · frontend · backend',
};

export const CSS = /* css */ `
:root {
  --bg:        #080B14;
  --bg-2:      #0C1120;
  --panel:     #0F1526;
  --panel-2:   #131A2E;
  --line:      rgba(255,255,255,.085);
  --line-soft: rgba(255,255,255,.045);
  --text:      #E9EDF7;
  --muted:     #8C96AF;
  --dim:       #5F6981;
  --cyan:      #22D3EE;
  --violet:    #A78BFA;
  --green:     #34D399;
  --red:       #FB7185;
  --amber:     #FBBF24;
  --blue:      #60A5FA;

  --tok-key:   #C792EA;
  --tok-str:   #9EE493;
  --tok-num:   #F78C6C;
  --tok-fn:    #82AAFF;
  --tok-prop:  #22D3EE;
  --tok-com:   #59637F;
  --tok-punc:  #99A3C2;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html, body {
  width: var(--W); height: var(--H);
  font-family: Inter, 'Liberation Sans', sans-serif;
  color: var(--text);
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
}

body {
  background:
    radial-gradient(120% 80% at 12% -10%, rgba(34,211,238,.13), transparent 55%),
    radial-gradient(110% 80% at 92% 108%, rgba(167,139,250,.14), transparent 55%),
    var(--bg);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: calc(var(--u) * 56);
  gap: calc(var(--u) * 30);
}

/* faint engineering grid */
body::before {
  content: '';
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,.026) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.026) 1px, transparent 1px);
  background-size: calc(var(--u) * 64) calc(var(--u) * 64);
  mask-image: radial-gradient(120% 100% at 50% 40%, #000 30%, transparent 88%);
  pointer-events: none;
}
body > * { position: relative; z-index: 1; }

/* ─────────── header ─────────── */
.head { display: flex; align-items: center; gap: calc(var(--u) * 16); }

.kicker {
  display: inline-flex; align-items: center; gap: calc(var(--u) * 10);
  font-size: calc(var(--u) * 19);
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--cyan);
  padding: calc(var(--u) * 9) calc(var(--u) * 18);
  border: 1px solid rgba(34,211,238,.32);
  border-radius: 999px;
  background: rgba(34,211,238,.07);
  white-space: nowrap;
}
.kicker.v { color: var(--violet); border-color: rgba(167,139,250,.32); background: rgba(167,139,250,.07); }
.kicker::before {
  content: ''; width: calc(var(--u) * 9); height: calc(var(--u) * 9);
  border-radius: 999px; background: currentColor;
  box-shadow: 0 0 calc(var(--u) * 14) currentColor;
}

.counter {
  margin-left: auto;
  font-family: 'JetBrains Mono', monospace;
  font-size: calc(var(--u) * 20);
  font-weight: 500;
  color: var(--dim);
  letter-spacing: .06em;
}

/* ─────────── titles ─────────── */
h1 {
  font-family: Sora, Inter, sans-serif;
  font-weight: 800;
  font-size: calc(var(--u) * 78);
  line-height: 1.05;
  letter-spacing: -.028em;
  white-space: pre-line;
}
h1 .g {
  background: linear-gradient(100deg, var(--cyan), var(--violet));
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
h1.sm { font-size: calc(var(--u) * 58); }

h2 {
  font-family: Sora, Inter, sans-serif;
  font-weight: 700;
  font-size: calc(var(--u) * 50);
  line-height: 1.12;
  letter-spacing: -.022em;
}

.sub {
  font-size: calc(var(--u) * 27);
  line-height: 1.5;
  color: var(--muted);
  font-weight: 400;
  max-width: 88%;
}

/* ─────────── body area ─────────── */
.body { flex: 1; display: flex; flex-direction: column; gap: calc(var(--u) * 22); min-height: 0; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: calc(var(--u) * 22); flex: 1; min-height: 0; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: calc(var(--u) * 20); flex: 1; min-height: 0; }

.panel {
  background: linear-gradient(180deg, var(--panel-2), var(--panel));
  border: 1px solid var(--line);
  border-radius: calc(var(--u) * 22);
  padding: calc(var(--u) * 26);
  display: flex; flex-direction: column; gap: calc(var(--u) * 18);
  min-height: 0; min-width: 0;
  overflow: hidden;
}
.panel.good { border-color: rgba(52,211,153,.34); box-shadow: inset 0 0 calc(var(--u)*70) rgba(52,211,153,.05); }
.panel.bad  { border-color: rgba(251,113,133,.32); box-shadow: inset 0 0 calc(var(--u)*70) rgba(251,113,133,.05); }

.p-label {
  display: flex; align-items: center; gap: calc(var(--u) * 12);
  font-size: calc(var(--u) * 24); font-weight: 700; letter-spacing: -.01em;
}
.p-label .badge {
  width: calc(var(--u) * 32); height: calc(var(--u) * 32);
  border-radius: calc(var(--u) * 10);
  display: grid; place-items: center;
  font-size: calc(var(--u) * 20); font-weight: 900;
  flex: none;
}
.badge.x { background: rgba(251,113,133,.16); color: var(--red); }
.badge.v { background: rgba(52,211,153,.16); color: var(--green); }
.badge.n { background: rgba(34,211,238,.14); color: var(--cyan); font-family: 'JetBrains Mono', monospace; }
.p-note { font-size: calc(var(--u) * 21); line-height: 1.45; color: var(--muted); margin-top: auto; }

/* ─────────── code ─────────── */
pre.code {
  font-family: 'JetBrains Mono', monospace;
  font-size: calc(var(--u) * 23);
  line-height: 1.62;
  color: var(--tok-punc);
  background: rgba(4,7,15,.62);
  border: 1px solid var(--line-soft);
  border-radius: calc(var(--u) * 16);
  padding: calc(var(--u) * 22) calc(var(--u) * 24);
  white-space: pre;
  overflow: hidden;
  letter-spacing: -.005em;
}
pre.code.big  { font-size: calc(var(--u) * 27); }
pre.code.tiny { font-size: calc(var(--u) * 20); }
pre.code.flush { flex: 0 1 auto; }
.panel pre.code.flush { flex: 1; }  /* cards keep a uniform code window */
.tok-key  { color: var(--tok-key);  font-weight: 500; }
.tok-str  { color: var(--tok-str); }
.tok-num  { color: var(--tok-num); }
.tok-fn   { color: var(--tok-fn); }
.tok-com  { color: var(--tok-com); font-style: italic; }
.tok-prop { color: var(--tok-prop); }
.tok-punc { color: var(--tok-punc); }
.tok-txt  { color: #C9D2E8; }

.win { display: flex; gap: calc(var(--u) * 9); margin-bottom: calc(var(--u) * -6); }
.win i { width: calc(var(--u) * 13); height: calc(var(--u) * 13); border-radius: 999px; background: #2A3350; display: block; }

/* ─────────── lists ─────────── */
.list { display: flex; flex-direction: column; gap: calc(var(--u) * 14); flex: 1; min-height: 0; }
.item {
  display: flex; align-items: flex-start; gap: calc(var(--u) * 18);
  background: rgba(255,255,255,.022);
  border: 1px solid var(--line-soft);
  border-radius: calc(var(--u) * 16);
  padding: calc(var(--u) * 18) calc(var(--u) * 22);
}
.item .n {
  flex: none;
  width: calc(var(--u) * 40); height: calc(var(--u) * 40);
  border-radius: calc(var(--u) * 12);
  display: grid; place-items: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: calc(var(--u) * 21); font-weight: 700;
  background: linear-gradient(140deg, rgba(34,211,238,.2), rgba(167,139,250,.2));
  color: var(--cyan);
  border: 1px solid rgba(34,211,238,.24);
}
.item.ok  .n { background: rgba(52,211,153,.14);  color: var(--green); border-color: rgba(52,211,153,.28); }
.item.no  .n { background: rgba(251,113,133,.14); color: var(--red);   border-color: rgba(251,113,133,.28); }
.item .txt { display: flex; flex-direction: column; gap: calc(var(--u) * 5); min-width: 0; }
.item .t { font-size: calc(var(--u) * 27); font-weight: 700; letter-spacing: -.015em; line-height: 1.28; }
.item .d { font-size: calc(var(--u) * 22); line-height: 1.42; color: var(--muted); }
.item .t code, .item .d code {
  font-family: 'JetBrains Mono', monospace;
  font-size: .92em;
  color: var(--cyan);
  background: rgba(34,211,238,.09);
  border: 1px solid rgba(34,211,238,.16);
  border-radius: calc(var(--u) * 7);
  padding: 0 calc(var(--u) * 7);
}
.list.tight .item { padding: calc(var(--u) * 14) calc(var(--u) * 20); }
.list.tight .t { font-size: calc(var(--u) * 24); }
.list.tight .d { font-size: calc(var(--u) * 20); }

/* two-column cheat-sheet layout, filled column-major so it reads top-to-bottom */
.rows.cols2, .list.cols2 {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(var(--rowcount, 6), auto);
  align-content: start;
  column-gap: calc(var(--u) * 22);
}

/* ─────────── key/value rows ─────────── */
.rows { display: flex; flex-direction: column; gap: calc(var(--u) * 10); flex: 1; min-height: 0; }
.row {
  display: flex; align-items: center; gap: calc(var(--u) * 20);
  padding: calc(var(--u) * 13) calc(var(--u) * 20);
  border: 1px solid var(--line-soft);
  border-radius: calc(var(--u) * 14);
  background: rgba(255,255,255,.02);
}
.row .k {
  font-family: 'JetBrains Mono', monospace;
  font-size: calc(var(--u) * 24); font-weight: 700;
  color: var(--cyan);
  flex: none; width: calc(var(--u) * var(--kw, 250));
  white-space: nowrap; overflow: hidden;
}
.row.ok .k { color: var(--green); }
.row.no .k { color: var(--red); }
.row.wa .k { color: var(--amber); }
.row.bl .k { color: var(--blue); }
.row .v { font-size: calc(var(--u) * 23); color: #C6CEE4; line-height: 1.35; }
.row .v b { color: var(--text); font-weight: 700; }

/* ─────────── flow ─────────── */
.flow { display: flex; flex-direction: column; gap: calc(var(--u) * 10); flex: 1; min-height: 0; justify-content: center; }
.step {
  display: flex; align-items: center; gap: calc(var(--u) * 20);
  padding: calc(var(--u) * 17) calc(var(--u) * 22);
  border: 1px solid var(--line);
  border-left: calc(var(--u) * 5) solid var(--cyan);
  border-radius: calc(var(--u) * 14);
  background: linear-gradient(90deg, rgba(34,211,238,.07), rgba(255,255,255,.015) 45%);
}
.step:nth-child(6n+3) { border-left-color: var(--violet); background: linear-gradient(90deg, rgba(167,139,250,.07), rgba(255,255,255,.015) 45%); }
.step:nth-child(6n+5) { border-left-color: var(--green);  background: linear-gradient(90deg, rgba(52,211,153,.07), rgba(255,255,255,.015) 45%); }
.step .s {
  font-family: 'JetBrains Mono', monospace;
  font-size: calc(var(--u) * 20); font-weight: 700; color: var(--dim);
  flex: none; width: calc(var(--u) * 34);
}
.step .st { font-size: calc(var(--u) * 26); font-weight: 700; letter-spacing: -.015em; flex: none; width: calc(var(--u) * var(--sw, 300)); }
.step .sd { font-size: calc(var(--u) * 21); color: var(--muted); line-height: 1.35; }
.arrow { text-align: center; color: var(--dim); font-size: calc(var(--u) * 20); line-height: 1; margin: calc(var(--u) * -2) 0; }

/* ─────────── stat ─────────── */
.stat { display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1; gap: calc(var(--u) * 8); }
.stat .big {
  font-family: Sora, Inter, sans-serif; font-weight: 800;
  font-size: calc(var(--u) * 150); line-height: 1;
  background: linear-gradient(100deg, var(--cyan), var(--violet));
  -webkit-background-clip: text; background-clip: text; color: transparent;
  letter-spacing: -.04em;
}
.stat .cap { font-size: calc(var(--u) * 27); color: var(--muted); }

/* ─────────── footer ─────────── */
.foot {
  display: flex; align-items: center; gap: calc(var(--u) * 14);
  padding-top: calc(var(--u) * 18);
  border-top: 1px solid var(--line-soft);
  font-size: calc(var(--u) * 21);
  color: var(--dim);
}
.foot .mark {
  width: calc(var(--u) * 34); height: calc(var(--u) * 34);
  border-radius: calc(var(--u) * 10);
  background: linear-gradient(140deg, var(--cyan), var(--violet));
  display: grid; place-items: center;
  font-family: 'JetBrains Mono', monospace; font-weight: 700;
  font-size: calc(var(--u) * 15); letter-spacing: -.06em; color: #060912;
}
.foot .h { color: var(--text); font-weight: 600; }
.foot .tag { margin-left: auto; letter-spacing: .1em; text-transform: uppercase; font-size: calc(var(--u) * 17); }

/* ─────────── cover / outro ─────────── */
.cover { flex: 1; min-height: 0; display: flex; flex-direction: column; justify-content: center; gap: calc(var(--u) * 26); }
.cover .swipe {
  display: inline-flex; align-items: center; gap: calc(var(--u) * 12);
  font-size: calc(var(--u) * 22); font-weight: 700; color: var(--violet);
  letter-spacing: .04em;
}
.chips { display: flex; flex-wrap: wrap; gap: calc(var(--u) * 12); }
.chip {
  font-family: 'JetBrains Mono', monospace;
  font-size: calc(var(--u) * 21);
  padding: calc(var(--u) * 10) calc(var(--u) * 18);
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,.03);
  color: var(--muted);
}
`;
