/* =========================================================
   CONFIG — edit these to personalise / swap in real photos
   ========================================================= */
const CONFIG = {
  password: "8998",
  photoFolder: "photos",
  photoExtension: "jpg",

  childhood: {
    count: 42,
    folder: "photos/childhood",
    prefix: "Childhood",
    ext: (i) => i === 1 ? "jpeg" : "jpg"
  },

  journey: {
    count: 10,
    folder: "photos/journey",
    prefix: "journey",
    ext: (i) => (i === 1 || i === 2) ? "jpeg" : "jpg"
  },

  captions: [
    "after the train journey", "our 1st meetup aftr", "Hehe..", "that anointing day",
    "the Chosen",
    "Wowww<br>My smile starts from here",
    "aftr that iconic diori ride", "hmmmm",
    "that unforgettable beach day", "my fav pic of us 💛🩵"
  ],
  childhoodCaptions: [
    "The iconic one", "Korch attitude avam", "Cutee", "That smilee",
    "Hmmm", "Looking Woww", "😁👍", "iconic even then",
    "that Smilee", "hehe moment", "Bonu with pottu", "Eeee",
    "happie christmass", "No comments", "trying to be the nalla kutty", "Smileeeeee",
    "short hair", "unfiltered joy", "cutest archive pic", "natural legend",
    "early days", "sweet famm", "how can u bring up that iconic smile", "trophy moment",
    "🌝💚", "sweet memory", "best energy", "mischievous look",
    "attention attention", "childhood magic", "again attention", "that smile..",
    "unstoppable Boni", "Pookiee🌸", "Saree look🫠", "Oliche kandee😁",
    "oru ride poyaloo..", "😁", "feeling cutee", "the flower girll",
    "ennekond njn thanne thottu", "pookiee again🌻"
  ],

  /* Custom messages for each of the 42 childhood photos */
  childhoodMessages: [
    "How can't i start this without this pic",
    "Korch attitude avam",
    "Samshayam onnum illalo le",
    "Uff siree... aa chiri",
    "Ivdem kurach pucham",
    "Bharat mata ki jey.",
    "A little thumbs up.",
    "Already iconic",
    "Look at that smile! Honestly hasn't changed a bit. Wow..Cute smile",
    "Hehe",
    "Wow...Bonu with pottu..looking cute",
    "Eeeee.",
    "Again with pottu n that cuteness",
    "That innocent look",
    "Uff..look at her ..siree",
    "Look at her ..just look at her",
    "Short hairrr... cute.. btw don't think of cutting it",
    "Unfiltered joy",
    "The cutest photo in the entire archive...Yeeyy",
    "Attitude itt nikam..with cuteness🫣😂",
    "That excitment to go to school...",
    "Living her best life as a kid.",
    "The main character since day one.. Aa Expression",
    "Happiness seeing litle bro",
    "Korch nirbandhichitt aanelum aa chiri must",
    "Sweet childhood memories.",
    "Always bringing the best energy.",
    "Look at that mischievous look in her eyes!",
    "Timeless Boni memory.. Attention",
    "Pure childhood magic.",
    "Another iconic childhood moment...Attention..stand at ease",
    "Mudi pinni ketti..wow",
    "The happie famm",
    "Pookie Bonuu😁",
    "OMGG... The saree look🫠",
    "That olinj nottam😁",
    "Bulletil oru ride aayalo",
    "Looks like Saint Agnes🫣... haven't said that yet right.. that smile..cute btw😁",
    "Feeling cute...",
    "Mlueeee.. And that vdo🌝",
    "Sho enne kanan nth lookaale😁...Enich thanne vayya😍",
    "The expected unexpected one..💛"
  ],

  /* Custom messages for each of the 10 journey photos of the two of you */
  journeyMessages: [
    "From the day we met.. with the excitemet to know each other 🩵",
    "That day when u came to see with that much excitement on your face",
    "Do u remeber how u left home to see me?",
    "ahh...Francisca in btwn",
    "That Bonu who showed up for Chosen with that much excitement.",
    "From here.. My smile starts.. see the pics aftr and before",
    "Wow.. that long diori ride",
    "hmm.. atleast this pic from that day",
    "hehe..the beach day and the bus journey aftr..wow",
    "The latest and my fav.. 💛🩵"
  ],
  reasons: [
    "You remember the small stuff nobody else does.",
    "You brought smile to my face",
    "You always tell me the truth, even when it's easier not to.",
    "Whenever I've needed someone to listen, guide, or stand by me, you've been right there without hesitation.",
    "You always hear my blah blah blahh.",
    "You celebrate my wins like they're yours.",
    "You call instead of just texting when it actually matters.",
    "You give the best advice, even the advice I don't want to hear.",
    "You've seen me at my worst and stayed anyway.",
    "You make ordinary days feel like something.",
    "You never let me spiral alone.",
    "You're the first person I want to tell good news to.",
    "You make friendship feel effortless.",
    "You still laugh at our oldest inside jokes.",
    "You'd drop everything if I actually needed you to.",
    "You make me a better, calmer version of myself.",
    "You just get it, without me having to explain.",
    "You're you. That's genuinely the whole reason."
  ],
  quotes: [
    "“A best friend is the one who brings out the best in you.”",
    "“Friendship isn't a big thing, it's a million little things.”",
    "“Good friends are like stars - you don't always see them, but you know they're there.”",
    "“We'll be friends until we're old and senile. Then we'll be new friends.”"
  ],
  wishes: [
    "May your year be filled with spontaneous trips, endless coffee, and zero unread stress.",
    "I wish for all your biggest dreams to feel closer and more achievable than ever before.",
    "May you always have a reason to laugh until your cheeks hurt.",
    "Wishing you endless sunny days, cozy nights, and memories you'll treasure forever.",
    "May this new chapter bring you the peace, success, and pure joy you deserve.",
    "I wish for you to always know how deeply loved and appreciated you are.",
    "May every goal you set this year turn into your next proudest victory.",
    "Wishing you a year of good health, warm smiles, and endless laughter with your favorite people."
  ],
  cardMessage: "Two years of friendship and counting.\nHope your day is as wonderful as you are."
};

