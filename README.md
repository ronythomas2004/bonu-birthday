# Happy Birthday, Boni 🩵

A password-locked birthday website made for Boniface.
Enter **8998** to unlock it.

---

## What's inside

| Section | What it does |
|---|---|
| Lock screen | PIN keypad (8998), shake on wrong entry, confetti on unlock |
| Hero | 3D-tilt title, floating balloons, scroll cue |
| Stats strip | 2 years · 46 photos · ∞ inside jokes |
| Our story | 5-item friendship timeline |
| Birthday message | Tilted note-card with tape |
| 25 Reasons | Flip-card grid — tap to reveal each reason |
| Make a wish | Flickering candle, click to blow out, wish revealed |
| Quotes | Auto-rotating friendship quotes |
| Growing Up | 36 childhood photos of Boni, polaroid gallery |
| Our Journey | 10 photos of you two + a personal note card |
| Birthday card | Canvas-drawn card, one-click PNG download |
| Music toggle | Fixed bottom-right button, plays song.mp3 on loop |

---

## Before you deploy — personalise it

### 1. Add your photos

**Childhood photos (36)** — photos of her before you knew her:
- Put them in `photos/childhood/`
- Name them `childhood1.jpg`, `childhood2.jpg` ... `childhood36.jpg`
- Delete the placeholder `.svg` files in that folder

**Your journey photos (10)** — photos of you two together:
- Put them in `photos/journey/`
- Name them `journey1.jpg`, `journey2.jpg` ... `journey10.jpg`
- Delete the placeholder `.svg` files in that folder

Then open `script.js`, find the `CONFIG` block at the top, and change:
```js
photoExtension: "svg",
```
to:
```js
photoExtension: "jpg",
```
(or `"png"` — whatever format your photos are in)

---

### 2. Add music

Drop an MP3 file into the `music/` folder, named **`song.mp3`**.
See `music/README.md` for tips on where to get one.

---

### 3. Edit the "Our Journey" message

Open `index.html`, search for `id="journeyMessage"`, and rewrite the paragraph with your real message for Boni.

---

### 4. Edit the timeline

Open `index.html`, search for `class="story-section"`. Each `timeline-item` has a date and a paragraph — swap them for your real memories.

---

### 5. Edit the 25 reasons (optional)

Open `script.js`, find `CONFIG.reasons` — it's an array of 25 short strings. Replace any of them with things specific to Boni.

---

### 6. Edit the birthday card text (optional)

Open `script.js`, find `CONFIG.cardMessage`. Change the two lines to whatever you want printed on the downloadable card.

---

## Deploy — GitHub + Netlify (both free)

### Step 1: Push to GitHub

```bash
cd boni-birthday
git init
git add .
git commit -m "Boni's birthday site"
```

Create a new empty repo on [github.com/new](https://github.com/new) (no README there), then:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Netlify (free tier)

1. Go to [app.netlify.com](https://app.netlify.com) — sign in with GitHub.
2. Click **Add new site → Import an existing project → GitHub**.
3. Select your repository.
4. Build settings — leave **everything blank** (no build command, no publish directory, or set it to `.`).
5. Click **Deploy site**.

Done — Netlify gives you a `.netlify.app` URL in under a minute.
Rename it under **Site settings → Change site name** e.g. `boni-birthday.netlify.app`.

Every `git push` redeploys automatically.

---

## File structure

```
boni-birthday/
├── index.html              ← all page structure
├── styles.css              ← all styling and animations
├── script.js               ← all interactivity + CONFIG
├── music/
│   ├── song.mp3            ← ADD YOUR SONG HERE
│   └── README.md
├── photos/
│   ├── childhood/          ← 36 childhood photos (childhood1.jpg ...)
│   └── journey/            ← 10 "us" photos (journey1.jpg ...)
└── README.md
```

---

Happy birthday, Boni. 🎂
