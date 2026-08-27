# 20 posts for X — captions + image order

Handle on every image: **@yourhandle** — change it in `src/theme.mjs`, then run `node x-posts/src/build.mjs` to re-render all of them.

Copy the caption as-is, then attach that post's images **in the listed order**.
X allows at most 4 images per post, so no post here exceeds 4.

---

## 01 · CSS · Layout

**Format:** carousel, 3 images (1200×1200)

**Caption**

```
"Center a div" is a running joke — but only because most devs memorize one way and then fight the layout with the other two.

There are three. That's it:

Flexbox — one axis, content-driven boxes.
Grid — place-items: center. Two lines, done.
Absolute — overlays that must ignore document flow.

Pick by what the layout is, not by what you typed last time.

Which one is your default?

#CSS #WebDev #Frontend
```

**Images**

1. `x-posts/images/01-center-a-div/01-1.png`
2. `x-posts/images/01-center-a-div/01-2.png`
3. `x-posts/images/01-center-a-div/01-3.png`

---

## 02 · JavaScript

**Format:** single image (1600×900)

**Caption**

```
Most for-loops in a JS codebase are a method call in disguise.

Learn these eight and your code stops describing *how* it iterates and starts describing *what* it wants:

map → transform
filter → narrow
reduce → collapse
find → first match
some / every → questions
flatMap → transform + flatten
sort → order (mutates!)

Save the cheat sheet. Which one took you longest to click with? Mine was reduce.

#JavaScript #WebDev #100DaysOfCode
```

**Images**

1. `x-posts/images/02-array-methods/02-1.png`

---

## 03 · Fullstack

**Format:** carousel, 4 images (1200×1200)

**Caption**

```
"What happens when you type a URL and hit Enter?"

The interview question that never dies — because a good answer touches DNS, TCP, TLS, HTTP, your backend, your database and the browser's render pipeline in about 90 seconds.

Here is the whole path, in four slides, with nothing hand-waved.

Bookmark it before your next interview.

#WebDevelopment #Backend #InterviewPrep
```

**Images**

1. `x-posts/images/03-url-to-pixels/03-1.png`
2. `x-posts/images/03-url-to-pixels/03-2.png`
3. `x-posts/images/03-url-to-pixels/03-3.png`
4. `x-posts/images/03-url-to-pixels/03-4.png`

---

## 04 · React

**Format:** carousel, 4 images (1200×1200)

**Caption**

```
Your React component re-renders more than you think — and 90% of the time it is one of four reasons.

The one that catches everyone: passing a fresh object, array or arrow function as a prop. It is a new reference on every render, so memo() compares it and shrugs.

Fix the reference, not the symptom. And before you reach for useMemo everywhere: a re-render is not automatically a bug. Measure with the Profiler first.

What is your worst re-render story?

#ReactJS #Frontend #WebPerf
```

**Images**

1. `x-posts/images/04-react-rerenders/04-1.png`
2. `x-posts/images/04-react-rerenders/04-2.png`
3. `x-posts/images/04-react-rerenders/04-3.png`
4. `x-posts/images/04-react-rerenders/04-4.png`

---

## 05 · Databases

**Format:** carousel, 3 images (1200×1200)

**Caption**

```
Your API is not slow. Your query is doing a sequential scan over 4 million rows.

EXPLAIN ANALYZE tells you in about two seconds. Most backend devs never run it.

Read the plan, add the right index, watch a 2.3s endpoint become 4ms. It is the highest-leverage thing you can learn about databases — and it takes an afternoon.

Slide 3 is the index rules people get wrong most often.

#SQL #PostgreSQL #Backend
```

**Images**

1. `x-posts/images/05-slow-sql/05-1.png`
2. `x-posts/images/05-slow-sql/05-2.png`
3. `x-posts/images/05-slow-sql/05-3.png`

---

## 06 · Backend · HTTP

**Format:** single image (1600×900)

**Caption**

```
Returning 200 with {"error": "not found"} in the body is how you make every client of your API worse.

Status codes are the contract. Browsers cache on them, proxies retry on them, monitoring alerts on them, and client libraries branch on them — all before anyone parses your JSON.

The ones worth knowing cold are on the card. Two people forget constantly:

401 = I don't know who you are.
403 = I know exactly who you are, and no.

Save it.

#Backend #API #WebDev
```

**Images**

1. `x-posts/images/06-http-status-codes/06-1.png`

---

## 07 · React · Hooks

**Format:** carousel, 4 images (1200×1200)

**Caption**

```
useEffect is not "run this after render". It is "synchronize this component with something outside React".

Once that clicks, most of your effects delete themselves:

Derived value? Compute it during render.
Reacting to a click? Put it in the handler.
Expensive calculation? useMemo.
Fetching without cleanup? You have a race condition, and the wrong response wins.

Four slides of the mistakes I see in every code review.

#ReactJS #JavaScript #Frontend
```

**Images**