/* =========================================================
   WEB AUDIO API SOUND SYNTHESIZER (No external files needed)
   ========================================================= */
const SoundEngine = (function () {
  let ctx = null;
  let enabled = true;

  function init() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) ctx = new AudioCtx();
    }
    if (ctx && ctx.state === "suspended") {
      ctx.resume();
    }
  }

  function playKeyChime(freq = 440) {
    if (!enabled) return;
    init();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) { }
  }

  function playUnlockFanfare() {
    if (!enabled) return;
    init();
    if (!ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        try {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          gain.gain.setValueAtTime(0.12, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.4);
        } catch (e) { }
      }, idx * 90);
    });
  }

  function playFlipSound() {
    if (!enabled) return;
    init();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(640, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch (e) { }
  }

  function playBlowPuff() {
    if (!enabled) return;
    init();
    if (!ctx) return;
    try {
      // Noise puff
      const bufferSize = ctx.sampleRate * 0.25;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(800, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.25);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();
    } catch (e) { }
  }

  function playGiftPop() {
    if (!enabled) return;
    init();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(150, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) { }
  }

  function toggleSound() {
    enabled = !enabled;
    return enabled;
  }

  return {
    init,
    playKeyChime,
    playUnlockFanfare,
    playFlipSound,
    playBlowPuff,
    playGiftPop,
    toggleSound,
    isEnabled: () => enabled
  };
})();

/* =========================================================
   CURSOR PARTICLE OVERLAY (Floating Sparkles & Hearts)
   ========================================================= */
