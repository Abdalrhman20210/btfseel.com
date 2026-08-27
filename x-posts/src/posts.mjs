// 20 posts for the X page. Each post = caption + 1 image (single) or 2-4 images
// (X allows a maximum of 4 images per post, so no carousel here exceeds 4).

export const posts = [
  /* ───────────────────────────── 01 ───────────────────────────── */
  {
    id: 1,
    slug: 'center-a-div',
    topic: 'CSS · Layout',
    format: 'carousel',
    caption: `"Center a div" is a running joke — but only because most devs memorize one way and then fight the layout with the other two.

There are three. That's it:

Flexbox — one axis, content-driven boxes.
Grid — place-items: center. Two lines, done.
Absolute — overlays that must ignore document flow.

Pick by what the layout is, not by what you typed last time.

Which one is your default?`,
    hashtags: ['#CSS', '#WebDev', '#Frontend'],
    slides: [
      {
        type: 'cover',
        kicker: 'CSS · Layout',
        title: 'Center a div.\n*Three ways.* Zero guessing.',
        sub: 'One of them is two lines long. The other two exist for a reason — here is when each is the right call.',
        chips: ['flexbox', 'grid', 'position: absolute'],
      },
      {
        type: 'trio',
        title: 'The only three you need',
        panels: [
          {
            label: 'Flexbox',
            num: '1',
            code: `.parent {
  display: flex;
  align-items: center;
  justify-content:
    center;
}`,
            lang: 'css',
            size: 'tiny',
          },
          {
            label: 'Grid',
            num: '2',
            code: `.parent {
  display: grid;
  place-items:
    center;
}`,
            lang: 'css',
            size: 'tiny',
          },
          {
            label: 'Absolute',
            num: '3',
            code: `.child {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 200px;
  height: 100px;
}`,
            lang: 'css',
            size: 'tiny',
          },
        ],
      },
      {
        type: 'list',
        title: 'So which one?',
        items: [
          {
            t: 'Flexbox — when children drive the size',
            d: 'Navbars, toolbars, button rows. You get `gap`, wrapping and per-item alignment for free.',
          },
          {
            t: 'Grid — when you just want it centered',
            d: '`place-items: center` is the shortest correct answer in CSS. Use it for hero sections and empty states.',
          },
          {
            t: 'Absolute — when it must leave the flow',
            d: 'Modals, badges, loading overlays. `inset: 0` + `margin: auto` centers without transforms, so no blurry text.',
          },
          {
            t: 'Skip translate(-50%, -50%) by default',
            d: 'It works, but half-pixel transforms can blur text on non-retina screens. Reach for it only when the size is unknown.',
          },
        ],
      },
    ],
  },

  /* ───────────────────────────── 02 ───────────────────────────── */
  {
    id: 2,
    slug: 'array-methods',
    topic: 'JavaScript',
    format: 'single',
    caption: `Most for-loops in a JS codebase are a method call in disguise.

Learn these eight and your code stops describing *how* it iterates and starts describing *what* it wants:

map → transform
filter → narrow
reduce → collapse
find → first match
some / every → questions
flatMap → transform + flatten
sort → order (mutates!)

Save the cheat sheet. Which one took you longest to click with? Mine was reduce.`,
    hashtags: ['#JavaScript', '#WebDev', '#100DaysOfCode'],
    slides: [
      {
        type: 'rows',
        kicker: 'JavaScript · Arrays',
        title: 'Array methods, in one screen',
        cols: 2,
        sub: 'Every one of these returns something. Only sort() and reverse() mutate the original.',
        keyWidth: 300,
        rows: [
          { k: '.map(fn)', v: '*Transform* every item → new array of the same length' },
          { k: '.filter(fn)', v: '*Keep* the items where fn returns true → shorter array' },
          { k: '.reduce(fn, x)', v: '*Collapse* the array into one value: a sum, an object, anything' },
          { k: '.find(fn)', v: 'First matching *item* — or undefined', tone: 'bl' },
          { k: '.findIndex(fn)', v: 'First matching *index* — or -1', tone: 'bl' },
          { k: '.some(fn)', v: '"Is at least one true?" → boolean', tone: 'ok' },
          { k: '.every(fn)', v: '"Are they all true?" → boolean', tone: 'ok' },
          { k: '.flatMap(fn)', v: 'map + flatten one level. Return `[]` to drop an item', tone: 'bl' },
          { k: '.includes(x)', v: 'Membership test, works with NaN (indexOf does not)', tone: 'ok' },
          { k: '.sort(fn)', v: '*Mutates.* Copy first: `[...arr].sort()`', tone: 'no' },
          { k: '.toSorted(fn)', v: 'Same, but returns a copy. ES2023, and the one you want', tone: 'wa' },
          { k: '.at(-1)', v: 'Last item without `arr[arr.length - 1]`', tone: 'wa' },
        ],
      },
    ],
  },

  /* ───────────────────────────── 03 ───────────────────────────── */
  {
    id: 3,
    slug: 'url-to-pixels',
    topic: 'Fullstack',
    format: 'carousel',
    caption: `"What happens when you type a URL and hit Enter?"

The interview question that never dies — because a good answer touches DNS, TCP, TLS, HTTP, your backend, your database and the browser's render pipeline in about 90 seconds.

Here is the whole path, in four slides, with nothing hand-waved.

Bookmark it before your next interview.`,
    hashtags: ['#WebDevelopment', '#Backend', '#InterviewPrep'],
    slides: [
      {
        type: 'cover',
        kicker: 'Fullstack · Networking',
        title: 'You type a URL.\n*Then what?*',
        sub: 'The classic interview question, answered end to end — DNS, TLS, your server, your database, and the pixels.',
        chips: ['DNS', 'TCP + TLS', 'HTTP', 'render'],
      },
      {
        type: 'flow',
        kicker: 'Step 1 · Finding the server',
        title: 'From hostname to open socket',
        stepWidth: 240,
        steps: [
          { n: '01', t: 'URL parsing', d: 'Scheme, host, port, path. Not a URL? The browser sends it to your search engine instead' },
          { n: '02', t: 'DNS lookup', d: 'Browser cache → OS cache → resolver → root → TLD → authoritative. Answer: an IP' },
          { n: '03', t: 'TCP handshake', d: 'SYN → SYN-ACK → ACK. One round trip before a single byte of your app moves' },
          { n: '04', t: 'TLS handshake', d: 'Certificate check, key exchange, cipher agreed. TLS 1.3 does it in one round trip' },
          { n: '05', t: 'HTTP request', d: 'GET / HTTP/2 with headers: Host, Cookie, Accept, User-Agent' },
        ],
      },
      {
        type: 'flow',
        kicker: 'Step 2 · The backend',
        accent: 'v',
        title: 'What your server actually does',
        stepWidth: 240,
        steps: [
          { n: '06', t: 'Load balancer', d: 'Picks a healthy instance. Often terminates TLS here and talks plain HTTP inside the network' },
          { n: '07', t: 'Router + middleware', d: 'Match the path, then auth, rate limits, logging, body parsing' },
          { n: '08', t: 'Handler + cache', d: 'Redis first. A hit skips everything below and returns in single-digit milliseconds' },
          { n: '09', t: 'Database', d: 'Connection from the pool, query planner picks an index, rows come back' },
          { n: '10', t: 'Response', d: 'Serialize, set status + cache headers, compress with gzip/brotli, send' },
        ],
      },
      {
        type: 'list',
        kicker: 'Step 3 · The browser',
        title: 'HTML → pixels',
        tight: true,
        items: [
          { t: 'Parse HTML → DOM', d: 'Streaming. A blocking `<script>` in the head stops the parser dead — that is why they go at the end or get `defer`.' },
          { t: 'Parse CSS → CSSOM', d: 'CSS is render-blocking by design. The browser will not paint an unstyled page for you.' },
          { t: 'Render tree + layout', d: 'Match styles to nodes, then compute the geometry of every box. Also called reflow.' },
          { t: 'Paint', d: 'Fill in pixels: text, colors, shadows, borders — into layers.' },
          { t: 'Composite', d: 'The GPU stitches layers together. `transform` and `opacity` animate here, which is why they are the cheap ones.' },
        ],
      },
    ],
  },

  /* ───────────────────────────── 04 ───────────────────────────── */
  {
    id: 4,
    slug: 'react-rerenders',
    topic: 'React',
    format: 'carousel',
    caption: `Your React component re-renders more than you think — and 90% of the time it is one of four reasons.

The one that catches everyone: passing a fresh object, array or arrow function as a prop. It is a new reference on every render, so memo() compares it and shrugs.

Fix the reference, not the symptom. And before you reach for useMemo everywhere: a re-render is not automatically a bug. Measure with the Profiler first.

What is your worst re-render story?`,
    hashtags: ['#ReactJS', '#Frontend', '#WebPerf'],
    slides: [
      {
        type: 'cover',
        kicker: 'React · Performance',
        title: 'Your component\nre-renders.\n*Here is why.*',
        sub: 'Four causes cover almost every case — and only one of them needs useMemo.',
        chips: ['state', 'parent', 'context', 'reference identity'],
      },
      {
        type: 'list',
        kicker: 'The four causes',
        title: 'React re-renders when…',
        items: [
          { t: 'Its own state changed', d: 'A `useState` / `useReducer` update. Note: React bails out if the new value is `Object.is`-equal to the old one.' },
          { t: 'Its parent re-rendered', d: 'By default a parent render re-renders the whole subtree. Props being "the same" does not stop it — only `memo()` does.' },
          { t: 'A context value changed', d: 'Every consumer of that context re-renders. A new object in the provider each render = everyone re-renders, every time.' },
          { t: 'A hook it uses changed', d: 'Store subscriptions, `useSyncExternalStore`, a router hook. Cheap to miss when the hook is three layers deep.' },
        ],
      },
      {
        type: 'duo',
        kicker: 'The reference trap',
        title: 'Same value. Different object.',
        panels: [
          {
            label: 'New reference every render',
            verdict: 'bad',
            code: `function Parent({ userId }) {
  // new object + new fn
  // on EVERY render
  return (
    <Child
      config={{ dark: true }}
      onSave={() => save(userId)}
    />
  );
}

const Child = memo(ChildImpl);
// memo() never helps here`,
            note: '`{} !== {}`. memo does a shallow compare, sees two different objects, and re-renders anyway.',
          },
          {
            label: 'Stable reference',
            verdict: 'good',
            code: `const CONFIG = { dark: true };

function Parent({ userId }) {
  const onSave = useCallback(
    () => save(userId),
    [userId]
  );

  return (
    <Child
      config={CONFIG}
      onSave={onSave}
    />
  );
}`,
            note: 'Constants live outside the component. Callbacks get `useCallback` — but only when the child is memoized.',
          },
        ],
      },
      {
        type: 'list',
        kicker: 'Fix it in this order',
        accent: 'v',
        title: 'Before you memo everything',
        tight: true,
        items: [
          { mark: '✓', t: 'Move state down', d: 'Put it in the smallest component that uses it. The cheapest re-render is the one that never reaches the tree above.' },
          { mark: '✓', t: 'Lift content up as children', d: '`<Slow>{<Expensive />}</Slow>` — children passed as props keep their identity, so they do not re-render with the parent.' },
          { mark: '✓', t: 'Split your context', d: 'One context for the value, one for the setters. Consumers of the setters stop re-rendering on every value change.' },
          { mark: '✓', t: 'Then memo + useMemo', d: 'Real work only: big lists, charts, heavy computation. Wrapping a `<Button>` costs more than it saves.' },
          { mark: '✕', t: 'Never guess', d: 'React DevTools Profiler → "Highlight updates". Measure first, or you are optimizing fiction.' },
        ],
      },
    ],
  },

  /* ───────────────────────────── 05 ───────────────────────────── */
  {
    id: 5,
    slug: 'slow-sql',
    topic: 'Databases',
    format: 'carousel',
    caption: `Your API is not slow. Your query is doing a sequential scan over 4 million rows.

EXPLAIN ANALYZE tells you in about two seconds. Most backend devs never run it.

Read the plan, add the right index, watch a 2.3s endpoint become 4ms. It is the highest-leverage thing you can learn about databases — and it takes an afternoon.

Slide 3 is the index rules people get wrong most often.`,
    hashtags: ['#SQL', '#PostgreSQL', '#Backend'],
    slides: [
      {
        type: 'cover',
        kicker: 'Databases · Performance',
        title: 'Your query is slow.\n*EXPLAIN* will tell you\nexactly why.',
        sub: 'Two words in front of your SELECT, and the database hands you its entire plan of attack.',
        chips: ['Seq Scan', 'Index Scan', 'rows=4M'],
      },
      {
        type: 'code',
        kicker: 'Read the plan',
        title: 'Seq Scan on 4M rows',
        lang: 'sql',
        size: 'tiny',
        code: `EXPLAIN ANALYZE
SELECT * FROM orders
WHERE customer_id = 42 AND status = 'paid'
ORDER BY created_at DESC LIMIT 20;

-- Limit  (cost=189234.12..189234.17 rows=20)
--   ->  Sort  (cost=189234.12..189298.44 rows=25729)
--         Sort Key: created_at DESC
--         ->  Seq Scan on orders  (rows=25729)
--               Filter: (customer_id = 42 AND status = 'paid')
--               Rows Removed by Filter: 3974271
-- Execution Time: 2318.774 ms      <-- 2.3 SECONDS

CREATE INDEX idx_orders_customer_status_created
  ON orders (customer_id, status, created_at DESC);

-- ->  Index Scan using idx_orders_customer_status_created
-- Execution Time: 0.412 ms          <-- 5600x faster`,
        note: '*Rows Removed by Filter* is the tell. The database read 4 million rows to hand you 20.',
      },
      {
        type: 'list',
        kicker: 'Index rules',
        accent: 'v',
        title: 'What people get wrong',
        tight: true,
        items: [
          { mark: '✓', t: 'Column order matters — a lot', d: 'An index on `(a, b, c)` serves `a`, `a+b`, `a+b+c`. It does nothing for a query filtering on `b` alone. Leftmost prefix.' },
          { mark: '✓', t: 'Put the equality columns first', d: 'Equality filters, then the range or ORDER BY column last. That is what lets the index skip the sort entirely.' },
          { mark: '✕', t: 'Never wrap an indexed column in a function', d: '`WHERE LOWER(email) = ?` ignores the index on `email`. Index the expression instead, or store it normalized.' },
          { mark: '✕', t: 'Do not index everything', d: 'Every index is extra work on INSERT, UPDATE and DELETE, plus disk. Index what you actually filter, join and sort on.' },
          { mark: '✓', t: 'Check what is unused', d: '`pg_stat_user_indexes` shows scan counts. Indexes with zero scans are pure overhead — drop them.' },
        ],
      },
    ],
  },

  /* ───────────────────────────── 06 ───────────────────────────── */
  {
    id: 6,
    slug: 'http-status-codes',
    topic: 'Backend · HTTP',
    format: 'single',
    caption: `Returning 200 with {"error": "not found"} in the body is how you make every client of your API worse.

Status codes are the contract. Browsers cache on them, proxies retry on them, monitoring alerts on them, and client libraries branch on them — all before anyone parses your JSON.

The ones worth knowing cold are on the card. Two people forget constantly:

401 = I don't know who you are.
403 = I know exactly who you are, and no.

Save it.`,
    hashtags: ['#Backend', '#API', '#WebDev'],
    slides: [
      {
        type: 'rows',
        kicker: 'HTTP · Status codes',
        title: 'The codes you actually send',
        cols: 2,
        sub: 'Your status code is read by caches, proxies, retries and monitoring long before anyone reads your body.',
        keyWidth: 130,
        rows: [
          { k: '200', v: '*OK* — here is the thing you asked for', tone: 'ok' },
          { k: '201', v: '*Created* — and here is a `Location` header pointing at it', tone: 'ok' },
          { k: '204', v: '*No Content* — it worked, there is nothing to send back. Perfect for DELETE', tone: 'ok' },
          { k: '301', v: '*Moved Permanently* — cached hard by browsers. Be very sure', tone: 'bl' },
          { k: '302', v: '*Found* — temporary redirect. Use 307 to guarantee the method is preserved', tone: 'bl' },
          { k: '304', v: '*Not Modified* — your ETag matched. The fastest response is an empty one', tone: 'bl' },
          { k: '400', v: '*Bad Request* — malformed. The client cannot retry this as-is', tone: 'wa' },
          { k: '401', v: '*Unauthenticated* — I do not know who you are. Send credentials', tone: 'wa' },
          { k: '403', v: '*Forbidden* — I know who you are. You still cannot have it', tone: 'wa' },
          { k: '404', v: '*Not Found* — also the polite answer when 403 would leak that a resource exists', tone: 'wa' },
          { k: '409', v: '*Conflict* — duplicate email, version mismatch, concurrent edit', tone: 'wa' },
          { k: '422', v: '*Unprocessable* — valid JSON, invalid data. Field-level validation errors', tone: 'wa' },
          { k: '429', v: '*Too Many Requests* — always pair it with a `Retry-After` header', tone: 'wa' },
          { k: '500', v: '*Server Error* — you broke it. Log it, alert on it, never leak the stack trace', tone: 'no' },
          { k: '502 / 504', v: '*Bad Gateway / Timeout* — the thing behind your proxy died or is too slow', tone: 'no' },
          { k: '503', v: '*Unavailable* — overloaded or in maintenance. Retryable, so say so', tone: 'no' },
        ],
      },
    ],
  },

  /* ───────────────────────────── 07 ───────────────────────────── */
  {
    id: 7,
    slug: 'useeffect-mistakes',
    topic: 'React · Hooks',
    format: 'carousel',
    caption: `useEffect is not "run this after render". It is "synchronize this component with something outside React".

Once that clicks, most of your effects delete themselves:

Derived value? Compute it during render.
Reacting to a click? Put it in the handler.
Expensive calculation? useMemo.
Fetching without cleanup? You have a race condition, and the wrong response wins.

Four slides of the mistakes I see in every code review.`,
    hashtags: ['#ReactJS', '#JavaScript', '#Frontend'],
    slides: [
      {
        type: 'cover',
        kicker: 'React · useEffect',
        title: 'useEffect is not\n"run after render".\n*It is synchronization.*',
        sub: 'Read it that way and half of your effects turn out to be plain code in the wrong place.',
        chips: ['deps', 'cleanup', 'race conditions'],
      },
      {
        type: 'duo',
        kicker: 'Mistake 1 · Missing cleanup',
        title: 'The race condition in every fetch tutorial',
        panels: [
          {
            label: 'Last response wins',
            verdict: 'bad',
            code: `useEffect(() => {
  fetch(\`/api/user/\${id}\`)
    .then(r => r.json())
    .then(setUser);
}, [id]);

// id: 1 -> 2 quickly
// If request 1 resolves
// AFTER request 2, you
// render user 1's data
// under user 2's URL.`,
            note: 'Also fires a state update after unmount. Slow network makes this reproducible every time.',
          },
          {
            label: 'Cancel on change',
            verdict: 'good',
            code: `useEffect(() => {
  const ac = new AbortController();

  fetch(\`/api/user/\${id}\`,
        { signal: ac.signal })
    .then(r => r.json())
    .then(setUser)
    .catch(e => {
      if (e.name !== 'AbortError')
        setError(e);
    });

  return () => ac.abort();
}, [id]);`,
            note: 'The cleanup runs before the next effect and on unmount. Stale responses never land.',
          },
        ],
      },
      {
        type: 'duo',
        kicker: 'Mistake 2 · Effects as glue',
        accent: 'v',
        title: 'State that should not be state',
        panels: [
          {
            label: 'Syncing derived state',
            verdict: 'bad',
            code: `const [items, setItems] =
  useState([]);
const [visible, setVisible] =
  useState([]);

useEffect(() => {
  setVisible(
    items.filter(i => !i.done)
  );
}, [items]);

// Two renders per change,
// two sources of truth,
// one guaranteed bug.`,
            note: 'Every effect that only calls setState from other state is a render you are paying for twice.',
          },
          {
            label: 'Derive during render',
            verdict: 'good',
            code: `const [items, setItems] =
  useState([]);

const visible = items
  .filter(i => !i.done);

// Genuinely expensive?
const visible = useMemo(
  () => items.filter(i => !i.done),
  [items]
);`,
            note: 'One source of truth, one render, nothing to keep in sync. This is the fix 80% of the time.',
          },
        ],
      },
      {
        type: 'list',
        kicker: 'The checklist',
        title: 'You probably do not need an effect',
        tight: true,
        items: [
          { mark: '✕', t: 'Transforming data for rendering', d: 'Compute it during render. Wrap in `useMemo` only if the profiler says it is slow.' },
          { mark: '✕', t: 'Handling a user event', d: 'A POST on submit belongs in the submit handler, not in an effect watching a flag.' },
          { mark: '✕', t: 'Resetting state when a prop changes', d: 'Pass a `key` instead. React remounts the component and the state resets for free.' },
          { mark: '✓', t: 'Subscribing to something outside React', d: 'WebSockets, `addEventListener`, timers, third-party widgets. This is what effects are for.' },
          { mark: '✓', t: 'Always return the cleanup', d: 'Unsubscribe, clear the timer, abort the request. Strict Mode double-invokes effects in dev precisely to expose the missing ones.' },
        ],
      },
    ],
  },

  /* ───────────────────────────── 08 ───────────────────────────── */
  {
    id: 8,
    slug: 'n-plus-one',
    topic: 'Backend · ORM',
    format: 'carousel',
    caption: `One endpoint. 101 database queries. Nobody noticed, because it was fast with 10 rows of seed data.

That is the N+1 problem, and every ORM makes it easy to write by accident — lazy loading is doing exactly what it promised, once per row, in a loop.

The fix is one line. Finding it is the skill:
→ log your queries in development
→ if the count scales with the number of results, you have it

Slide 3 has all three fixes.`,
    hashtags: ['#Backend', '#Database', '#NodeJS'],
    slides: [
      {
        type: 'cover',
        kicker: 'Backend · The N+1 problem',
        title: 'One request.\n*101 queries.*',
        sub: 'Lazy loading inside a loop. The most common performance bug in ORM code, and the easiest to miss locally.',
        chips: ['lazy loading', 'eager loading', 'DataLoader'],
      },
      {
        type: 'code',
        kicker: 'The bug',
        title: '1 query for the list + 1 per row',
        lang: 'js',
        size: 'tiny',
        code: `const posts = await Post.findAll({ limit: 100 });   // 1 query

for (const post of posts) {
  post.author = await User.findByPk(post.userId);  // +100 queries
  post.tags   = await post.getTags();              // +100 more
}

// SQL log:
// SELECT * FROM posts LIMIT 100;
// SELECT * FROM users WHERE id = 1;
// SELECT * FROM users WHERE id = 2;
// SELECT * FROM users WHERE id = 3;
// ... 197 more times

// 10 seeded rows in dev  ->  21 queries,  "feels fine"
// 100 rows in production ->  201 queries, 3.4s response`,
        note: 'Each query is fast. The round trips are what kill you — 200 x 15ms of network latency.',
      },
      {
        type: 'trio',
        kicker: 'Three fixes',
        accent: 'v',
        title: 'Pick the one that fits',
        panels: [
          {
            label: 'Eager load',
            num: '1',
            code: `Post.findAll({
  limit: 100,
  include: [
    User,
    Tag
  ]
});

// 1-3 queries
// total`,
            lang: 'js',
            size: 'tiny',
            note: 'ORM level. `include` / `with` / `populate`. First thing to reach for.',
          },
          {
            label: 'Batch by ID',
            num: '2',
            code: `const ids = posts
  .map(p => p.userId);

const users = await
  User.findAll({
    where: {
      id: [...new Set(ids)]
    }
  });

// exactly 2 queries`,
            lang: 'js',
            size: 'tiny',
            note: 'One IN query, then map in memory. Works with any data layer.',
          },
          {
            label: 'DataLoader',
            num: '3',
            code: `const loader =
  new DataLoader(ids =>
    User.findAll({
      where: { id: ids }
    })
  );

await loader.load(
  post.userId
);`,
            lang: 'js',
            size: 'tiny',
            note: 'Collects loads within a tick into one query. The GraphQL answer.',
          },
        ],
      },
    ],
  },

  /* ───────────────────────────── 09 ───────────────────────────── */
  {
    id: 9,
    slug: 'grid-vs-flexbox',
    topic: 'CSS',
    format: 'single',
    caption: `Grid vs Flexbox is not a competition, and you are probably using both on the same page right now.

The line that ends the argument:

Flexbox → the content decides the layout.
Grid → the layout decides where content goes.

Page skeleton, dashboards, anything where you can draw the rows and columns before you know the data? Grid.
Navbars, chip lists, button groups, anything that should wrap and breathe? Flexbox.

Grid for the page. Flexbox for the pieces.`,
    hashtags: ['#CSS', '#Frontend', '#WebDesign'],
    slides: [
      {
        type: 'duo',
        kicker: 'CSS · Grid vs Flexbox',
        title: 'Grid for the page. Flexbox for the pieces.',
        panels: [
          {
            label: 'Flexbox — content-out',
            code: `.toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.spacer { margin-left: auto; }
.grow   { flex: 1 1 200px; }

/* One axis at a time.
   Items size themselves,
   then wrap when they
   run out of room. */`,
            lang: 'css',
            size: 'tiny',
            note: '*Use for:* navbars, button rows, tag lists, card footers, form fields, anything whose width depends on its text.',
          },
          {
            label: 'Grid — layout-in',
            code: `.page {
  display: grid;
  grid-template-columns:
    260px 1fr;
  grid-template-rows:
    64px 1fr auto;
  grid-template-areas:
    "nav  header"
    "nav  main"
    "nav  footer";
  gap: 16px;
}

.sidebar { grid-area: nav; }`,
            lang: 'css',
            size: 'tiny',
            note: '*Use for:* page shells, dashboards, image galleries, pricing tables — two axes at once, and overlap without absolute positioning.',
          },
        ],
      },
    ],
  },

  /* ───────────────────────────── 10 ───────────────────────────── */
  {
    id: 10,
    slug: 'git-lifesavers',
    topic: 'Git',
    format: 'carousel',
    caption: `Nothing in git is really gone. Almost every "I destroyed everything" moment is one reflog away from being fine.

Eight commands that have saved me more times than I can count — plus the four rules that keep you out of trouble in the first place.

git reflog is the one to memorize today. It is your undo history for the entire repository, and it keeps entries for 90 days.

Which one did you learn too late?`,
    hashtags: ['#Git', '#DevTips', '#Programming'],
    slides: [
      {
        type: 'cover',
        kicker: 'Git · Recovery',
        title: 'You did not lose it.\n*It is in the reflog.*',
        sub: 'Eight commands that turn a panic into a two-second fix — and the rules that stop the panic happening.',
        chips: ['reflog', 'reset', 'bisect', 'revert'],
      },
      {
        type: 'rows',
        kicker: 'Undo things',
        title: 'When it goes wrong',
        keyWidth: 400,
        rows: [
          { k: 'git reflog', v: 'Every HEAD you have ever had, for 90 days. `git reset --hard HEAD@{3}` brings it back', tone: 'ok' },
          { k: 'git reset --soft HEAD~1', v: 'Undo the last commit, *keep* the changes staged. The "wrong message" fix' },
          { k: 'git commit --amend', v: 'Rewrite the last commit. Never after pushing to a shared branch', tone: 'wa' },
          { k: 'git restore <file>', v: 'Throw away uncommitted changes in one file. `--staged` to just unstage it' },
          { k: 'git revert <sha>', v: 'A *new* commit that undoes an old one. The safe undo for main', tone: 'ok' },
          { k: 'git stash push -m "wip"', v: 'Park dirty work, switch branches, `git stash pop` to bring it back' },
          { k: 'git cherry-pick <sha>', v: 'Take one commit from another branch. For fixes that landed on the wrong one' },
          { k: 'git bisect start', v: 'Binary search your history for the commit that broke it. 1000 commits = 10 tests', tone: 'bl' },
        ],
      },
      {
        type: 'code',
        kicker: 'The one to memorize',
        accent: 'v',
        title: 'git bisect finds the bad commit for you',
        lang: 'bash',
        size: 'tiny',
        code: `# The bug exists now, but worked in v2.1. Somewhere in 400 commits.

git bisect start
git bisect bad                  # current commit is broken
git bisect good v2.1            # this tag was fine

# Git checks out the midpoint. Test it, then tell git:
git bisect good                 # ...or: git bisect bad
# Repeat ~9 times for 400 commits. Git halves the range each answer.

# 3f2a91c is the first bad commit
#   fix: normalize user input before caching

git bisect reset                # back to where you started

# Have a test that reproduces it? Skip the manual part entirely:
git bisect run npm test`,
        note: 'Nine yes/no answers to find one commit in four hundred. This is the command people regret not learning sooner.',
      },
      {
        type: 'list',
        kicker: 'Rules',
        title: 'Stay out of trouble',
        tight: true,
        items: [
          { mark: '✕', t: 'Never rewrite history on a shared branch', d: 'No rebase, amend or force-push on `main` or anything a teammate has pulled. Their next pull becomes your problem.' },
          { mark: '✓', t: 'If you must force, use --force-with-lease', d: 'It refuses when someone else pushed in the meantime. Plain `--force` silently deletes their work.' },
          { mark: '✓', t: 'Commit small and often', d: 'Small commits make `revert`, `cherry-pick` and `bisect` precise instead of all-or-nothing.' },
          { mark: '✓', t: 'Commit before anything scary', d: 'A rebase, a big merge, a mass rename. A commit is a save point, and the reflog remembers it either way.' },
        ],
      },
    ],
  },

  /* ───────────────────────────── 11 ───────────────────────────── */
  {
    id: 11,
    slug: 'jwt-vs-sessions',
    topic: 'Auth',
    format: 'carousel',
    caption: `"JWT is stateless, so it scales better" is how most auth conversations start, and how most of them go wrong.

Stateless is the feature *and* the bug: you cannot revoke a token you are not tracking. Ban a user at 10:00 and they keep their access until the token expires.

The honest defaults:
→ Normal web app? Sessions. They are simpler and revocation is a DELETE.
→ Short-lived access token + rotating refresh token? Best of both.
→ Either way: httpOnly cookies, never localStorage.

Slide 3 is the one that starts arguments.`,
    hashtags: ['#WebSecurity', '#Backend', '#Authentication'],
    slides: [
      {
        type: 'cover',
        kicker: 'Auth · Sessions vs JWT',
        title: 'JWT or sessions?\n*Wrong question.*',
        sub: 'The real one: can you revoke access in under a second? Everything else follows from the answer.',
        chips: ['stateless', 'revocation', 'httpOnly'],
      },
      {
        type: 'duo',
        kicker: 'The trade-off',
        title: 'What you gain, what you give up',
        panels: [
          {
            label: 'Server sessions',
            num: '1',
            items: [
              { mark: '✓', t: 'Instant revocation', d: 'Delete the row. The next request is logged out.' },
              { mark: '✓', t: 'Tiny cookie', d: 'An opaque ID. Nothing sensitive leaves your server.' },
              { mark: '✓', t: 'Change permissions live', d: 'Roles are read fresh on every request.' },
              { mark: '✕', t: 'A lookup per request', d: 'Redis makes it sub-millisecond. Rarely your bottleneck.' },
              { mark: '✕', t: 'Shared state to run', d: 'Sticky sessions or a shared store across instances.' },
            ],
          },
          {
            label: 'JWT',
            num: '2',
            items: [
              { mark: '✓', t: 'No lookup at all', d: 'Verify the signature and trust the claims.' },
              { mark: '✓', t: 'Crosses service boundaries', d: 'Any service with the public key can verify it.' },
              { mark: '✕', t: 'You cannot un-issue it', d: 'Valid until it expires — unless you keep a denylist, which is state again.' },
              { mark: '✕', t: 'Stale claims', d: 'Demote a user and their old role rides along until expiry.' },
              { mark: '✕', t: 'Bigger, and easy to misuse', d: 'Base64, not encryption. Anyone can read the payload.' },
            ],
          },
        ],
      },
      {
        type: 'list',
        kicker: 'Defaults that hold up',
        accent: 'v',
        title: 'What to actually do',
        tight: true,
        items: [
          { t: 'One app, one database? Use sessions.', d: 'It is less code, revocation is a `DELETE`, and Redis handles the lookup in under a millisecond.' },
          { t: 'Many services? Short access token + refresh token.', d: 'Access token lives 5–15 minutes so a stolen one expires fast. The refresh token is stateful, rotated on use, and revocable.' },
          { mark: '✕', t: 'Never store tokens in localStorage', d: 'Any XSS on your page reads it instantly. `httpOnly` cookies are unreadable from JavaScript by design.' },
          { mark: '✓', t: 'Cookie flags are not optional', d: '`httpOnly` + `Secure` + `SameSite=Lax`. Add a CSRF token if you go with `SameSite=None`.' },
          { mark: '✓', t: 'Detect refresh token reuse', d: 'If an already-rotated refresh token comes back, the token was stolen — kill the whole family and force a re-login.' },
        ],
      },
    ],
  },

  /* ───────────────────────────── 12 ───────────────────────────── */
  {
    id: 12,
    slug: 'core-web-vitals',
    topic: 'Web Performance',
    format: 'carousel',
    caption: `Three numbers decide whether your site feels fast: LCP, INP and CLS.

Not your Lighthouse score. Not your bundle size. These, measured on real users' phones on real networks.

LCP under 2.5s — how long until the main thing shows up.
INP under 200ms — how fast you respond when they tap.
CLS under 0.1 — how much the page jumps around while loading.

Every fix worth doing is in these four slides. Most of them are one line.`,
    hashtags: ['#WebPerf', '#Frontend', '#SEO'],
    slides: [
      {
        type: 'cover',
        kicker: 'Performance · Core Web Vitals',
        title: 'Three numbers.\n*That is the whole\nperformance game.*',
        sub: 'Google ranks on them, users feel them, and almost every fix is smaller than you expect.',
        chips: ['LCP < 2.5s', 'INP < 200ms', 'CLS < 0.1'],
      },
      {
        type: 'rows',
        kicker: 'The metrics',
        title: 'What each one measures',
        keyWidth: 210,
        rows: [
          { k: 'LCP', v: '*Largest Contentful Paint* — when the biggest element (usually the hero image or headline) finishes rendering', tone: 'ok' },
          { k: '→ target', v: 'Under *2.5s* at the 75th percentile of real visits. Over 4s is "poor"', tone: 'ok' },
          { k: 'INP', v: '*Interaction to Next Paint* — from a tap or click to the next frame actually painted. Replaced FID in 2024', tone: 'bl' },
          { k: '→ target', v: 'Under *200ms*. This one is almost always your own JavaScript blocking the main thread', tone: 'bl' },
          { k: 'CLS', v: '*Cumulative Layout Shift* — how much visible content jumps around while the page loads', tone: 'wa' },
          { k: '→ target', v: 'Under *0.1*. The metric behind every mis-tap on a mobile page', tone: 'wa' },
          { k: 'Measure it', v: 'Lighthouse is a lab test. `web-vitals` in production + Chrome UX Report is the truth' },
        ],
      },
      {
        type: 'list',
        kicker: 'Fix LCP',
        title: 'Make the main thing appear sooner',
        tight: true,
        items: [
          { t: 'Preload the hero image', d: '`<link rel="preload" as="image">` plus `fetchpriority="high"` on the img. The single biggest LCP win on most sites.' },
          { t: 'Never lazy-load what is above the fold', d: '`loading="lazy"` on the hero delays the exact element LCP is measuring. Lazy-load below the fold only.' },
          { t: 'Kill render-blocking resources', d: 'Inline the critical CSS, `defer` your scripts, and load fonts with `font-display: swap` + `preconnect`.' },
          { t: 'Serve modern formats at the right size', d: 'AVIF or WebP with a proper `srcset`. A 3000px JPEG on a 390px phone is pure latency.' },
          { t: 'Shorten the server response', d: 'TTFB is inside LCP. CDN, cache the HTML, and stream it if your framework can.' },
        ],
      },
      {
        type: 'list',
        kicker: 'Fix INP + CLS',
        accent: 'v',
        title: 'Stop blocking. Stop jumping.',
        tight: true,
        items: [
          { t: 'Break up long tasks', d: 'Anything over 50ms blocks the tap response. Chunk the work, or `await scheduler.yield()` between pieces.' },
          { t: 'Ship less JavaScript', d: 'Code-split by route, drop the polyfills for browsers you no longer support, and check the bundle before every release.' },
          { t: 'Give feedback before the work', d: 'Paint the pressed state, then do the expensive part. INP measures the *next paint*, not the finished task.' },
          { t: 'Always set width and height on media', d: 'Images, videos, iframes, ads. The browser reserves the box, and nothing below it moves. Or use `aspect-ratio`.' },
          { t: 'Reserve space for anything injected late', d: 'Banners, cookie bars, ads, embeds. A min-height placeholder costs nothing and saves your CLS.' },
        ],
      },
    ],
  },

  /* ───────────────────────────── 13 ───────────────────────────── */
  {
    id: 13,
    slug: 'async-await-mistakes',
    topic: 'JavaScript · Async',
    format: 'carousel',
    caption: `await inside a for-loop is the slowest correct code in JavaScript.

Ten requests, 200ms each. Sequential: 2 seconds. Promise.all: 200ms. Same result, same code length, 10x faster.

And the one that bites hardest: array.forEach with an async callback. It does not wait. Your function returns, the loop is still running, and nothing catches the errors.

Three slides. Two patterns that fix nearly every async bug I review.`,
    hashtags: ['#JavaScript', '#NodeJS', '#WebDev'],
    slides: [
      {
        type: 'cover',
        kicker: 'JavaScript · Async',
        title: 'await in a loop\nis *2 seconds.*\nPromise.all is *200ms.*',
        sub: 'Same result. Same amount of code. The difference is whether you start the work before you wait for it.',
        chips: ['Promise.all', 'allSettled', 'for await'],
      },
      {
        type: 'duo',
        kicker: 'Mistake 1 · Sequential awaits',
        title: 'Waiting for things that do not depend on each other',
        panels: [
          {
            label: 'One at a time',
            verdict: 'bad',
            code: `const users = [];

for (const id of ids) {
  const u = await
    fetchUser(id);   // 200ms
  users.push(u);
}
// 10 ids -> 2000ms

const a = await getProfile();
const b = await getOrders();
const c = await getSettings();
// 3 x 300ms = 900ms`,
            note: 'Each await parks the function until that one request comes back. Nothing else starts.',
          },
          {
            label: 'All at once',
            verdict: 'good',
            code: `const users = await Promise.all(
  ids.map(id => fetchUser(id))
);
// 10 ids -> ~200ms

const [a, b, c] = await
  Promise.all([
    getProfile(),
    getOrders(),
    getSettings(),
  ]);
// ~300ms total`,
            note: '`.map` starts every request immediately; `Promise.all` waits for the slowest. Only when they are independent.',
          },
        ],
      },
      {
        type: 'duo',
        kicker: 'Mistake 2 · Errors that vanish',
        accent: 'v',
        title: 'forEach does not await. Ever.',
        panels: [
          {
            label: 'Silently broken',
            verdict: 'bad',
            code: `// Returns immediately.
// Nothing is saved yet.
items.forEach(async (i) => {
  await save(i);
});
console.log('done!');  // lies

// One rejection kills all
const r = await Promise.all(
  ids.map(fetchUser)
);
// 1 of 50 fails -> you get
// nothing, not 49 results`,
            note: 'forEach ignores the returned promise. Rejections become unhandled and can crash Node.',
          },
          {
            label: 'Explicit',
            verdict: 'good',
            code: `// Need them in order?
for (const i of items) {
  await save(i);
}

// Need every result,
// failures included?
const rs = await
  Promise.allSettled(
    ids.map(fetchUser)
  );

const ok = rs.filter(
  r => r.status === 'fulfilled'
);`,
            note: '`for...of` awaits properly. `allSettled` never rejects — you inspect each outcome yourself.',
          },
        ],
      },
    ],
  },

  /* ───────────────────────────── 14 ───────────────────────────── */
  {
    id: 14,
    slug: 'rest-api-rules',
    topic: 'API Design',
    format: 'single',
    caption: `A good REST API is boring. You can guess the next endpoint without opening the docs.

That is the whole goal. Nouns, not verbs. Plural, always. Status codes that mean what they say. Errors shaped the same way every single time.

Nine rules on the card. The one people skip and regret: paginate from day one. Your /users endpoint is fine with 50 rows and a catastrophe with 500,000.

What is the worst API you have had to integrate with?`,
    hashtags: ['#API', '#Backend', '#WebDev'],
    slides: [
      {
        type: 'list',
        kicker: 'Backend · REST design',
        title: 'Nine rules for an API people can guess',
        cols: 2,
        tight: true,
        items: [
          { t: 'Nouns, not verbs', d: '`POST /users` — not `/createUser`. The HTTP method is already the verb. Resources are things.' },
          { t: 'Plural, consistently', d: '`/users`, `/users/42`, `/users/42/orders`. Pick plural everywhere and never think about it again.' },
          { t: 'Let status codes carry the outcome', d: '`201` + `Location` on create, `204` on delete, `422` for validation. Never `200 {"error": ...}`.' },
          { t: 'Paginate from day one', d: 'Cursor-based (`?limit=50&cursor=...`) beats offset at scale. Retrofitting pagination is a breaking change.' },
          { t: 'Filter, sort and select with query params', d: '`?status=paid&sort=-created_at&fields=id,total`. The path identifies the resource, the query shapes the response.' },
          { t: 'One error shape, everywhere', d: '`{ error: { code, message, details[] } }`. Machine-readable `code`, human `message`, per-field `details`.' },
          { t: 'Version before you need to', d: '`/v1/` in the path. It costs one line today and saves a migration you cannot roll back later.' },
          { t: 'Make writes idempotent', d: 'PUT and DELETE are by definition. Give POST an `Idempotency-Key` header so a retry never double-charges anyone.' },
          { t: 'Rate limit, and say so in headers', d: '`RateLimit-Remaining`, `RateLimit-Reset`, and `Retry-After` on a `429`. Clients can only back off if you tell them how long.' },
        ],
      },
    ],
  },

  /* ───────────────────────────── 15 ───────────────────────────── */
  {
    id: 15,
    slug: 'caching-layers',
    topic: 'Backend · Caching',
    format: 'carousel',
    caption: `The fastest database query is the one you never send.

There are five caching layers between your user and your database, and most apps use exactly one of them. Each layer you add moves work closer to the user and further from your bill.

But: a cache you cannot invalidate is a bug with a TTL. Before you add one, answer three questions —
→ what makes this stale?
→ who clears it?
→ what happens if it is wrong for 60 seconds?

Slide 3 covers the four invalidation patterns.`,
    hashtags: ['#Backend', '#SystemDesign', '#Redis'],
    slides: [
      {
        type: 'cover',
        kicker: 'Backend · Caching',
        title: 'The fastest query\nis *the one you\nnever send.*',
        sub: 'Five layers sit between your user and your database. Most apps use one of them.',
        chips: ['browser', 'CDN', 'Redis', 'the DB itself'],
      },
      {
        type: 'flow',
        kicker: 'The layers',
        title: 'Every stop on the way to the database',
        stepWidth: 250,
        steps: [
          { n: '01', t: 'Browser cache', d: '`Cache-Control: max-age`. Zero network. Free, and the layer people forget to configure' },
          { n: '02', t: 'CDN / edge', d: 'Static assets and cacheable HTML, served from the city your user is in. ~20ms' },
          { n: '03', t: 'Reverse proxy', d: 'Nginx or Varnish in front of your app. Full-page cache for anonymous traffic' },
          { n: '04', t: 'Application cache', d: 'Redis or Memcached. Query results, sessions, computed views. ~1ms' },
          { n: '05', t: 'In-process memory', d: 'A Map in your app. Nanoseconds, but per-instance and gone on restart' },
          { n: '06', t: 'Database', d: 'Its own buffer pool caches hot pages. The last resort, and the expensive one' },
        ],
      },
      {
        type: 'list',
        kicker: 'Invalidation',
        accent: 'v',
        title: 'The hard half',
        tight: true,
        items: [
          { t: 'TTL — expire on a timer', d: 'The simplest thing that works. Pick a staleness you can live with and move on. Add jitter so 10,000 keys do not expire in the same second.' },
          { t: 'Cache-aside — read, miss, fill', d: 'Check the cache, on a miss hit the DB and write it back. The default pattern, and the one your ORM probably does.' },
          { t: 'Write-through — update both', d: 'Write to the DB and the cache in the same operation. Never stale, slightly slower writes, more code to get wrong.' },
          { t: 'stale-while-revalidate', d: 'Serve the stale copy instantly, refresh in the background. Best perceived speed for feeds and dashboards.' },
          { t: 'Version your keys', d: '`user:42:v3`. Bumping the version invalidates everything at once — no scanning, no key patterns, no surprises.' },
        ],
      },
    ],
  },

  /* ───────────────────────────── 16 ───────────────────────────── */
  {
    id: 16,
    slug: 'typescript-tricks',
    topic: 'TypeScript',
    format: 'carousel',
    caption: `If your TypeScript is full of "as", you are not using TypeScript. You are apologizing to it.

Four features that replace almost every cast I see in review:

satisfies → validate a value without widening its type
as const → literal types instead of string
discriminated unions → the compiler proves you handled every case
utility types → stop hand-writing variants of the same interface

The exhaustive switch on slide 3 is the one that turns "I added a new status and forgot a case" into a build error.`,
    hashtags: ['#TypeScript', '#JavaScript', '#WebDev'],
    slides: [
      {
        type: 'cover',
        kicker: 'TypeScript',
        title: 'Every “as” in your\ncode is *a promise\nyou might break.*',
        sub: 'Four features that replace casts with proof — and let the compiler catch the case you forgot.',
        chips: ['satisfies', 'as const', 'discriminated unions'],
      },
      {
        type: 'code',
        kicker: 'Trick 1 + 2',
        title: 'satisfies and as const',
        lang: 'js',
        size: 'tiny',
        code: `// ❌ Annotating widens: theme.colors.brand is string, and a
//    typo in a key sails right through
const config: Config = { colors: { brand: '#22D3EE' }, retries: 3 };

// ✅ satisfies checks the shape but keeps the narrow types
const config = {
  colors: { brand: '#22D3EE' },
  retries: 3,
} satisfies Config;
config.colors.brand;   // '#22D3EE', not string
config.colors.brnd;    // compile error, caught at the typo

// ❌ role is string -> useless for a union
const user = { id: 1, role: 'admin' };

// ✅ as const freezes it into literal types
const user = { id: 1, role: 'admin' } as const;
type Role = typeof user.role;              // 'admin'

const ROLES = ['admin', 'editor', 'viewer'] as const;
type AnyRole = typeof ROLES[number];       // 'admin' | 'editor' | 'viewer'`,
      },
      {
        type: 'code',
        kicker: 'Trick 3',
        accent: 'v',
        title: 'Discriminated unions + exhaustive switch',
        lang: 'js',
        size: 'tiny',
        code: `type State =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: User[] }
  | { status: 'error';   message: string };

function render(s: State) {
  switch (s.status) {
    case 'idle':    return 'Ready';
    case 'loading': return 'Loading…';
    case 'success': return s.data.length + ' users';   // data exists here
    case 'error':   return s.message;                  // message exists here
    default:
      // Add a 5th state and forget a case? This line fails to compile.
      const _never: never = s;
      throw new Error(\`Unhandled: \${JSON.stringify(s)}\`);
  }
}

// No more: state.data?.length ?? state.message ?? 'idk'
// Impossible states are now impossible to represent.`,
      },
      {
        type: 'code',
        kicker: 'Trick 4',
        title: 'Utility types worth memorizing',
        lang: 'js',
        size: 'tiny',
        code: `interface User { id: string; name: string; email: string; passwordHash: string }

type PublicUser   = Omit<User, 'passwordHash'>;        // drop fields
type UserPreview  = Pick<User, 'id' | 'name'>;         // keep fields
type UserPatch    = Partial<Omit<User, 'id'>>;         // all optional, id locked
type UsersById    = Record<string, User>;              // keyed map
type ReadonlyUser = Readonly<User>;                    // no mutation

type Handler = (req: Request) => Promise<Response>;
type Result  = Awaited<ReturnType<Handler>>;           // Response
type Args    = Parameters<Handler>;                    // [Request]

// Template literal types: strings the compiler can actually check
type Lang  = 'en' | 'ar';
type Route = \`/\${Lang}/\${'home' | 'about'}\`;          // '/en/home' | '/ar/about' | ...`,
        note: 'One source of truth. Change `User` once and every derived type follows.',
      },
    ],
  },

  /* ───────────────────────────── 17 ───────────────────────────── */
  {
    id: 17,
    slug: 'backend-security',
    topic: 'Security',
    format: 'carousel',
    caption: `Most breaches are not clever. They are a missing WHERE clause on a user_id, a password stored with MD5, or an .env file committed in 2021.

This is the checklist I run before anything ships. Nothing exotic — just the things that show up in every incident report.

The one people miss most: authorization on every single object lookup. Authentication tells you who they are. It does not tell you that record 8842 is theirs.

Save it. Run it before your next deploy.`,
    hashtags: ['#CyberSecurity', '#Backend', '#WebDev'],
    slides: [
      {
        type: 'cover',
        kicker: 'Security · Backend',
        title: 'Most breaches are\nnot clever.\n*They are a checklist\nnobody ran.*',
        sub: 'Twelve items. None of them exotic. All of them in real incident reports from this year.',
        chips: ['injection', 'auth', 'secrets', 'headers'],
      },
      {
        type: 'list',
        kicker: 'Data & input',
        title: 'Never trust the client',
        tight: true,
        items: [
          { mark: '✓', t: 'Parameterized queries. No exceptions.', d: 'String concatenation into SQL is how injection happens. Your ORM does this — until someone reaches for `raw()`.' },
          { mark: '✓', t: 'Validate on the server, with a schema', d: 'Zod, Joi, Pydantic. Client-side validation is a UX feature; it is not a security control.' },
          { mark: '✓', t: 'Authorize every object lookup', d: '`WHERE id = ? AND user_id = ?`. Authentication says who they are. It does not say record 8842 is theirs. This is IDOR, and it is everywhere.' },
          { mark: '✓', t: 'Escape output, and set a CSP', d: 'Frameworks escape by default — `dangerouslySetInnerHTML` and `v-html` opt out. A CSP is your second line when one slips through.' },
        ],
      },
      {
        type: 'list',
        kicker: 'Auth & secrets',
        accent: 'v',
        title: 'The account layer',
        tight: true,
        items: [
          { mark: '✓', t: 'Hash with bcrypt or argon2id', d: 'Never MD5, SHA-1 or SHA-256. They are fast, and fast is exactly wrong for passwords.' },
          { mark: '✓', t: 'Rate limit login, reset and OTP', d: 'Per IP *and* per account. Without it, a leaked password list walks straight in.' },
          { mark: '✓', t: 'Secrets live in the environment', d: 'Never in the repo. Rotate anything that was ever committed — git history is forever, and bots scan public pushes within seconds.' },
          { mark: '✓', t: 'Generic auth errors', d: '"Invalid email or password." Telling them which one was wrong hands over a list of valid accounts.' },
        ],
      },
      {
        type: 'list',
        kicker: 'Transport & ops',
        title: 'The perimeter',
        tight: true,
        items: [
          { mark: '✓', t: 'HTTPS everywhere, plus HSTS', d: 'Redirect all HTTP, and set `Strict-Transport-Security` so the second visit never even tries port 80.' },
          { mark: '✓', t: 'CORS is an allowlist, not a wildcard', d: '`Access-Control-Allow-Origin: *` with credentials is a config error the browser will refuse anyway.' },
          { mark: '✓', t: 'Least privilege on everything', d: 'The app\'s database user does not need DROP TABLE. The S3 key does not need `*`.' },
          { mark: '✓', t: 'Audit dependencies, and log properly', d: '`npm audit` in CI. Log auth events and failures — never passwords, tokens or full card numbers.' },
        ],
      },
    ],
  },

  /* ───────────────────────────── 18 ───────────────────────────── */
  {
    id: 18,
    slug: 'how-to-debug',
    topic: 'Engineering',
    format: 'single',
    caption: `Debugging is not a talent. It is a procedure, and most people skip step 1.

Reproduce it reliably first. A bug you cannot trigger on demand cannot be verified as fixed — you are just changing code until the symptom hides.

Then: read the actual error. All of it. The line that matters is usually the first one from *your* code, not the top of the stack.

Seven steps on the card. Step 7 is the one juniors skip and seniors never do.`,
    hashtags: ['#Programming', '#DevTips', '#SoftwareEngineering'],
    slides: [
      {
        type: 'list',
        kicker: 'Engineering · Debugging',
        title: 'How to debug anything',
        cols: 2,
        tight: true,
        items: [
          { t: 'Reproduce it reliably', d: 'Exact steps, exact data, exact environment. If you cannot trigger it on demand, you cannot prove you fixed it.' },
          { t: 'Read the actual error. All of it.', d: 'The message, the type, the line, the whole stack. Skim past the framework frames to the first line from your own code.' },
          { t: 'Write down what you believe', d: '"The API returns 200." "This function receives an array." Bugs live where a belief is wrong, and you cannot test a belief you never stated.' },
          { t: 'Bisect the space, do not wander it', d: 'Log or breakpoint at the halfway point. Correct there? The bug is downstream. Wrong? Upstream. Ten steps beat a thousand guesses.' },
          { t: 'Change one thing at a time', d: 'Two changes at once and a passing test tells you nothing about which one mattered — or which one broke something else.' },
          { t: 'Fix the cause, not the symptom', d: 'A `?.` that silences the crash leaves the undefined that caused it. Ask why it was undefined, then keep asking.' },
          { t: 'Write the test that would have caught it', d: 'It should fail before your fix and pass after. This is the step that separates fixing a bug from fixing it permanently.' },
        ],
      },
    ],
  },

  /* ───────────────────────────── 19 ───────────────────────────── */
  {
    id: 19,
    slug: 'docker-for-devs',
    topic: 'DevOps',
    format: 'carousel',
    caption: `"Works on my machine" stopped being an excuse the day multi-stage builds became one file.

Most Node images I see in the wild are 1.2GB. The same app, built properly, is 180MB — and the difference is entirely about what you copy and in which order.

Three things do 90% of the work:
→ build in one stage, ship from a clean one
→ COPY package.json before your source, so the install layer stays cached
→ a .dockerignore that actually excludes node_modules

Full annotated Dockerfile on slide 2.`,
    hashtags: ['#Docker', '#DevOps', '#NodeJS'],
    slides: [
      {
        type: 'cover',
        kicker: 'DevOps · Docker',
        title: '1.2GB image?\n*Your Dockerfile\nis the problem.*',
        sub: 'The same Node app ships in 180MB with a multi-stage build. Here is the whole file, annotated.',
        chips: ['multi-stage', 'layer cache', 'alpine'],
      },
      {
        type: 'code',
        kicker: 'The file',
        title: 'A multi-stage Node build',
        lang: 'docker',
        size: 'tiny',
        code: `# ---------- stage 1: build ----------
FROM node:22-alpine AS build
WORKDIR /app

# Copy manifests FIRST. Source changes will not bust this layer,
# so npm ci only re-runs when your dependencies actually change.
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- stage 2: runtime ----------
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Only the build output crosses over. No source, no toolchain, no dev deps.
COPY --from=build /app/dist ./dist

USER node                      # never run as root
EXPOSE 3000
CMD ["node", "dist/server.js"]`,
      },
      {
        type: 'list',
        kicker: 'Rules',
        accent: 'v',
        title: 'Smaller, faster, safer',
        tight: true,
        items: [
          { t: 'Order layers from least to most changing', d: 'Base image → dependencies → source. Docker reuses every layer up to the first change, so source last means cached installs.' },
          { t: 'Write a .dockerignore', d: '`node_modules`, `.git`, `.env`, `dist`, tests. Without it `COPY . .` ships your local node_modules and your secrets.' },
          { t: 'Never bake secrets into the image', d: '`ENV API_KEY=...` is visible in `docker history` to anyone who pulls it. Pass secrets at runtime or use build secrets.' },
          { t: 'Run as a non-root user', d: 'Node images already ship a `node` user. One line, and a container escape stops being a root escape.' },
          { t: 'Pin your base image', d: '`node:22-alpine` beats `node:latest`. A reproducible build is worth more than an automatic upgrade you did not test.' },
        ],
      },
    ],
  },

  /* ───────────────────────────── 20 ───────────────────────────── */
  {
    id: 20,
    slug: 'junior-to-senior',
    topic: 'Career',
    format: 'carousel',
    caption: `Nobody gets promoted to senior for knowing more frameworks.

The frontend and backend tracks on slides 2 and 3 are the price of entry — real, learnable, roughly a year each if you build things while you learn them.

Slide 4 is what actually moves you up: debugging what you did not write, choosing between two bad options and explaining why, leaving the codebase clearer than you found it.

Juniors ask "how do I build this?"
Seniors ask "should we, and what breaks in six months?"

Save this. Which line are you working on right now?`,
    hashtags: ['#100DaysOfCode', '#WebDevelopment', '#CodeNewbie'],
    slides: [
      {
        type: 'cover',
        kicker: 'Career · Fullstack',
        title: 'Junior → Senior.\n*Not a framework list.*',
        sub: 'Two tracks you can finish in a year each — and the third thing, which is what the title is actually for.',
        chips: ['frontend', 'backend', 'judgement'],
      },
      {
        type: 'list',
        kicker: 'Track 1',
        title: 'Frontend, in order',
        tight: true,
        items: [
          { t: 'HTML that means something + CSS layout', d: 'Semantic elements, accessibility basics, flexbox, grid, and responsive design without a framework holding your hand.' },
          { t: 'JavaScript properly', d: 'Closures, the event loop, promises, `this`, modules, immutability. The framework is easy once this is not.' },
          { t: 'One framework, deeply', d: 'React, Vue or Svelte — pick one. Component state, data flow, routing, forms, and why it re-renders.' },
          { t: 'TypeScript', d: 'Not optional at this point. Unions, generics, and typing an API response end to end.' },
          { t: 'The browser as a platform', d: 'DevTools, the network tab, Core Web Vitals, caching, bundlers, and what actually ships to the user.' },
        ],
      },
      {
        type: 'list',
        kicker: 'Track 2',
        accent: 'v',
        title: 'Backend, in order',
        tight: true,
        items: [
          { t: 'HTTP and one server language', d: 'Methods, status codes, headers, cookies. Then Node, Python, Go or PHP — the language matters far less than the fluency.' },
          { t: 'SQL, beyond SELECT *', d: 'Joins, indexes, transactions, normalization, and reading an `EXPLAIN` plan. This one compounds for your whole career.' },
          { t: 'Auth and security', d: 'Sessions vs tokens, hashing, OWASP Top 10, rate limiting. Get this wrong once and it is the only thing anyone remembers.' },
          { t: 'Caching, queues and background jobs', d: 'Redis, a job queue, and knowing what must happen now versus what can happen in thirty seconds.' },
          { t: 'Ship it and watch it', d: 'Docker, CI/CD, logs, metrics, alerts. Code that nobody can deploy or debug at 3am is not finished.' },
        ],
      },
      {
        type: 'list',
        kicker: 'The actual gap',
        title: 'What makes you senior',
        tight: true,
        items: [
          { t: 'Debugging code you did not write', d: 'Dropping into an unfamiliar 200k-line codebase and finding the bug in an afternoon. The single most valuable skill on this list.' },
          { t: 'Reading more than you write', d: 'Seniors read the library source, the RFC, the migration guide. Juniors read the Stack Overflow answer.' },
          { t: 'Choosing between two bad options', d: 'Everything is a trade-off: speed vs correctness, simple vs flexible, now vs later. Seniors name the cost out loud before choosing.' },
          { t: 'Writing so the next person understands', d: 'Clear names, small functions, a PR description that explains *why*. Your code is read far more often than it is run.' },
          { t: 'Owning the outcome, not the ticket', d: 'You noticed the edge case, flagged the risk, wrote the test, checked the dashboard after deploy. Nobody had to ask.' },
        ],
      },
    ],
  },
];