1. `x-posts/images/07-useeffect-mistakes/07-1.png`
2. `x-posts/images/07-useeffect-mistakes/07-2.png`
3. `x-posts/images/07-useeffect-mistakes/07-3.png`
4. `x-posts/images/07-useeffect-mistakes/07-4.png`

---

## 08 · Backend · ORM

**Format:** carousel, 3 images (1200×1200)

**Caption**

```
One endpoint. 101 database queries. Nobody noticed, because it was fast with 10 rows of seed data.

That is the N+1 problem, and every ORM makes it easy to write by accident — lazy loading is doing exactly what it promised, once per row, in a loop.

The fix is one line. Finding it is the skill:
→ log your queries in development
→ if the count scales with the number of results, you have it

Slide 3 has all three fixes.

#Backend #Database #NodeJS
```

**Images**

1. `x-posts/images/08-n-plus-one/08-1.png`
2. `x-posts/images/08-n-plus-one/08-2.png`
3. `x-posts/images/08-n-plus-one/08-3.png`

---

## 09 · CSS

**Format:** single image (1600×900)

**Caption**

```
Grid vs Flexbox is not a competition, and you are probably using both on the same page right now.

The line that ends the argument:

Flexbox → the content decides the layout.
Grid → the layout decides where content goes.

Page skeleton, dashboards, anything where you can draw the rows and columns before you know the data? Grid.
Navbars, chip lists, button groups, anything that should wrap and breathe? Flexbox.

Grid for the page. Flexbox for the pieces.

#CSS #Frontend #WebDesign
```

**Images**

1. `x-posts/images/09-grid-vs-flexbox/09-1.png`

---

## 10 · Git

**Format:** carousel, 4 images (1200×1200)

**Caption**

```
Nothing in git is really gone. Almost every "I destroyed everything" moment is one reflog away from being fine.

Eight commands that have saved me more times than I can count — plus the four rules that keep you out of trouble in the first place.

git reflog is the one to memorize today. It is your undo history for the entire repository, and it keeps entries for 90 days.

Which one did you learn too late?

#Git #DevTips #Programming
```

**Images**

1. `x-posts/images/10-git-lifesavers/10-1.png`
2. `x-posts/images/10-git-lifesavers/10-2.png`
3. `x-posts/images/10-git-lifesavers/10-3.png`
4. `x-posts/images/10-git-lifesavers/10-4.png`

---

## 11 · Auth

**Format:** carousel, 3 images (1200×1200)

**Caption**

```
"JWT is stateless, so it scales better" is how most auth conversations start, and how most of them go wrong.

Stateless is the feature *and* the bug: you cannot revoke a token you are not tracking. Ban a user at 10:00 and they keep their access until the token expires.

The honest defaults:
→ Normal web app? Sessions. They are simpler and revocation is a DELETE.
→ Short-lived access token + rotating refresh token? Best of both.
→ Either way: httpOnly cookies, never localStorage.

Slide 3 is the one that starts arguments.

#WebSecurity #Backend #Authentication
```

**Images**

1. `x-posts/images/11-jwt-vs-sessions/11-1.png`
2. `x-posts/images/11-jwt-vs-sessions/11-2.png`
3. `x-posts/images/11-jwt-vs-sessions/11-3.png`

---

## 12 · Web Performance

**Format:** carousel, 4 images (1200×1200)

**Caption**

```
Three numbers decide whether your site feels fast: LCP, INP and CLS.

Not your Lighthouse score. Not your bundle size. These, measured on real users' phones on real networks.

LCP under 2.5s — how long until the main thing shows up.
INP under 200ms — how fast you respond when they tap.
CLS under 0.1 — how much the page jumps around while loading.

Every fix worth doing is in these four slides. Most of them are one line.

#WebPerf #Frontend #SEO
```

**Images**

1. `x-posts/images/12-core-web-vitals/12-1.png`
2. `x-posts/images/12-core-web-vitals/12-2.png`
3. `x-posts/images/12-core-web-vitals/12-3.png`
4. `x-posts/images/12-core-web-vitals/12-4.png`

---

## 13 · JavaScript · Async

**Format:** carousel, 3 images (1200×1200)

**Caption**

```
await inside a for-loop is the slowest correct code in JavaScript.

Ten requests, 200ms each. Sequential: 2 seconds. Promise.all: 200ms. Same result, same code length, 10x faster.

And the one that bites hardest: array.forEach with an async callback. It does not wait. Your function returns, the loop is still running, and nothing catches the errors.

Three slides. Two patterns that fix nearly every async bug I review.

#JavaScript #NodeJS #WebDev
```

**Images**

1. `x-posts/images/13-async-await-mistakes/13-1.png`
2. `x-posts/images/13-async-await-mistakes/13-2.png`
3. `x-posts/images/13-async-await-mistakes/13-3.png`

---

## 14 · API Design

**Format:** single image (1600×900)

**Caption**