(function initParticleTrail() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let width = window.innerWidth;
  let height = window.innerHeight;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  function addParticle(x, y) {
    const symbols = ["✨", "🩵", "⭐", "💫", "🌸"];
    particles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.8) * 1.5 - 0.5,
      size: Math.random() * 12 + 10,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      life: 1,
      decay: Math.random() * 0.02 + 0.015
    });
  }

  window.addEventListener("mousemove", (e) => {
    if (Math.random() < 0.35) addParticle(e.clientX, e.clientY);
  });

  window.addEventListener("touchmove", (e) => {
    if (e.touches.length > 0 && Math.random() < 0.35) {
      addParticle(e.touches[0].clientX, e.touches[0].clientY);
    }
  });

  function render() {
    ctx.clearRect(0, 0, width, height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.font = `${p.size}px serif`;
      ctx.fillText(p.symbol, p.x, p.y);
      ctx.restore();
    }
    requestAnimationFrame(render);
  }
  render();
})();

/* =========================================================
   LIVE FRIENDSHIP COUNTER
   ========================================================= */
(function initFriendshipTimer() {
  const startDate = new Date(2024, 7, 2); // 2 years friendship baseline
  const daysEl = document.getElementById("timerDays");
  const hoursEl = document.getElementById("timerHours");
  const minsEl = document.getElementById("timerMins");
  const secsEl = document.getElementById("timerSecs");

  if (!daysEl) return;

  function update() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    daysEl.textContent = days;
    hoursEl.textContent = String(hours).padStart(2, "0");
    minsEl.textContent = String(mins).padStart(2, "0");
    secsEl.textContent = String(secs).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
})();

/* =========================================================
   LOCK SCREEN
   ========================================================= */
(function initLock() {
  const lockScreen = document.getElementById("lockScreen");
  const mainSite = document.getElementById("mainSite");
  const pinInput = document.getElementById("pinInput");
  const dots = [...document.querySelectorAll("#pinDots .dot")];
  const keypad = document.getElementById("keypad");
  const keyDel = document.getElementById("keyDel");
  const lockIcon = document.getElementById("lockIcon");
  const lockError = document.getElementById("lockError");

  let entered = "";

  function renderDots() {
    dots.forEach((dot, i) => dot.classList.toggle("filled", i < entered.length));
  }

  function showError() {
    lockError.classList.add("show");
    lockIcon.classList.add("shake");
    setTimeout(() => lockIcon.classList.remove("shake"), 500);
    setTimeout(() => {
      entered = "";
      renderDots();
    }, 200);
  }

  function tryUnlock() {
    if (entered.length !== 4) return;
    if (entered === CONFIG.password) {
      lockError.classList.remove("show");
      SoundEngine.playUnlockFanfare();
      unlock();
    } else {
      showError();
    }
  }

  function unlock() {
    lockScreen.classList.add("unlocking");
    setTimeout(() => {
      lockScreen.remove();
      mainSite.hidden = false;
      document.body.style.overflow = "";
      launchConfetti();
      initRevealAnimations();
      initTilt();
      drawBirthdayCard("classic");
      const audioControls = document.getElementById("audioControls");
      if (audioControls) audioControls.hidden = false;
    }, 850);
  }

  function addDigit(d) {
    if (entered.length >= 4) return;
    SoundEngine.init(); // prime AudioContext on first gesture
    entered += d;
    renderDots();
    SoundEngine.playKeyChime(300 + entered.length * 100);
    lockError.classList.remove("show");
    if (entered.length === 4) setTimeout(tryUnlock, 180);
  }

  function removeDigit() {
    if (entered.length === 0) return;
    entered = entered.slice(0, -1);
    renderDots();
    SoundEngine.playKeyChime(250);
  }

  keypad.addEventListener("click", (e) => {
    const btn = e.target.closest(".key");
    if (!btn || btn.disabled) return;
    if (btn === keyDel) {
      removeDigit();
    } else {
      addDigit(btn.dataset.key);
    }
  });

  if (pinInput) pinInput.focus();
  document.addEventListener("keydown", (e) => {
    if (mainSite && !mainSite.hidden) return;
    if (/^[0-9]$/.test(e.key)) addDigit(e.key);
    else if (e.key === "Backspace") removeDigit();
  });

  document.body.style.overflow = "hidden";
})();

