const App = {
  screen: 'splash', history: [], scanStep: 1, photos: {}, stream: null,
  scores: null, timerInt: null, timerOn: false, timerSec: 0, timerTotal: 0,
  timerSet: 1, timerSets: 1, curEx: null, curCat: null, routineLevel: 'beginner',
  doneRoutine: new Set(),

  init() {
    this.loadProfile();
    this.bindAll();
    this.particles();
    document.getElementById('bnav').classList.add('hidden');
    const scans = this.getScans();
    if (scans.length) this.scores = scans[scans.length - 1].scores;
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
  },

  // ── NAV ──
  go(s, hist = true) {
    const next = document.getElementById('screen-' + s);
    if (!next || s === this.screen) return;
    if (hist && this.screen !== 'splash') this.history.push(this.screen);
    document.querySelectorAll('.screen.active').forEach(el => {
      el.classList.add('slide-left');
      el.classList.remove('active');
      setTimeout(() => el.classList.remove('slide-left'), 350);
    });
    next.scrollTop = 0;
    next.classList.add('active');
    const nav = document.getElementById('bnav');
    const withNav = ['dashboard', 'progress', 'profile', 'programs'];
    if (withNav.includes(s)) {
      nav.classList.remove('hidden');
      document.querySelectorAll('.bnav-item').forEach(b => b.classList.toggle('active', b.dataset.s === s));
    } else nav.classList.add('hidden');
    this.screen = s;
    if (s === 'scanner') this.camStart();
    else this.camStop();
    if (s === 'dashboard') this.renderDash();
    if (s === 'progress') this.renderProgress();
    if (s === 'profile') this.renderProfile();
    if (s === 'programs') this.renderPrograms();
  },
  back() { this.stopVoice(); this.history.length ? this.go(this.history.pop(), false) : this.go('dashboard', false); },

  // ── EVENTS ──
  bindAll() {
    const $ = (id) => document.getElementById(id);
    $('btn-start').onclick = () => this.go('scanner');
    $('btn-skip').onclick = () => this.go('dashboard');
    $('btn-scanner-back').onclick = () => { this.camStop(); this.back(); };
    $('btn-capture').onclick = () => this.capture();
    $('btn-retake').onclick = () => { $('preview-overlay').classList.add('hidden'); this.camStart(); };
    $('btn-confirm').onclick = () => this.confirmPhoto();
    $('btn-to-dash').onclick = () => { this.history = []; this.go('dashboard'); };
    $('btn-new-scan').onclick = () => { this.scanStep = 1; this.photos = {}; this.go('scanner'); };
    $('btn-ex-back').onclick = () => this.back();
    $('btn-det-back').onclick = () => this.back();
    $('btn-play').onclick = () => this.timerToggle();
    $('btn-reset').onclick = () => this.timerReset();
    $('btn-complete').onclick = () => this.completeEx();
    $('btn-enable-notif').onclick = () => this.enableNotif();
    $('btn-res-back').onclick = () => { this.history = []; this.go('dashboard'); };
    $('btn-prog-back').onclick = () => this.back();
    $('btn-routine-back').onclick = () => this.back();
    $('btn-save-routine').onclick = () => { this.saveCustomRoutine(); this.toast('✅','Routine salvata!'); this.back(); };
    $('btn-custom-routine').onclick = () => this.openRoutineCustom();
    $('wt-plus-glass').onclick = () => this.updateWater(0.25);
    $('wt-plus-bottle').onclick = () => this.updateWater(0.5);
    $('wt-minus').onclick = () => this.updateWater(-0.25);
    $('rc-plus').onclick = () => this.updateReps(1);
    $('rc-minus').onclick = () => this.updateReps(-1);
    $('rc-reset-btn').onclick = () => { this.repCount = 0; this.updateRepDisplay(); };
    $('rc-tap-mode-btn').onclick = () => this.openTapMode();
    $('tap-overlay').onclick = (e) => { if (e.target.id !== 'tap-close') this.tapRep(); };
    $('tap-close').onclick = (e) => { e.stopPropagation(); this.closeTapMode(); };
    $('btn-sidebar').onclick = () => this.openSidebar();
    $('sb-close').onclick = () => this.closeSidebar();
    $('sidebar-overlay').onclick = () => this.closeSidebar();
    $('sym-left').onclick = () => this.drawSymmetry('left');
    $('sym-right').onclick = () => this.drawSymmetry('right');
    $('sym-normal').onclick = () => this.drawSymmetry('normal');
    $('btn-reset-all').onclick = () => {
      if (confirm('Eliminare tutti i dati?')) { localStorage.clear(); location.reload(); }
    };
    document.querySelectorAll('.bnav-item').forEach(b => b.onclick = () => {
      const s = b.dataset.s;
      if (s === 'scanner') { this.scanStep = 1; this.photos = {}; }
      this.history = []; this.go(s);
    });
    document.querySelectorAll('.rtab').forEach(t => t.onclick = () => {
      document.querySelectorAll('.rtab').forEach(x => x.classList.remove('active'));
      t.classList.add('active'); this.routineLevel = t.dataset.lv; this.renderRoutine();
    });
    $('inp-name').onchange = e => { this.saveProf({ name: e.target.value }); $('prof-name').textContent = e.target.value || 'Utente'; };
    $('inp-age').onchange = e => this.saveProf({ age: e.target.value });
    $('inp-gender').onchange = e => this.saveProf({ gender: e.target.value });
    document.querySelectorAll('.gc-check').forEach(c => c.onchange = () => {
      const g = []; document.querySelectorAll('.gc-check:checked').forEach(x => g.push(x.dataset.g));
      this.saveProf({ goals: g });
    });
    $('notif-toggle').onchange = e => { if (e.target.checked) this.enableNotif(); this.saveProf({ notif: e.target.checked }); };
  },

  // ── PARTICLES ──
  particles() {
    const c = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = (60 + Math.random() * 40) + '%';
      p.style.animationDuration = (4 + Math.random() * 8) + 's';
      p.style.animationDelay = Math.random() * 5 + 's';
      p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
      c.appendChild(p);
    }
  },

  // ── CAMERA ──
  async camStart() {
    try {
      const v = document.getElementById('camera');
      this.stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } } });
      v.srcObject = this.stream;
      this.updateScanUI();
    } catch { document.getElementById('cam-status').textContent = 'Permetti accesso fotocamera'; }
  },
  camStop() { if (this.stream) { this.stream.getTracks().forEach(t => t.stop()); this.stream = null; } },
  updateScanUI() {
    document.getElementById('scan-step-badge').textContent = this.scanStep + '/3';
    const titles = ['📸 Foto Frontale', '📐 Profilo Destro', '📐 Profilo Sinistro'];
    const descs = ['Guarda dritto nella fotocamera. Espressione neutra, luce uniforme.', 'Gira la testa di 90° verso DESTRA. Mostra il profilo completo.', 'Gira la testa di 90° verso SINISTRA. Mostra il profilo completo.'];
    document.getElementById('scan-title').textContent = titles[this.scanStep - 1] || titles[0];
    document.getElementById('scan-desc').textContent = descs[this.scanStep - 1] || descs[0];
  },
  capture() {
    const v = document.getElementById('camera'), c = document.getElementById('cam-canvas');
    c.width = v.videoWidth; c.height = v.videoHeight;
    const ctx = c.getContext('2d'); ctx.translate(c.width, 0); ctx.scale(-1, 1);
    ctx.drawImage(v, 0, 0); ctx.setTransform(1, 0, 0, 1, 0, 0);
    const url = c.toDataURL('image/jpeg', 0.85);
    document.getElementById('preview-img').src = url;
    document.getElementById('preview-overlay').classList.remove('hidden');
    this.camStop();
    const keys = ['front', 'right', 'left'];
    this.photos[keys[this.scanStep - 1]] = url;
  },
  confirmPhoto() {
    document.getElementById('preview-overlay').classList.add('hidden');
    if (this.scanStep < 3) { this.scanStep++; this.camStart(); }
    else { this.camStop(); this.analyze(); }
  },

  // ── ANALYSIS ──
  analyze() {
    this.go('analyzing');
    const steps = [
      { id: 1, t: 'Rilevamento volto', d: 700 },
      { id: 2, t: 'Analisi simmetria facciale', d: 900 },
      { id: 3, t: 'Proporzioni e rapporto aureo', d: 1100 },
      { id: 4, t: 'Valutazione struttura ossea', d: 900 },
      { id: 5, t: 'Creazione piano personalizzato', d: 700 }
    ];
    let cur = 0, elapsed = 0;
    const total = steps.reduce((a, s) => a + s.d, 0);
    const run = () => {
      if (cur >= steps.length) return this.finishAnalysis();
      const s = steps[cur];
      document.getElementById('analyze-status').textContent = s.t;
      for (let i = 1; i <= 5; i++) {
        const el = document.getElementById('as' + i);
        el.classList.remove('on', 'ok');
        if (i < s.id) el.classList.add('ok');
        if (i === s.id) el.classList.add('on');
      }
      const iv = setInterval(() => {
        elapsed += 40;
        const p = Math.min(Math.round(elapsed / total * 100), 100);
        document.getElementById('pbar-fill').style.width = p + '%';
        document.getElementById('pbar-pct').textContent = p + '%';
      }, 40);
      setTimeout(() => { clearInterval(iv); cur++; run(); }, s.d);
    };
    run();
  },

  finishAnalysis() {
    const scores = this.computeScores();
    this.scores = scores;
    const scans = this.getScans();
    scans.push({ date: new Date().toISOString(), scores });
    localStorage.setItem('lm_scans', JSON.stringify(scans));
    this.renderResults(scores);
    this.go('results');
  },

  computeScores() {
    const canvas = document.getElementById('cam-canvas');
    const ctx = canvas.getContext('2d');
    let skin = { u: 0.65, b: 0.55 };
    if (canvas.width > 0) skin = this.skinScan(ctx, canvas.width, canvas.height);
    const prof = this.getProf();
    const age = parseInt(prof.age) || 22;
    const gender = prof.gender || 'male';
    const v = () => (Math.random() - 0.5) * 1.8;
    const cl = x => Math.round(Math.max(3.5, Math.min(9.2, x)) * 10) / 10;

    let sc = {
      symmetry: cl(6.3 + v() + skin.u * 1.2),
      jawline: cl(5.6 + v() + (gender === 'male' ? 0.5 : 0.2)),
      eyes: cl(6.1 + v() + 0.3),
      cheekbones: cl(5.3 + v() + skin.u * 0.6),
      nose: cl(6.0 + v()),
      lips: cl(6.2 + v() + (gender === 'female' ? 0.4 : 0)),
      proportions: cl(5.9 + v() + skin.u * 0.4),
      skin: cl(5.3 + v() + skin.b * 1.8 + skin.u * 1.2)
    };
    if (age < 20) { sc.skin = cl(sc.skin + 0.4); sc.jawline = cl(sc.jawline - 0.2); }
    if (age > 35) { sc.skin = cl(sc.skin - 0.4); sc.jawline = cl(sc.jawline + 0.2); }

    let ov = 0;
    ANALYSIS_CATEGORIES.forEach(c => { ov += sc[c.id] * c.weight; });
    sc.overall = Math.round(ov * 10) / 10;
    return sc;
  },

  skinScan(ctx, w, h) {
    try {
      const d = ctx.getImageData(w / 2 - 40, h / 2 - 40, 80, 80).data;
      let tR = 0, tG = 0, tB = 0;
      const n = d.length / 4;
      for (let i = 0; i < d.length; i += 4) { tR += d[i]; tG += d[i + 1]; tB += d[i + 2]; }
      const aR = tR / n, aG = tG / n, aB = tB / n;
      let vR = 0, vG = 0, vB = 0;
      for (let i = 0; i < d.length; i += 4) { vR += (d[i] - aR) ** 2; vG += (d[i + 1] - aG) ** 2; vB += (d[i + 2] - aB) ** 2; }
      const std = (Math.sqrt(vR / n) + Math.sqrt(vG / n) + Math.sqrt(vB / n)) / 3;
      return { u: Math.max(0, Math.min(1, 1 - std / 55)), b: Math.max(0, Math.min(1, (aR + aG + aB) / 765)) };
    } catch { return { u: 0.6, b: 0.5 }; }
  },

  // ── RESULTS ──
  scoreDesc(catId, score) {
    const descs = {
      symmetry: { hi: 'Simmetria elevata', mid: 'Simmetria discreta', lo: 'Asimmetria rilevata' },
      jawline: { hi: 'Angular jawline', mid: 'Jawline definita', lo: 'Soft jawline' },
      eyes: { hi: 'Almond eyes', mid: 'Occhi proporzionati', lo: 'Migliorabile' },
      cheekbones: { hi: 'High cheekbones', mid: 'Zigomi medi', lo: 'Zigomi piatti' },
      nose: { hi: 'Naso proporzionato', mid: 'Proporzioni medie', lo: 'Da migliorare' },
      lips: { hi: 'Full lips', mid: 'Labbra proporzionate', lo: 'Labbra sottili' },
      proportions: { hi: 'Golden ratio', mid: 'Proporzioni buone', lo: 'Sproporzione' },
      skin: { hi: 'Smooth skin', mid: 'Pelle discreta', lo: 'Needs routine' }
    };
    const d = descs[catId] || { hi: 'Ottimo', mid: 'Medio', lo: 'Basso' };
    return score >= 7.5 ? d.hi : score >= 5.5 ? d.mid : d.lo;
  },

  renderResults(sc) {
    this.animNum('res-score-val', sc.overall, 1400);
    const pct = Math.round(100 - (sc.overall / 10) * 100);
    const prof = this.getProf();
    const genderLabel = (prof.gender === 'female') ? 'delle donne' : 'degli uomini';
    document.getElementById('res-percentile').textContent = 'Top ' + Math.max(1, pct) + '% ' + genderLabel;

    const photo = document.getElementById('res-photo');
    if (this.photos.front) {
      photo.innerHTML = '<img src="' + this.photos.front + '" alt="">';
    } else {
      photo.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
    }

    const list = document.getElementById('res-list');
    list.innerHTML = '';

    const SCORE_ICONS = {
      symmetry: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>',
      jawline: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.48 2 2 6 2 10c0 2 1 4 3 6l3 4c1.5 1.5 2.5 2 4 2s2.5-.5 4-2l3-4c2-2 3-4 3-6 0-4-4.48-8-10-8z"/></svg>',
      eyes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
      cheekbones: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
      nose: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v14M8 18c0 1 2 3 4 3s4-2 4-3"/></svg>',
      lips: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12c0-3 3.5-6 8-6s8 3 8 6"/><path d="M4 12c0 3 3.5 6 8 6s8-3 8-6"/><path d="M4 12h16"/></svg>',
      proportions: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>',
      skin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 004.6 9c-1.5 1.3-1.9 3.5-.9 5.2.6 1 1.5 1.7 2.5 2 .4 1.4 1.5 2.6 2.9 3.1 1 .3 2 .3 2.9 0 1.4-.5 2.5-1.7 2.9-3.1 1-.3 1.9-1 2.5-2 1-1.7.6-3.9-.9-5.2A3.6 3.6 0 0015 4.7C14.4 3.6 13.2 3 12 3z"/></svg>'
    };

    ANALYSIS_CATEGORIES.forEach((c, i) => {
      const s = sc[c.id];
      const desc = this.scoreDesc(c.id, s);
      const cls = s >= 7.5 ? 'high' : s >= 5.5 ? 'mid' : 'low';
      const row = document.createElement('div');
      row.className = 'score-row anim a' + Math.min(i + 1, 8);
      row.innerHTML = `
        <div class="sr-icon-wrap">${SCORE_ICONS[c.id] || '<span class="sr-emoji">' + c.icon + '</span>'}</div>
        <div class="sr-info"><span class="sr-name">${c.name}</span><span class="sr-desc">${desc}</span></div>
        <span class="sr-score ${cls}">${s}</span>
        <span class="sr-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg></span>`;
      row.onclick = () => this.showScoreDetail(c, s, row);
      list.appendChild(row);
    });

    this.renderCelebMatch(sc);
    this.drawSymmetry('left');
    this.renderPersonalPlan(sc);
  },

  renderCelebMatch(sc) {
    const match = CELEBRITY_MATCHES.find(m => sc.overall >= m.minScore) || CELEBRITY_MATCHES[CELEBRITY_MATCHES.length - 1];
    const celeb = match.names[Math.floor(Math.random() * match.names.length)];
    document.getElementById('celeb-name').textContent = celeb;
    document.getElementById('celeb-match').textContent = 'Somiglianza strutturale — Score ' + sc.overall + '/10';
    const traits = document.getElementById('celeb-traits');
    traits.innerHTML = '';
    match.traits.forEach(t => {
      const s = document.createElement('span'); s.className = 'celeb-trait'; s.textContent = t;
      traits.appendChild(s);
    });
  },

  drawSymmetry(mode) {
    document.querySelectorAll('.sym-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = mode === 'left' ? 'sym-left' : mode === 'right' ? 'sym-right' : 'sym-normal';
    document.getElementById(activeBtn).classList.add('active');

    const canvas = document.getElementById('sym-canvas');
    const ctx = canvas.getContext('2d');
    const src = document.getElementById('cam-canvas');

    if (src.width === 0 || !this.photos.front) {
      ctx.fillStyle = '#1a1a2e';
      ctx.fillRect(0, 0, 200, 260);
      ctx.fillStyle = '#a78bfa';
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Fai una scansione', 100, 125);
      ctx.fillText('per vedere la simmetria', 100, 145);
      return;
    }

    const img = new Image();
    img.onload = () => {
      const w = 200, h = 260;
      canvas.width = w; canvas.height = h;
      ctx.clearRect(0, 0, w, h);

      if (mode === 'normal') {
        ctx.drawImage(img, 0, 0, w, h);
      } else if (mode === 'left') {
        ctx.drawImage(img, 0, 0, img.width / 2, img.height, 0, 0, w / 2, h);
        ctx.save();
        ctx.translate(w, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(img, 0, 0, img.width / 2, img.height, 0, 0, w / 2, h);
        ctx.restore();
      } else {
        ctx.save();
        ctx.translate(w, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(img, img.width / 2, 0, img.width / 2, img.height, 0, 0, w / 2, h);
        ctx.restore();
        ctx.drawImage(img, img.width / 2, 0, img.width / 2, img.height, w / 2, 0, w / 2, h);
      }

      ctx.strokeStyle = 'rgba(124,58,237,0.5)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(w / 2, 0);
      ctx.lineTo(w / 2, h);
      ctx.stroke();
      ctx.setLineDash([]);
    };
    img.src = this.photos.front;

    const labels = { left: 'Metà sinistra specchiata', right: 'Metà destra specchiata', normal: 'Foto originale' };
    document.getElementById('sym-label').textContent = labels[mode];
  },

  renderPersonalPlan(sc) {
    const container = document.getElementById('personal-recs');
    container.innerHTML = '';
    const sorted = ANALYSIS_CATEGORIES.map(c => ({ ...c, score: sc[c.id] })).sort((a, b) => a.score - b.score);

    sorted.forEach((cat, i) => {
      const pe = PERSONALIZED_EXERCISES[cat.id];
      if (!pe) return;
      const prio = cat.score < 5.5 ? 'high' : cat.score < 7 ? 'medium' : 'low';
      const prioLabel = prio === 'high' ? 'Priorità' : prio === 'medium' ? 'Medio' : 'OK';
      const prioClass = prio === 'high' ? 'tag-high' : prio === 'medium' ? 'tag-med' : 'tag-ok';
      const exercises = prio === 'high' ? pe.low : pe.medium;
      const bgClass = cat.relatedCategories[0] || 'mewing';

      const card = document.createElement('div');
      card.className = 'rec-card anim a' + Math.min(i + 1, 8);
      card.innerHTML = `
        <div class="rec-badge" style="background:rgba(${this.catRgb(bgClass)},0.12)">${cat.icon}</div>
        <div class="rec-text"><b>${cat.name} — ${cat.score}/10</b><p>${pe.exercises}</p></div>
        <span class="rec-tag ${prioClass}">${prioLabel}</span>`;
      card.onclick = () => {
        const targetCat = cat.relatedCategories[0];
        if (targetCat && EXERCISES[targetCat]) this.openCat(targetCat);
      };
      container.appendChild(card);

      if (exercises && exercises.length > 0 && i < 3) {
        exercises.forEach(exId => {
          const ex = this.findEx(exId);
          if (!ex) return;
          const mini = document.createElement('div');
          mini.className = 'rec-card';
          mini.style.marginLeft = '16px';
          mini.style.borderLeft = '3px solid var(--accent)';
          mini.innerHTML = `<div class="rec-badge" style="background:var(--glass)">${ex.data.icon}</div><div class="rec-text"><b>${ex.data.name}</b><p>${ex.data.sets}x${ex.data.reps} • ${ex.data.duration}</p></div>`;
          mini.onclick = () => this.openDetail(ex.data, ex.cat);
          container.appendChild(mini);
        });
      }
    });
  },

  findEx(id) {
    for (const [catId, cat] of Object.entries(EXERCISES)) {
      const ex = cat.exercises.find(e => e.id === id);
      if (ex) return { data: ex, cat: catId };
    }
    return null;
  },

  catRgb(cat) {
    const map = { mewing: '124,58,237', jawline: '249,115,22', faceYoga: '16,185,129', neck: '59,130,246', skincare: '236,72,153', lifestyle: '245,158,11' };
    return map[cat] || '124,58,237';
  },

  // ── DASHBOARD ──
  renderDash() {
    const d = new Date().toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long' });
    document.getElementById('dash-date').textContent = d.charAt(0).toUpperCase() + d.slice(1);
    if (this.scores) document.getElementById('dash-mini-score').querySelector('.ms-val').textContent = this.scores.overall;

    this.renderXP();
    this.renderWater();
    this.renderChecklist();
    this.renderMiniScores();
    this.renderRoutine();
    this.renderCatGrid();
    document.getElementById('tip-text').textContent = TIPS_DATABASE[new Date().getDate() % TIPS_DATABASE.length];
    document.querySelectorAll('.rtab').forEach(t => t.classList.toggle('active', t.dataset.lv === this.routineLevel));

    const prof = this.getProf();
    if (prof.name) document.getElementById('dash-hello').textContent = 'Ciao, ' + prof.name;
    document.getElementById('notif-card').style.display = prof.notif ? 'none' : 'flex';
  },

  renderXP() {
    const xp = this.getXP();
    const lv = this.getLevel(xp);
    const cur = LEVEL_THRESHOLDS[lv - 1] || 0;
    const nxt = LEVEL_THRESHOLDS[lv] || cur + 100;
    const pct = Math.min(100, ((xp - cur) / (nxt - cur)) * 100);
    document.getElementById('xp-level').textContent = 'Lv ' + lv;
    document.getElementById('xp-pts').textContent = xp + ' XP';
    document.getElementById('xp-fill').style.width = pct + '%';
    document.getElementById('xp-next').textContent = (nxt - xp) + ' XP per il livello ' + (lv + 1);
  },

  renderMiniScores() {
    const g = document.getElementById('mini-scores'); g.innerHTML = '';
    ANALYSIS_CATEGORIES.forEach(c => {
      const s = this.scores ? this.scores[c.id] : '--';
      const d = document.createElement('div'); d.className = 'ms-item';
      d.innerHTML = `<span class="ms-i">${c.icon}</span><span class="ms-v">${s}</span><span class="ms-l">${c.name}</span>`;
      g.appendChild(d);
    });
  },

  renderRoutine() {
    const c = document.getElementById('routine-list'); c.innerHTML = '';
    if (this.routineLevel === 'personal') { this.renderPersonalRoutine(c); return; }
    const r = DAILY_ROUTINES[this.routineLevel]; if (!r) return;
    [{ k: 'morning', l: 'Mattina', i: '🌅' }, { k: 'afternoon', l: 'Pomeriggio', i: '☀️' }, { k: 'evening', l: 'Sera', i: '🌙' }].forEach(p => {
      if (!r[p.k] || !r[p.k].length) return;
      const pd = document.createElement('div'); pd.className = 'r-period';
      pd.innerHTML = `<div class="r-period-title">${p.i} ${p.l}</div>`;
      r[p.k].forEach(item => {
        const ex = this.findExInCat(item.exercise, item.category); if (!ex) return;
        const key = this.routineLevel + '_' + p.k + '_' + item.exercise;
        const done = this.doneRoutine.has(key);
        const el = document.createElement('div'); el.className = 'r-item' + (done ? ' done' : '');
        el.innerHTML = `<div class="ri-open"><span class="ri-icon">${ex.icon}</span><div class="ri-info"><div class="ri-name">${ex.name}</div><div class="ri-note">${item.note}</div></div></div><div class="ri-check-area"><div class="ri-check"></div></div>`;
        el.querySelector('.ri-open').addEventListener('click', () => this.openDetail(ex, item.category));
        el.querySelector('.ri-check-area').addEventListener('click', () => {
          if (this.doneRoutine.has(key)) { this.doneRoutine.delete(key); el.classList.remove('done'); }
          else { this.doneRoutine.add(key); el.classList.add('done'); }
        });
        pd.appendChild(el);
      });
      c.appendChild(pd);
    });
  },

  catGradient(cat) {
    const grads = {
      mewing: 'linear-gradient(135deg,#4c1d95,#7c3aed)',
      jawline: 'linear-gradient(135deg,#9a3412,#f97316)',
      faceYoga: 'linear-gradient(135deg,#065f46,#10b981)',
      neck: 'linear-gradient(135deg,#1e3a5f,#3b82f6)',
      skincare: 'linear-gradient(135deg,#831843,#ec4899)',
      lifestyle: 'linear-gradient(135deg,#78350f,#f59e0b)'
    };
    return grads[cat] || grads.mewing;
  },

  renderCatGrid() {
    const g = document.getElementById('cat-grid'); g.innerHTML = '';

    const routine = DAILY_ROUTINES[this.routineLevel];
    const totalEx = routine ? (routine.morning?.length || 0) + (routine.afternoon?.length || 0) + (routine.evening?.length || 0) : 0;
    const feat = document.createElement('div');
    feat.className = 'featured-card';
    feat.style.background = 'linear-gradient(135deg,#4c1d95,#7c3aed,#06b6d4)';
    feat.style.gridColumn = '1/-1';
    feat.innerHTML = `
      <h3>Routine Giornaliera</h3>
      <div class="fc-sub">${totalEx} esercizi programmati</div>
      <div class="fc-stats">
        <span class="fc-stat">⏱ 20-30 min</span>
        <span class="fc-stat">🔥 Tutti i livelli</span>
      </div>
      <button class="fc-btn" onclick="document.getElementById('routine-list').scrollIntoView({behavior:'smooth'})">Inizia Routine →</button>
      <span class="fc-emoji">💎</span>`;
    g.appendChild(feat);

    Object.values(EXERCISES).forEach(cat => {
      const d = document.createElement('div'); d.className = 'cat-card';
      d.style.background = this.catGradient(cat.id);
      d.innerHTML = `<span class="cc-icon">${cat.icon}</span><div class="cc-name">${cat.name}</div><div class="cc-count">${cat.exercises.length} esercizi</div>`;
      d.onclick = () => this.openCat(cat.id);
      g.appendChild(d);
    });
  },

  // ── EXERCISES ──
  openCat(catId) {
    this.curCat = catId;
    const cat = EXERCISES[catId]; if (!cat) return;
    document.getElementById('ex-cat-icon').textContent = cat.icon;
    document.getElementById('ex-cat-name').textContent = cat.name;
    document.getElementById('ex-cat-desc').textContent = cat.description;
    const list = document.getElementById('ex-list'); list.innerHTML = '';

    const header = document.createElement('div');
    header.className = 'featured-card';
    header.style.background = this.catGradient(catId);
    const totalDur = cat.exercises.reduce((a, e) => { const m = parseInt(e.duration); return a + (isNaN(m) ? 5 : m); }, 0);
    header.innerHTML = `
      <h3>${cat.name} Training</h3>
      <div class="fc-sub">${cat.exercises.length} esercizi disponibili</div>
      <div class="fc-stats">
        <span class="fc-stat">⏱ ${totalDur} min totali</span>
        <span class="fc-stat">🔥 ${cat.exercises.filter(e => e.difficultyLevel >= 2).length} avanzati</span>
      </div>
      <span class="fc-emoji">${cat.icon}</span>`;
    list.appendChild(header);

    cat.exercises.forEach((ex, i) => {
      const d = document.createElement('div');
      d.className = 'ex-card anim a' + Math.min(i + 1, 8);
      d.innerHTML = `
        <div class="ec-icon" style="background:rgba(${this.catRgb(catId)},0.15)">${ex.icon}</div>
        <div class="ec-info"><div class="ec-name">${ex.name}</div><div class="ec-sub">${ex.subtitle}</div>
          <div class="ec-meta"><span class="mtag d${ex.difficultyLevel}">${ex.difficulty}</span><span class="mtag">${ex.sets}x${ex.reps}</span><span class="mtag">${ex.duration}</span></div>
        </div>
        <span class="ec-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></span>`;
      d.onclick = () => this.openDetail(ex, catId);
      list.appendChild(d);
    });
    this.go('exercises');
  },

  openDetail(ex, catId, intensity) {
    this.curEx = ex; this.curCat = catId;
    const int = intensity || this.getIntensities()[ex.id] || 'base';
    const mult = int === 'pro' ? 2 : int === 'medio' ? 1.5 : 1;
    const adjSets = typeof ex.sets === 'number' ? Math.round(ex.sets * mult) : ex.sets;
    const adjReps = typeof ex.reps === 'number' ? Math.round(ex.reps * mult) : ex.reps;
    const adjHold = ex.holdTime ? Math.round(ex.holdTime * mult) : 0;

    document.getElementById('det-name').textContent = ex.name;
    document.getElementById('det-xp').textContent = '+' + Math.round(ex.xp * mult) + ' XP';
    document.getElementById('det-diff').textContent = int === 'pro' ? 'Pro ⚡' : int === 'medio' ? 'Medio' : ex.difficulty;
    document.getElementById('det-target').textContent = ex.target;
    document.getElementById('det-dur').textContent = ex.duration;
    document.getElementById('det-sets').textContent = adjSets;
    document.getElementById('det-reps').textContent = adjReps;
    document.getElementById('det-hold').textContent = adjHold ? adjHold + 's' : '--';

    const illust = document.getElementById('det-illust');
    illust.style.display = 'flex';
    illust.innerHTML = SVG_ILLUSTRATIONS[ex.id] || SVG_ILLUSTRATIONS['default'];

    const ben = document.getElementById('det-benefits'); ben.innerHTML = '';
    ex.benefits.forEach(b => { const t = document.createElement('span'); t.className = 'ben-tag'; t.textContent = b; ben.appendChild(t); });

    const steps = document.getElementById('det-steps'); steps.innerHTML = '';
    const stepSvgs = this.getStepIllustrations(ex.id);
    ex.steps.forEach((s, i) => {
      const d = document.createElement('div'); d.className = 'step step-with-img';
      const svg = stepSvgs[i] || '';
      d.innerHTML = (svg ? '<div class="step-svg">' + svg + '</div>' : '') +
        `<div class="step-content"><span class="step-n">${i + 1}</span><span class="step-t">${s}</span></div>`;
      steps.appendChild(d);
    });
    document.getElementById('det-tip').textContent = ex.tips;

    const videoBtn = document.getElementById('btn-video');
    const videoId = EXERCISE_VIDEOS[ex.id];
    const vidTitle = document.getElementById('det-video-title');
    const vidEmbed = document.getElementById('det-video');
    if (videoId) {
      videoBtn.classList.remove('hidden');
      videoBtn.href = 'https://www.youtube.com/watch?v=' + videoId;
      if (vidTitle) vidTitle.classList.remove('hidden');
      if (vidEmbed) {
        vidEmbed.innerHTML = '<iframe src="https://www.youtube.com/embed/' + videoId + '?rel=0&modestbranding=1" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>';
        vidEmbed.classList.remove('hidden');
      }
    } else {
      videoBtn.classList.add('hidden');
      if (vidTitle) vidTitle.classList.add('hidden');
      if (vidEmbed) { vidEmbed.innerHTML = ''; vidEmbed.classList.add('hidden'); }
    }

    const repCounter = document.getElementById('rep-counter');
    if (typeof adjReps === 'number' && adjReps > 0) {
      this.repCount = 0; this.repTarget = adjReps;
      document.getElementById('rc-current').textContent = '0';
      document.getElementById('rc-target').textContent = '/ ' + adjReps;
      document.getElementById('rc-fill').style.width = '0';
      repCounter.style.display = 'block';
    } else { repCounter.style.display = 'none'; }

    this.timerReset();
    if (ex.holdTime) {
      this.timerTotal = adjHold; this.timerSets = adjSets || 1; this.timerSet = 1;
      document.getElementById('timer-time').textContent = this.fmtTime(adjHold);
      document.getElementById('timer-set').textContent = 'Serie 1/' + this.timerSets;
      document.getElementById('timer-section').style.display = 'block';
    } else document.getElementById('timer-section').style.display = 'none';

    document.getElementById('ai-messages').innerHTML = '';
    document.getElementById('ai-input').value = '';
    const sendBtn = document.getElementById('ai-send');
    const inp = document.getElementById('ai-input');
    const newSend = sendBtn.cloneNode(true);
    sendBtn.parentNode.replaceChild(newSend, sendBtn);
    const newInp = inp.cloneNode(true);
    inp.parentNode.replaceChild(newInp, inp);
    newSend.onclick = () => this.aiSend(ex);
    newInp.addEventListener('keydown', e => { if (e.key === 'Enter') this.aiSend(ex); });

    this.go('detail');
  },

  getStepIllustrations(exId) {
    const face = (extras) => `<svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="80" cy="45" rx="35" ry="42" stroke="#7c3aed" stroke-width="1.5" fill="rgba(124,58,237,0.05)"/><circle cx="68" cy="38" r="3" fill="#7c3aed" opacity="0.5"/><circle cx="92" cy="38" r="3" fill="#7c3aed" opacity="0.5"/><path d="M75 52 L80 58 L85 52" stroke="#7c3aed" stroke-width="1" fill="none"/><path d="M68 65 Q80 74 92 65" stroke="#7c3aed" stroke-width="1.5"/>${extras}</svg>`;
    const sleeve = (extras) => `<svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M58 34 Q58 10 80 10 Q102 10 102 34 L102 102 L58 102 Z" fill="rgba(225,29,72,0.08)" stroke="#e11d48" stroke-width="2.5"/><ellipse cx="80" cy="102" rx="22" ry="7" fill="rgba(10,10,20,0.45)" stroke="#e11d48" stroke-width="2.5"/><line x1="68" y1="28" x2="68" y2="98" stroke="#e11d48" stroke-width="1" opacity="0.35"/><line x1="80" y1="20" x2="80" y2="98" stroke="#e11d48" stroke-width="1" opacity="0.35"/><line x1="92" y1="28" x2="92" y2="98" stroke="#e11d48" stroke-width="1" opacity="0.35"/><text x="20" y="16" text-anchor="middle" fill="#6b7280" font-size="6">chiusa</text><text x="20" y="100" text-anchor="middle" fill="#6b7280" font-size="6">apertura</text><text x="20" y="108" text-anchor="middle" fill="#6b7280" font-size="6">(corpo)</text>${extras}</svg>`;
    const db = {
      'gua-sha': [
        face('<rect x="60" y="62" width="40" height="6" rx="3" fill="#22d3ee" opacity="0.4"/><path d="M80 68 L100 62" stroke="#22d3ee" stroke-width="2" marker-end="url(#a1)"/><text x="80" y="95" text-anchor="middle" fill="#22d3ee" font-size="8">Applica olio/siero</text><defs><marker id="a1" viewBox="0 0 6 6" refX="6" refY="3" markerWidth="5" markerHeight="5"><path d="M0 0L6 3L0 6" fill="#22d3ee"/></marker></defs>'),
        face('<path d="M80 68 L108 58" stroke="#22d3ee" stroke-width="2.5" marker-end="url(#a2)"/><path d="M78 70 L106 60" stroke="#22d3ee" stroke-width="1.5" opacity="0.5"/><text x="80" y="95" text-anchor="middle" fill="#22d3ee" font-size="8">Mento → Orecchio</text><defs><marker id="a2" viewBox="0 0 6 6" refX="6" refY="3" markerWidth="5" markerHeight="5"><path d="M0 0L6 3L0 6" fill="#22d3ee"/></marker></defs>'),
        face('<path d="M80 52 L110 42" stroke="#10b981" stroke-width="2.5" marker-end="url(#a3)"/><path d="M78 54 L108 44" stroke="#10b981" stroke-width="1.5" opacity="0.5"/><text x="80" y="95" text-anchor="middle" fill="#10b981" font-size="8">Naso → Orecchio</text><defs><marker id="a3" viewBox="0 0 6 6" refX="6" refY="3" markerWidth="5" markerHeight="5"><path d="M0 0L6 3L0 6" fill="#10b981"/></marker></defs>'),
        face('<path d="M80 18 L110 18" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#a4)"/><path d="M78 20 L108 20" stroke="#f59e0b" stroke-width="1.5" opacity="0.5"/><text x="80" y="95" text-anchor="middle" fill="#f59e0b" font-size="8">Fronte → Tempie</text><defs><marker id="a4" viewBox="0 0 6 6" refX="6" refY="3" markerWidth="5" markerHeight="5"><path d="M0 0L6 3L0 6" fill="#f59e0b"/></marker></defs>'),
        face('<ellipse cx="68" cy="42" rx="10" ry="6" fill="none" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="3,2"/><path d="M68 48 L68 55" stroke="#ec4899" stroke-width="1.5" opacity="0.6"/><text x="80" y="95" text-anchor="middle" fill="#ec4899" font-size="8">Sotto occhi: DELICATO</text>'),
        face('<path d="M60 55 L110 40" stroke="#7c3aed" stroke-width="2"/><path d="M60 65 L110 50" stroke="#7c3aed" stroke-width="2"/><path d="M60 75 L110 60" stroke="#7c3aed" stroke-width="2"/><text x="80" y="95" text-anchor="middle" fill="#7c3aed" font-size="8">Centro → Esterno SEMPRE</text>')
      ],
      'lymph-drainage': [
        face('<circle cx="108" cy="58" r="6" fill="#22d3ee" opacity="0.3" stroke="#22d3ee" stroke-width="1"/><circle cx="52" cy="58" r="6" fill="#22d3ee" opacity="0.3" stroke="#22d3ee" stroke-width="1"/><text x="80" y="95" text-anchor="middle" fill="#22d3ee" font-size="8">Premi sotto le orecchie</text>'),
        face('<path d="M80 68 L80 88" stroke="#10b981" stroke-width="2" marker-end="url(#ld2)"/><path d="M68 65 L68 85" stroke="#10b981" stroke-width="1.5" opacity="0.5"/><path d="M92 65 L92 85" stroke="#10b981" stroke-width="1.5" opacity="0.5"/><text x="80" y="95" text-anchor="middle" fill="#10b981" font-size="8">Mascella → giù verso collo</text><defs><marker id="ld2" viewBox="0 0 6 6" refX="3" refY="6" markerWidth="5" markerHeight="5"><path d="M0 0L3 6L6 0" fill="#10b981"/></marker></defs>'),
        face('<path d="M80 18 L105 25 L108 55" stroke="#f59e0b" stroke-width="2" fill="none" marker-end="url(#ld3)"/><text x="80" y="95" text-anchor="middle" fill="#f59e0b" font-size="8">Fronte → tempie → orecchie</text><defs><marker id="ld3" viewBox="0 0 6 6" refX="3" refY="6" markerWidth="5" markerHeight="5"><path d="M0 0L3 6L6 0" fill="#f59e0b"/></marker></defs>'),
        face('<path d="M72 42 L105 35 L108 55" stroke="#ec4899" stroke-width="2" fill="none"/><text x="80" y="95" text-anchor="middle" fill="#ec4899" font-size="8">Sotto occhi → tempie</text>'),
        face('<path d="M80 55 L80 90" stroke="#7c3aed" stroke-width="2.5" marker-end="url(#ld5)"/><text x="80" y="95" text-anchor="middle" fill="#7c3aed" font-size="8">Collo verso il basso</text><defs><marker id="ld5" viewBox="0 0 6 6" refX="3" refY="6" markerWidth="5" markerHeight="5"><path d="M0 0L3 6L6 0" fill="#7c3aed"/></marker></defs>'),
        face('<path d="M60 50 L50 42" stroke="#ef4444" stroke-width="1.5" opacity="0.6"/><path d="M100 50 L110 42" stroke="#ef4444" stroke-width="1.5" opacity="0.6"/><circle cx="50" cy="42" r="4" fill="none" stroke="#ef4444" stroke-width="1"/><circle cx="110" cy="42" r="4" fill="none" stroke="#ef4444" stroke-width="1"/><text x="80" y="95" text-anchor="middle" fill="#ef4444" font-size="8">Pressione LEGGERA</text>')
      ],
      'cheekbone-sculptor': [
        face('<path d="M65 60 Q80 50 95 60" stroke="#10b981" stroke-width="2" fill="none" stroke-dasharray="3,2"/><path d="M72 62 L72 56" stroke="#10b981" stroke-width="1.5"/><path d="M88 62 L88 56" stroke="#10b981" stroke-width="1.5"/><text x="80" y="95" text-anchor="middle" fill="#10b981" font-size="8">Aspira guance verso dentro</text>'),
        face('<path d="M68 65 Q80 58 92 65" stroke="#10b981" stroke-width="2"/><path d="M64 52 L56 46" stroke="#22d3ee" stroke-width="1.5"/><path d="M96 52 L104 46" stroke="#22d3ee" stroke-width="1.5"/><text x="80" y="95" text-anchor="middle" fill="#22d3ee" font-size="8">Sorridi con guance aspirate</text>'),
        face('<ellipse cx="56" cy="48" rx="10" ry="6" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="1.5"/><ellipse cx="104" cy="48" rx="10" ry="6" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="1.5"/><text x="80" y="95" text-anchor="middle" fill="#f59e0b" font-size="8">Senti tensione sugli zigomi</text>'),
        null, null,
        face('<ellipse cx="56" cy="48" rx="12" ry="7" fill="#7c3aed" opacity="0.2" stroke="#a78bfa" stroke-width="1.5"/><ellipse cx="104" cy="48" rx="12" ry="7" fill="#7c3aed" opacity="0.2" stroke="#a78bfa" stroke-width="1.5"/><text x="80" y="95" text-anchor="middle" fill="#a78bfa" font-size="8">10 reps, 3 serie</text>')
      ],
      'chin-tucks': [
        null,null,
        face('<path d="M80 72 L65 72" stroke="#22d3ee" stroke-width="2.5" marker-end="url(#ct3)"/><text x="80" y="95" text-anchor="middle" fill="#22d3ee" font-size="8">Mento INDIETRO ←</text><defs><marker id="ct3" viewBox="0 0 6 6" refX="0" refY="3" markerWidth="5" markerHeight="5"><path d="M6 0L0 3L6 6" fill="#22d3ee"/></marker></defs>'),
        face('<path d="M80 72 L65 72" stroke="#10b981" stroke-width="2"/><text x="80" y="95" text-anchor="middle" fill="#10b981" font-size="8">Mantieni 5 secondi</text><circle cx="65" cy="72" r="8" fill="none" stroke="#10b981" stroke-width="1" stroke-dasharray="2,2"><animate attributeName="r" values="6;10;6" dur="1.5s" repeatCount="indefinite"/></circle>')
      ],
      'basic-mewing': [
        face('<path d="M68 65 Q80 72 92 65" stroke="#7c3aed" stroke-width="2"/><text x="80" y="95" text-anchor="middle" fill="#7c3aed" font-size="8">Chiudi bocca, denti a contatto</text>'),
        face('<rect x="72" y="14" rx="6" ry="4" width="16" height="8" fill="#22d3ee" opacity="0.3"/><path d="M80 30 L80 20" stroke="#22d3ee" stroke-width="2" marker-end="url(#mw2)"/><text x="80" y="95" text-anchor="middle" fill="#22d3ee" font-size="8">Punta lingua dietro incisivi</text><defs><marker id="mw2" viewBox="0 0 6 6" refX="3" refY="6" markerWidth="5" markerHeight="5"><path d="M0 6L3 0L6 6" fill="#22d3ee"/></marker></defs>'),
        face('<rect x="62" y="12" rx="10" ry="6" width="36" height="14" fill="#10b981" opacity="0.25" stroke="#34d399" stroke-width="1.5"/><path d="M72 28 L72 18" stroke="#34d399" stroke-width="1.5"/><path d="M80 30 L80 16" stroke="#34d399" stroke-width="2"/><path d="M88 28 L88 18" stroke="#34d399" stroke-width="1.5"/><text x="80" y="95" text-anchor="middle" fill="#34d399" font-size="8">TUTTA la lingua sul palato</text>'),
        face('<rect x="62" y="12" rx="10" ry="6" width="36" height="14" fill="#f59e0b" opacity="0.25" stroke="#fbbf24" stroke-width="1.5"/><path d="M90 28 L90 16" stroke="#fbbf24" stroke-width="2.5" marker-end="url(#mw4)"/><text x="80" y="95" text-anchor="middle" fill="#fbbf24" font-size="8">Parte POSTERIORE deve premere</text><defs><marker id="mw4" viewBox="0 0 6 6" refX="3" refY="6" markerWidth="5" markerHeight="5"><path d="M0 6L3 0L6 6" fill="#fbbf24"/></marker></defs>'),
        face('<path d="M75 52 L80 58 L85 52" stroke="#7c3aed" stroke-width="1"/><path d="M70 42 L80 36" stroke="#06b6d4" stroke-width="1.5" stroke-dasharray="3,2"/><path d="M90 42 L80 36" stroke="#06b6d4" stroke-width="1.5" stroke-dasharray="3,2"/><text x="80" y="95" text-anchor="middle" fill="#06b6d4" font-size="8">Respira dal NASO</text>')
      ],
      'cold-water-face': [
        face('<rect x="45" y="20" rx="20" ry="15" width="70" height="55" fill="#06b6d4" opacity="0.15" stroke="#22d3ee" stroke-width="1.5" stroke-dasharray="4,3"/><text x="80" y="95" text-anchor="middle" fill="#22d3ee" font-size="8">Acqua fredda + ghiaccio</text>'),
        face('<rect x="45" y="20" rx="20" ry="15" width="70" height="55" fill="#06b6d4" opacity="0.3"/><text x="80" y="48" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">15s</text><text x="80" y="95" text-anchor="middle" fill="#06b6d4" font-size="8">Immergi viso 15 secondi</text>'),
        null,
        face('<text x="80" y="48" text-anchor="middle" fill="#10b981" font-size="14" font-weight="bold">×3</text><text x="80" y="95" text-anchor="middle" fill="#10b981" font-size="8">Ripeti 3 volte</text>')
      ],
      'face-yoga-debloat': [
        face('<path d="M65 60 Q80 50 95 60" stroke="#f97316" stroke-width="2"/><path d="M72 58 L72 52" stroke="#f97316" stroke-width="1.5"/><path d="M88 58 L88 52" stroke="#f97316" stroke-width="1.5"/><text x="80" y="95" text-anchor="middle" fill="#f97316" font-size="8">FISH FACE: aspira guance</text>'),
        face('<path d="M62 72 Q80 88 98 72" stroke="#ef4444" stroke-width="2.5"/><circle cx="68" cy="35" r="5" fill="none" stroke="#ef4444" stroke-width="1.5"/><circle cx="92" cy="35" r="5" fill="none" stroke="#ef4444" stroke-width="1.5"/><text x="80" y="95" text-anchor="middle" fill="#ef4444" font-size="8">LION FACE: bocca + occhi aperti</text>'),
        face('<ellipse cx="68" cy="55" rx="8" ry="6" fill="#22d3ee" opacity="0.3"/><path d="M68 55 L92 55" stroke="#22d3ee" stroke-width="2" marker-end="url(#fy3)"/><text x="80" y="95" text-anchor="middle" fill="#22d3ee" font-size="8">CHEEK PUFFS: aria dx ↔ sx</text><defs><marker id="fy3" viewBox="0 0 6 6" refX="6" refY="3" markerWidth="5" markerHeight="5"><path d="M0 0L6 3L0 6" fill="#22d3ee"/></marker></defs>')
      ],
      'sleeve-tunnel-traction': [
        null, null,
        sleeve('<path d="M80 118 L80 104" stroke="#22d3ee" stroke-width="2.5" marker-end="url(#tt2)"/><text x="80" y="122" text-anchor="middle" fill="#22d3ee" font-size="8">Inserisci — erezione ~60%</text><defs><marker id="tt2" viewBox="0 0 6 6" refX="3" refY="0" markerWidth="5" markerHeight="5"><path d="M0 6L3 0L6 6" fill="#22d3ee"/></marker></defs>'),
        sleeve('<ellipse cx="80" cy="22" rx="26" ry="9" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5,3"/><rect x="30" y="15" width="10" height="14" rx="5" fill="#f59e0b"/><text x="80" y="122" text-anchor="middle" fill="#f59e0b" font-size="8">Afferra la PUNTA CHIUSA</text>'),
        sleeve('<ellipse cx="80" cy="22" rx="26" ry="9" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5,3"/><rect x="30" y="15" width="10" height="14" rx="5" fill="#f59e0b"/><path d="M80 13 L80 1" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#tt4)"/><text x="80" y="122" text-anchor="middle" fill="#f59e0b" font-size="8">Tira dritto, senza strappare</text><defs><marker id="tt4" viewBox="0 0 6 6" refX="3" refY="0" markerWidth="5" markerHeight="5"><path d="M0 6L3 0L6 6" fill="#f59e0b"/></marker></defs>'),
        sleeve('<circle cx="80" cy="22" r="14" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2,2"><animate attributeName="r" values="12;17;12" dur="1.6s" repeatCount="indefinite"/></circle><text x="80" y="60" text-anchor="middle" fill="#10b981" font-size="13" font-weight="bold">60s</text><text x="80" y="122" text-anchor="middle" fill="#10b981" font-size="8">Mantieni la tensione</text>')
      ],
      'sleeve-canal-glide-jelq': [
        null, null,
        sleeve('<path d="M80 118 L80 104" stroke="#22d3ee" stroke-width="2.5" marker-end="url(#cg2)"/><text x="80" y="122" text-anchor="middle" fill="#22d3ee" font-size="8">Inserisci — erezione 70-80%</text><defs><marker id="cg2" viewBox="0 0 6 6" refX="3" refY="0" markerWidth="5" markerHeight="5"><path d="M0 6L3 0L6 6" fill="#22d3ee"/></marker></defs>'),
        sleeve('<ellipse cx="80" cy="88" rx="26" ry="9" fill="none" stroke="#22d3ee" stroke-width="3" stroke-dasharray="5,3"/><rect x="30" y="81" width="10" height="14" rx="5" fill="#22d3ee"/><text x="80" y="122" text-anchor="middle" fill="#22d3ee" font-size="8">Anello pollice-indice qui</text>'),
        sleeve('<path d="M80 88 L80 30" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#cg4)"/><path d="M68 66 L92 66" stroke="#f59e0b" stroke-width="1.5" opacity="0.5"/><path d="M68 48 L92 48" stroke="#f59e0b" stroke-width="1.5" opacity="0.5"/><text x="80" y="122" text-anchor="middle" fill="#f59e0b" font-size="8">Scorri lento verso la punta</text><defs><marker id="cg4" viewBox="0 0 6 6" refX="3" refY="0" markerWidth="5" markerHeight="5"><path d="M0 6L3 0L6 6" fill="#f59e0b"/></marker></defs>'),
        sleeve('<ellipse cx="80" cy="88" rx="16" ry="8" fill="#ef4444" opacity="0.18" stroke="#ef4444" stroke-width="1.5"/><text x="80" y="60" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="bold">5s</text><text x="80" y="122" text-anchor="middle" fill="#ef4444" font-size="8">Pressione alla base</text>')
      ],
      'sleeve-two-point-stretch': [
        null,
        sleeve('<path d="M80 118 L80 104" stroke="#22d3ee" stroke-width="2.5" marker-end="url(#tp1)"/><text x="80" y="122" text-anchor="middle" fill="#22d3ee" font-size="8">Inserisci — erezione 50-60%</text><defs><marker id="tp1" viewBox="0 0 6 6" refX="3" refY="0" markerWidth="5" markerHeight="5"><path d="M0 6L3 0L6 6" fill="#22d3ee"/></marker></defs>'),
        sleeve('<ellipse cx="80" cy="88" rx="26" ry="9" fill="none" stroke="#22d3ee" stroke-width="3" stroke-dasharray="5,3"/><rect x="30" y="81" width="10" height="14" rx="5" fill="#22d3ee"/><text x="80" y="122" text-anchor="middle" fill="#22d3ee" font-size="8">Mano 1: ferma alla base</text>'),
        sleeve('<ellipse cx="80" cy="88" rx="26" ry="9" fill="none" stroke="#22d3ee" stroke-width="2" stroke-dasharray="5,3" opacity="0.5"/><ellipse cx="80" cy="22" rx="26" ry="9" fill="none" stroke="#7c3aed" stroke-width="3" stroke-dasharray="5,3"/><rect x="120" y="15" width="10" height="14" rx="5" fill="#7c3aed"/><path d="M108 22 L120 22" stroke="#7c3aed" stroke-width="2.5" marker-end="url(#tp3)"/><text x="80" y="122" text-anchor="middle" fill="#7c3aed" font-size="8">Mano 2: tira la punta</text><defs><marker id="tp3" viewBox="0 0 6 6" refX="6" refY="3" markerWidth="5" markerHeight="5"><path d="M0 0L6 3L0 6" fill="#7c3aed"/></marker></defs>'),
        sleeve('<ellipse cx="80" cy="88" rx="26" ry="9" fill="none" stroke="#22d3ee" stroke-width="2" stroke-dasharray="5,3" opacity="0.5"/><ellipse cx="80" cy="22" rx="26" ry="9" fill="none" stroke="#7c3aed" stroke-width="3" stroke-dasharray="5,3"/><text x="80" y="60" text-anchor="middle" fill="#7c3aed" font-size="13" font-weight="bold">10s</text><text x="80" y="122" text-anchor="middle" fill="#7c3aed" font-size="8">Mantieni la trazione</text>'),
        sleeve('<ellipse cx="80" cy="88" rx="26" ry="9" fill="none" stroke="#22d3ee" stroke-width="2" stroke-dasharray="5,3" opacity="0.5"/><path d="M60 20 L40 26" stroke="#ec4899" stroke-width="2.5" marker-end="url(#tp5a)"/><path d="M100 20 L120 26" stroke="#ec4899" stroke-width="2.5" marker-end="url(#tp5b)"/><path d="M80 32 L80 44" stroke="#ec4899" stroke-width="2.5" marker-end="url(#tp5c)"/><text x="80" y="122" text-anchor="middle" fill="#ec4899" font-size="8">Sx · Dx · Giù, 10s ciascuna</text><defs><marker id="tp5a" viewBox="0 0 6 6" refX="6" refY="3" markerWidth="5" markerHeight="5"><path d="M0 0L6 3L0 6" fill="#ec4899"/></marker><marker id="tp5b" viewBox="0 0 6 6" refX="0" refY="3" markerWidth="5" markerHeight="5"><path d="M6 0L0 3L6 6" fill="#ec4899"/></marker><marker id="tp5c" viewBox="0 0 6 6" refX="3" refY="6" markerWidth="5" markerHeight="5"><path d="M0 0L3 6L6 0" fill="#ec4899"/></marker></defs>')
      ],
      'sleeve-progressive-hold': [
        null, null,
        sleeve('<path d="M80 118 L80 60" stroke="#22d3ee" stroke-width="2.5" marker-end="url(#ph2)"/><text x="80" y="122" text-anchor="middle" fill="#22d3ee" font-size="8">Inserisci lento, senza forzare</text><defs><marker id="ph2" viewBox="0 0 6 6" refX="3" refY="0" markerWidth="5" markerHeight="5"><path d="M0 6L3 0L6 6" fill="#22d3ee"/></marker></defs>'),
        sleeve('<line x1="60" y1="55" x2="100" y2="55" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,2"/><text x="80" y="122" text-anchor="middle" fill="#f59e0b" font-size="8">Ok fermarsi a metà, è normale</text>'),
        sleeve('<circle cx="80" cy="55" r="14" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2,2"><animate attributeName="r" values="12;18;12" dur="1.8s" repeatCount="indefinite"/></circle><text x="80" y="122" text-anchor="middle" fill="#10b981" font-size="8">Fermo 90s, respira</text>'),
        null,
        sleeve('<line x1="64" y1="60" x2="96" y2="60" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="2,2" opacity="0.6"/><line x1="64" y1="38" x2="96" y2="38" stroke="#a78bfa" stroke-width="2" stroke-dasharray="3,2"/><path d="M80 58 L80 42" stroke="#a78bfa" stroke-width="2" marker-end="url(#ph6)"/><text x="80" y="122" text-anchor="middle" fill="#a78bfa" font-size="8">×5, avvicinati ogni volta</text><defs><marker id="ph6" viewBox="0 0 6 6" refX="3" refY="0" markerWidth="5" markerHeight="5"><path d="M0 6L3 0L6 6" fill="#a78bfa"/></marker></defs>')
      ],
      'sleeve-twist-grip-stretch': [
        null,
        sleeve('<path d="M80 118 L80 104" stroke="#22d3ee" stroke-width="2.5" marker-end="url(#tw1)"/><text x="80" y="122" text-anchor="middle" fill="#22d3ee" font-size="8">Inserisci — erezione 50-60%</text><defs><marker id="tw1" viewBox="0 0 6 6" refX="3" refY="0" markerWidth="5" markerHeight="5"><path d="M0 6L3 0L6 6" fill="#22d3ee"/></marker></defs>'),
        sleeve('<ellipse cx="80" cy="88" rx="26" ry="9" fill="none" stroke="#22d3ee" stroke-width="3" stroke-dasharray="5,3"/><rect x="30" y="81" width="10" height="14" rx="5" fill="#22d3ee"/><ellipse cx="80" cy="22" rx="26" ry="9" fill="none" stroke="#ec4899" stroke-width="3" stroke-dasharray="5,3"/><rect x="120" y="15" width="10" height="14" rx="5" fill="#ec4899"/><text x="80" y="122" text-anchor="middle" fill="#a78bfa" font-size="8">Doppia presa: base + punta</text>'),
        sleeve('<path d="M60 82 A22 10 0 1 1 60 94" stroke="#22d3ee" stroke-width="2.5" fill="none" marker-end="url(#tw3a)"/><path d="M100 16 A22 10 0 1 0 100 28" stroke="#ec4899" stroke-width="2.5" fill="none" marker-end="url(#tw3b)"/><path d="M80 32 L80 50" stroke="#ec4899" stroke-width="2.5" marker-end="url(#tw3c)"/><text x="80" y="122" text-anchor="middle" fill="#ec4899" font-size="8">Torci opposto, tira giù</text><defs><marker id="tw3a" viewBox="0 0 6 6" refX="3" refY="6" markerWidth="5" markerHeight="5"><path d="M0 0L3 6L6 0" fill="#22d3ee"/></marker><marker id="tw3b" viewBox="0 0 6 6" refX="3" refY="0" markerWidth="5" markerHeight="5"><path d="M0 6L3 0L6 6" fill="#ec4899"/></marker><marker id="tw3c" viewBox="0 0 6 6" refX="3" refY="6" markerWidth="5" markerHeight="5"><path d="M0 0L3 6L6 0" fill="#ec4899"/></marker></defs>'),
        sleeve('<circle cx="80" cy="55" r="16" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2,2"><animate attributeName="r" values="14;20;14" dur="1.8s" repeatCount="indefinite"/></circle><text x="80" y="122" text-anchor="middle" fill="#10b981" font-size="8">Tieni torsione 45s</text>'),
        sleeve('<path d="M100 82 A22 10 0 1 0 100 94" stroke="#22d3ee" stroke-width="2.5" fill="none" marker-end="url(#tw5a)"/><path d="M60 16 A22 10 0 1 1 60 28" stroke="#06b6d4" stroke-width="2.5" fill="none" marker-end="url(#tw5b)"/><path d="M80 50 L80 32" stroke="#06b6d4" stroke-width="2.5" marker-end="url(#tw5c)"/><text x="80" y="122" text-anchor="middle" fill="#06b6d4" font-size="8">Verso opposto, tira su</text><defs><marker id="tw5a" viewBox="0 0 6 6" refX="3" refY="6" markerWidth="5" markerHeight="5"><path d="M0 0L3 6L6 0" fill="#22d3ee"/></marker><marker id="tw5b" viewBox="0 0 6 6" refX="3" refY="0" markerWidth="5" markerHeight="5"><path d="M0 6L3 0L6 6" fill="#06b6d4"/></marker><marker id="tw5c" viewBox="0 0 6 6" refX="3" refY="0" markerWidth="5" markerHeight="5"><path d="M0 6L3 0L6 6" fill="#06b6d4"/></marker></defs>')
      ]
    };
    return db[exId] || [];
  },

  aiSend(ex) {
    const inp = document.getElementById('ai-input');
    const q = inp.value.trim();
    if (!q) return;
    inp.value = '';
    const msgs = document.getElementById('ai-messages');
    msgs.innerHTML += '<div class="ai-msg user">' + q + '</div>';
    const answer = this.aiAnswer(q, ex);
    setTimeout(() => {
      msgs.innerHTML += '<div class="ai-msg bot">' + answer + '</div>';
      msgs.scrollTop = msgs.scrollHeight;
    }, 400);
  },

  aiAnswer(q, ex) {
    const ql = q.toLowerCase();
    const name = ex.name;
    const kb = [
      { keys: ['risultat', 'tempo', 'quanto', 'quando', 'vedro', 'funzion', 'serve'], answer: 'Per <b>' + name + '</b>, i primi miglioramenti si notano dopo <b>2-4 settimane</b> di pratica costante. Risultati significativi dopo <b>2-3 mesi</b>. La chiave è la costanza quotidiana — anche 5 minuti ogni giorno sono meglio di 30 minuti una volta a settimana.' },
      { keys: ['ogni giorno', 'tutti i giorni', 'frequenz', 'quante volte', 'spesso'], answer: ex.difficultyLevel >= 3 ? '<b>' + name + '</b> è avanzato — fallo <b>3-4 volte a settimana</b> a giorni alterni per il recupero.' : 'Sì, <b>' + name + '</b> si può fare <b>ogni giorno</b>! I muscoli facciali recuperano velocemente. Ideale mattina e sera.' },
      { keys: ['errori', 'sbaglia', 'non fare', 'evitar', 'pericol', 'rischi'], answer: 'Errori comuni con <b>' + name + '</b>: 1) Non forzare movimenti dolorosi. 2) Non compensare con muscoli sbagliati. 3) Non esagerare il primo giorno. 4) Mantieni postura corretta. 5) Se senti dolore alla ATM, fermati subito.' },
      { keys: ['combin', 'insieme', 'abbina', 'dopo', 'prima', 'sequenz'], answer: 'Abbina <b>' + name + '</b> con esercizi della stessa categoria. Ordine: riscaldamento (principiante) → esercizi intensi → stretching. Dopo gli esercizi facciali, applica skincare — l\'assorbimento è massimo.' },
      { keys: ['mewing', 'lingua', 'palato'], answer: 'Il <b>mewing</b> è la base di tutto: lingua INTERA contro il palato, 24/7. La punta dietro gli incisivi, ma soprattutto la PARTE POSTERIORE deve premere. Respira dal naso. Dopo 2 settimane diventa automatico. Serve pazienza: 6-12 mesi per risultati strutturali.' },
      { keys: ['jawline', 'mascella', 'mandibola', 'masseter'], answer: 'Per la <b>jawline</b>: 1) Gomma dura (Falim/Mastic) 20-30 min/giorno. 2) Chin tucks 3x15 ogni giorno. 3) Body fat sotto il 15% per far emergere la struttura. I masseteri possono crescere del 15-20% in 3 mesi con masticazione intensa.' },
      { keys: ['pelle', 'skin', 'acne', 'brufol', 'skincare'], answer: 'Routine minima: <b>Detergente + Vitamina C + SPF</b> al mattino. <b>Detergente + Retinolo + Idratante</b> la sera. Il retinolo è il #1 anti-aging. SPF OGNI giorno, anche in inverno. Risultati visibili in 2-4 settimane.' },
      { keys: ['gonfi', 'bloat', 'sgonfi', 'ritenzione', 'acqua'], answer: 'Per <b>sgonfiare il viso</b>: 1) Riduci sodio sotto 1.5g/giorno. 2) Bevi 3L acqua. 3) Acqua fredda sul viso ogni mattina. 4) Gua sha 5 min/giorno. 5) Dormi con testa rialzata. 6) Elimina alcol. Risultati in 3-5 giorni.' },
      { keys: ['zigom', 'cheek', 'guanc', 'hollow'], answer: 'Per <b>zigomi prominenti</b>: 1) Cheekbone sculptor (aspira guance + sorridi) 3x10. 2) Riduci body fat sotto 12% per hollow cheeks. 3) Mewing sviluppa il terzo medio. 4) Face yoga per tonificare. Il BF% è il fattore principale.' },
      { keys: ['occhi', 'eye', 'occhiai', 'bors', 'palpebre'], answer: 'Per la <b>zona occhi</b>: 1) Contorno occhi con caffeina per le borse. 2) Vitamina K per le occhiaie. 3) Eye lifts 3x15 per tonificare. 4) Dormire 8+ ore. 5) Impacchi freddi al mattino. 6) SPF per prevenire rughe.' },
      { keys: ['naso', 'nose'], answer: 'Il <b>naso</b> è largamente genetico, ma puoi: 1) Nose shaper exercise per tonificare i muscoli nasali. 2) Skincare zona T per pori minimizzati. 3) Respirazione nasale 24/7 (allarga le vie nasali nel tempo). 4) Contorno con makeup se vuoi effetto immediato.' },
      { keys: ['kegel', 'pelvic', 'pavimento'], answer: 'I <b>kegel</b> rafforzano il muscolo PC: contrai (come per fermare la pipì) per 5 sec, rilascia 5 sec, 15 reps x 3 serie. Dopo 4 settimane passa a 10 sec hold. I <b>reverse kegel</b> (spingi fuori) sono altrettanto importanti per l\'equilibrio.' },
      { keys: ['durata', 'stamina', 'resistenz', 'durare'], answer: 'Per la <b>resistenza</b>: 1) Kegel + reverse kegel ogni giorno. 2) Respirazione 4-7-8 (calma il sistema nervoso). 3) Start-stop technique durante la pratica. 4) Cardio 30 min 3x/settimana. 5) È 70% mentale — pratica mindfulness.' },
      { keys: ['dieta', 'mangia', 'cibo', 'alimentaz', 'nutrizione'], answer: '<b>Alimentazione looksmaxing</b>: Proteine 2g/kg, Omega-3 (salmone, noci), Vitamina D 4000UI, Zinco 30mg, Collagene 10g. EVITA: zuccheri, alcol, latticini in eccesso, cibi processati. BF ideale: 10-15% per jawline, sotto 12% per zigomi.' },
      { keys: ['integrator', 'supplement', 'vitam'], answer: '<b>Stack integratori base</b>: Vitamina D3 4000UI + K2 100mcg, Omega-3 2-3g, Zinco 30mg, Collagene 10g, Vitamina C 1000mg. <b>Avanzato</b>: + Ashwagandha 600mg, Biotina 5000mcg, Magnesio 400mg.' },
      { keys: ['testosterone', 'testo', 'ormoni'], answer: 'Aumenta il <b>testosterone naturalmente</b>: 1) Dormi 8+ ore. 2) Pesi pesanti (squat, stacco). 3) Grassi sani 30% calorie. 4) Vitamina D + Zinco + Magnesio. 5) Ashwagandha 600mg. 6) Evita alcol e stress. Aumento possibile: 20-40%.' },
      { keys: ['postura', 'schiena', 'collo', 'spalle'], answer: 'La <b>postura</b> cambia tutto il look: 1) Chin tucks ogni ora. 2) Wall angels 3x12. 3) Scapular squeeze 4x15. 4) Allunga i pettorali. Una postura corretta può aggiungere 2-4 cm di altezza percepita e migliora drasticamente la jawline di profilo.' }
    ];
    for (const item of kb) {
      if (item.keys.some(k => ql.includes(k))) return item.answer;
    }
    return 'Per <b>' + name + '</b>: esegui ' + ex.sets + 'x' + ex.reps + ', durata ' + ex.duration + '. ' + ex.tips + ' Prova a chiedermi di: risultati, frequenza, errori, combinazioni, o qualsiasi area specifica (jawline, mewing, pelle, zigomi, occhi, dieta, integratori, postura).';
  },

  // ── TIMER ──
  timerToggle() { this.timerOn ? this.timerPause() : this.timerStart(); },
  timerBeep(freq, dur) {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.frequency.value = freq || 880;
      gain.gain.value = 0.3;
      osc.start(); osc.stop(ctx.currentTime + (dur || 0.15));
    } catch(e) {}
  },
  timerVibrate(pattern) {
    try { if (navigator.vibrate) navigator.vibrate(pattern); } catch(e) {}
  },
  timerStart() {
    if (this.timerSec <= 0) this.timerSec = this.timerTotal;
    this.timerOn = true;
    document.getElementById('btn-play').innerHTML = '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
    this.timerInt = setInterval(() => {
      this.timerSec--;
      if (this.timerSec === 3 || this.timerSec === 2 || this.timerSec === 1) {
        this.timerBeep(660, 0.1);
        this.timerVibrate([100]);
      }
      if (this.timerSec <= 0) {
        this.timerBeep(1200, 0.3);
        this.timerVibrate([200, 100, 200]);
        if (this.timerSet < this.timerSets) {
          this.timerSet++; this.timerSec = this.timerTotal;
          document.getElementById('timer-set').textContent = 'Serie ' + this.timerSet + '/' + this.timerSets;
          this.toast('🔔', 'Serie ' + this.timerSet + '!');
        } else {
          this.timerBeep(1400, 0.5);
          this.timerVibrate([200, 100, 200, 100, 300]);
          this.timerPause(); this.toast('🎉', 'Completato!'); this.timerSec = 0;
        }
      }
      this.timerUpdate();
    }, 1000);
  },
  timerPause() {
    this.timerOn = false; clearInterval(this.timerInt);
    document.getElementById('btn-play').innerHTML = '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21"/></svg>';
  },
  timerReset() {
    this.timerPause(); this.timerSec = this.timerTotal; this.timerSet = 1; this.timerUpdate();
    document.getElementById('timer-set').textContent = 'Serie 1/' + this.timerSets;
  },
  timerUpdate() {
    document.getElementById('timer-time').textContent = this.fmtTime(Math.max(0, this.timerSec));
    const circ = 2 * Math.PI * 80;
    document.getElementById('timer-ring').style.strokeDashoffset = circ * (1 - (this.timerTotal > 0 ? this.timerSec / this.timerTotal : 1));
  },
  fmtTime(s) { return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); },

  completeEx() {
    if (!this.curEx) return;
    const log = this.getLog();
    log.push({ id: this.curEx.id, name: this.curEx.name, icon: this.curEx.icon, cat: this.curCat, date: new Date().toISOString(), sets: this.curEx.sets, reps: this.curEx.reps });
    localStorage.setItem('lm_log', JSON.stringify(log));
    this.addXP(this.curEx.xp || 15);
    this.updateStreak();
    this.toast('✅', this.curEx.name + ' +' + (this.curEx.xp || 15) + ' XP');
    this.timerPause();
    setTimeout(() => this.back(), 600);
  },

  // ── NOTIFICATIONS ──
  async enableNotif() {
    try {
      const perm = await Notification.requestPermission();
      if (perm === 'granted') {
        this.saveProf({ notif: true });
        document.getElementById('notif-card').style.display = 'none';
        document.getElementById('notif-toggle').checked = true;
        this.scheduleNotifs();
        this.toast('🔔', 'Notifiche attivate!');
      }
    } catch { this.toast('❌', 'Notifiche non supportate'); }
  },

  scheduleNotifs() {
    if (!('serviceWorker' in navigator) || Notification.permission !== 'granted') return;
    const now = new Date();
    NOTIFICATION_SCHEDULES.forEach(ns => {
      const target = new Date(now);
      target.setHours(ns.hour, ns.minute, 0, 0);
      if (target <= now) target.setDate(target.getDate() + 1);
      const delay = target - now;
      navigator.serviceWorker.ready.then(reg => {
        reg.active.postMessage({ type: 'SCHEDULE_NOTIFICATION', title: ns.title, body: ns.body, delay });
      });
    });
  },

  // ── PROGRESS ──
  renderProgress() {
    const scans = this.getScans(), log = this.getLog(), streak = this.getStreak();
    document.getElementById('st-scans').textContent = scans.length;
    document.getElementById('st-exs').textContent = log.length;
    document.getElementById('st-streak').textContent = streak;

    this.renderStreakCalendar();
    this.renderBodyMeasures();

    if (scans.length >= 2) {
      document.getElementById('no-chart').style.display = 'none';
      document.getElementById('chart-canvas').style.display = 'block';
      this.drawChart(scans);
    } else { document.getElementById('no-chart').style.display = 'block'; document.getElementById('chart-canvas').style.display = 'none'; }

    const sh = document.getElementById('scan-history'); sh.innerHTML = '';
    if (!scans.length) { sh.innerHTML = '<p class="no-data">Nessuna scansione</p>'; }
    else scans.slice().reverse().slice(0, 10).forEach((s, i) => {
      const dt = new Date(s.date);
      const prev = i < scans.length - 1 ? scans[scans.length - 2 - i] : null;
      let delta = '';
      if (prev) { const d = s.scores.overall - prev.scores.overall; delta = d > 0 ? `<span class="sh-delta up">+${d.toFixed(1)}</span>` : d < 0 ? `<span class="sh-delta dn">${d.toFixed(1)}</span>` : ''; }
      const el = document.createElement('div'); el.className = 'sh-item';
      el.innerHTML = `<div class="sh-sc">${s.scores.overall}</div><div class="sh-info"><b>${dt.toLocaleDateString('it-IT', { day: 'numeric', month: 'long' })}</b><small>Jaw: ${s.scores.jawline} | Sim: ${s.scores.symmetry} | Pelle: ${s.scores.skin}</small></div>${delta}`;
      sh.appendChild(el);
    });

    const el = document.getElementById('ex-log'); el.innerHTML = '';
    if (!log.length) { el.innerHTML = '<p class="no-data">Nessun esercizio</p>'; }
    else log.slice().reverse().slice(0, 15).forEach(e => {
      const d = document.createElement('div'); d.className = 'log-item';
      d.innerHTML = `<span class="li-icon">${e.icon}</span><div class="li-info"><div class="li-name">${e.name}</div><div class="li-date">${new Date(e.date).toLocaleDateString('it-IT')} • ${e.sets}x${e.reps}</div></div>`;
      el.appendChild(d);
    });
  },

  drawChart(scans) {
    const canvas = document.getElementById('chart-canvas');
    const box = canvas.parentElement;
    canvas.width = box.clientWidth - 28; canvas.height = box.clientHeight - 28;
    const ctx = canvas.getContext('2d'), w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    const pad = { t: 16, r: 16, b: 24, l: 30 }, cw = w - pad.l - pad.r, ch = h - pad.t - pad.b;

    ctx.strokeStyle = 'rgba(255,255,255,0.05)'; ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = pad.t + (ch / 4) * i;
      ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(w - pad.r, y); ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '9px Inter'; ctx.textAlign = 'right';
      ctx.fillText(String(10 - i * 2.5), pad.l - 6, y + 3);
    }

    const pts = scans.slice(-10).map((s, i, a) => ({
      x: pad.l + (cw / Math.max(a.length - 1, 1)) * i,
      y: pad.t + ch - (s.scores.overall / 10) * ch,
      s: s.scores.overall, d: new Date(s.date)
    }));
    if (pts.length === 1) pts[0].x = pad.l + cw / 2;

    const grad = ctx.createLinearGradient(0, pad.t, 0, h - pad.b);
    grad.addColorStop(0, 'rgba(124,58,237,0.25)'); grad.addColorStop(1, 'rgba(124,58,237,0)');
    ctx.beginPath(); ctx.moveTo(pts[0].x, h - pad.b);
    pts.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.lineTo(pts[pts.length - 1].x, h - pad.b); ctx.closePath(); ctx.fillStyle = grad; ctx.fill();

    const lg = ctx.createLinearGradient(pad.l, 0, w - pad.r, 0);
    lg.addColorStop(0, '#7c3aed'); lg.addColorStop(1, '#06b6d4');
    ctx.beginPath(); ctx.strokeStyle = lg; ctx.lineWidth = 2; ctx.lineJoin = 'round';
    pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)); ctx.stroke();

    pts.forEach(p => { ctx.beginPath(); ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2); ctx.fillStyle = '#7c3aed'; ctx.fill(); ctx.strokeStyle = '#a78bfa'; ctx.lineWidth = 1.5; ctx.stroke(); });
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.font = '8px Inter'; ctx.textAlign = 'center';
    pts.forEach(p => ctx.fillText(p.d.getDate() + '/' + (p.d.getMonth() + 1), p.x, h - pad.b + 14));
  },

  // ── PROFILE ──
  renderProfile() {
    const p = this.getProf();
    document.getElementById('inp-name').value = p.name || '';
    document.getElementById('inp-age').value = p.age || '';
    document.getElementById('inp-gender').value = p.gender || 'male';
    document.getElementById('prof-name').textContent = p.name || 'Utente';
    const lv = this.getLevel(this.getXP());
    document.getElementById('prof-level-label').textContent = 'Livello ' + lv + ' • ' + this.getXP() + ' XP';
    document.getElementById('notif-toggle').checked = !!p.notif;
    if (p.goals) document.querySelectorAll('.gc-check').forEach(c => c.checked = p.goals.includes(c.dataset.g));
  },

  // ── STORAGE ──
  getProf() { try { return JSON.parse(localStorage.getItem('lm_prof') || '{}'); } catch { return {}; } },
  saveProf(d) { localStorage.setItem('lm_prof', JSON.stringify({ ...this.getProf(), ...d })); },
  loadProfile() { const p = this.getProf(); if (p.level) this.routineLevel = p.level; },
  getScans() { try { return JSON.parse(localStorage.getItem('lm_scans') || '[]'); } catch { return []; } },
  getLog() { try { return JSON.parse(localStorage.getItem('lm_log') || '[]'); } catch { return []; } },
  getXP() { try { return parseInt(localStorage.getItem('lm_xp') || '0'); } catch { return 0; } },
  addXP(n) { const xp = this.getXP() + n; localStorage.setItem('lm_xp', String(xp)); return xp; },
  getLevel(xp) { for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) { if (xp >= LEVEL_THRESHOLDS[i]) return i + 1; } return 1; },
  getStreak() { try { return JSON.parse(localStorage.getItem('lm_streak') || '{"c":0}').c || 0; } catch { return 0; } },
  updateStreak() {
    const today = new Date().toDateString();
    let d; try { d = JSON.parse(localStorage.getItem('lm_streak') || '{}'); } catch { d = {}; }
    if (d.d === today) return;
    const y = new Date(); y.setDate(y.getDate() - 1);
    d.c = d.d === y.toDateString() ? (d.c || 0) + 1 : 1;
    d.d = today;
    localStorage.setItem('lm_streak', JSON.stringify(d));
  },
  findExInCat(id, cat) { return EXERCISES[cat]?.exercises.find(e => e.id === id); },

  renderPersonalRoutine(container) {
    const saved = this.getCustomRoutine();
    const intensities = this.getIntensities();
    const hasExercises = Object.values(saved).some(arr => arr && arr.length > 0);
    if (!hasExercises) {
      container.innerHTML = `<div style="text-align:center;padding:32px 16px"><p style="font-size:14px;color:var(--t2);margin-bottom:16px">La tua routine personale è vuota.</p><p style="font-size:12px;color:var(--t3);margin-bottom:20px">Fai una scansione, tocca i punteggi e aggiungi esercizi, oppure usa "Personalizza Routine".</p></div>`;
      return;
    }
    const TIME_BANDS = {
      mewing: { time: '🌅 Mattina + 🌙 Sera', note: 'Pratica appena sveglio e prima di dormire' },
      jawline: { time: '☀️ Pomeriggio', note: 'Dopo pranzo, muscoli caldi' },
      faceYoga: { time: '🌅 Mattina', note: 'Appena sveglio per attivare la circolazione' },
      neck: { time: '🌅 Mattina', note: 'Prima di iniziare la giornata' },
      skincare: { time: '🌅 Mattina + 🌙 Sera', note: 'Routine AM e PM' },
      debloat: { time: '🌅 Mattina presto', note: 'Appena sveglio per sgonfiare' },
      manhood: { time: '🌙 Sera', note: 'In privato, rilassato' },
      lifestyle: { time: '⏰ Tutto il giorno', note: 'Abitudini costanti' }
    };
    Object.entries(saved).forEach(([catId, exIds]) => {
      if (!exIds || !exIds.length) return;
      const cat = EXERCISES[catId]; if (!cat) return;
      const tb = TIME_BANDS[catId] || { time: '⏰ Qualsiasi', note: '' };
      const pd = document.createElement('div'); pd.className = 'r-period';
      pd.innerHTML = `<div class="r-period-title">${cat.icon} ${cat.name}</div><div style="font-size:10px;color:var(--t3);margin:-4px 0 8px;padding-left:4px">${tb.time} — ${tb.note}</div>`;
      exIds.forEach(exId => {
        const ex = cat.exercises.find(e => e.id === exId); if (!ex) return;
        const key = 'personal_' + catId + '_' + exId;
        const done = this.doneRoutine.has(key);
        const currentInt = intensities[exId] || 'base';
        const multiplier = currentInt === 'pro' ? 2 : currentInt === 'medio' ? 1.5 : 1;
        const adjSets = typeof ex.sets === 'number' ? Math.round(ex.sets * multiplier) : ex.sets;
        const adjReps = typeof ex.reps === 'number' ? Math.round(ex.reps * multiplier) : ex.reps;
        const el = document.createElement('div'); el.className = 'r-item' + (done ? ' done' : '');
        el.style.flexWrap = 'wrap';
        const lvLabel = currentInt === 'pro' ? 'Pro' : currentInt === 'medio' ? 'Medio' : 'Base';
        el.innerHTML = `<span class="ri-icon">${ex.icon}</span><div class="ri-info"><div class="ri-name">${ex.name}</div><div class="ri-note">${adjSets}x${adjReps} • ${ex.duration}</div></div><div class="ri-check"></div>
          <div class="int-wrap">
            <div class="int-badge" data-lv="${currentInt}" id="badge-${exId}">
              ${lvLabel} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
            <div class="int-btns" id="btns-${exId}">
              <button class="int-btn ${currentInt==='base'?'int-active':''}" data-ex="${exId}" data-lv="base">Base</button>
              <button class="int-btn ${currentInt==='medio'?'int-active':''}" data-ex="${exId}" data-lv="medio">Medio</button>
              <button class="int-btn ${currentInt==='pro'?'int-active':''}" data-ex="${exId}" data-lv="pro">Pro</button>
            </div>
          </div>`;
        el.querySelector('.ri-name').onclick = (e) => { e.stopPropagation(); if (!done) { this.doneRoutine.add(key); el.classList.add('done'); } this.openDetail(ex, catId, currentInt); };
        el.querySelector('.int-badge').onclick = (e) => {
          e.stopPropagation();
          const btns = document.getElementById('btns-' + exId);
          btns.classList.toggle('open');
        };
        el.querySelectorAll('.int-btn').forEach(btn => {
          btn.onclick = (e) => {
            e.stopPropagation();
            const lv = btn.dataset.lv;
            intensities[exId] = lv;
            localStorage.setItem('lm_intensities', JSON.stringify(intensities));
            this.renderRoutine();
            this.toast('⚡', ex.name + ' → ' + lv.charAt(0).toUpperCase() + lv.slice(1));
          };
        });
        pd.appendChild(el);
      });
      container.appendChild(pd);
    });
  },

  getIntensities() {
    try { return JSON.parse(localStorage.getItem('lm_intensities') || '{}'); } catch { return {}; }
  },

  // ── SCORE DETAIL (clickable scores) ──
  getSpecificAdvice(catId, score) {
    const advice = {
      symmetry: { lo: 'Il tuo viso mostra asimmetria significativa. Il mewing costante e dormire sulla schiena possono correggere gradualmente questo squilibrio.', mid: 'Simmetria discreta. Mantieni il mewing 24/7 e evita di dormire su un lato per non peggiorare.', hi: 'Ottima simmetria! Continua con le buone abitudini posturali.' },
      jawline: { lo: 'La tua mascella appare repressa o poco definita. Serve lavoro intenso sui masseteri con gomma dura e jaw clenches, combinato con riduzione del grasso corporeo.', mid: 'Jawline presente ma migliorabile. Aggiungi chin tucks giornalieri e masticazione con mastic gum per definirla di più.', hi: 'Jawline ben definita! Mantienila con esercizi di mantenimento.' },
      eyes: { lo: 'La zona occhi necessita attenzione. Eye lifts e un buon contorno occhi con caffeina e vitamina K possono migliorare significativamente borse e palpebre.', mid: 'Zona occhi nella media. Cura il contorno occhi con sieri specifici e riduci il gonfiore con impacchi freddi.', hi: 'Zona occhi eccellente! Proteggi con SPF e contorno occhi.' },
      cheekbones: { lo: 'I tuoi zigomi appaiono piatti. Cheekbone sculpting, riduzione body fat sotto il 15%, e face yoga possono farli emergere.', mid: 'Zigomi presenti. Per renderli più prominenti, combina face yoga con deficit calorico moderato.', hi: 'Zigomi prominenti! Mantieni con face yoga regolare.' },
      nose: { lo: 'Le proporzioni del naso sono migliorabili. Concentrati sulla skincare della zona T per minimizzare i pori e migliorare la texture.', mid: 'Naso proporzionato. Una buona skincare zona T manterrà i pori puliti.', hi: 'Ottime proporzioni nasali!' },
      lips: { lo: 'Le labbra appaiono sottili. Lip exercises e idratazione costante con balsami a base di acido ialuronico possono migliorare il volume naturale.', mid: 'Labbra nella norma. Lip volumizer exercises e idratazione costante per mantenerle piene.', hi: 'Labbra ben proporzionate!' },
      proportions: { lo: 'I terzi facciali non sono bilanciati. Il mewing può migliorare la proiezione del terzo medio, mentre la postura del collo influenza il profilo.', mid: 'Proporzioni discrete. Mewing e postura corretta possono ottimizzare i rapporti facciali.', hi: 'Proporzioni vicine al golden ratio!' },
      skin: { lo: 'La tua pelle ha bisogno di una routine completa. Inizia SUBITO con detergente + vitamina C + SPF al mattino, e retinolo + idratante la sera.', mid: 'Pelle discreta. Aggiungi retinolo la sera e non dimenticare MAI il SPF per prevenire invecchiamento.', hi: 'Pelle eccellente! Mantieni la routine.' }
    };
    const a = advice[catId] || { lo: 'Da migliorare', mid: 'Nella media', hi: 'Ottimo' };
    return score < 5.5 ? a.lo : score < 7.5 ? a.mid : a.hi;
  },

  showScoreDetail(cat, score, rowEl) {
    const existing = rowEl.parentElement.querySelector('.score-detail-panel');
    if (existing) { existing.remove(); return; }
    rowEl.parentElement.querySelectorAll('.score-detail-panel').forEach(p => p.remove());

    const pe = PERSONALIZED_EXERCISES[cat.id];
    if (!pe) return;
    const exercises = score < 5.5 ? pe.low : pe.medium;
    const specificAdvice = this.getSpecificAdvice(cat.id, score);
    const panel = document.createElement('div');
    panel.className = 'score-detail-panel anim';
    let html = `<div class="sdp-header"><span class="sdp-icon">${cat.icon}</span><div class="sdp-info"><h3>${cat.name} — ${score}/10</h3><p>${specificAdvice}</p></div></div><h4 style="font-size:13px;margin:12px 0 8px;color:var(--accent2)">Esercizi consigliati per te:</h4><div class="sdp-exercises">`;

    (exercises || []).forEach(exId => {
      const found = this.findEx(exId);
      if (!found) return;
      const ex = found.data;
      html += `<div class="sdp-ex"><span class="sdp-ex-icon">${ex.icon}</span><div class="sdp-ex-info"><div class="sdp-ex-name">${ex.name}</div><div class="sdp-ex-meta">${ex.sets}x${ex.reps} • ${ex.duration}</div></div><button class="btn-add-routine" data-exid="${ex.id}" data-cat="${found.cat}">+ Routine</button></div>`;
    });
    html += '</div>';
    panel.innerHTML = html;

    panel.querySelectorAll('.btn-add-routine').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const exId = btn.dataset.exid;
        const cat = btn.dataset.cat;
        const saved = this.getCustomRoutine();
        if (!saved[cat]) saved[cat] = [];
        if (!saved[cat].includes(exId)) {
          saved[cat].push(exId);
          localStorage.setItem('lm_custom_routine', JSON.stringify(saved));
          btn.textContent = '✓ Aggiunto';
          btn.classList.add('added');
          this.toast('✅', 'Aggiunto alla routine!');
        } else {
          btn.textContent = '✓ Già presente';
          btn.classList.add('added');
        }
      };
    });

    panel.querySelectorAll('.sdp-ex').forEach(exEl => {
      const nameEl = exEl.querySelector('.sdp-ex-name');
      if (nameEl) {
        exEl.style.cursor = 'pointer';
        exEl.onclick = (e) => {
          if (e.target.closest('.btn-add-routine')) return;
          const exId = exEl.querySelector('.btn-add-routine')?.dataset.exid;
          const found = this.findEx(exId);
          if (found) this.openDetail(found.data, found.cat);
        };
      }
    });

    rowEl.after(panel);
  },

  // ── PROGRAMS ──
  renderPrograms() {
    const g = document.getElementById('programs-grid'); g.innerHTML = '';
    PROGRAMS.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'prog-card' + (i === 0 ? ' wide' : '');
      card.style.background = p.image;
      card.innerHTML = `<span class="pc-icon">${p.icon}</span><div><div class="pc-name">${p.name}</div><div class="pc-meta">${p.chapters} capitoli • ${p.lessons} lezioni</div></div>`;
      card.onclick = () => this.openProgram(p);
      g.appendChild(card);
    });
    this.renderProducts();
  },

  openProgram(prog) {
    document.getElementById('prog-det-name').textContent = prog.name;
    const hero = document.getElementById('progd-hero');
    hero.style.background = prog.image;
    hero.innerHTML = `<h2>${prog.icon} ${prog.name}</h2><p>${prog.description}</p><div class="ph-meta"><span>📖 ${prog.chapters} capitoli</span><span>📝 ${prog.lessons} lezioni</span></div>`;

    const content = document.getElementById('progd-content'); content.innerHTML = '';
    prog.content.forEach(ch => {
      const d = document.createElement('div'); d.className = 'progd-chapter';
      d.innerHTML = `<h3>${ch.title}</h3><p>${ch.text}</p>`;
      content.appendChild(d);
    });

    const exDiv = document.getElementById('progd-exercises'); exDiv.innerHTML = '';
    if (prog.relatedExercises && prog.relatedExercises.length) {
      exDiv.innerHTML = '<h3 class="progd-ex-title">Esercizi Correlati</h3>';
      prog.relatedExercises.forEach(exId => {
        const found = this.findEx(exId); if (!found) return;
        const ex = found.data, cat = found.cat;
        const card = document.createElement('div'); card.className = 'ex-card';
        card.innerHTML = `<div class="ec-icon" style="background:rgba(${this.catRgb(cat)},0.15)">${ex.icon}</div><div class="ec-info"><div class="ec-name">${ex.name}</div><div class="ec-sub">${ex.subtitle}</div><div class="ec-meta"><span class="mtag">${ex.sets}x${ex.reps}</span><span class="mtag">${ex.duration}</span></div></div><span class="ec-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></span>`;
        card.onclick = () => this.openDetail(ex, cat);
        exDiv.appendChild(card);
      });
      const addBtn = document.createElement('button'); addBtn.className = 'progd-add-btn';
      addBtn.innerHTML = '+ Aggiungi tutti alla routine';
      addBtn.onclick = () => { this.toast('✅', 'Esercizi aggiunti alla routine!'); };
      exDiv.appendChild(addBtn);
    }
    this.go('program-detail');
  },

  // ── ROUTINE CUSTOMIZATION ──
  openRoutineCustom() {
    const list = document.getElementById('routine-custom-list'); list.innerHTML = '';
    const saved = this.getCustomRoutine();
    Object.entries(ROUTINE_ALTERNATIVES).forEach(([catId, alts]) => {
      const cat = EXERCISES[catId]; if (!cat) return;
      const sec = document.createElement('div'); sec.className = 'rc-section';
      sec.innerHTML = `<h3><span>${cat.icon}</span> ${cat.name}</h3>`;
      alts.forEach(alt => {
        const isSelected = saved[catId] ? saved[catId].includes(alt.id) : alt.default;
        const item = document.createElement('div');
        item.className = 'rc-item' + (isSelected ? ' selected' : '');
        item.dataset.cat = catId; item.dataset.ex = alt.id;
        item.innerHTML = `<div class="rc-check"></div><div class="rc-info"><div class="rc-name">${alt.name}</div><div class="rc-desc">${alt.desc}</div></div>`;
        item.onclick = () => { item.classList.toggle('selected'); };
        sec.appendChild(item);
      });
      list.appendChild(sec);
    });
    this.go('routine-custom');
  },

  saveCustomRoutine() {
    const result = {};
    document.querySelectorAll('.rc-item.selected').forEach(el => {
      const cat = el.dataset.cat, ex = el.dataset.ex;
      if (!result[cat]) result[cat] = [];
      result[cat].push(ex);
    });
    localStorage.setItem('lm_custom_routine', JSON.stringify(result));
  },

  getCustomRoutine() {
    try { return JSON.parse(localStorage.getItem('lm_custom_routine') || '{}'); } catch { return {}; }
  },

  // ── TAP MODE (hands-free rep counting) ──
  tapModeActive: false,
  openTapMode() {
    this.tapModeActive = true;
    document.getElementById('tap-overlay').classList.remove('hidden');
    document.getElementById('tap-count').textContent = this.repCount;
    document.getElementById('tap-target-label').textContent = '/ ' + this.repTarget;
    document.getElementById('tap-fill').style.width = Math.min(100, (this.repCount / this.repTarget) * 100) + '%';
    document.getElementById('rc-tap-mode-btn').classList.add('active');
    document.getElementById('tap-mode-label').textContent = 'Attivo';
  },
  closeTapMode() {
    this.tapModeActive = false;
    document.getElementById('tap-overlay').classList.add('hidden');
    document.getElementById('rc-tap-mode-btn').classList.remove('active');
    document.getElementById('tap-mode-label').textContent = 'Hands-Free';
  },
  tapRep() {
    this.updateReps(1);
    if (navigator.vibrate) navigator.vibrate(30);
    const el = document.getElementById('tap-count');
    el.textContent = this.repCount;
    document.getElementById('tap-fill').style.width = Math.min(100, (this.repCount / this.repTarget) * 100) + '%';
    el.classList.remove('tap-flash');
    void el.offsetWidth;
    el.classList.add('tap-flash');
    if (this.repCount >= this.repTarget) {
      if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
      this.toast('🎉', 'Serie completata!');
    }
  },
  stopVoice() { this.closeTapMode(); },

  // ── REP COUNTER ──
  repCount: 0, repTarget: 15,
  updateReps(delta) {
    this.repCount = Math.max(0, this.repCount + delta);
    this.updateRepDisplay();
    if (this.repCount >= this.repTarget) this.toast('🎉', 'Serie completata!');
  },
  updateRepDisplay() {
    document.getElementById('rc-current').textContent = this.repCount;
    document.getElementById('rc-fill').style.width = Math.min(100, (this.repCount / this.repTarget) * 100) + '%';
  },

  // ── SIDEBAR ──
  openSidebar() {
    document.getElementById('sidebar').classList.remove('hidden');
    document.getElementById('sidebar-overlay').classList.remove('hidden');
    this.renderSidebar();
  },
  closeSidebar() {
    document.getElementById('sidebar').classList.add('hidden');
    document.getElementById('sidebar-overlay').classList.add('hidden');
  },
  renderSidebar() {
    const list = document.getElementById('sb-list');
    list.innerHTML = '';
    const sections = [
      { title: 'Navigazione', items: [
        { icon: '🏠', label: 'Dashboard', action: () => { this.closeSidebar(); this.history=[]; this.go('dashboard'); }},
        { icon: '📸', label: 'Face Scanner', action: () => { this.closeSidebar(); this.scanStep=1; this.photos={}; this.go('scanner'); }},
        { icon: '📊', label: 'Progressi', action: () => { this.closeSidebar(); this.history=[]; this.go('progress'); }},
        { icon: '👤', label: 'Profilo', action: () => { this.closeSidebar(); this.history=[]; this.go('profile'); }}
      ]},
      { title: 'Allenamento', items: Object.values(EXERCISES).map(cat => ({
        icon: cat.icon, label: cat.name, sub: cat.exercises.length + ' esercizi',
        action: () => { this.closeSidebar(); this.openCat(cat.id); }
      }))},
      { title: 'Guide', items: PROGRAMS.slice(0, 8).map(p => ({
        icon: p.icon, label: p.name, sub: p.chapters + ' capitoli',
        action: () => { this.closeSidebar(); this.openProgram(p); }
      }))}
    ];
    sections.forEach(sec => {
      const s = document.createElement('div'); s.className = 'sb-section';
      s.innerHTML = '<div class="sb-section-title">' + sec.title + '</div>';
      sec.items.forEach(item => {
        const el = document.createElement('div'); el.className = 'sb-item';
        el.innerHTML = '<span class="sb-icon">' + item.icon + '</span><div class="sb-label">' + item.label + (item.sub ? '<small>' + item.sub + '</small>' : '') + '</div>';
        el.onclick = item.action;
        s.appendChild(el);
      });
      list.appendChild(s);
    });
  },

  // ── WATER TRACKER ──
  updateWater(delta) {
    const today = new Date().toDateString();
    let data; try { data = JSON.parse(localStorage.getItem('lm_water') || '{}'); } catch { data = {}; }
    if (data.date !== today) { data = { date: today, liters: 0 }; }
    data.liters = Math.max(0, Math.min(5, Math.round((data.liters + delta) * 100) / 100));
    localStorage.setItem('lm_water', JSON.stringify(data));
    this.renderWater(data.liters);
    if (data.liters >= 3) this.toast('💧', 'Obiettivo 3L raggiunto!');
  },
  renderWater(liters) {
    if (liters === undefined) {
      try { const d = JSON.parse(localStorage.getItem('lm_water') || '{}');
        liters = (d.date === new Date().toDateString()) ? d.liters : 0;
      } catch { liters = 0; }
    }
    document.getElementById('wt-value').textContent = liters.toFixed(1);
    document.getElementById('wt-fill').style.width = Math.min(100, (liters / 3) * 100) + '%';
  },

  // ── DAILY CHECKLIST ──
  renderChecklist() {
    const container = document.getElementById('dcl-items');
    if (!container) return;
    container.innerHTML = '';
    const today = new Date().toDateString();
    let data; try { data = JSON.parse(localStorage.getItem('lm_checklist') || '{}'); } catch { data = {}; }
    if (data.date !== today) { data = { date: today, checked: [] }; localStorage.setItem('lm_checklist', JSON.stringify(data)); }
    DAILY_CHECKLIST_ITEMS.forEach((item, i) => {
      const isChecked = data.checked.includes(i);
      const el = document.createElement('div');
      el.className = 'dcl-item' + (isChecked ? ' checked' : '');
      el.innerHTML = '<div class="dcl-check"></div><span class="dcl-label">' + item + '</span>';
      el.onclick = () => {
        let d; try { d = JSON.parse(localStorage.getItem('lm_checklist') || '{}'); } catch { d = {}; }
        if (d.date !== today) d = { date: today, checked: [] };
        if (d.checked.includes(i)) { d.checked = d.checked.filter(x => x !== i); }
        else { d.checked.push(i); }
        localStorage.setItem('lm_checklist', JSON.stringify(d));
        this.renderChecklist();
      };
      container.appendChild(el);
    });
    const count = data.checked.length;
    const total = DAILY_CHECKLIST_ITEMS.length;
    document.getElementById('dcl-progress').textContent = count + '/' + total + ' completati';
    document.getElementById('dcl-fill').style.width = (count / total * 100) + '%';
  },

  // ── STREAK CALENDAR ──
  renderStreakCalendar() {
    const grid = document.getElementById('streak-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const log = this.getLog();
    const activeDates = new Set();
    log.forEach(e => { activeDates.add(new Date(e.date).toDateString()); });
    const today = new Date();
    const todayStr = today.toDateString();
    let streak = 0;
    for (let i = 0; i < 365; i++) {
      const d = new Date(); d.setDate(d.getDate() - i);
      if (activeDates.has(d.toDateString())) streak++;
      else break;
    }
    document.getElementById('streak-count-val').textContent = streak + ' giorn' + (streak === 1 ? 'o' : 'i');
    for (let i = 29; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const dateStr = d.toDateString();
      const isActive = activeDates.has(dateStr);
      const isToday = dateStr === todayStr;
      const cell = document.createElement('div');
      cell.className = 'streak-day' + (isActive ? ' active' : '') + (isToday ? ' today' : '');
      cell.innerHTML = '<span class="sd-num">' + d.getDate() + '</span>';
      grid.appendChild(cell);
    }
  },

  // ── BODY MEASUREMENTS ──
  bmValues: {},
  renderBodyMeasures() {
    const inputs = document.getElementById('bm-inputs');
    const history = document.getElementById('bm-history');
    if (!inputs) return;
    inputs.innerHTML = '';
    BODY_MEASURE_FIELDS.forEach(f => {
      if (this.bmValues[f.id] === undefined) this.bmValues[f.id] = f.default;
      const div = document.createElement('div');
      div.className = 'bm-field';
      div.innerHTML = '<label>' + f.label + '</label><div class="bm-row"><button class="bm-btn" data-f="' + f.id + '" data-d="-1">&minus;</button><span class="bm-val" id="bm-v-' + f.id + '">' + this.bmValues[f.id] + '</span><button class="bm-btn" data-f="' + f.id + '" data-d="1">+</button></div><div class="bm-unit">' + f.unit + '</div>';
      div.querySelectorAll('.bm-btn').forEach(btn => {
        btn.onclick = () => {
          const field = BODY_MEASURE_FIELDS.find(x => x.id === btn.dataset.f);
          const delta = parseInt(btn.dataset.d) * field.step;
          this.bmValues[field.id] = Math.round(Math.max(field.min, Math.min(field.max, this.bmValues[field.id] + delta)) * 10) / 10;
          document.getElementById('bm-v-' + field.id).textContent = this.bmValues[field.id];
        };
      });
      inputs.appendChild(div);
    });
    const saveBtn = document.getElementById('bm-save');
    if (saveBtn) {
      const newBtn = saveBtn.cloneNode(true);
      saveBtn.parentNode.replaceChild(newBtn, saveBtn);
      newBtn.onclick = () => {
        let measures; try { measures = JSON.parse(localStorage.getItem('lm_measures') || '[]'); } catch { measures = []; }
        const entry = { date: new Date().toISOString() };
        BODY_MEASURE_FIELDS.forEach(f => { entry[f.id] = this.bmValues[f.id]; });
        measures.push(entry);
        localStorage.setItem('lm_measures', JSON.stringify(measures));
        this.renderBodyMeasures();
        this.toast('📏', 'Misure salvate!');
      };
    }
    history.innerHTML = '';
    let measures; try { measures = JSON.parse(localStorage.getItem('lm_measures') || '[]'); } catch { measures = []; }
    if (!measures.length) { history.innerHTML = '<p class="no-data" style="padding:8px;font-size:11px">Nessuna misurazione salvata</p>'; return; }
    measures.slice().reverse().slice(0, 10).forEach(m => {
      const d = new Date(m.date);
      const el = document.createElement('div'); el.className = 'bm-entry';
      let tags = '';
      BODY_MEASURE_FIELDS.forEach(f => { if (m[f.id] !== undefined) tags += '<span class="bm-tag">' + f.label + ': ' + m[f.id] + f.unit + '</span>'; });
      el.innerHTML = '<span class="bm-date">' + d.toLocaleDateString('it-IT', { day: 'numeric', month: 'short' }) + '</span><div class="bm-vals">' + tags + '</div>';
      history.appendChild(el);
    });
  },

  // ── PRODUCTS ──
  activeProductCat: 'Tutti',
  renderProducts() {
    const tabsContainer = document.getElementById('products-tabs');
    const listContainer = document.getElementById('products-list');
    if (!tabsContainer || !listContainer) return;
    tabsContainer.innerHTML = '';
    listContainer.innerHTML = '';
    const categories = ['Tutti', ...new Set(RECOMMENDED_PRODUCTS.map(p => p.category))];
    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'prod-tab' + (cat === this.activeProductCat ? ' active' : '');
      btn.textContent = cat;
      btn.onclick = () => { this.activeProductCat = cat; this.renderProducts(); };
      tabsContainer.appendChild(btn);
    });
    const filtered = this.activeProductCat === 'Tutti' ? RECOMMENDED_PRODUCTS : RECOMMENDED_PRODUCTS.filter(p => p.category === this.activeProductCat);
    filtered.forEach(p => {
      const card = document.createElement('div');
      card.className = 'prod-card';
      card.innerHTML = '<div class="pc-emoji" style="background:' + p.bg + '">' + p.icon + '</div><div class="pc-info"><div class="pc-pname">' + p.name + '</div><div class="pc-note">' + p.note + '</div></div><span class="pc-price">' + p.price + '</span>';
      listContainer.appendChild(card);
    });
  },

  // ── UTIL ──
  scoreCol(s) { return s >= 8 ? '#10b981' : s >= 6.5 ? '#a78bfa' : s >= 5 ? '#f59e0b' : '#ef4444'; },
  animNum(id, target, dur) {
    const el = document.getElementById(id); const t0 = performance.now();
    const up = (t) => { const p = Math.min((t - t0) / dur, 1); el.textContent = (target * (1 - (1 - p) ** 3)).toFixed(1); if (p < 1) requestAnimationFrame(up); };
    requestAnimationFrame(up);
  },
  toast(icon, msg) {
    const t = document.getElementById('toast');
    document.getElementById('toast-icon').textContent = icon;
    document.getElementById('toast-msg').textContent = msg;
    t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500);
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