```
A good REST API is boring. You can guess the next endpoint without opening the docs.

That is the whole goal. Nouns, not verbs. Plural, always. Status codes that mean what they say. Errors shaped the same way every single time.

Nine rules on the card. The one people skip and regret: paginate from day one. Your /users endpoint is fine with 50 rows and a catastrophe with 500,000.

What is the worst API you have had to integrate with?

#API #Backend #WebDev
```

**Images**

1. `x-posts/images/14-rest-api-rules/14-1.png`

---

## 15 · Backend · Caching

**Format:** carousel, 3 images (1200×1200)

**Caption**

```
The fastest database query is the one you never send.

There are five caching layers between your user and your database, and most apps use exactly one of them. Each layer you add moves work closer to the user and further from your bill.

But: a cache you cannot invalidate is a bug with a TTL. Before you add one, answer three questions —
→ what makes this stale?
→ who clears it?
→ what happens if it is wrong for 60 seconds?

Slide 3 covers the four invalidation patterns.

#Backend #SystemDesign #Redis
```

**Images**

1. `x-posts/images/15-caching-layers/15-1.png`
2. `x-posts/images/15-caching-layers/15-2.png`
3. `x-posts/images/15-caching-layers/15-3.png`

---

## 16 · TypeScript

**Format:** carousel, 4 images (1200×1200)

**Caption**

```
If your TypeScript is full of "as", you are not using TypeScript. You are apologizing to it.

Four features that replace almost every cast I see in review:

satisfies → validate a value without widening its type
as const → literal types instead of string
discriminated unions → the compiler proves you handled every case
utility types → stop hand-writing variants of the same interface

The exhaustive switch on slide 3 is the one that turns "I added a new status and forgot a case" into a build error.

#TypeScript #JavaScript #WebDev
```

**Images**

1. `x-posts/images/16-typescript-tricks/16-1.png`
2. `x-posts/images/16-typescript-tricks/16-2.png`
3. `x-posts/images/16-typescript-tricks/16-3.png`
4. `x-posts/images/16-typescript-tricks/16-4.png`

---

## 17 · Security

**Format:** carousel, 4 images (1200×1200)

**Caption**

```
Most breaches are not clever. They are a missing WHERE clause on a user_id, a password stored with MD5, or an .env file committed in 2021.

This is the checklist I run before anything ships. Nothing exotic — just the things that show up in every incident report.

The one people miss most: authorization on every single object lookup. Authentication tells you who they are. It does not tell you that record 8842 is theirs.

Save it. Run it before your next deploy.

#CyberSecurity #Backend #WebDev
```

**Images**

1. `x-posts/images/17-backend-security/17-1.png`
2. `x-posts/images/17-backend-security/17-2.png`
3. `x-posts/images/17-backend-security/17-3.png`
4. `x-posts/images/17-backend-security/17-4.png`

---

## 18 · Engineering

**Format:** single image (1600×900)

**Caption**

```
Debugging is not a talent. It is a procedure, and most people skip step 1.

Reproduce it reliably first. A bug you cannot trigger on demand cannot be verified as fixed — you are just changing code until the symptom hides.

Then: read the actual error. All of it. The line that matters is usually the first one from *your* code, not the top of the stack.

Seven steps on the card. Step 7 is the one juniors skip and seniors never do.

#Programming #DevTips #SoftwareEngineering
```

**Images**

1. `x-posts/images/18-how-to-debug/18-1.png`

---

## 19 · DevOps

**Format:** carousel, 3 images (1200×1200)

**Caption**

```
"Works on my machine" stopped being an excuse the day multi-stage builds became one file.

Most Node images I see in the wild are 1.2GB. The same app, built properly, is 180MB — and the difference is entirely about what you copy and in which order.

Three things do 90% of the work:
→ build in one stage, ship from a clean one
→ COPY package.json before your source, so the install layer stays cached
→ a .dockerignore that actually excludes node_modules

Full annotated Dockerfile on slide 2.

#Docker #DevOps #NodeJS
```

**Images**

1. `x-posts/images/19-docker-for-devs/19-1.png`
2. `x-posts/images/19-docker-for-devs/19-2.png`
3. `x-posts/images/19-docker-for-devs/19-3.png`

---

## 20 · Career

**Format:** carousel, 4 images (1200×1200)

**Caption**

```
Nobody gets promoted to senior for knowing more frameworks.

The frontend and backend tracks on slides 2 and 3 are the price of entry — real, learnable, roughly a year each if you build things while you learn them.

Slide 4 is what actually moves you up: debugging what you did not write, choosing between two bad options and explaining why, leaving the codebase clearer than you found it.

Juniors ask "how do I build this?"
Seniors ask "should we, and what breaks in six months?"

Save this. Which line are you working on right now?

#100DaysOfCode #WebDevelopment #CodeNewbie
```

**Images**

1. `x-posts/images/20-junior-to-senior/20-1.png`
2. `x-posts/images/20-junior-to-senior/20-2.png`
3. `x-posts/images/20-junior-to-senior/20-3.png`
4. `x-posts/images/20-junior-to-senior/20-4.png`

---