/* =========================================================
   CONFETTI (Canvas Burst)
   ========================================================= */
function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;

  function resize() {
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();

  const colors = ["#A3D8F4", "#6DB9E8", "#3A83B7", "#F5C662", "#FFFFFF", "#F8BBD0"];
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const count = prefersReducedMotion ? 0 : 140;

  const pieces = Array.from({ length: count }, () => ({
    x: window.innerWidth / 2 + (Math.random() - 0.5) * 250,
    y: window.innerHeight * 0.3,
    vx: (Math.random() - 0.5) * 10,
    vy: Math.random() * -10 - 4,
    size: Math.random() * 8 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * 360,
    rotSpeed: (Math.random() - 0.5) * 12,
    gravity: 0.22,
    life: 0
  }));

  function tick() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    let alive = false;
    pieces.forEach((p) => {
      p.life++;
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotSpeed;
      if (p.y < window.innerHeight + 40 && p.life < 260) alive = true;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, 1 - p.life / 260);
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });
    if (alive) {
      requestAnimationFrame(tick);
    } else {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }
  if (count > 0) tick();
}

/* =========================================================
   WAX-SEALED ENVELOPE LOGIC
   ========================================================= */
(function initEnvelope() {
  const envelope = document.getElementById("envelope");
  const seal = document.getElementById("waxSeal");

  if (!envelope) return;

  function openEnvelope() {
    if (!envelope.classList.contains("open")) {
      envelope.classList.add("open");
      SoundEngine.playGiftPop();
      setTimeout(launchConfetti, 400);
    }
  }

  if (seal) {
    seal.addEventListener("click", (e) => {
      e.stopPropagation();
      openEnvelope();
    });
    seal.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openEnvelope();
      }
    });
  }

  envelope.addEventListener("click", openEnvelope);
})();

/* =========================================================
   3D UNBOXING GIFT BOX LOGIC
   ========================================================= */
(function initGiftBox() {
  const box = document.getElementById("giftBox");
  const card = document.getElementById("giftRevealCard");

  if (!box || !card) return;

  box.addEventListener("click", () => {
    if (box.classList.contains("opened")) return;
    box.classList.add("opened");
    SoundEngine.playGiftPop();
    launchConfetti();
    setTimeout(() => {
      card.hidden = false;
    }, 350);
  });
})();

/* =========================================================
   REASONS FLIP-CARD GRID
   ========================================================= */
function buildReasons() {
  const grid = document.getElementById("reasonsGrid");
  if (!grid) return;
  const frag = document.createDocumentFragment();

  CONFIG.reasons.forEach((reason, i) => {
    const card = document.createElement("div");
    card.className = "reason-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Reason ${i + 1}, tap to reveal`);

    card.innerHTML = `
      <div class="reason-card-inner">
        <div class="reason-face reason-front"><span>${i + 1}</span></div>
        <div class="reason-face reason-back">${reason}</div>
      </div>
    `;

    const toggle = () => {
      card.classList.toggle("flipped");
      SoundEngine.playFlipSound();
    };
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });

    frag.appendChild(card);
  });
  grid.appendChild(frag);
}
buildReasons();

/* =========================================================
   MULTI-CANDLE CAKE & SMOKE LOGIC
   ========================================================= */
(function initCake() {
  const cake = document.getElementById("cakeButton");
  const reveal = document.getElementById("wishReveal");
  const smokeContainer = document.getElementById("smokeContainer");

  if (!cake) return;

  function blowOut() {
    if (cake.classList.contains("blown")) return;
    cake.classList.add("blown");
    SoundEngine.playBlowPuff();
    createSmoke();
    reveal.hidden = false;
    requestAnimationFrame(() => reveal.classList.add("show"));
    setTimeout(launchConfetti, 300);
  }

  function createSmoke() {
    if (!smokeContainer) return;
    for (let i = 0; i < 15; i++) {
      const p = document.createElement("div");
      p.className = "smoke-particle";
      p.style.setProperty("--dx", `${(Math.random() - 0.5) * 80}px`);
      p.style.left = `${(Math.random() - 0.5) * 40}px`;
      p.style.animationDelay = `${Math.random() * 0.3}s`;
      smokeContainer.appendChild(p);
      setTimeout(() => p.remove(), 2200);
    }
  }

  cake.addEventListener("click", blowOut);
})();

/* =========================================================
   WISH JAR & FORTUNE CARDS
   ========================================================= */
(function initWishJar() {
  const btn = document.getElementById("wishJarBtn");
  const modal = document.getElementById("wishJarModal");
  const closeBtn = document.getElementById("closeWishModal");
  const drawAnotherBtn = document.getElementById("drawAnotherWishBtn");
  const content = document.getElementById("wishCardContent");

  if (!btn || !modal) return;

  function drawWish() {
    const wish = CONFIG.wishes[Math.floor(Math.random() * CONFIG.wishes.length)];
    content.textContent = wish;
    modal.hidden = false;
    SoundEngine.playFlipSound();
  }

  btn.addEventListener("click", drawWish);
  drawAnotherBtn.addEventListener("click", drawWish);
  closeBtn.addEventListener("click", () => { modal.hidden = true; });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.hidden = true;
  });
})();

/* =========================================================
   QUOTES CAROUSEL
   ========================================================= */
(function initQuotes() {
  const quoteText = document.getElementById("quoteText");
  const prevBtn = document.getElementById("quotePrev");
  const nextBtn = document.getElementById("quoteNext");
  const section = document.getElementById("quotesSection");
  if (!quoteText) return;

  let index = 0;
  let timer;

  function render() {
    quoteText.classList.add("fade");
    setTimeout(() => {
      quoteText.textContent = CONFIG.quotes[index];
      quoteText.classList.remove("fade");
    }, 200);
  }

  function go(dir) {
    index = (index + dir + CONFIG.quotes.length) % CONFIG.quotes.length;
    render();
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => go(1), 5000);
  }

  prevBtn.addEventListener("click", () => go(-1));
  nextBtn.addEventListener("click", () => go(1));
  section.addEventListener("mouseenter", () => clearInterval(timer));
  section.addEventListener("mouseleave", resetTimer);

  quoteText.textContent = CONFIG.quotes[0];
  resetTimer();
})();

/* =========================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================= */
function initRevealAnimations() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.01, rootMargin: "50px 0px 50px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

/* =========================================================
   3D TILT
   ========================================================= */
function initTilt() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion || !window.matchMedia("(hover: hover)").matches) return;

  function attachTilt(el, maxTilt = 10, scale = 1.04) {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      const rotY = px * maxTilt * 2;
      const rotX = -py * maxTilt * 2;
      el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  }

  document.querySelectorAll(".polaroid").forEach((el) => attachTilt(el, 8, 1.04));

  const cake = document.getElementById("cakeButton");
  if (cake) attachTilt(cake, 12, 1.03);

  const hero = document.querySelector(".hero");
  const heroTitle = document.querySelector(".hero-title");
  if (hero && heroTitle) {
    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      heroTitle.style.transform = `rotateX(${-py * 8}deg) rotateY(${px * 8}deg)`;
    });
    hero.addEventListener("mouseleave", () => {
      heroTitle.style.transform = "";
    });
  }
}

/* =========================================================
   AUDIO CONTROLS (MUSIC + SOUND FX)
   ========================================================= */
(function initAudioControls() {
  const musicBtn = document.getElementById("musicToggle");
  const soundBtn = document.getElementById("soundToggle");
  const soundIcon = document.getElementById("soundIcon");
  const audio = document.getElementById("bgMusic");

  if (musicBtn && audio) {
    audio.volume = 0.55;
    musicBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play().catch(() => { });
        musicBtn.setAttribute("aria-pressed", "true");
        musicBtn.setAttribute("aria-label", "Pause music");
      } else {
        audio.pause();
        musicBtn.setAttribute("aria-pressed", "false");
        musicBtn.setAttribute("aria-label", "Play music");
      }
    });
  }

  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      const isEnabled = SoundEngine.toggleSound();
      soundBtn.classList.toggle("muted", !isEnabled);
      soundBtn.setAttribute("title", isEnabled ? "Toggle Sound FX (ON)" : "Toggle Sound FX (OFF)");
      if (soundIcon) soundIcon.textContent = isEnabled ? "✨" : "🔇";
    });
  }
})();

/* =========================================================
   DOWNLOADABLE BIRTHDAY CARD WITH STYLES
   ========================================================= */
let currentCardStyle = "classic";

function drawBirthdayCard(styleName = "classic") {
  const canvas = document.getElementById("birthdayCard");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  currentCardStyle = styleName;

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // Backgrounds based on style
    if (styleName === "gold") {
      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, "#FFFDF5");
      bg.addColorStop(0.55, "#FFF3D6");
      bg.addColorStop(1, "#F5C662");
      ctx.fillStyle = bg;
    } else if (styleName === "starry") {
      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, "#16364A");
      bg.addColorStop(0.6, "#25506B");
      bg.addColorStop(1, "#3A83B7");
      ctx.fillStyle = bg;
    } else {
      // Classic Sky Blue
      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, "#F3FAFE");
      bg.addColorStop(0.55, "#D9EFEF");
      bg.addColorStop(1, "#A3D8F4");
      ctx.fillStyle = bg;
    }
    ctx.fillRect(0, 0, w, h);

    // Decorative Orbs
    const isDark = styleName === "starry";
    const orbColor1 = isDark ? "rgba(245,198,98,0.25)" : "rgba(255,255,255,0.55)";
    const orbColor2 = isDark ? "rgba(163,216,244,0.3)" : "rgba(245,198,98,0.4)";

    drawOrb(ctx, 100, 90, 75, orbColor1);
    drawOrb(ctx, w - 110, h - 110, 100, orbColor1);
    drawOrb(ctx, w - 70, 80, 45, orbColor2);

    // Border
    ctx.strokeStyle = isDark ? "rgba(245,198,98,0.4)" : "rgba(58,131,183,0.35)";
    ctx.lineWidth = 3;
    ctx.strokeRect(20, 20, w - 40, h - 40);

    // Typography
    ctx.textAlign = "center";
    ctx.fillStyle = isDark ? "#F5C662" : "#3A83B7";
    ctx.font = "italic 500 36px Caveat, cursive";
    ctx.fillText("Happy Birthday", w / 2, h * 0.34);

    ctx.fillStyle = isDark ? "#FFFFFF" : "#16364A";
    ctx.font = "600 80px Fraunces, Georgia, serif";
    ctx.fillText("Bonu", w / 2, h * 0.5);

    ctx.fillStyle = isDark ? "#D9EFEF" : "#2B4E60";
    ctx.font = "400 22px Outfit, sans-serif";
    const lines = CONFIG.cardMessage.split("\n");
    lines.forEach((line, i) => {
      ctx.fillText(line, w / 2, h * 0.66 + i * 32);
    });

    ctx.fillStyle = isDark ? "#F5C662" : "#3A83B7";
    ctx.font = "500 28px Caveat, cursive";
    ctx.fillText("with love, always 🩵", w / 2, h * 0.86);
  }

  function drawOrb(ctx, x, y, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }

  if (document.fonts && document.fonts.ready) {
    Promise.all([
      document.fonts.load("600 80px Fraunces"),
      document.fonts.load("italic 500 36px Caveat"),
      document.fonts.load("400 22px Outfit")
    ]).then(draw).catch(draw);
  } else {
    draw();
  }
}

// Card style switcher buttons
document.querySelectorAll(".style-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".style-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    drawBirthdayCard(btn.dataset.style);
  });
});

const downloadBtn = document.getElementById("downloadCardBtn");
if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    const canvas = document.getElementById("birthdayCard");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "boni-birthday-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

/* =========================================================
   GALLERIES WITH FLIPPABLE POLAROIDS
   ========================================================= */
const photoList = [];

function buildGallerySet(gridId, setConfig, captionList, messageList, altPrefix) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  const frag = document.createDocumentFragment();
  const startIndex = photoList.length;
  const { count, folder, prefix } = setConfig;

  for (let i = 1; i <= count; i++) {
    const ext = typeof setConfig.ext === "function"
      ? setConfig.ext(i)
      : (setConfig.ext || CONFIG.photoExtension || "jpg");
    const src = `${folder}/${prefix}${i}.${ext}`;
    const caption = captionList[(i - 1) % captionList.length];
    const customMsg = (messageList && messageList[i - 1])
      ? messageList[i - 1]
      : `“${caption}” — one of the best moments from our timeline! 🩵`;
    const index = startIndex + i - 1;
    const photoObj = { src, caption: `${caption} · #${i}` };
    photoList.push(photoObj);

    const card = document.createElement("div");
    card.className = "polaroid";
    card.dataset.index = index;

    card.innerHTML = `
      <div class="polaroid-inner">
        <div class="polaroid-face polaroid-front">
          <img src="${src}" loading="lazy" alt="${altPrefix}, photo ${i}">
          <span class="polaroid-caption">${caption}</span>
        </div>
        <div class="polaroid-face polaroid-back">
          <p class="polaroid-back-title">Memory #${i}</p>
          <p class="polaroid-back-text">${customMsg}</p>
        </div>
      </div>
    `;

    const img = card.querySelector("img");
    if (img) {
      img.onerror = function () {
        if (this.src.endsWith(".jpeg")) {
          this.src = this.src.replace(".jpeg", ".jpg");
        } else if (this.src.endsWith(".jpg")) {
          this.src = this.src.replace(".jpg", ".png");
        } else if (this.src.endsWith(".png")) {
          this.src = this.src.replace(".png", ".svg");
        }
        photoObj.src = this.src;
      };
    }

    // Single click: flip the polaroid. Double-click: open lightbox.
    let clickTimer = null;
    card.addEventListener("click", () => {
      if (clickTimer) {
        // second click: open lightbox
        clearTimeout(clickTimer);
        clickTimer = null;
        card.classList.remove("flipped");
        openLightbox(Number(card.dataset.index));
      } else {
        clickTimer = setTimeout(() => {
          clickTimer = null;
          card.classList.toggle("flipped");
          SoundEngine.playFlipSound();
        }, 250);
      }
    });

    frag.appendChild(card);
  }
  grid.appendChild(frag);
}

function buildGalleries() {
  buildGallerySet("childhoodGrid", CONFIG.childhood, CONFIG.childhoodCaptions, CONFIG.childhoodMessages, "Boni as a kid");
  buildGallerySet("journeyGrid", CONFIG.journey, CONFIG.captions, CONFIG.journeyMessages, "Boni and me");
}
buildGalleries();

/* =========================================================
   LIGHTBOX
   ========================================================= */
let currentIndex = 0;
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");

function openLightbox(index) {
  currentIndex = index;
  renderLightbox();
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("lightboxClose").focus();
}

function renderLightbox() {
  const photo = photoList[currentIndex];
  lightboxImg.src = photo.src;
  lightboxImg.alt = photo.caption.replace(/<br\s*\/?>/gi, " ");
  lightboxCaption.innerHTML = photo.caption;
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

function showNext(dir) {
  currentIndex = (currentIndex + dir + photoList.length) % photoList.length;
  renderLightbox();
}

document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxPrev").addEventListener("click", () => showNext(-1));
document.getElementById("lightboxNext").addEventListener("click", () => showNext(1));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showNext(-1);
  if (e.key === "ArrowRight") showNext(1);
});
