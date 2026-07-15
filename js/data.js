const SVG_ILLUSTRATIONS = {
  'basic-mewing': `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="65" rx="50" ry="60" stroke="#7c3aed" stroke-width="2" fill="rgba(124,58,237,0.08)"/>
    <path d="M70 95 Q100 120 130 95" stroke="#7c3aed" stroke-width="2" fill="none"/>
    <ellipse cx="82" cy="55" rx="6" ry="4" fill="#7c3aed" opacity="0.6"/>
    <ellipse cx="118" cy="55" rx="6" ry="4" fill="#7c3aed" opacity="0.6"/>
    <path d="M95 70 L100 80 L105 70" stroke="#7c3aed" stroke-width="1.5" fill="none"/>
    <rect x="75" y="30" rx="15" ry="8" width="50" height="16" fill="#7c3aed" opacity="0.25" stroke="#a78bfa" stroke-width="1" stroke-dasharray="3,2"/>
    <path d="M85 38 L100 32 L115 38" stroke="#a78bfa" stroke-width="1.5" fill="none"/>
    <text x="100" y="150" text-anchor="middle" fill="#a78bfa" font-size="11" font-family="system-ui">Lingua → Palato</text>
    <path d="M100 42 L100 28" stroke="#22d3ee" stroke-width="1.5" marker-end="url(#arrowUp)"/>
    <defs><marker id="arrowUp" viewBox="0 0 6 6" refX="3" refY="6" markerWidth="6" markerHeight="6"><path d="M0 6 L3 0 L6 6" fill="#22d3ee"/></marker></defs>
  </svg>`,
  'hard-mewing': `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="65" rx="50" ry="60" stroke="#7c3aed" stroke-width="2" fill="rgba(124,58,237,0.08)"/>
    <path d="M70 95 Q100 115 130 95" stroke="#7c3aed" stroke-width="2.5" fill="none"/>
    <ellipse cx="82" cy="55" rx="6" ry="4" fill="#7c3aed" opacity="0.6"/>
    <ellipse cx="118" cy="55" rx="6" ry="4" fill="#7c3aed" opacity="0.6"/>
    <rect x="72" y="28" rx="18" ry="10" width="56" height="20" fill="#ef4444" opacity="0.3" stroke="#f87171" stroke-width="1.5"/>
    <path d="M100 48 L100 24" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrowR)"/>
    <path d="M85 48 L85 30" stroke="#ef4444" stroke-width="1.5" opacity="0.6"/>
    <path d="M115 48 L115 30" stroke="#ef4444" stroke-width="1.5" opacity="0.6"/>
    <text x="100" y="150" text-anchor="middle" fill="#f87171" font-size="11" font-family="system-ui">Pressione FORTE ↑↑↑</text>
    <defs><marker id="arrowR" viewBox="0 0 6 6" refX="3" refY="6" markerWidth="6" markerHeight="6"><path d="M0 6 L3 0 L6 6" fill="#ef4444"/></marker></defs>
  </svg>`,
  'tongue-suction': `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="65" rx="50" ry="60" stroke="#7c3aed" stroke-width="2" fill="rgba(124,58,237,0.08)"/>
    <path d="M70 95 Q100 118 130 95" stroke="#7c3aed" stroke-width="2"/>
    <ellipse cx="82" cy="55" rx="6" ry="4" fill="#7c3aed" opacity="0.6"/>
    <ellipse cx="118" cy="55" rx="6" ry="4" fill="#7c3aed" opacity="0.6"/>
    <rect x="78" y="30" rx="12" ry="8" width="44" height="14" fill="#06b6d4" opacity="0.3" stroke="#22d3ee" stroke-width="1.5"/>
    <circle cx="100" cy="37" r="8" fill="none" stroke="#22d3ee" stroke-width="1" stroke-dasharray="2,2">
      <animate attributeName="r" values="6;10;6" dur="1.5s" repeatCount="indefinite"/>
    </circle>
    <text x="100" y="150" text-anchor="middle" fill="#22d3ee" font-size="11" font-family="system-ui">Aspirazione ventosa</text>
  </svg>`,
  'tongue-chewing': `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="65" rx="50" ry="60" stroke="#7c3aed" stroke-width="2" fill="rgba(124,58,237,0.08)"/>
    <path d="M70 95 Q100 118 130 95" stroke="#7c3aed" stroke-width="2"/>
    <ellipse cx="82" cy="55" rx="6" ry="4" fill="#7c3aed" opacity="0.6"/>
    <ellipse cx="118" cy="55" rx="6" ry="4" fill="#7c3aed" opacity="0.6"/>
    <rect x="82" y="32" width="36" height="12" rx="6" fill="#f59e0b" opacity="0.4" stroke="#fbbf24" stroke-width="1"/>
    <path d="M95 44 L95 34 M100 44 L100 32 M105 44 L105 34" stroke="#fbbf24" stroke-width="1.5"/>
    <path d="M100 48 L100 38" stroke="#fbbf24" stroke-width="2">
      <animate attributeName="d" values="M100 48 L100 34;M100 44 L100 34;M100 48 L100 34" dur="0.8s" repeatCount="indefinite"/>
    </path>
    <text x="100" y="150" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="system-ui">Premi e rilascia</text>
  </svg>`,
  'chin-tucks': `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="90" cy="55" rx="40" ry="48" stroke="#f97316" stroke-width="2" fill="rgba(249,115,22,0.06)"/>
    <line x1="90" y1="105" x2="90" y2="145" stroke="#f97316" stroke-width="2"/>
    <line x1="60" y1="120" x2="120" y2="120" stroke="#f97316" stroke-width="2"/>
    <ellipse cx="78" cy="45" rx="5" ry="3.5" fill="#f97316" opacity="0.6"/>
    <ellipse cx="102" cy="45" rx="5" ry="3.5" fill="#f97316" opacity="0.6"/>
    <path d="M85 58 L90 65 L95 58" stroke="#f97316" stroke-width="1.5" fill="none"/>
    <path d="M75 80 Q90 92 105 80" stroke="#f97316" stroke-width="2"/>
    <path d="M90 95 L75 95" stroke="#22d3ee" stroke-width="2.5" marker-end="url(#arrowL)"/>
    <ellipse cx="80" cy="90" rx="12" ry="8" fill="#22d3ee" opacity="0.15" stroke="#22d3ee" stroke-width="1" stroke-dasharray="3,2"/>
    <text x="100" y="155" text-anchor="middle" fill="#22d3ee" font-size="11" font-family="system-ui">Mento indietro ←</text>
    <defs><marker id="arrowL" viewBox="0 0 6 6" refX="0" refY="3" markerWidth="6" markerHeight="6"><path d="M6 0 L0 3 L6 6" fill="#22d3ee"/></marker></defs>
  </svg>`,
  'jaw-clench': `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="60" rx="48" ry="55" stroke="#f97316" stroke-width="2" fill="rgba(249,115,22,0.06)"/>
    <ellipse cx="85" cy="50" rx="5" ry="3.5" fill="#f97316" opacity="0.6"/>
    <ellipse cx="115" cy="50" rx="5" ry="3.5" fill="#f97316" opacity="0.6"/>
    <path d="M72 88 Q100 105 128 88" stroke="#f97316" stroke-width="2"/>
    <rect x="58" y="70" width="18" height="25" rx="5" fill="#ef4444" opacity="0.3" stroke="#f87171" stroke-width="1.5">
      <animate attributeName="opacity" values="0.15;0.4;0.15" dur="1.2s" repeatCount="indefinite"/>
    </rect>
    <rect x="124" y="70" width="18" height="25" rx="5" fill="#ef4444" opacity="0.3" stroke="#f87171" stroke-width="1.5">
      <animate attributeName="opacity" values="0.15;0.4;0.15" dur="1.2s" repeatCount="indefinite"/>
    </rect>
    <text x="100" y="150" text-anchor="middle" fill="#f87171" font-size="11" font-family="system-ui">Contrai masseteri</text>
  </svg>`,
  'jaw-resistance': `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="55" rx="45" ry="52" stroke="#f97316" stroke-width="2" fill="rgba(249,115,22,0.06)"/>
    <ellipse cx="86" cy="45" rx="5" ry="3.5" fill="#f97316" opacity="0.5"/>
    <ellipse cx="114" cy="45" rx="5" ry="3.5" fill="#f97316" opacity="0.5"/>
    <path d="M75 82 Q100 98 125 82" stroke="#f97316" stroke-width="2"/>
    <circle cx="100" cy="118" r="14" fill="#7c3aed" opacity="0.2" stroke="#a78bfa" stroke-width="1.5"/>
    <text x="100" y="122" text-anchor="middle" fill="#a78bfa" font-size="14">✊</text>
    <path d="M100 104 L100 96" stroke="#22d3ee" stroke-width="2"/>
    <path d="M94 100 L100 92 L106 100" stroke="#22d3ee" stroke-width="1.5" fill="none"/>
    <text x="100" y="152" text-anchor="middle" fill="#a78bfa" font-size="11" font-family="system-ui">Pugno sotto il mento</text>
  </svg>`,
  'neck-curls': `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="30" y1="80" x2="170" y2="80" stroke="#f97316" stroke-width="1" opacity="0.3"/>
    <ellipse cx="100" cy="60" rx="30" ry="35" stroke="#f97316" stroke-width="2" fill="rgba(249,115,22,0.06)" transform="rotate(-10, 100, 60)"/>
    <line x1="100" y1="95" x2="100" y2="80" stroke="#f97316" stroke-width="2"/>
    <path d="M70 80 L130 80" stroke="#f97316" stroke-width="2"/>
    <path d="M100 50 Q110 35 100 25" stroke="#22d3ee" stroke-width="2" fill="none" marker-end="url(#ac)"/>
    <rect x="85" y="90" width="30" height="8" rx="4" fill="#22d3ee" opacity="0.2" stroke="#22d3ee" stroke-width="1"/>
    <text x="100" y="150" text-anchor="middle" fill="#22d3ee" font-size="11" font-family="system-ui">Solleva la testa da sdraiato</text>
    <defs><marker id="ac" viewBox="0 0 6 6" refX="3" refY="6" markerWidth="5" markerHeight="5"><path d="M0 6 L3 0 L6 6" fill="#22d3ee"/></marker></defs>
  </svg>`,
  'gum-chewing': `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="60" rx="48" ry="55" stroke="#f97316" stroke-width="2" fill="rgba(249,115,22,0.06)"/>
    <ellipse cx="86" cy="48" rx="5" ry="3.5" fill="#f97316" opacity="0.5"/>
    <ellipse cx="114" cy="48" rx="5" ry="3.5" fill="#f97316" opacity="0.5"/>
    <path d="M82 85 Q100 95 118 85" stroke="#f97316" stroke-width="2"/>
    <rect x="60" y="72" width="14" height="18" rx="4" fill="#10b981" opacity="0.35" stroke="#34d399" stroke-width="1.5"/>
    <rect x="126" y="72" width="14" height="18" rx="4" fill="#10b981" opacity="0.35" stroke="#34d399" stroke-width="1.5"/>
    <circle cx="67" cy="81" r="4" fill="#34d399" opacity="0.5">
      <animate attributeName="r" values="3;5;3" dur="0.6s" repeatCount="indefinite"/>
    </circle>
    <circle cx="133" cy="81" r="4" fill="#34d399" opacity="0.5">
      <animate attributeName="r" values="3;5;3" dur="0.6s" repeatCount="indefinite"/>
    </circle>
    <text x="100" y="150" text-anchor="middle" fill="#34d399" font-size="11" font-family="system-ui">Mastica con i molari</text>
  </svg>`,
  'jaw-side-to-side': `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="55" rx="46" ry="52" stroke="#f97316" stroke-width="2" fill="rgba(249,115,22,0.06)"/>
    <ellipse cx="86" cy="45" rx="5" ry="3.5" fill="#f97316" opacity="0.5"/>
    <ellipse cx="114" cy="45" rx="5" ry="3.5" fill="#f97316" opacity="0.5"/>
    <path d="M76 85 Q100 100 124 85" stroke="#f97316" stroke-width="2"/>
    <path d="M70 95 L55 95" stroke="#22d3ee" stroke-width="2" marker-end="url(#aLS)"/>
    <path d="M130 95 L145 95" stroke="#22d3ee" stroke-width="2" marker-end="url(#aRS)"/>
    <text x="100" y="150" text-anchor="middle" fill="#22d3ee" font-size="11" font-family="system-ui">← Destra e Sinistra →</text>
    <defs><marker id="aLS" viewBox="0 0 6 6" refX="0" refY="3" markerWidth="5" markerHeight="5"><path d="M6 0 L0 3 L6 6" fill="#22d3ee"/></marker><marker id="aRS" viewBox="0 0 6 6" refX="6" refY="3" markerWidth="5" markerHeight="5"><path d="M0 0 L6 3 L0 6" fill="#22d3ee"/></marker></defs>
  </svg>`,
  'cheek-lifts': `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="60" rx="48" ry="56" stroke="#10b981" stroke-width="2" fill="rgba(16,185,129,0.06)"/>
    <ellipse cx="84" cy="48" rx="5" ry="3.5" fill="#10b981" opacity="0.5"/>
    <ellipse cx="116" cy="48" rx="5" ry="3.5" fill="#10b981" opacity="0.5"/>
    <path d="M80 78 Q100 90 120 78" stroke="#10b981" stroke-width="2"/>
    <ellipse cx="72" cy="68" rx="12" ry="8" fill="#10b981" opacity="0.2" stroke="#34d399" stroke-width="1"/>
    <ellipse cx="128" cy="68" rx="12" ry="8" fill="#10b981" opacity="0.2" stroke="#34d399" stroke-width="1"/>
    <path d="M72 72 L72 60" stroke="#34d399" stroke-width="1.5" marker-end="url(#aU2)"/>
    <path d="M128 72 L128 60" stroke="#34d399" stroke-width="1.5" marker-end="url(#aU2)"/>
    <text x="100" y="150" text-anchor="middle" fill="#34d399" font-size="11" font-family="system-ui">Solleva le guance ↑</text>
    <defs><marker id="aU2" viewBox="0 0 6 6" refX="3" refY="6" markerWidth="5" markerHeight="5"><path d="M0 6 L3 0 L6 6" fill="#34d399"/></marker></defs>
  </svg>`,
  'cheekbone-sculptor': `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="60" rx="48" ry="56" stroke="#10b981" stroke-width="2" fill="rgba(16,185,129,0.06)"/>
    <ellipse cx="84" cy="48" rx="5" ry="3.5" fill="#10b981" opacity="0.5"/>
    <ellipse cx="116" cy="48" rx="5" ry="3.5" fill="#10b981" opacity="0.5"/>
    <path d="M90 80 Q100 72 110 80" stroke="#10b981" stroke-width="2"/>
    <path d="M80 70 Q72 62 80 54" stroke="#a78bfa" stroke-width="1.5" fill="none" stroke-dasharray="3,2"/>
    <path d="M120 70 Q128 62 120 54" stroke="#a78bfa" stroke-width="1.5" fill="none" stroke-dasharray="3,2"/>
    <path d="M82 72 L76 66" stroke="#a78bfa" stroke-width="1.5"/>
    <path d="M118 72 L124 66" stroke="#a78bfa" stroke-width="1.5"/>
    <text x="100" y="150" text-anchor="middle" fill="#a78bfa" font-size="11" font-family="system-ui">Aspira le guance</text>
  </svg>`,
  'forehead-smoother': `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="65" rx="48" ry="56" stroke="#10b981" stroke-width="2" fill="rgba(16,185,129,0.06)"/>
    <ellipse cx="84" cy="55" rx="5" ry="3.5" fill="#10b981" opacity="0.5"/>
    <ellipse cx="116" cy="55" rx="5" ry="3.5" fill="#10b981" opacity="0.5"/>
    <rect x="68" y="18" width="64" height="20" rx="10" fill="#f59e0b" opacity="0.15" stroke="#fbbf24" stroke-width="1.5"/>
    <line x1="80" y1="28" x2="120" y2="28" stroke="#fbbf24" stroke-width="1.5"/>
    <path d="M85 38 L85 22" stroke="#fbbf24" stroke-width="1" opacity="0.6"/>
    <path d="M100 38 L100 22" stroke="#fbbf24" stroke-width="1" opacity="0.6"/>
    <path d="M115 38 L115 22" stroke="#fbbf24" stroke-width="1" opacity="0.6"/>
    <text x="100" y="150" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="system-ui">Dita sulla fronte, resisti</text>
  </svg>`,
  'eye-lifts': `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="65" rx="48" ry="56" stroke="#10b981" stroke-width="2" fill="rgba(16,185,129,0.06)"/>
    <ellipse cx="80" cy="55" rx="14" ry="7" fill="none" stroke="#22d3ee" stroke-width="2"/>
    <ellipse cx="120" cy="55" rx="14" ry="7" fill="none" stroke="#22d3ee" stroke-width="2"/>
    <ellipse cx="80" cy="55" rx="4" ry="4" fill="#22d3ee" opacity="0.6"/>
    <ellipse cx="120" cy="55" rx="4" ry="4" fill="#22d3ee" opacity="0.6"/>
    <path d="M66" y="42" L80 36" stroke="#34d399" stroke-width="1.5"/>
    <path d="M134 42 L120 36" stroke="#34d399" stroke-width="1.5"/>
    <path d="M80 44 L80 36" stroke="#34d399" stroke-width="1.5" marker-end="url(#aU3)"/>
    <path d="M120 44 L120 36" stroke="#34d399" stroke-width="1.5" marker-end="url(#aU3)"/>
    <text x="100" y="150" text-anchor="middle" fill="#22d3ee" font-size="11" font-family="system-ui">Solleva zona sopracciglia</text>
    <defs><marker id="aU3" viewBox="0 0 6 6" refX="3" refY="6" markerWidth="5" markerHeight="5"><path d="M0 6 L3 0 L6 6" fill="#34d399"/></marker></defs>
  </svg>`,
  'lip-plumper': `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="60" rx="48" ry="56" stroke="#10b981" stroke-width="2" fill="rgba(16,185,129,0.06)"/>
    <ellipse cx="86" cy="48" rx="5" ry="3.5" fill="#10b981" opacity="0.5"/>
    <ellipse cx="114" cy="48" rx="5" ry="3.5" fill="#10b981" opacity="0.5"/>
    <ellipse cx="100" cy="82" rx="16" ry="10" fill="#ec4899" opacity="0.2" stroke="#f472b6" stroke-width="1.5"/>
    <path d="M88 80 Q100 72 112 80" stroke="#f472b6" stroke-width="1.5"/>
    <path d="M88 84 Q100 94 112 84" stroke="#f472b6" stroke-width="1.5"/>
    <path d="M100 95 L100 105" stroke="#f472b6" stroke-width="1.5"/>
    <path d="M95 100 L100 107 L105 100" fill="none" stroke="#f472b6" stroke-width="1"/>
    <text x="100" y="150" text-anchor="middle" fill="#f472b6" font-size="11" font-family="system-ui">Bacio → Sorriso</text>
  </svg>`,
  'face-tightener': `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="60" rx="48" ry="56" stroke="#10b981" stroke-width="2" fill="rgba(16,185,129,0.06)"/>
    <ellipse cx="86" cy="48" rx="5" ry="3.5" fill="#10b981" opacity="0.5"/>
    <ellipse cx="114" cy="48" rx="5" ry="3.5" fill="#10b981" opacity="0.5"/>
    <ellipse cx="100" cy="82" rx="12" ry="14" fill="none" stroke="#ef4444" stroke-width="2"/>
    <path d="M65 55 L55 50" stroke="#f87171" stroke-width="1.5"/>
    <path d="M135 55 L145 50" stroke="#f87171" stroke-width="1.5"/>
    <path d="M65 75 L52 80" stroke="#f87171" stroke-width="1.5"/>
    <path d="M135 75 L148 80" stroke="#f87171" stroke-width="1.5"/>
    <text x="100" y="150" text-anchor="middle" fill="#f87171" font-size="11" font-family="system-ui">Forma "O" e sorridi</text>
  </svg>`,
  'neck-extensions': `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="50" rx="35" ry="40" stroke="#3b82f6" stroke-width="2" fill="rgba(59,130,246,0.06)"/>
    <line x1="100" y1="90" x2="100" y2="130" stroke="#3b82f6" stroke-width="2"/>
    <line x1="70" y1="110" x2="130" y2="110" stroke="#3b82f6" stroke-width="2"/>
    <path d="M100 20 Q120 10 110 5" stroke="#22d3ee" stroke-width="2" fill="none"/>
    <path d="M112 8 L110 2 L105 9" stroke="#22d3ee" stroke-width="1.5" fill="none"/>
    <rect x="88" y="88" width="24" height="15" rx="4" fill="#22d3ee" opacity="0.15" stroke="#22d3ee" stroke-width="1"/>
    <text x="100" y="152" text-anchor="middle" fill="#22d3ee" font-size="11" font-family="system-ui">Inclina testa indietro</text>
  </svg>`,
  'default': `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="65" rx="48" ry="56" stroke="#7c3aed" stroke-width="2" fill="rgba(124,58,237,0.06)"/>
    <ellipse cx="84" cy="52" rx="5" ry="3.5" fill="#7c3aed" opacity="0.5"/>
    <ellipse cx="116" cy="52" rx="5" ry="3.5" fill="#7c3aed" opacity="0.5"/>
    <path d="M85 68 L90 76 L95 68" stroke="#7c3aed" stroke-width="1.5" fill="none"/>
    <path d="M80 88 Q100 100 120 88" stroke="#7c3aed" stroke-width="2"/>
    <circle cx="100" cy="130" r="16" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4,3"/>
    <text x="100" y="135" text-anchor="middle" fill="#a78bfa" font-size="16">?</text>
  </svg>`
};

const EXERCISES = {
  mewing: {
    id: 'mewing', name: 'Mewing', icon: '👅', color: '#7c3aed',
    description: 'Postura della lingua per ristrutturare mascella e viso',
    exercises: [
      {
        id: 'basic-mewing', name: 'Basic Mewing', subtitle: 'Postura base della lingua',
        icon: '👅', difficulty: 'Principiante', difficultyLevel: 1, xp: 15,
        target: 'Mascella, Mento, Struttura', duration: '5 min', sets: 1, reps: 'Hold', holdTime: 300,
        unlockLevel: 1,
        benefits: ['Definizione mascella', 'Respirazione nasale', 'Postura corretta'],
        steps: [
          'Chiudi la bocca, denti leggermente a contatto',
          'Punta della lingua dietro gli incisivi superiori',
          'Premi TUTTA la lingua contro il palato',
          'Anche la parte posteriore deve premere',
          'Respira dal naso mantenendo la posizione',
          'Mantieni per 5 minuti, riposa 1 minuto'
        ],
        tips: 'Dovresti sentire una leggera pressione sotto il mento.'
      },
      {
        id: 'hard-mewing', name: 'Hard Mewing', subtitle: 'Pressione intensa del palato',
        icon: '💪', difficulty: 'Avanzato', difficultyLevel: 3, xp: 30,
        target: 'Mascella, Palato, Zigomi', duration: '3 min', sets: 3, reps: '60s hold', holdTime: 60, restTime: 30,
        unlockLevel: 5,
        benefits: ['Espansione palatale', 'Zigomi prominenti', 'Mascella definita'],
        steps: [
          'Assumi posizione base del mewing',
          'Applica pressione FORTE con tutta la lingua',
          'Concentra sulla parte posteriore della lingua',
          'Stringi i denti molari leggermente',
          'Mantieni 60 secondi massima pressione',
          'Riposa 30 secondi, ripeti 3 serie'
        ],
        tips: 'Solo dopo 2+ settimane di basic mewing. Non esagerare.'
      },
      {
        id: 'tongue-suction', name: 'Tongue Suction Hold', subtitle: 'Aspirazione al palato',
        icon: '🫧', difficulty: 'Intermedio', difficultyLevel: 2, xp: 20,
        target: 'Palato, Mascella superiore', duration: '4 min', sets: 4, reps: '45s hold', holdTime: 45, restTime: 15,
        unlockLevel: 3,
        benefits: ['Espansione mascellare', 'Seal labiale', 'Mewing automatico'],
        steps: [
          'Posiziona lingua contro il palato (mewing)',
          'Crea effetto ventosa aspirando',
          'Dovresti sentire un "click" quando si stacca',
          'Mantieni aspirazione per 45 secondi',
          'Rilascia e ripeti 4 serie',
          '15 secondi di pausa tra le serie'
        ],
        tips: 'Aiuta a rendere il mewing automatico durante il giorno.'
      },
      {
        id: 'tongue-chewing', name: 'Tongue Chewing', subtitle: 'Masticazione linguale',
        icon: '🔄', difficulty: 'Intermedio', difficultyLevel: 2, xp: 20,
        target: 'Lingua, Palato', duration: '5 min', sets: 3, reps: 20,
        unlockLevel: 4,
        benefits: ['Forza lingua', 'Espansione palatale', 'Definizione mascellare'],
        steps: [
          'Metti gomma da masticare sulla lingua',
          'Premi la gomma contro il palato con la lingua',
          'Schiaccia e rilascia ritmicamente',
          'Usa tutta la superficie della lingua',
          '20 ripetizioni per serie',
          '30 secondi di riposo tra le serie'
        ],
        tips: 'Usa gomme dure (Falim, Mastic gum).'
      }
    ]
  },
  jawline: {
    id: 'jawline', name: 'Jawline', icon: '🦴', color: '#f97316',
    description: 'Definisci la mascella con esercizi mirati',
    exercises: [
      {
        id: 'chin-tucks', name: 'Chin Tucks', subtitle: 'Retrazione del mento',
        icon: '🔽', difficulty: 'Principiante', difficultyLevel: 1, xp: 15,
        target: 'Mento, Collo, Postura', duration: '3 min', sets: 3, reps: 15, holdTime: 5,
        unlockLevel: 1,
        benefits: ['Doppio mento ridotto', 'Postura collo', 'Jawline definita'],
        steps: [
          'Siediti o stai in piedi, schiena dritta',
          'Guarda dritto davanti a te',
          'Tira il mento indietro (crea "doppio mento")',
          'Mantieni 5 secondi',
          'Torna alla posizione iniziale',
          'Ripeti 15 volte per 3 serie'
        ],
        tips: 'Non inclinare la testa, solo retrazione orizzontale.'
      },
      {
        id: 'jaw-clench', name: 'Jaw Clench', subtitle: 'Contrazione isometrica',
        icon: '😬', difficulty: 'Intermedio', difficultyLevel: 2, xp: 20,
        target: 'Masseteri, Mascella', duration: '4 min', sets: 4, reps: 10, holdTime: 10, restTime: 20,
        unlockLevel: 2,
        benefits: ['Masseteri grandi', 'Mascella larga', 'Definizione laterale'],
        steps: [
          'Stringi i denti con forza moderata',
          'Senti i masseteri (lati mascella) contrarsi',
          'Mantieni contrazione 10 secondi',
          'Rilascia 5 secondi',
          '10 ripetizioni per serie, 4 serie',
          '20 secondi di pausa tra le serie'
        ],
        tips: 'Non stringere troppo per proteggere la ATM.'
      },
      {
        id: 'jaw-resistance', name: 'Jaw Resistance', subtitle: 'Resistenza con il pugno',
        icon: '✊', difficulty: 'Intermedio', difficultyLevel: 2, xp: 25,
        target: 'Mascella, Masseteri, Mento', duration: '5 min', sets: 3, reps: 12, holdTime: 8,
        unlockLevel: 3,
        benefits: ['Forza mandibolare', 'Jawline scolpita', 'Ipertrofia masseteri'],
        steps: [
          'Posiziona il pugno sotto il mento',
          'Prova ad aprire la bocca contro resistenza',
          'Mantieni tensione 8 secondi',
          'Rilascia lentamente',
          '12 ripetizioni, 3 serie',
          '30 secondi di pausa tra le serie'
        ],
        tips: 'Resistenza progressiva. Mai movimenti dolorosi.'
      },
      {
        id: 'neck-curls', name: 'Neck Curls', subtitle: 'Curl del collo',
        icon: '🏋️', difficulty: 'Avanzato', difficultyLevel: 3, xp: 30,
        target: 'Collo, Mento, Platisma', duration: '4 min', sets: 3, reps: 15,
        unlockLevel: 6,
        benefits: ['Collo definito', 'Mento scolpito', 'Meno grasso submentale'],
        steps: [
          'Sdraiati a pancia in su',
          'Lingua contro il palato (mewing)',
          'Solleva testa portando mento al petto',
          'Mantieni 2 secondi in alto',
          'Scendi lentamente (3 sec negativa)',
          '15 ripetizioni, 3 serie'
        ],
        tips: 'Se senti dolore al collo, fermati subito.'
      },
      {
        id: 'gum-chewing', name: 'Gomma Dura', subtitle: 'Masticazione intensa',
        icon: '🫧', difficulty: 'Principiante', difficultyLevel: 1, xp: 15,
        target: 'Masseteri, Temporali', duration: '15 min', sets: 1, reps: 'Continuo', holdTime: 900,
        unlockLevel: 1,
        benefits: ['Masseteri ipertrofici', 'Mascella squadrata', 'Definizione laterale'],
        steps: [
          'Prendi gomma dura (Falim/Mastic Gum)',
          'Mastica con i molari alternando lati',
          'Ogni 5 minuti cambia lato',
          'Movimenti completi e controllati',
          'Continua 15-30 minuti',
          '1 volta al giorno (no di più per ATM)'
        ],
        tips: 'La mastic gum è la migliore. Mastica a stomaco pieno.'
      },
      {
        id: 'jaw-side-to-side', name: 'Jaw Side-to-Side', subtitle: 'Movimenti laterali',
        icon: '↔️', difficulty: 'Principiante', difficultyLevel: 1, xp: 10,
        target: 'Mascella, ATM', duration: '3 min', sets: 3, reps: 15,
        unlockLevel: 1,
        benefits: ['Mobilità mandibolare', 'Muscoli laterali', 'Flessibilità ATM'],
        steps: [
          'Apri leggermente la bocca',
          'Mandibola verso destra, tieni 3 secondi',
          'Torna al centro',
          'Mandibola verso sinistra, tieni 3 secondi',
          'Torna al centro',
          '15 per lato, 3 serie'
        ],
        tips: 'Movimenti lenti. Se senti click, riduci il range.'
      }
    ]
  },
  faceYoga: {
    id: 'faceYoga', name: 'Face Yoga', icon: '🧘', color: '#10b981',
    description: 'Tonifica e scolpisci tutti i muscoli del viso',
    exercises: [
      {
        id: 'cheek-lifts', name: 'Cheek Lifts', subtitle: 'Sollevamento zigomi',
        icon: '😊', difficulty: 'Principiante', difficultyLevel: 1, xp: 15,
        target: 'Zigomi, Guance', duration: '3 min', sets: 3, reps: 15, holdTime: 5,
        unlockLevel: 1,
        benefits: ['Zigomi alti', 'Guance toniche', 'Look giovanile'],
        steps: [
          'Sorridi ampiamente mostrando i denti',
          'Dita sulle guance vicino agli zigomi',
          'Spingi guance verso l\'alto coi muscoli',
          'Mantieni 5 secondi, massima contrazione',
          'Rilascia lentamente',
          '15 ripetizioni, 3 serie'
        ],
        tips: 'Concentrati sulla contrazione dei muscoli zigomatici.'
      },
      {
        id: 'cheekbone-sculptor', name: 'Cheekbone Sculptor', subtitle: 'Scolpire zigomi',
        icon: '💎', difficulty: 'Intermedio', difficultyLevel: 2, xp: 25,
        target: 'Zigomi, Hollow cheeks', duration: '4 min', sets: 3, reps: 10, holdTime: 10,
        unlockLevel: 3,
        benefits: ['Zigomi scolpiti', 'Hollow cheeks', 'Definizione facciale'],
        steps: [
          'Aspira guance verso l\'interno (faccia pesce)',
          'Prova a sorridere mantenendo guance aspirate',
          'Senti tensione sui muscoli zigomi',
          'Mantieni 10 secondi',
          'Rilascia e ripeti',
          '10 ripetizioni, 3 serie'
        ],
        tips: 'Hollow cheeks = basso BF% + muscoli zigomatici tonici.'
      },
      {
        id: 'forehead-smoother', name: 'Forehead Smoother', subtitle: 'Liscia la fronte',
        icon: '✨', difficulty: 'Principiante', difficultyLevel: 1, xp: 10,
        target: 'Fronte', duration: '3 min', sets: 3, reps: 10, holdTime: 10,
        unlockLevel: 2,
        benefits: ['Meno rughe', 'Fronte liscia', 'Rilassamento'],
        steps: [
          'Dita orizzontali sulla fronte',
          'Leggera pressione verso il basso',
          'Alza sopracciglia contro la resistenza',
          'Mantieni tensione 10 secondi',
          'Rilascia completamente',
          '10 volte, 3 serie'
        ],
        tips: 'Previene le rughe orizzontali della fronte.'
      },
      {
        id: 'eye-lifts', name: 'Eye Area Lift', subtitle: 'Sollevamento zona occhi',
        icon: '👁️', difficulty: 'Intermedio', difficultyLevel: 2, xp: 20,
        target: 'Orbicolare occhi, Palpebre', duration: '4 min', sets: 3, reps: 15, holdTime: 5,
        unlockLevel: 3,
        benefits: ['Occhi aperti', 'Meno borse', 'Sguardo vivace'],
        steps: [
          'Indici sotto le sopracciglia',
          'Solleva leggermente le sopracciglia',
          'Chiudi occhi lentamente contro resistenza',
          'Stringi palpebre 5 secondi',
          'Rilascia e apri gli occhi',
          '15 volte, 3 serie'
        ],
        tips: 'Movimenti delicati, tensione muscolare non meccanica.'
      },
      {
        id: 'lip-plumper', name: 'Lip Volumizer', subtitle: 'Volume naturale labbra',
        icon: '👄', difficulty: 'Principiante', difficultyLevel: 1, xp: 10,
        target: 'Labbra', duration: '3 min', sets: 3, reps: 20,
        unlockLevel: 2,
        benefits: ['Labbra piene', 'Contorno definito', 'Circolazione'],
        steps: [
          'Fai "faccia del bacio" (labbra in avanti)',
          'Mantieni 3 secondi',
          'Sorridi ampiamente mostrando i denti',
          'Mantieni sorriso 3 secondi',
          'Alterna bacio e sorriso',
          '20 volte, 3 serie'
        ],
        tips: 'Aumenta circolazione nelle labbra.'
      },
      {
        id: 'face-tightener', name: 'Full Face Tightener', subtitle: 'Tonificazione totale',
        icon: '🔥', difficulty: 'Avanzato', difficultyLevel: 3, xp: 35,
        target: 'Tutti i muscoli facciali', duration: '5 min', sets: 3, reps: 10, holdTime: 15,
        unlockLevel: 7,
        benefits: ['Tono generale', 'Pelle tesa', 'Anti-aging'],
        steps: [
          'Bocca a "O" grande',
          'Copri denti con le labbra',
          'Sorridi verso l\'alto solo con le guance',
          'Indici sugli zigomi',
          'Solleva e abbassa guance 10 volte',
          'Ultima rep: mantieni in alto 15 secondi'
        ],
        tips: 'Esercizio compound: lavora più gruppi muscolari.'
      },
      {
        id: 'nose-shaper', name: 'Nose Shaper', subtitle: 'Modellamento del naso',
        icon: '👃', difficulty: 'Principiante', difficultyLevel: 1, xp: 10,
        target: 'Muscoli nasali, Cartilagine', duration: '3 min', sets: 3, reps: 20, holdTime: 3,
        unlockLevel: 1,
        benefits: ['Naso più dritto', 'Punta definita', 'Muscoli nasali tonici'],
        steps: [
          'Posiziona indice e pollice ai lati del naso',
          'Premi delicatamente verso il centro',
          'Contemporaneamente arriccia il naso verso l\'alto',
          'Mantieni 3 secondi sentendo la contrazione',
          'Rilascia e ripeti',
          '20 ripetizioni, 3 serie'
        ],
        tips: 'Movimenti delicati. Non aspettarti cambiamenti ossei, ma il tono muscolare migliora la forma.'
      },
      {
        id: 'nose-breathing', name: 'Nose Breathing Drill', subtitle: 'Respirazione nasale forzata',
        icon: '🌬️', difficulty: 'Principiante', difficultyLevel: 1, xp: 10,
        target: 'Vie nasali, Respirazione', duration: '5 min', sets: 1, reps: 'Continuo', holdTime: 300,
        unlockLevel: 1,
        benefits: ['Vie nasali aperte', 'Respirazione migliorata', 'Supporto al mewing'],
        steps: [
          'Chiudi la bocca completamente',
          'Inspira SOLO dal naso per 4 secondi',
          'Trattieni per 4 secondi',
          'Espira SOLO dal naso per 6 secondi',
          'Ripeti per 5 minuti senza aprire la bocca',
          'Se il naso è chiuso, fai prima lavaggi nasali con soluzione salina'
        ],
        tips: 'La respirazione nasale è il fondamento del mewing. Il naso si adatta: più lo usi, più si apre.'
      },
      {
        id: 'under-eye-massage', name: 'Under Eye Massage', subtitle: 'Massaggio anti-occhiaie',
        icon: '👁️', difficulty: 'Principiante', difficultyLevel: 1, xp: 10,
        target: 'Zona perioculare, Circolazione', duration: '3 min', sets: 2, reps: 20,
        unlockLevel: 1,
        benefits: ['Meno occhiaie', 'Meno borse', 'Circolazione zona occhi'],
        steps: [
          'Applica una goccia di siero contorno occhi sugli anulari',
          'Posiziona gli anulari nell\'angolo interno dell\'occhio',
          'Picchietta delicatamente lungo l\'osso orbitale verso l\'esterno',
          'Continua sotto l\'occhio fino all\'angolo esterno',
          'Poi sopra l\'occhio tornando all\'angolo interno',
          '20 giri completi, 2 serie — mattina e sera'
        ],
        tips: 'Usa SOLO l\'anulare, è il dito con meno forza. Mai tirare la pelle delicata degli occhi.'
      }
    ]
  },
  neck: {
    id: 'neck', name: 'Collo & Postura', icon: '🦒', color: '#3b82f6',
    description: 'Collo forte e postura perfetta per un profilo definito',
    exercises: [
      {
        id: 'neck-extensions', name: 'Neck Extensions', subtitle: 'Estensioni collo',
        icon: '⬆️', difficulty: 'Principiante', difficultyLevel: 1, xp: 15,
        target: 'Collo posteriore, Trapezi', duration: '3 min', sets: 3, reps: 12, holdTime: 5,
        unlockLevel: 1,
        benefits: ['Collo forte', 'Postura eretta', 'Meno tensione'],
        steps: [
          'Siediti con la schiena dritta',
          'Inclina testa indietro, guarda il soffitto',
          'Mantieni 5 secondi, senti lo stretch',
          'Torna lentamente a posizione neutra',
          'Solo estensione, non ruotare',
          '12 volte, 3 serie'
        ],
        tips: 'Mai movimenti bruschi con il collo.'
      },
      {
        id: 'neck-side-stretch', name: 'Neck Side Stretch', subtitle: 'Stretching laterale',
        icon: '↕️', difficulty: 'Principiante', difficultyLevel: 1, xp: 10,
        target: 'SCM, Scaleni', duration: '4 min', sets: 3, reps: 10, holdTime: 8,
        unlockLevel: 1,
        benefits: ['Flessibilità', 'Riduzione tensione', 'Profilo pulito'],
        steps: [
          'Siediti dritto, spalle rilassate',
          'Orecchio destro verso spalla destra',
          'Mano destra per leggera pressione',
          'Mantieni 8 secondi',
          'Centro, poi ripeti altro lato',
          '10 per lato, 3 serie'
        ],
        tips: 'Non forzare. Tensione piacevole, mai dolore.'
      },
      {
        id: 'wall-angels', name: 'Wall Angels', subtitle: 'Angeli al muro',
        icon: '😇', difficulty: 'Intermedio', difficultyLevel: 2, xp: 20,
        target: 'Spalle, Dorso, Postura', duration: '5 min', sets: 3, reps: 12,
        unlockLevel: 3,
        benefits: ['Postura perfetta', 'Spalle aperte', 'Schiena dritta'],
        steps: [
          'Schiena, testa e glutei contro il muro',
          'Braccia a 90° (come per arrendersi)',
          'Gomiti e polsi toccano il muro',
          'Alza braccia mantenendo contatto muro',
          'Scendi alla posizione di partenza',
          '12 volte, 3 serie'
        ],
        tips: 'Lavora gradualmente se non riesci tutto contro il muro.'
      },
      {
        id: 'scapular-squeeze', name: 'Scapular Squeeze', subtitle: 'Retrazione scapole',
        icon: '🔙', difficulty: 'Principiante', difficultyLevel: 1, xp: 10,
        target: 'Romboidi, Trapezio', duration: '3 min', sets: 4, reps: 15, holdTime: 5,
        unlockLevel: 1,
        benefits: ['Spalle indietro', 'Postura aperta', 'Meno cifosi'],
        steps: [
          'In piedi o seduto, schiena dritta',
          'Braccia ai lati, gomiti a 90°',
          'Stringi scapole come per tenere matita',
          'Mantieni 5 secondi',
          'Rilascia lentamente',
          '15 volte, 4 serie'
        ],
        tips: 'Fai ogni ora se lavori al computer.'
      },
      {
        id: 'hanging-bar', name: 'Hanging on Bar', subtitle: 'Sospensione alla sbarra',
        icon: '🏗️', difficulty: 'Intermedio', difficultyLevel: 2, xp: 25,
        target: 'Spina dorsale, Spalle, Grip, Altezza', duration: '5 min', sets: 3, reps: '30-60s hold', holdTime: 45,
        unlockLevel: 1,
        benefits: ['Decompressione spinale', 'Postura migliorata', 'Altezza massimizzata', 'Spalle larghe'],
        steps: [
          'Afferra la sbarra con presa prona larghezza spalle',
          'Lasciati appendere — gambe rilassate, non toccare terra',
          'Rilassa le spalle, il peso decomprime la spina dorsale',
          'Respira: inspira 4 sec dal naso, espira 6 sec dalla bocca',
          'Mantieni 30-60 sec (BASE:30s / MEDIO:45s / PRO:60s)',
          'Riposa 30 sec tra le serie. 3 serie totali.'
        ],
        tips: 'Fallo ogni mattina appena sveglio. Puoi guadagnare 1-3 cm temporanei. Con costanza la postura migliora permanentemente.'
      },
      {
        id: 'platysma-exercise', name: 'Platysma Toner', subtitle: 'Tono muscolo platisma',
        icon: '💪', difficulty: 'Intermedio', difficultyLevel: 2, xp: 20,
        target: 'Platisma, Collo anteriore', duration: '3 min', sets: 3, reps: 15, holdTime: 5,
        unlockLevel: 4,
        benefits: ['Collo definito', 'Meno rilassamento', 'Jawline pulita'],
        steps: [
          'Tira angoli bocca verso il basso con forza',
          'Vedi e senti tendini collo tendersi',
          'Mantieni tensione 5 secondi',
          'Rilascia completamente',
          'Inclina testa indietro e ripeti',
          '15 ripetizioni, 3 serie'
        ],
        tips: 'Il platisma tonificato migliora la jawline.'
      }
    ]
  },
  skincare: {
    id: 'skincare', name: 'Skincare', icon: '🧴', color: '#ec4899',
    description: 'Routine complete per una pelle perfetta e attraente',
    exercises: [
      {
        id: 'morning-routine', name: 'Routine Mattutina', subtitle: 'Skincare del mattino',
        icon: '🌅', difficulty: 'Principiante', difficultyLevel: 1, xp: 20,
        target: 'Pelle del viso', duration: '10 min', sets: 1, reps: 'Ogni giorno',
        unlockLevel: 1,
        benefits: ['Pelle pulita', 'Protezione UV', 'Idratazione'],
        steps: [
          'DETERGENTE delicato pH 5.5 con acqua tiepida',
          'TONICO idratante (acido ialuronico/niacinamide)',
          'SIERO Vitamina C (10-20%) 3-4 gocce',
          'CONTORNO OCCHI con caffeina',
          'IDRATANTE leggero',
          'SPF 30-50 SEMPRE come ultimo step'
        ],
        tips: 'SPF è il prodotto anti-aging #1. Mai uscire senza.'
      },
      {
        id: 'evening-routine', name: 'Routine Serale', subtitle: 'Skincare della sera',
        icon: '🌙', difficulty: 'Principiante', difficultyLevel: 1, xp: 20,
        target: 'Pelle del viso', duration: '12 min', sets: 1, reps: 'Ogni sera',
        unlockLevel: 1,
        benefits: ['Riparazione', 'Anti-aging', 'Pelle luminosa'],
        steps: [
          'DOPPIA DETERSIONE: olio + schiumoso',
          'ESFOLIANTE BHA 2% (2-3x settimana)',
          'TONICO con niacinamide 5%',
          'RETINOLO 0.3-1% (inizia basso)',
          'CONTORNO OCCHI notte con peptidi',
          'CREMA NOTTE ricca con ceramidi'
        ],
        tips: 'Retinolo = gold standard anti-aging. Inizia 2x/settimana.'
      },
      {
        id: 'weekly-treatment', name: 'Trattamento Settimanale', subtitle: 'Trattamenti intensivi',
        icon: '💆', difficulty: 'Intermedio', difficultyLevel: 2, xp: 25,
        target: 'Texture, Pori', duration: '20 min', sets: 1, reps: '1-2x settimana',
        unlockLevel: 3,
        benefits: ['Pelle rinnovata', 'Pori mini', 'Texture uniforme'],
        steps: [
          'VAPORE sul viso 5 minuti, apri pori',
          'MASCHERA argilla verde 10 minuti',
          'RISCIACQUO acqua tiepida, tampona',
          'SHEET MASK idratante 15-20 minuti',
          'SIERO acido ialuronico concentrato',
          'SIGILLO con crema ricca o olio rosa mosqueta'
        ],
        tips: 'Non esfoliare lo stesso giorno del trattamento.'
      },
      {
        id: 'dermarolling', name: 'Dermarolling', subtitle: 'Microneedling domiciliare',
        icon: '🔬', difficulty: 'Avanzato', difficultyLevel: 3, xp: 30,
        target: 'Collagene, Cicatrici', duration: '15 min', sets: 1, reps: '1x/2 settimane',
        unlockLevel: 8,
        benefits: ['Collagene', 'Meno cicatrici', 'Pelle rinnovata'],
        steps: [
          'Pulisci dermaroller con alcol 70%',
          'Detergi il viso accuratamente',
          'Applica siero Vitamina C o HA',
          'Ruota in 4 direzioni (0.25-0.5mm)',
          '4-6 passaggi per direzione, LEGGERO',
          'Siero calmante + idratante. NO retinolo 48h'
        ],
        tips: 'MAI > 0.5mm a casa. Sterilizza SEMPRE. No su acne attiva.'
      }
    ]
  },
  lifestyle: {
    id: 'lifestyle', name: 'Lifestyle', icon: '⭐', color: '#f59e0b',
    description: 'Abitudini che potenziano tutto il tuo looksmaxing',
    exercises: [
      {
        id: 'sleep-optimization', name: 'Sleep Protocol', subtitle: 'Ottimizzazione sonno',
        icon: '😴', difficulty: 'Principiante', difficultyLevel: 1, xp: 20,
        target: 'Recovery, Pelle, Ormoni', duration: '7-9 ore', sets: 1, reps: 'Ogni notte',
        unlockLevel: 1,
        benefits: ['Rigenerazione pelle', 'Meno occhiaie', 'GH naturale'],
        steps: [
          'Dormi 7-9 ore (letto alle 22-23)',
          'Cuscino di seta per meno pieghe',
          'Dormi SULLA SCHIENA per simmetria',
          'No schermi 1h prima di dormire',
          'Camera buia e fresca (18-20°C)',
          'Telefono lontano dal letto'
        ],
        tips: '1 notte persa = visibile sul viso il giorno dopo.'
      },
      {
        id: 'hydration', name: 'Protocollo Idratazione', subtitle: 'Idratazione quotidiana',
        icon: '💧', difficulty: 'Principiante', difficultyLevel: 1, xp: 15,
        target: 'Pelle, Salute generale', duration: 'Tutto il giorno', sets: 1, reps: '2-3 litri',
        unlockLevel: 1,
        benefits: ['Pelle luminosa', 'Meno gonfiore', 'Labbra idratate'],
        steps: [
          '1 bicchiere appena sveglio',
          'Almeno 2-3 litri al giorno',
          'Aggiungi limone o elettroliti',
          '1 bicchiere 30 min prima dei pasti',
          'Riduci alcol e bevande zuccherate',
          'Traccia con un\'app se necessario'
        ],
        tips: 'Disidratazione = pelle spenta, occhi infossati, labbra secche.'
      },
      {
        id: 'nutrition', name: 'Nutrizione Anti-Aging', subtitle: 'Alimentazione per il viso',
        icon: '🥗', difficulty: 'Intermedio', difficultyLevel: 2, xp: 20,
        target: 'Pelle, Composizione corporea', duration: 'Sempre', sets: 1, reps: 'Giornaliero',
        unlockLevel: 2,
        benefits: ['Pelle chiara', 'Meno infiammazione', 'Definizione facciale'],
        steps: [
          'Proteine: 1.6-2.2g/kg (collagene, pesce, uova)',
          'Omega-3: salmone, noci, olio d\'oliva',
          'Antiossidanti: bacche, spinaci, pomodori',
          'Vitamina D: sole 15 min o 2000-4000 UI',
          'Zinco: carne rossa, semi di zucca',
          'EVITA: zuccheri, latticini in eccesso, alcol'
        ],
        tips: 'BF% ideale per jawline maschile: 10-15%. Sotto 12% emergono zigomi.'
      },
      {
        id: 'body-training', name: 'Body Training', subtitle: 'Allenamento per il fisico',
        icon: '🏋️', difficulty: 'Intermedio', difficultyLevel: 2, xp: 25,
        target: 'Corpo, Postura', duration: '45-60 min', sets: 1, reps: '4-5x settimana',
        unlockLevel: 2,
        benefits: ['Fisico attraente', 'Postura eretta', 'Jawline dal deficit calorico'],
        steps: [
          'PUSH (Lun/Gio): Panca, Military, Dips 4x8-12',
          'PULL (Mar/Ven): Trazioni, Rematore 4x8-12',
          'LEGS (Mer/Sab): Squat, Stacco 4x8-12',
          'CARDIO: 20-30 min LISS nei giorni di riposo',
          'Face Pulls + Shrugs per trapezi/collo',
          'Deficit calorico se BF% > 15%'
        ],
        tips: 'Collo 14-16" e trapezi sviluppati cambiano tutto il look.'
      },
      {
        id: 'sun-protocol', name: 'Protocollo Sole', subtitle: 'Esposizione intelligente',
        icon: '☀️', difficulty: 'Principiante', difficultyLevel: 1, xp: 10,
        target: 'Vitamina D, Tono pelle', duration: '15-20 min', sets: 1, reps: 'Giornaliero',
        unlockLevel: 1,
        benefits: ['Vitamina D', 'Tono sano', 'Umore'],
        steps: [
          'Sole 15-20 min (mattina presto/tardo pomeriggio)',
          'SEMPRE SPF 30-50 sul viso, anche inverno',
          'Occhiali da sole per prevenire rughe',
          'Mai ore centrali (11-16) prolungate',
          'Reidratura pelle dopo esposizione',
          'Se usi retinolo la sera, SPF obbligatorio'
        ],
        tips: 'Il sole causa il 90% delle rughe. SPF ogni giorno.'
      }
    ]
  },
  debloat: {
    id: 'debloat', name: 'Debloat', icon: '💧', color: '#0ea5e9',
    description: 'Sgonfia il viso, elimina la ritenzione idrica e fai emergere la struttura ossea',
    exercises: [
      {
        id: 'cold-water-face', name: 'Cold Water Shock', subtitle: 'Acqua fredda sul viso',
        icon: '🧊', difficulty: 'Principiante', difficultyLevel: 1, xp: 10,
        target: 'Viso intero, Circolazione', duration: '2 min', sets: 1, reps: '3 cicli',
        unlockLevel: 1,
        benefits: ['Sgonfiamento immediato', 'Pelle tonica', 'Circolazione attivata'],
        steps: [
          'Riempi il lavandino con acqua molto fredda + cubetti di ghiaccio',
          'Immergi il viso per 15 secondi',
          'Tira fuori e respira per 10 secondi',
          'Ripeti 3 volte',
          'Alternativa: impacco con asciugamano bagnato freddo',
          'Fai OGNI MATTINA appena sveglio per risultati migliori'
        ],
        tips: 'L\'acqua fredda causa vasocostrizione che riduce il gonfiore. Dopo 3 immersioni il viso appare subito più scolpito.'
      },
      {
        id: 'gua-sha', name: 'Gua Sha Massage', subtitle: 'Massaggio linfatico con gua sha',
        icon: '🪨', difficulty: 'Principiante', difficultyLevel: 1, xp: 15,
        target: 'Drenaggio linfatico, Zigomi', duration: '5 min', sets: 1, reps: '10 passaggi per zona',
        unlockLevel: 1,
        benefits: ['Drenaggio linfatico', 'Zigomi definiti', 'Jawline scolpita'],
        steps: [
          'Applica olio per il viso o siero',
          'Parti dal centro del mento → scorri verso l\'orecchio (10 volte)',
          'Parti dal lato del naso → scorri verso l\'orecchio (10 volte)',
          'Parti dal centro della fronte → scorri verso le tempie (10 volte)',
          'Sotto gli occhi: dall\'angolo interno → verso l\'esterno DELICATAMENTE',
          'Sempre movimenti dal CENTRO verso l\'ESTERNO, mai il contrario'
        ],
        tips: 'Il gua sha drena i liquidi in eccesso dal viso. Fallo ogni mattina per 5 minuti. Dopo 1 settimana vedrai la differenza.'
      },
      {
        id: 'lymph-drainage', name: 'Drenaggio Linfatico', subtitle: 'Massaggio manuale linfatico',
        icon: '🤲', difficulty: 'Principiante', difficultyLevel: 1, xp: 15,
        target: 'Sistema linfatico, Riduzione gonfiore', duration: '4 min', sets: 1, reps: '15 per zona',
        unlockLevel: 1,
        benefits: ['Eliminazione tossine', 'Viso sgonfio', 'Pelle luminosa'],
        steps: [
          'Con le dita, premi delicatamente sotto le orecchie (linfonodi) 10 volte',
          'Scorri con pressione leggera dalla mascella → giù verso il collo',
          'Dalla fronte → giù lungo le tempie → dietro le orecchie → collo',
          'Sotto gli occhi → verso le tempie → dietro le orecchie',
          'Termina sempre massaggiando il collo verso il basso',
          'La pressione deve essere LEGGERA, non forte'
        ],
        tips: 'Il sistema linfatico non ha pompa propria — serve il massaggio manuale per drenare i liquidi dal viso.'
      },
      {
        id: 'debloat-diet', name: 'Protocollo Anti-Gonfiore', subtitle: 'Alimentazione per sgonfiare',
        icon: '🥬', difficulty: 'Principiante', difficultyLevel: 1, xp: 20,
        target: 'Ritenzione idrica, Infiammazione', duration: 'Tutto il giorno', sets: 1, reps: 'Giornaliero',
        unlockLevel: 1,
        benefits: ['Meno ritenzione', 'Viso asciutto', 'Meno infiammazione'],
        steps: [
          'RIDUCI SODIO: max 1.5g/giorno (evita cibi confezionati, salumi, formaggi stagionati)',
          'AUMENTA POTASSIO: banane, avocado, spinaci, patate dolci (bilancia il sodio)',
          'BEVI 3L ACQUA: paradossalmente, più bevi meno trattieni',
          'ELIMINA ALCOL: anche 1 bicchiere causa gonfiore facciale il giorno dopo',
          'RIDUCI CARBOIDRATI RAFFINATI: pane bianco, pasta, dolci trattengono acqua',
          'AGGIUNGI: tè verde (drenante), cetriolo, sedano, prezzemolo, zenzero'
        ],
        tips: 'Il viso si sgonfia visibilmente in 3-5 giorni seguendo questo protocollo. Il sodio è il nemico #1.'
      },
      {
        id: 'face-yoga-debloat', name: 'Face Yoga Sgonfiante', subtitle: 'Esercizi per sgonfiare il viso',
        icon: '🧘', difficulty: 'Principiante', difficultyLevel: 1, xp: 15,
        target: 'Muscoli facciali, Circolazione', duration: '5 min', sets: 3, reps: 10,
        unlockLevel: 1,
        benefits: ['Circolazione attivata', 'Tono muscolare', 'Look scolpito'],
        steps: [
          'FISH FACE: aspira le guance e mantieni 10 secondi, ripeti 10 volte',
          'LION FACE: apri bocca al massimo, tira fuori la lingua, spalanca gli occhi — 5 secondi, 10 volte',
          'CHEEK PUFFS: gonfia le guance con aria, sposta da destra a sinistra 20 volte',
          'JAW RELEASE: apri la bocca, muovi la mandibola come se masticassi, 20 volte',
          'NECK STRETCH: inclina testa indietro, spingi le labbra in avanti, 10 secondi x 5',
          'Fai tutta la sequenza 3 volte ogni mattina'
        ],
        tips: 'Combinato con acqua fredda e gua sha, questo protocollo sgonfia il viso in 15 minuti ogni mattina.'
      },
      {
        id: 'sleep-debloat', name: 'Sleep Debloat Protocol', subtitle: 'Dormire per sgonfiare',
        icon: '😴', difficulty: 'Principiante', difficultyLevel: 1, xp: 10,
        target: 'Gonfiore mattutino, Postura', duration: 'Tutta la notte', sets: 1, reps: 'Ogni notte',
        unlockLevel: 1,
        benefits: ['Meno gonfiore mattutino', 'Simmetria facciale', 'Drenaggio notturno'],
        steps: [
          'Dormi con 2 cuscini o rialza la testata del letto di 10-15cm',
          'La gravità aiuta a drenare i liquidi dal viso durante la notte',
          'Dormi SULLA SCHIENA — dormire su un lato causa gonfiore asimmetrico',
          'Niente cibo salato dopo le 20:00',
          'Ultimo bicchiere d\'acqua alle 21:00 max',
          'Mouth tape: tappa la bocca con cerotto chirurgico per respirare dal naso'
        ],
        tips: 'Il 70% del gonfiore mattutino dipende dalla posizione del sonno e dall\'ultimo pasto.'
      }
    ]
  },
  manhood: {
    id: 'manhood', name: 'Performance', icon: '🍌', color: '#e11d48',
    description: 'Esercizi e consigli per migliorare la performance, la resistenza e la salute maschile',
    exercises: [
      {
        id: 'kegel-base', name: 'Kegel Base', subtitle: 'Pavimento pelvico base',
        icon: '🍌', difficulty: 'Principiante', difficultyLevel: 1, xp: 15,
        target: 'Muscolo PC, Pavimento pelvico', duration: '5 min', sets: 3, reps: 15, holdTime: 5,
        unlockLevel: 1,
        benefits: ['Controllo maggiore', 'Pavimento pelvico forte', 'Circolazione migliorata'],
        steps: [
          'Individua il muscolo PC: prova a fermare il flusso di urina a metà',
          'Quel muscolo che contrai è il PC — ora fallo SENZA urinare',
          'Contrai il muscolo PC con forza per 5 secondi',
          'Rilascia completamente per 5 secondi',
          'Ripeti 15 volte per serie, 3 serie',
          'Fai 2 volte al giorno (mattina e sera)'
        ],
        tips: 'Non contrarre addominali o glutei. Solo il muscolo PC. La costanza è fondamentale.'
      },
      {
        id: 'kegel-avanzato', name: 'Kegel Avanzato', subtitle: 'Contrazione intensa e prolungata',
        icon: '💪', difficulty: 'Avanzato', difficultyLevel: 3, xp: 25,
        target: 'Muscolo PC, Ischiocavernoso', duration: '8 min', sets: 4, reps: 10, holdTime: 10,
        unlockLevel: 1,
        benefits: ['Resistenza prolungata', 'Controllo avanzato', 'Forza del pavimento pelvico'],
        steps: [
          'Contrai il muscolo PC al massimo della forza',
          'Mantieni la contrazione per 10 secondi PIENI',
          'Rilascia lentamente in 5 secondi (non di colpo)',
          'Riposa 5 secondi',
          'Ripeti 10 volte per 4 serie',
          'Aggiungi 1 secondo di hold ogni settimana'
        ],
        tips: 'Dopo 4 settimane di kegel base. Non esagerare: overtrain del PC causa effetto opposto.'
      },
      {
        id: 'reverse-kegel', name: 'Reverse Kegel', subtitle: 'Rilassamento pavimento pelvico',
        icon: '🔄', difficulty: 'Intermedio', difficultyLevel: 2, xp: 20,
        target: 'Pavimento pelvico, Rilassamento', duration: '5 min', sets: 3, reps: 12, holdTime: 8,
        unlockLevel: 1,
        benefits: ['Rilassamento muscolare', 'Equilibrio pelvico', 'Durata migliorata'],
        steps: [
          'Invece di CONTRARRE il PC, fai il contrario: SPINGI fuori delicatamente',
          'Immagina di voler espellere aria — senza usare gli addominali',
          'Senti il pavimento pelvico che si RILASSA e si abbassa',
          'Mantieni il rilassamento per 8 secondi',
          'Torna alla posizione neutra',
          '12 ripetizioni per 3 serie — alterna con kegel normali'
        ],
        tips: 'I reverse kegel sono importanti quanto i kegel normali. L\'equilibrio tra contrazione e rilassamento è la chiave.'
      },
      {
        id: 'nutrizione-performance', name: 'Nutrizione Performance', subtitle: 'Alimentazione per la salute maschile',
        icon: '🥗', difficulty: 'Principiante', difficultyLevel: 1, xp: 15,
        target: 'Circolazione, Testosterone, Energia', duration: 'Sempre', sets: 1, reps: 'Giornaliero',
        unlockLevel: 1,
        benefits: ['Circolazione migliorata', 'Energia aumentata', 'Testosterone ottimizzato'],
        steps: [
          'L-CITRULLINA: 3-6g/giorno — si converte in arginina, migliora circolazione',
          'ZINCO: 30mg/giorno — essenziale per testosterone e salute riproduttiva',
          'VITAMINA D: 4000 UI — carenza = testosterone basso',
          'MELOGRANO: 1 bicchiere di succo/giorno — potente antiossidante per circolazione',
          'OMEGA-3: 2-3g/giorno — migliora la salute cardiovascolare e la circolazione',
          'EVITA: alcol in eccesso, fumo, cibi processati, zuccheri raffinati'
        ],
        tips: 'La circolazione è il fattore #1. Tutto ciò che migliora la salute cardiovascolare migliora anche la performance.'
      },
      {
        id: 'stamina-training', name: 'Stamina Training', subtitle: 'Tecniche per la resistenza',
        icon: '⏱️', difficulty: 'Intermedio', difficultyLevel: 2, xp: 20,
        target: 'Resistenza, Controllo, Breathing', duration: '10 min', sets: 1, reps: 'Pratica',
        unlockLevel: 1,
        benefits: ['Durata aumentata', 'Controllo del respiro', 'Gestione dell\'eccitazione'],
        steps: [
          'RESPIRAZIONE 4-7-8: Inspira 4 sec, trattieni 7 sec, espira 8 sec — calma il sistema nervoso',
          'START-STOP: Pratica portandoti vicino al limite, poi fermati completamente. Ripeti 5 volte.',
          'SQUEEZE TECHNIQUE: Al momento giusto, premi con 2 dita tra la base e il perineo per 10 sec',
          'KEGEL ATTIVO: Contrai il PC quando senti avvicinarti al limite — rallenta tutto',
          'CARDIO REGOLARE: 30 min corsa o nuoto 3x/settimana migliora il controllo cardiovascolare',
          'MINDFULNESS: Pratica la concentrazione sul respiro, non sulle sensazioni — 5 min meditazione/giorno'
        ],
        tips: 'La resistenza è 70% mentale. La respirazione è lo strumento più potente che hai. Pratica ogni giorno.'
      },
      {
        id: 'edging-protocol', name: 'Edging Protocol', subtitle: 'Allenamento con sleeve trainer',
        icon: '🔄', difficulty: 'Intermedio', difficultyLevel: 2, xp: 25,
        target: 'Controllo, Resistenza, Muscolo PC', duration: '20-30 min', sets: 5, reps: 'Cicli',
        unlockLevel: 1,
        benefits: ['Durata raddoppiata', 'Controllo totale', 'Sensibilità gestita'],
        steps: [
          'Usa il trainer con lubrificante a base d\'acqua (mai a secco)',
          'FASE 1: Ritmo lento per 3 minuti — concentrati sulla respirazione profonda (4 sec inspira, 6 sec espira)',
          'FASE 2: Aumenta gradualmente il ritmo fino a raggiungere il 70% dell\'eccitazione',
          'FASE 3: All\'80% FERMATI completamente. Contrai il muscolo PC per 10 secondi. Respira profondamente.',
          'FASE 4: Aspetta che l\'eccitazione scenda al 50%, poi riparti dalla FASE 1',
          'Ripeti il ciclo 5 volte. Ad ogni ciclo prova ad avvicinarti di più al limite prima di fermarti.'
        ],
        tips: 'La chiave è riconoscere il "punto di non ritorno" e fermarti PRIMA. Con la pratica impari a gestirlo. Obiettivo: 5 cicli in 20 min nella prima settimana, 8 cicli in 30 min dopo 1 mese.'
      },
      {
        id: 'breathing-sync', name: 'Breathing Sync Training', subtitle: 'Ritmo sincronizzato al respiro',
        icon: '🌬️', difficulty: 'Principiante', difficultyLevel: 1, xp: 20,
        target: 'Sistema nervoso, Controllo, Breathing', duration: '15 min', sets: 3, reps: '5 min per fase',
        unlockLevel: 1,
        benefits: ['Calma il sistema nervoso', 'Ritardo naturale', 'Controllo del respiro'],
        steps: [
          'Usa il trainer con lubrificante',
          'FASE LENTA (5 min): 1 movimento ogni 2 secondi. Inspira durante il movimento verso il basso, espira tornando su.',
          'FASE MEDIA (5 min): 1 movimento al secondo. Mantieni la respirazione 4-6 profonda e costante.',
          'FASE INTENSA (5 min): Ritmo naturale MA ogni volta che senti aumentare l\'eccitazione, RALLENTA e fai 3 respiri profondi 4-7-8.',
          'Se arrivi troppo vicino: fermati, contrai PC 10 sec, 5 respiri profondi, poi riparti dalla fase lenta.',
          'Obiettivo: completare tutte e 3 le fasi senza mai superare l\'80% di eccitazione.'
        ],
        tips: 'Il respiro controlla il sistema nervoso autonomo. Respirazione lenta e profonda = attivazione parasimpatica = più controllo. Pratica 3 volte a settimana.'
      },
      {
        id: 'pc-engagement', name: 'PC Muscle Engagement', subtitle: 'Contrazione attiva durante l\'uso',
        icon: '💪', difficulty: 'Avanzato', difficultyLevel: 3, xp: 30,
        target: 'Muscolo PC, Controllo avanzato', duration: '15-20 min', sets: 4, reps: 'Cicli alternati',
        unlockLevel: 1,
        benefits: ['Controllo muscolare attivo', 'Resistenza estrema', 'Forza del pavimento pelvico'],
        steps: [
          'Prerequisito: almeno 4 settimane di kegel base completate',
          'CICLO A (3 min): Usa il trainer normalmente. Ogni 10 secondi contrai il PC per 5 secondi, poi rilascia. Continua il movimento durante la contrazione.',
          'CICLO B (3 min): Movimento continuo + REVERSE KEGEL costante (spingi fuori delicatamente). Questo rallenta tutto naturalmente.',
          'CICLO C (3 min): Alterna 10 sec di contrazione PC + 10 sec di reverse kegel mentre usi il trainer. Senti la differenza tra i due.',
          'RIPOSO (1 min): Fermati, respira profondamente, lascia scendere eccitazione al 40%.',
          'Ripeti A-B-C-Riposo per 4 cicli totali. Obiettivo: gestire l\'eccitazione con il muscolo PC da solo.'
        ],
        tips: 'Questo è l\'esercizio più avanzato. La contrazione del PC al momento giusto può bloccare completamente l\'orgasmo. Serve molta pratica, ma i risultati sono permanenti.'
      },
      {
        id: 'progressive-duration', name: 'Progressive Duration', subtitle: 'Aumento graduale della durata',
        icon: '📈', difficulty: 'Intermedio', difficultyLevel: 2, xp: 25,
        target: 'Resistenza progressiva', duration: 'Variabile', sets: 1, reps: 'Sessione',
        unlockLevel: 1,
        benefits: ['Durata che aumenta nel tempo', 'Desensibilizzazione controllata', 'Record personali'],
        steps: [
          'SETTIMANA 1-2: Obiettivo 10 minuti. Usa il trainer a ritmo lento/medio. Fermati e riparti quando serve.',
          'SETTIMANA 3-4: Obiettivo 15 minuti. Integra la respirazione 4-7-8 quando ti avvicini al limite.',
          'SETTIMANA 5-6: Obiettivo 20 minuti. Aggiungi contrazioni PC attive durante l\'uso.',
          'SETTIMANA 7-8: Obiettivo 25 minuti. Alterna fasi lente (2 min) e veloci (1 min) senza mai superare l\'85%.',
          'MESE 3+: Obiettivo 30+ minuti. Dovresti riuscire a gestire qualsiasi ritmo senza problemi.',
          'TRACCIA I TEMPI: segna la durata di ogni sessione. Vedere i progressi è la motivazione più potente.'
        ],
        tips: 'Non forzare. Se un giorno non riesci a raggiungere l\'obiettivo, va bene. La progressione non è lineare. L\'importante è la tendenza generale nel tempo.'
      },
      {
        id: 'warm-up-pe', name: 'Warm Up PE', subtitle: 'Riscaldamento prima degli esercizi',
        icon: '🔥', difficulty: 'Principiante', difficultyLevel: 1, xp: 10,
        target: 'Tessuti, Circolazione, Tunica', duration: '5-10 min', sets: 1, reps: 'Ogni sessione',
        unlockLevel: 1,
        benefits: ['Previene microtraumi', 'Aumenta l\'elasticità dei tessuti', 'Migliora la circolazione'],
        steps: [
          'METODO PANNO CALDO: Immergi un asciugamano in acqua calda (non bollente, ~40°C), strizzalo',
          'Avvolgi il panno attorno e lascia agire per 5 minuti — riscalda in profondità i tessuti',
          'Alternativa: fai una doccia calda per 5 minuti focalizzandoti sulla zona',
          'Il tessuto deve essere caldo e morbido al tatto — questo è il momento ideale per iniziare',
          'Dopo ogni sessione: stessa cosa come cool-down per ridurre eventuali fastidi',
          'NON saltare mai questo step — il 90% degli infortuni avviene a freddo'
        ],
        tips: 'Il warm up è obbligatorio. I tessuti freddi sono rigidi e soggetti a microtraumi. Il calore aumenta l\'elasticità e rende gli esercizi 3x più efficaci e sicuri.'
      },
      {
        id: 'jelqing-base', name: 'Jelqing Base', subtitle: 'Tecnica fondamentale per lunghezza e circonferenza',
        icon: '📏', difficulty: 'Principiante', difficultyLevel: 1, xp: 20,
        target: 'Lunghezza, Circonferenza, Tessuti cavernosi', duration: '10-15 min', sets: 1, reps: 100, holdTime: 3,
        unlockLevel: 1,
        benefits: ['Stimola la crescita dei tessuti cavernosi', 'Migliora la circolazione interna', 'Aumenta gradualmente le dimensioni'],
        steps: [
          'Fai il warm up con panno caldo per almeno 5 minuti',
          'Applica lubrificante a base d\'acqua (olio d\'oliva o vasellina vanno bene)',
          'Stato: semi-eretto (60-70%) — mai completamente molle né completamente eretto',
          'Forma un cerchio OK con pollice e indice alla base',
          'Stringi moderatamente e scorri lentamente verso l\'alto in 3 secondi — stop 1 cm prima della glande',
          'Subito l\'altra mano fa lo stesso movimento — mani alternate, ritmo costante',
          'Inizia con 100 jelq al giorno per 2 settimane, poi aumenta di 50 ogni settimana',
          'Limite massimo: 300-500 jelq per sessione. Max 5 giorni/settimana, 2 giorni riposo.'
        ],
        tips: 'La pressione deve essere moderata — senti il sangue spingersi verso l\'alto, non dolore. Se senti dolore o vedi punti rossi, fermati. Il riposo è quando cresci, non durante l\'esercizio.'
      },
      {
        id: 'jelqing-avanzato', name: 'Jelqing Avanzato', subtitle: 'Jelq con rotazione per circonferenza massima',
        icon: '🔄', difficulty: 'Intermedio', difficultyLevel: 2, xp: 30,
        target: 'Circonferenza, Tessuti laterali, Girth', duration: '20 min', sets: 3, reps: 50, holdTime: 4,
        unlockLevel: 1,
        benefits: ['Focus sulla circonferenza', 'Sviluppo dei tessuti laterali', 'Effetto girth pronunciato'],
        steps: [
          'Warm up obbligatorio — 10 minuti di panno caldo',
          'Dopo 4 settimane di jelqing base con buona tecnica',
          'Jelq normale fino a metà del percorso, poi RUOTA delicatamente il polso di 45°',
          'Ruota verso sinistra 50 volte, poi verso destra 50 volte — questo sviluppa i tessuti laterali',
          'JELQ A V: forma una V con indice e medio invece del cerchio OK — pressione più distribuita',
          'Mantieni 60-70% di erezione — l\'eccessiva pressione a piena erezione è pericolosa',
          '2-3 sessioni a settimana con almeno 1 giorno di riposo tra una sessione e l\'altra'
        ],
        tips: 'Non saltare al jelqing avanzato prima delle 4 settimane base. I tessuti hanno bisogno di adattarsi gradualmente. Qualsiasi dolore acuto = stop immediato.'
      },
      {
        id: 'stretch-manuale', name: 'Stretching Manuale', subtitle: 'Allungamento per la lunghezza',
        icon: '📐', difficulty: 'Principiante', difficultyLevel: 1, xp: 15,
        target: 'Lunghezza, Legamento sospensore, Tunica albuginea', duration: '10 min', sets: 5, reps: 1, holdTime: 30,
        unlockLevel: 1,
        benefits: ['Allunga il legamento sospensore', 'Guadagno in lunghezza a riposo e eretto', 'Base per tecniche avanzate'],
        steps: [
          'Stato: completamente molle — lo stretching si fa sempre da flaccido',
          'Afferra delicatamente appena sotto la glande con pollice e indice',
          'Tira verso il BASSO con forza costante ma mai dolorosa per 30 secondi',
          'Poi tira verso SINISTRA 30 secondi, verso DESTRA 30 secondi, verso l\'ALTO 30 secondi',
          'Tra ogni direzione ruota lentamente (movimento circolare) per 10 secondi',
          'Ripeti il giro completo (basso, sx, dx, su) per 5 volte',
          'Dopo: massaggia delicatamente per ripristinare la circolazione',
          'Fai 5 giorni sì, 2 giorni no — il riposo è quando il legamento si adatta allungato'
        ],
        tips: 'Il legamento sospensore è il principale responsabile della lunghezza flaccida. Allungarlo gradualmente lo porta ad adattarsi a una posizione più bassa. Senti tensione, mai dolore acuto.'
      },
      {
        id: 'v-stretch', name: 'V-Stretch', subtitle: 'Stretch avanzato per la tunica',
        icon: '✌️', difficulty: 'Intermedio', difficultyLevel: 2, xp: 25,
        target: 'Tunica albuginea, Lunghezza interna', duration: '10 min', sets: 3, reps: 1, holdTime: 60,
        unlockLevel: 1,
        benefits: ['Target profondo sulla tunica', 'Allungamento da eretto', 'Guadagno in lunghezza eretto'],
        steps: [
          'Stato: semi-eretto (50-60%)',
          'Afferra la glande con una mano e tira in avanti con forza moderata',
          'Con l\'altra mano usa il pollice come punto di leva a metà del pene, premi verso il basso',
          'Senti la tensione crearsi a forma di V — questo allunga la tunica superiore',
          'Mantieni 60 secondi, poi inverti: leva in alto e tira verso il basso',
          'Ripeti con la leva in diverse posizioni lungo il corpo (base, metà, 3/4)',
          '3 serie per posizione. Max 2-3 volte a settimana — è uno stretch intenso'
        ],
        tips: 'Il V-stretch target la tunica albuginea, il tessuto connettivo più resistente. È più efficace del jelqing per la lunghezza eretto. Non fare più di 3 volte a settimana — i tessuti hanno bisogno di recupero.'
      },
      {
        id: 'uli-squeeze', name: 'Uli Squeeze', subtitle: 'Tecnica per la circonferenza massima',
        icon: '💪', difficulty: 'Avanzato', difficultyLevel: 3, xp: 30,
        target: 'Girth, Tessuti cavernosi, Pressione interna', duration: '10 min', sets: 10, reps: 1, holdTime: 30,
        unlockLevel: 1,
        benefits: ['Massima espansione dei corpi cavernosi', 'Guadagno in circonferenza', 'Effetto girth immediato e a lungo termine'],
        steps: [
          'Warm up esteso: 10 minuti panno caldo',
          'Porta all\'80-90% di erezione — questa tecnica richiede quasi piena erezione',
          'Forma il cerchio OK alla BASE con la mano dominante, stringi moderatamente',
          'La pressione blocca il sangue all\'interno — sentirai espansione nella testa e nel corpo',
          'Mantieni la stretta per 30 secondi mentre respiri normalmente',
          'Rilascia, massaggia delicatamente per 30 secondi, poi ripeti',
          '10 ripetizioni per sessione. Non superare — è uno degli esercizi più intensi',
          'Massimo 3 volte a settimana. Sempre seguito da massaggio'
        ],
        tips: 'L\'Uli è l\'esercizio più efficace per la circonferenza ma anche quello con più rischio se fatto male. MAI fare a piena erezione al 100%. Se vedi punti rossi (petecchie) o senti dolore, fermati subito e riposa 3-4 giorni.'
      },
      {
        id: 'bundled-stretch', name: 'Bundled Stretch', subtitle: 'Stretch torsionale per la tunica profonda',
        icon: '🌀', difficulty: 'Avanzato', difficultyLevel: 3, xp: 25,
        target: 'Tunica albuginea profonda, Strutture interne', duration: '8 min', sets: 4, reps: 1, holdTime: 45,
        unlockLevel: 1,
        benefits: ['Raggiunge aree difficili della tunica', 'Allungamento in profondità', 'Complementa il V-stretch'],
        steps: [
          'Stato: completamente molle — obbligatorio',
          'Afferra appena sotto la glande e RUOTA (torci) il corpo di 180° come se stessi torcendo un asciugamano',
          'Mentre mantieni la torsione, tira verso il basso per 45 secondi',
          'Poi tira verso l\'alto per altri 45 secondi — sempre mantenendo la torsione',
          'Rilascia, massaggia 30 secondi per ripristinare la circolazione',
          'Ripeti con torsione nel verso opposto: 4 serie totali (2 per ogni verso)',
          'Massimo 2 volte a settimana — lascia 3 giorni di recupero tra le sessioni'
        ],
        tips: 'Il bundled stretch crea un allungamento multidirezionale che raggiunge parti della tunica che gli stretch normali non colpiscono. È un esercizio avanzato — fai almeno 4 settimane di stretch normale prima di aggiungerlo.'
      },
      {
        id: 'pe-schedule', name: 'PE Programma Settimanale', subtitle: 'Schema completo per risultati ottimali',
        icon: '📅', difficulty: 'Principiante', difficultyLevel: 1, xp: 20,
        target: 'Tutti i tessuti, Recupero, Progressione', duration: 'Piano settimanale', sets: 1, reps: '7 giorni',
        unlockLevel: 1,
        benefits: ['Massimizza i risultati', 'Previene il sovrallenamento', 'Struttura progressiva'],
        steps: [
          'LUNEDÌ: Warm up 10 min + Jelqing 200 reps + Stretching manuale 10 min + Cool down 5 min',
          'MARTEDÌ: Warm up 10 min + V-stretch 3 serie da 60 sec per direzione + Cool down 5 min',
          'MERCOLEDÌ: RIPOSO — fondamentale per la crescita del tessuto',
          'GIOVEDÌ: Warm up 10 min + Jelqing avanzato 150 reps + Uli squeeze 8 reps + Cool down',
          'VENERDÌ: Warm up 10 min + Bundled stretch (se avanzato) o Stretching base + Cool down',
          'SABATO: RIPOSO',
          'DOMENICA: RIPOSO — i tessuti crescono nel recupero, non durante l\'allenamento',
          'DOPO 4 SETTIMANE: aggiungi 50 jelq/settimana, 1 serie in più agli stretch — progressione graduale'
        ],
        tips: 'La costanza batte l\'intensità. 20 minuti al giorno per 6 mesi sono più efficaci di sessioni da 2 ore fatte raramente. I risultati visibili arrivano in 3-6 mesi di pratica costante. Fotografa ogni 4 settimane per tracciare i progressi.'
      },
      {
        id: 'sleeve-tunnel-traction', name: 'Tunnel Traction Stretch', subtitle: 'Trazione sostenuta sfruttando il canale aperto',
        icon: '🔃', difficulty: 'Principiante', difficultyLevel: 1, xp: 20,
        target: 'Legamento sospensore, Lunghezza', duration: '15 min', sets: 5, reps: 1, holdTime: 60,
        unlockLevel: 1,
        benefits: ['Trazione costante come un extender', 'Sfrutta la lunghezza extra del canale', 'Allungamento progressivo del legamento'],
        steps: [
          'Warm up 5 min con panno caldo prima di qualsiasi cosa',
          'Lubrifica abbondantemente l\'interno del canale con lubrificante a base d\'acqua',
          'Inserisciti a 50-60% di erezione — il canale è più lungo del pene, quindi resta spazio in eccesso in fondo',
          'Afferra la scanalatura esterna nella parte finale (quella libera) con la mano e tira DELICATAMENTE verso l\'esterno, mantenendo il corpo fermo',
          'Il canale extra funge da leva: crei trazione assiale sostenuta senza dover stringere forte',
          'Mantieni la trazione per 60 secondi interi, respirando normalmente',
          'Rilascia lentamente, massaggia 30 sec, ripeti per 5 volte',
          'Aumenta di 10 sec ogni settimana fino ad arrivare a 2 minuti di hold'
        ],
        tips: 'Il vantaggio di un canale più lungo del pene (15-20 cm) è che la parte finale libera diventa un punto di leva naturale per la trazione, come un mini-extender. Mai tirare con scatti: la forza deve essere costante e mai dolorosa.'
      },
      {
        id: 'sleeve-canal-glide-jelq', name: 'Canal Glide Jelq', subtitle: 'Jelqing guidato dalla texture interna scanalata',
        icon: '🤜', difficulty: 'Intermedio', difficultyLevel: 2, xp: 30,
        target: 'Girth, Pressione interna, Tessuti cavernosi', duration: '20 min', sets: 3, reps: 30, holdTime: 5,
        unlockLevel: 1,
        benefits: ['La texture interna crea resistenza variabile naturale', 'Sviluppo della circonferenza', 'Effetto girth superiore al jelq a mano nuda'],
        steps: [
          'Warm up 10 min — obbligatorio per questa tecnica',
          'Lubrifica generosamente il canale interno scanalato e le mani',
          'Inserisciti a 70-80% di erezione',
          'Con la mano libera forma il cerchio OK alla BASE, appena fuori dall\'apertura, stringi moderatamente',
          'Fai scorrere lentamente il canale verso l\'alto in 3-4 secondi: le creste interne alternano punti di pressione mentre scorri',
          'Quando la mano OK raggiunge la base del canale, mantieni la compressione per 5 secondi',
          'Fai tornare il canale in posizione, ripeti 30 volte',
          '3 serie con 1 minuto di riposo tra una serie e l\'altra. Max 3 volte a settimana.'
        ],
        tips: 'La superficie interna non liscia (a differenza di un tubo liscio) crea una pressione che varia lungo la corsa invece che costante — molti la trovano più efficace di uno sleeve liscio. Se senti pizzicore acuto o vedi ecchimosi, fermati e riposa 4 giorni.'
      },
      {
        id: 'sleeve-open-end-pull', name: 'Open-End Extension Pull', subtitle: 'Allungamento a doppia apertura',
        icon: '🐢', difficulty: 'Principiante', difficultyLevel: 1, xp: 15,
        target: 'Lunghezza, Legamento sospensore, Tunica', duration: '15 min', sets: 4, reps: 20, holdTime: 10,
        unlockLevel: 1,
        benefits: ['Allungamento graduale e sicuro', 'Stimola il legamento sospensore', 'Ottimo per i principianti'],
        steps: [
          'Warm up 5 min. Lubrifica il canale, che essendo aperto da entrambi i lati permette di afferrarlo comodamente in fondo.',
          'Inserisciti a 50-60% di erezione — meno eretto rispetto ad altri esercizi',
          'Afferra l\'estremità finale aperta con la mano e tira LENTAMENTE verso l\'esterno per 10 secondi',
          'Il corpo non segue — crea resistenza mentre il canale tira — senti la tensione in trazione',
          'Tieni la trazione massima per 10 secondi',
          'Poi tira verso sinistra 10 sec, verso destra 10 sec, verso il basso 10 sec, ruotando leggermente il polso sulla scanalatura esterna per non perdere la presa',
          'Ripeti 20 volte per serie, 4 serie totali',
          'Questo simula un penis extender ma con il comfort del canale morbido'
        ],
        tips: 'Avere l\'apertura su entrambi i lati è ciò che rende possibile questa presa dal fondo — è l\'equivalente di un extender fatto con lo sleeve, più sicuro e comodo. Risultati in 8-12 settimane di pratica regolare.'
      },
      {
        id: 'sleeve-progressive-hold', name: 'Progressive Depth Hold', subtitle: 'Allungamento a profondità massima progressiva',
        icon: '🎈', difficulty: 'Avanzato', difficultyLevel: 3, xp: 35,
        target: 'Lunghezza, Corpi cavernosi, Legamento sospensore', duration: '25-30 min', sets: 5, reps: 1, holdTime: 90,
        unlockLevel: 1,
        benefits: ['Sfrutta tutta la lunghezza disponibile del canale (15-20 cm)', 'Stimolo di allungamento massimale controllato', 'Guadagno progressivo in lunghezza'],
        steps: [
          'Warm up esteso: 10 minuti panno caldo',
          'Lubrifica abbondantemente tutto il canale interno',
          'Inserisciti a 60-70% di erezione, spingendo LENTAMENTE fino a coprire tutta la lunghezza disponibile',
          'Poiché il canale è più lungo della lunghezza media, all\'inizio arriverai solo a metà — va bene, non forzare',
          'Una volta a battuta comoda: TIENI la posizione per 90 secondi, respirando profondamente, senza spingere oltre il limite naturale',
          'Estrai lentamente, massaggia 30 sec',
          'Ripeti per 5 volte, cercando ad ogni serie di coprire qualche mm in più del canale senza mai forzare',
          'Traccia settimanalmente quanta parte del canale riesci a coprire comodamente — è il tuo indicatore di progresso'
        ],
        tips: 'Il canale più lungo del corpo diventa un obiettivo di progressione naturale: invece di misurare in cm, misuri quanto del tunnel riesci a percorrere comodamente. Mai spingere con forza per "arrivare in fondo" — il progresso è lento e il dolore acuto è sempre un segnale di stop.'
      },
      {
        id: 'sleeve-twist-grip-stretch', name: 'Ribbed Grip Twist Stretch', subtitle: 'Stretch torsionale con presa sulle scanalature esterne',
        icon: '📊', difficulty: 'Avanzato', difficultyLevel: 3, xp: 30,
        target: 'Tunica albuginea, Legamento sospensore, Lunghezza', duration: '20 min', sets: 5, reps: 1, holdTime: 45,
        unlockLevel: 1,
        benefits: ['Le scanalature esterne offrono una presa salda per la torsione', 'Allungamento multidirezionale', 'Complementa gli altri stretch con sleeve'],
        steps: [
          'Warm up 10 min. Serve già familiarità con gli altri esercizi con questo sleeve.',
          'Lubrifica il canale, inseriscii a 50-60% di erezione',
          'Afferra le scanalature esterne rigide vicino alla base con presa salda — sono pensate per non scivolare durante la torsione',
          'Ruota (torci) delicatamente il canale di circa 90° mantenendo la presa, mentre tiri verso il basso',
          'Mantieni torsione + trazione per 45 secondi',
          'Torna al centro, poi ripeti la torsione nel verso opposto tirando verso l\'alto per altri 45 secondi',
          'Massaggia 30 sec tra una serie e l\'altra, 5 serie totali (alternando i versi)',
          'Massimo 2 volte a settimana — lascia 3 giorni di recupero tra le sessioni'
        ],
        tips: 'Le costolature esterne del canale servono proprio da punto di leva per la torsione senza far scivolare la mano — permettono un controllo della direzione che a mano nuda è più difficile da mantenere per 45 secondi. Fermati subito a qualunque dolore acuto.'
      }
    ]
  }
};

const ANALYSIS_CATEGORIES = [
  { id: 'symmetry', name: 'Simmetria', icon: '⚖️', weight: 0.20, relatedCategories: ['mewing', 'neck'] },
  { id: 'jawline', name: 'Jawline', icon: '🦴', weight: 0.20, relatedCategories: ['jawline', 'mewing'] },
  { id: 'eyes', name: 'Occhi', icon: '👁️', weight: 0.15, relatedCategories: ['faceYoga', 'skincare'] },
  { id: 'cheekbones', name: 'Zigomi', icon: '💎', weight: 0.15, relatedCategories: ['faceYoga', 'lifestyle'] },
  { id: 'nose', name: 'Naso', icon: '👃', weight: 0.10, relatedCategories: ['skincare'] },
  { id: 'lips', name: 'Labbra', icon: '👄', weight: 0.05, relatedCategories: ['faceYoga'] },
  { id: 'proportions', name: 'Proporzioni', icon: '📐', weight: 0.10, relatedCategories: ['mewing', 'neck'] },
  { id: 'skin', name: 'Pelle', icon: '✨', weight: 0.05, relatedCategories: ['skincare', 'lifestyle'] }
];

const PERSONALIZED_EXERCISES = {
  symmetry: { low: ['basic-mewing', 'chin-tucks'], medium: ['tongue-suction', 'wall-angels'], exercises: 'Mewing costante e dormire sulla schiena migliorano la simmetria facciale.' },
  jawline: { low: ['chin-tucks', 'jaw-clench', 'gum-chewing'], medium: ['jaw-resistance', 'neck-curls'], exercises: 'Focus su chin tucks, gomma dura e jaw clenches per definire la mandibola.' },
  eyes: { low: ['eye-lifts', 'morning-routine'], medium: ['forehead-smoother', 'evening-routine'], exercises: 'Eye lifts e skincare contorno occhi migliorano significativamente questa zona.' },
  cheekbones: { low: ['cheekbone-sculptor', 'cheek-lifts'], medium: ['face-tightener', 'body-training'], exercises: 'Cheekbone sculpting e riduzione body fat fanno emergere gli zigomi.' },
  nose: { low: ['morning-routine', 'weekly-treatment'], medium: ['evening-routine'], exercises: 'Focus su skincare e riduzione pori nella zona T.' },
  lips: { low: ['lip-plumper', 'hydration'], medium: ['morning-routine'], exercises: 'Lip exercises e idratazione costante migliorano volume e definizione.' },
  proportions: { low: ['basic-mewing', 'chin-tucks', 'neck-extensions'], medium: ['hard-mewing', 'wall-angels'], exercises: 'Mewing e postura migliorano i rapporti tra i terzi facciali.' },
  skin: { low: ['morning-routine', 'evening-routine', 'hydration'], medium: ['weekly-treatment', 'sleep-optimization'], exercises: 'Skincare routine con vitamina C, retinolo e SPF cambierà la tua pelle.' }
};

const LEVEL_THRESHOLDS = [
  0, 50, 120, 200, 300, 420, 560, 720, 900, 1100,
  1320, 1560, 1820, 2100, 2400, 2720, 3060, 3420, 3800, 4200,
  4620, 5060, 5520, 6000, 6500, 7020, 7560, 8120, 8700, 9300,
  9920, 10560, 11220, 11900, 12600, 13320, 14060, 14820, 15600, 16400,
  17220, 18060, 18920, 19800, 20700, 21620, 22560, 23520, 24500, 25500
];

const DAILY_ROUTINES = {
  beginner: {
    name: 'Principiante', duration: '15-20 min', weeks: 'Settimana 1-4',
    morning: [
      { exercise: 'basic-mewing', category: 'mewing', note: '5 min hold' },
      { exercise: 'chin-tucks', category: 'jawline', note: '3x15' },
      { exercise: 'morning-routine', category: 'skincare', note: 'Routine completa' }
    ],
    afternoon: [
      { exercise: 'gum-chewing', category: 'jawline', note: '15 minuti' },
      { exercise: 'cheek-lifts', category: 'faceYoga', note: '3x15' }
    ],
    evening: [
      { exercise: 'scapular-squeeze', category: 'neck', note: '4x15' },
      { exercise: 'evening-routine', category: 'skincare', note: 'Routine completa' }
    ]
  },
  intermediate: {
    name: 'Intermedio', duration: '25-35 min', weeks: 'Settimana 5-12',
    morning: [
      { exercise: 'hard-mewing', category: 'mewing', note: '3x60s' },
      { exercise: 'chin-tucks', category: 'jawline', note: '3x15' },
      { exercise: 'jaw-clench', category: 'jawline', note: '4x10' },
      { exercise: 'cheekbone-sculptor', category: 'faceYoga', note: '3x10' },
      { exercise: 'morning-routine', category: 'skincare', note: 'Routine + Vit C' }
    ],
    afternoon: [
      { exercise: 'gum-chewing', category: 'jawline', note: '20 minuti' },
      { exercise: 'neck-extensions', category: 'neck', note: '3x12' },
      { exercise: 'face-tightener', category: 'faceYoga', note: '3x10' }
    ],
    evening: [
      { exercise: 'tongue-suction', category: 'mewing', note: '4x45s' },
      { exercise: 'platysma-exercise', category: 'neck', note: '3x15' },
      { exercise: 'wall-angels', category: 'neck', note: '3x12' },
      { exercise: 'evening-routine', category: 'skincare', note: 'Routine + Retinolo' }
    ]
  },
  advanced: {
    name: 'Avanzato', duration: '40-50 min', weeks: 'Settimana 12+',
    morning: [
      { exercise: 'hard-mewing', category: 'mewing', note: '3x90s' },
      { exercise: 'chin-tucks', category: 'jawline', note: '4x20' },
      { exercise: 'jaw-clench', category: 'jawline', note: '5x12' },
      { exercise: 'jaw-resistance', category: 'jawline', note: '3x12' },
      { exercise: 'cheekbone-sculptor', category: 'faceYoga', note: '4x12' },
      { exercise: 'eye-lifts', category: 'faceYoga', note: '3x15' },
      { exercise: 'morning-routine', category: 'skincare', note: 'Routine + Vit C' }
    ],
    afternoon: [
      { exercise: 'gum-chewing', category: 'jawline', note: '30 minuti' },
      { exercise: 'neck-curls', category: 'jawline', note: '3x15' },
      { exercise: 'tongue-chewing', category: 'mewing', note: '3x20' },
      { exercise: 'face-tightener', category: 'faceYoga', note: '3x15' }
    ],
    evening: [
      { exercise: 'tongue-suction', category: 'mewing', note: '5x60s' },
      { exercise: 'platysma-exercise', category: 'neck', note: '4x15' },
      { exercise: 'wall-angels', category: 'neck', note: '3x15' },
      { exercise: 'forehead-smoother', category: 'faceYoga', note: '3x10' },
      { exercise: 'evening-routine', category: 'skincare', note: 'Routine + Retinolo' }
    ]
  }
};

const NOTIFICATION_SCHEDULES = [
  { hour: 7, minute: 30, title: '🌅 Routine Mattutina', body: 'È ora della skincare e degli esercizi del mattino!' },
  { hour: 10, minute: 0, title: '👅 Mewing Check', body: 'La lingua è contro il palato? Controlla la postura!' },
  { hour: 13, minute: 0, title: '🫧 Tempo di Gomma Dura', body: 'Dopo pranzo è il momento perfetto per masticare.' },
  { hour: 15, minute: 0, title: '💧 Idratazione', body: 'Hai bevuto abbastanza acqua oggi? Bevi un bicchiere!' },
  { hour: 18, minute: 0, title: '🏋️ Face Workout', body: 'Tempo degli esercizi facciali del pomeriggio!' },
  { hour: 21, minute: 30, title: '🌙 Routine Serale', body: 'Non dimenticare la skincare della sera e il retinolo!' },
  { hour: 22, minute: 30, title: '😴 Preparati per Dormire', body: 'Niente schermi! Il sonno è fondamentale per il looksmaxing.' }
];

const TIPS_DATABASE = [
  "Il mewing funziona meglio se praticato 24/7, non solo durante gli esercizi",
  "La mascella si definisce quando il body fat scende sotto il 15%",
  "Gli zigomi 'hollow' appaiono sotto il 12% di grasso corporeo",
  "Dormi sulla schiena per mantenere la simmetria facciale",
  "L'acqua fredda sul viso al mattino riduce il gonfiore",
  "Vitamina C mattina + retinolo sera = combo anti-aging perfetta",
  "Gomma dura 30 min/giorno: masseteri +15-20% in 3 mesi",
  "La postura del collo influenza direttamente la jawline",
  "Il sole causa il 90% dell'invecchiamento visibile della pelle",
  "500ml d'acqua appena sveglio riduce il gonfiore mattutino",
  "I chin tucks sono l'esercizio #1 per la forward head posture",
  "Collagene idrolizzato 10g/giorno migliora l'elasticità della pelle",
  "Non toccarti il viso durante il giorno per prevenire l'acne",
  "Meditazione 10 min/giorno rallenta l'invecchiamento da stress",
  "Dermaroller 0.25mm migliora l'assorbimento dei sieri del 400%",
  "Il retinolo è il miglior ingrediente anti-aging scientificamente provato",
  "Trapezi sviluppati e collo 14-16\" cambiano completamente il look",
  "La niacinamide 5% è il miglior ingrediente per i pori dilatati",
  "L'acido ialuronico trattiene 1000x il suo peso in acqua nella pelle",
  "Bere 3L di acqua al giorno per 30 giorni = trasformazione visibile"
];

const EXERCISE_VIDEOS = {
  'basic-mewing':'bhBYs1OBm3E',
  'hard-mewing':'lc0EB7f4SxY',
  'tongue-suction':'WphZD3Mr2RU',
  'tongue-chewing':'lc0EB7f4SxY',
  'chin-tucks':'gIBoxQ6AlS0',
  'jaw-clench':'q-4YI6dzRtE',
  'jaw-resistance':'q-4YI6dzRtE',
  'neck-curls':'aM657RnN9XE',
  'gum-chewing':'q-4YI6dzRtE',
  'jaw-side-to-side':'2xSlX7n-IHw',
  'cheek-lifts':'7cD-T2JGgFY',
  'cheekbone-sculptor':'KxKijURpcQA',
  'forehead-smoother':'mPymSXVZjjM',
  'eye-lifts':'mPymSXVZjjM',
  'lip-plumper':'lyaTIMp_pIY',
  'face-tightener':'X_VkeCovRto',
  'neck-extensions':'FPO1wKDQUs8',
  'neck-side-stretch':'PuOJd-v1-H0',
  'wall-angels':'2xSlX7n-IHw',
  'scapular-squeeze':'2xSlX7n-IHw',
  'platysma-exercise':'ZsZngne_GTM',
  'morning-routine':'IWrz9a5ZZRI',
  'evening-routine':'2BKPq_WDS9A',
  'weekly-treatment':'pGCra6i2gPQ',
  'dermarolling':'kLMdH7e2tOI',
  'sleep-optimization':'IWrz9a5ZZRI',
  'hydration':'IWrz9a5ZZRI',
  'nutrition':'2BKPq_WDS9A',
  'body-training':'FPO1wKDQUs8',
  'sun-protocol':'RC3MD7LIacE'
};

const PROGRAMS = [
  {
    id:'struttura-ossea', name:'Struttura Ossea del Viso', icon:'💀',
    image:'linear-gradient(135deg,#1a1a1a,#2d2d2d)',
    chapters:3, lessons:8,
    description:'Protocollo avanzato su IGF-1 Signaling e osteoblasti per migliorare le ossa del viso.',
    content:[
      {title:'Come Funziona la Crescita Ossea', text:'Le ossa del viso rispondono a stimoli meccanici secondo la Legge di Wolff: la pressione costante stimola gli osteoblasti (cellule che costruiscono osso). Il mewing applica forza sul palato e mascellare superiore, stimolando rimodellamento osseo. L\'IGF-1 (Insulin-like Growth Factor 1) è il principale mediatore della crescita ossea. Si aumenta con: sonno profondo, esercizio intenso, proteine adeguate, e vitamina D.'},
      {title:'Massimizzare IGF-1 Naturalmente', text:'1. Dormi 8+ ore (il GH si rilascia nelle fasi profonde del sonno). 2. Allenamento con pesi pesanti (squat, stacco stimolano il GH). 3. Proteine 1.6-2g/kg/giorno. 4. Vitamina D 4000 UI/giorno. 5. Zinco 25-50mg/giorno. 6. Evita zuccheri raffinati (abbassano GH e IGF-1). Nei giovani sotto i 25 anni questi protocolli possono ancora influenzare la struttura facciale.'},
      {title:'Bonesmashing: Fatto vs Fiction', text:'Il bonesmashing (colpire le ossa facciali per stimolare crescita) è basato su una interpretazione estrema della Legge di Wolff. I rischi superano i benefici: micro-fratture, danni ai nervi, gonfiore cronico. Metodi più sicuri: mewing costante, masticazione intensa con gomma dura, chin tucks per lo sviluppo mandibolare. Questi applicano forze fisiologiche che il corpo può gestire.'}
    ],
    relatedExercises:['basic-mewing','hard-mewing','jaw-clench','gum-chewing']
  },
  {
    id:'esercizi-viso', name:'Esercizi per il Viso', icon:'🏋️',
    image:'linear-gradient(135deg,#0d2818,#1a4d2e)',
    chapters:3, lessons:10,
    description:'Tutti gli esercizi attivi e video tutorial per migliorare ogni area del tuo viso.',
    content:[
      {title:'Mappa Muscolare del Viso', text:'Il viso ha oltre 40 muscoli. I principali per il looksmaxing: MASSETERI (lati della mascella, danno larghezza), ZIGOMATICI (sollevano le guance), ORBICOLARE DEGLI OCCHI (tonicità zona occhi), PLATISMA (collo anteriore, influenza la jawline), FRONTALE (fronte). Ogni muscolo risponde all\'allenamento come quelli del corpo: serve resistenza progressiva e costanza.'},
      {title:'Programma Settimanale Completo', text:'LUNEDÌ: Mewing 5min + Chin Tucks 3x15 + Cheek Lifts 3x15. MARTEDÌ: Gomma Dura 20min + Jaw Clench 4x10 + Eye Lifts 3x15. MERCOLEDÌ: Riposo attivo (solo mewing). GIOVEDÌ: Hard Mewing 3x60s + Neck Curls 3x15 + Face Tightener 3x10. VENERDÌ: Gomma Dura 20min + Jaw Resistance 3x12 + Cheekbone Sculptor 3x10. SABATO: Tongue Suction 4x45s + Platysma 3x15 + Wall Angels 3x12. DOMENICA: Riposo completo.'},
      {title:'Errori da Evitare', text:'1. Allenarsi troppo (i muscoli facciali sono piccoli, si affaticano). 2. Movimenti bruschi con il collo. 3. Stringere i denti troppo forte (rischio ATM). 4. Aspettarsi risultati in 1 settimana (servono 2-3 mesi minimo). 5. Non combinare con skincare (la pelle migliorata amplifica i risultati strutturali).'}
    ],
    relatedExercises:['basic-mewing','chin-tucks','cheek-lifts','jaw-clench','gum-chewing','neck-curls']
  },
  {
    id:'sgonfiare-viso', name:'Sgonfiare e Definire il Viso', icon:'💧',
    image:'linear-gradient(135deg,#0c2461,#1e3799)',
    chapters:2, lessons:6,
    description:'Protocollo avanzato per sgonfiare il viso e ottenere quel look scolpito da modello.',
    content:[
      {title:'Cause del Gonfiore Facciale', text:'Il viso gonfio è causato da: 1. RITENZIONE IDRICA — troppo sodio, poco potassio, disidratazione. 2. GRASSO SOTTOCUTANEO — body fat sopra il 15%. 3. INFIAMMAZIONE — alcol, zuccheri, glutine in eccesso, sonno scarso. 4. CORTISOLO ALTO — stress cronico causa accumulo di grasso facciale. La soluzione è un approccio multi-angolo che affronta tutte le cause.'},
      {title:'Protocollo Sgonfiamento 30 Giorni', text:'SETTIMANA 1-2: Elimina alcol, riduci sodio sotto 2g/giorno, bevi 3L acqua/giorno, dormi 8 ore. SETTIMANA 2-3: Aggiungi 20 min cardio LISS al giorno, riduci carboidrati raffinati, aggiungi potassio (banane, avocado). SETTIMANA 3-4: Deficit calorico 400kcal se BF>15%, massaggio linfatico viso ogni mattina con gua sha, impacchi freddi 2 min ogni mattina. RISULTATO: viso visibilmente più scolpito con jawline emergente.'}
    ],
    relatedExercises:['hydration','nutrition','body-training','chin-tucks','cheekbone-sculptor']
  },
  {
    id:'testosterone', name:'Testosterone Maxxing', icon:'⚡',
    image:'linear-gradient(135deg,#1a0000,#4a0000)',
    chapters:3, lessons:9,
    description:'Tutto per portare il testosterone ai massimi livelli naturali per mascolinità e definizione facciale.',
    content:[
      {title:'Testosterone e Aspetto Fisico', text:'Il testosterone influenza direttamente: crescita della barba, prominenza del browridge, mascolinità dei lineamenti, distribuzione del grasso corporeo, massa muscolare. Livelli ottimali: 600-900 ng/dL. Sotto i 400 si notano effetti negativi sull\'aspetto. La buona notizia: puoi aumentarlo del 20-40% naturalmente con lifestyle.'},
      {title:'Protocollo Aumento Naturale', text:'SONNO: 8+ ore, andare a letto prima delle 23 (il testosterone si produce durante il sonno profondo). ALLENAMENTO: Pesi pesanti, esercizi compound (squat, stacco, panca) 3-4x/settimana. NUTRIZIONE: Grassi sani 30% delle calorie (uova intere, olio oliva, noci), zinco 30mg/giorno, vitamina D 4000 UI, magnesio 400mg. EVITA: Alcol (abbassa T del 25%), soia in eccesso, BPA nelle plastiche, stress cronico.'},
      {title:'Integratori Evidence-Based', text:'I soli integratori con evidenza scientifica per il testosterone: 1. VITAMINA D (4000 UI/giorno) — se sei carente, può aumentare T del 25%. 2. ZINCO (30mg/giorno) — essenziale per la sintesi del testosterone. 3. MAGNESIO (400mg/giorno) — migliora il sonno e il testosterone libero. 4. ASHWAGANDHA (600mg/giorno) — riduce cortisolo e può aumentare T del 15%. 5. TONGKAT ALI (200mg/giorno) — studi mostrano aumento del T del 10-15%.'}
    ],
    relatedExercises:['body-training','sleep-optimization','nutrition']
  },
  {
    id:'altezza', name:'Altezza', icon:'📏',
    image:'linear-gradient(135deg,#1a1a2e,#16213e)',
    chapters:2, lessons:5,
    description:'Come massimizzare la crescita e l\'altezza durante e dopo lo sviluppo.',
    content:[
      {title:'Massimizzare la Crescita (Under 21)', text:'Se le piastre di crescita sono ancora aperte (verificabile con radiografia al polso), puoi influenzare l\'altezza finale: 1. SONNO 9+ ore (il GH si rilascia durante il sonno profondo). 2. NUTRIZIONE: proteine 2g/kg, calcio 1000mg/giorno, vitamina D 4000 UI. 3. ESERCIZIO: basket, nuoto, stretching quotidiano — NON ostacolano la crescita, la stimolano. 4. POSTURA: correggere cifosi e lordosi può "recuperare" 2-4 cm di altezza.'},
      {title:'Apparire Più Alti (Qualsiasi Età)', text:'Anche dopo lo sviluppo puoi apparire più alto: 1. POSTURA perfetta (chin tucks, wall angels) = +2-4 cm visivi. 2. SCARPE con rialzo interno 3-5 cm (insoles). 3. ABBIGLIAMENTO: colori scuri monocromatici, pantaloni che arrivano alla caviglia, evita vestiti larghi. 4. PROPORZIONI: spalle larghe e vita stretta creano l\'illusione di altezza. 5. TAGLIO CAPELLI: volume sopra aggiunge cm visivi.'}
    ],
    relatedExercises:['wall-angels','neck-extensions','scapular-squeeze','body-training']
  },
  {
    id:'myo-therapy', name:'Myo Functional Therapy', icon:'👅',
    image:'linear-gradient(135deg,#2d1b4e,#4a1942)',
    chapters:2, lessons:6,
    description:'6 pilastri fondamentali della terapia miofunzionale per costruire un viso attraente.',
    content:[
      {title:'I 6 Pilastri', text:'La terapia miofunzionale si basa su 6 principi: 1. POSTURA LINGUALE — lingua contro il palato 24/7 (mewing). 2. RESPIRAZIONE NASALE — mai dalla bocca, neanche di notte. 3. SEAL LABIALE — labbra chiuse a riposo, senza tensione. 4. MASTICAZIONE CORRETTA — usare entrambi i lati, masticare bene. 5. DEGLUTIZIONE CORRETTA — la lingua spinge contro il palato, non contro i denti. 6. POSTURA CERVICALE — testa sopra le spalle, non in avanti.'},
      {title:'Implementazione Pratica', text:'FASE 1 (Settimana 1-2): Focus solo sulla respirazione nasale. Tappa la bocca con tape durante il sonno (mouth taping). FASE 2 (Settimana 3-4): Aggiungi il mewing base, pratica consapevole 10 min ogni ora. FASE 3 (Settimana 5-8): Deglutizione corretta — quando ingoii, la lingua deve premere contro il palato, non spingere i denti. FASE 4 (Settimana 8+): Tutto diventa automatico. Aggiungi hard mewing e gomma dura per accelerare.'}
    ],
    relatedExercises:['basic-mewing','hard-mewing','tongue-suction','tongue-chewing','chin-tucks']
  },
  {
    id:'denti-labbra', name:'Denti e Labbra', icon:'🦷',
    image:'linear-gradient(135deg,#1a1a2e,#2d2d4e)',
    chapters:2, lessons:5,
    description:'Tutto su come migliorare l\'aspetto dei tuoi denti e delle tue labbra.',
    content:[
      {title:'Denti Perfetti', text:'I denti influenzano enormemente l\'attrattività del sorriso e la struttura facciale. SBIANCAMENTO: strisce sbiancanti professionali (Crest 3D White) o gel con perossido 10% con mascherine dal dentista. ALLINEAMENTO: Invisalign per correzioni moderate senza apparecchio visibile. IGIENE: spazzola 2x al giorno, filo interdentale, collutorio. Il sorriso è la prima cosa che le persone notano.'},
      {title:'Labbra e Contorno', text:'IDRATAZIONE: balsamo labbra con acido ialuronico e burro di karité, applicare 4-5 volte al giorno. ESFOLIAZIONE: scrub labbra delicato 2x settimana con zucchero e miele. VOLUME NATURALE: lip plumper exercises aumentano la circolazione. CONTORNO: evitare di leccarsi le labbra (le disidrata). Protezione SPF anche sulle labbra. Il colore naturale migliora con idratazione e circolazione.'}
    ],
    relatedExercises:['lip-plumper','hydration','morning-routine']
  },
  {
    id:'dieta-integratori', name:'Dieta e Integratori', icon:'🥗',
    image:'linear-gradient(135deg,#1a3a1a,#2d5a2d)',
    chapters:3, lessons:8,
    description:'Cibi e integratori consigliati per migliorare il tuo aspetto dalla base.',
    content:[
      {title:'Alimentazione per il Viso', text:'I cibi che migliorano il viso: COLLAGENE — brodo di ossa, salmone con pelle, uova (5-10g collagene idrolizzato/giorno). ANTIOSSIDANTI — bacche, melograno, tè verde (combattono invecchiamento). OMEGA-3 — salmone, sardine, noci (riducono infiammazione e migliorano la pelle). VITAMINA A — patate dolci, carote (essenziale per turnover cellulare). CIBI DA EVITARE: latticini in eccesso (pro-infiammatori, causano acne), zuccheri raffinati (glicazione del collagene), alcol (disidratazione).'},
      {title:'Stack Integratori Base', text:'Lo stack minimo evidence-based: 1. VITAMINA D3 (4000 UI) + K2 (100mcg) — pelle, ossa, testosterone. 2. OMEGA-3 (2-3g EPA+DHA) — anti-infiammatorio, pelle luminosa. 3. ZINCO (25-30mg) — pelle chiara, testosterone, sistema immunitario. 4. COLLAGENE IDROLIZZATO (10g) — elasticità pelle, capelli, unghie. 5. VITAMINA C (1000mg) — sintesi collagene, antiossidante.'},
      {title:'Stack Avanzato', text:'Per chi vuole il massimo: tutto lo stack base + 6. ASHWAGANDHA (600mg) — riduce cortisolo del 30%, migliora sonno e testosterone. 7. BIOTINA (5000mcg) — crescita capelli e unghie. 8. ACIDO IALURONICO ORALE (120mg) — idratazione pelle dall\'interno. 9. MAGNESIO GLICINATO (400mg) — sonno profondo, riduzione stress. 10. ASTAXANTINA (12mg) — il più potente antiossidante, protezione UV dall\'interno.'}
    ],
    relatedExercises:['nutrition','hydration','sleep-optimization']
  },
  {
    id:'jaw-guide', name:'Mascella & Mandibola', icon:'🦴',
    image:'linear-gradient(135deg,#1a1a2e,#16213e)',
    chapters:3, lessons:10,
    description:'Guida completa alla mascella: anatomia, esercizi, masseteri, gonial angle, e come massimizzare la jawline.',
    content:[
      {title:'Anatomia della Mascella', text:'La mandibola è composta dal corpo mandibolare e dal ramo. Il gonial angle (angolo mandibolare) determina quanto la jawline appare "squadrata". Un angolo di 120° o meno è considerato ideale per gli uomini. I muscoli masseteri, attaccati lateralmente alla mandibola, contribuiscono alla larghezza facciale inferiore.'},
      {title:'Come Sviluppare i Masseteri', text:'I masseteri crescono come qualsiasi altro muscolo: con resistenza progressiva. La gomma dura (Falim, Mastic Gum) è il metodo più efficace. Inizia con 15 min/giorno e aumenta fino a 30 min. Alterna i lati ogni 5 minuti. I risultati sono visibili in 2-3 mesi con costanza. Jaw clenches isometrici e jaw resistance training completano il lavoro.'},
      {title:'Riduzione del Grasso Facciale', text:'La jawline emerge quando il body fat scende sotto il 15%. Sotto il 12% vedrai gli zigomi e le hollow cheeks. Non si può perdere grasso solo dal viso - serve un deficit calorico globale di 300-500 kcal/giorno combinato con allenamento di resistenza per mantenere la massa muscolare.'}
    ],
    relatedExercises:['chin-tucks','jaw-clench','jaw-resistance','gum-chewing','neck-curls']
  },
  {
    id:'eye-area', name:'Eye Area', icon:'👁️',
    image:'linear-gradient(135deg,#0f0f23,#1a1a3e)',
    chapters:2, lessons:7,
    description:'Tutto sulla zona occhi: canthal tilt, upper eyelid exposure, infraorbitali, e come migliorare lo sguardo.',
    content:[
      {title:'Canthal Tilt e Eye Shape', text:'Il canthal tilt è l\'angolo tra il canto interno e esterno dell\'occhio. Un positive canthal tilt (angolo esterno più alto) è considerato più attraente. L\'upper eyelid exposure (pelle visibile sopra l\'occhio) dovrebbe essere minima. Dormire bene, ridurre il sale, e usare un contorno occhi con caffeina aiutano a ridurre il gonfiore palpebrale.'},
      {title:'Infraorbitali e Supporto Osseo', text:'Il supporto infraorbitale determina quanto gli occhi appaiono "infossati". Zigomi alti e prominenti forniscono supporto naturale. Face yoga per la zona occhi e una buona skincare contorno occhi con vitamina K e peptidi possono migliorare l\'aspetto di questa zona.'}
    ],
    relatedExercises:['eye-lifts','forehead-smoother','morning-routine','evening-routine']
  },
  {
    id:'skincare-aging', name:'Skincare & Anti-Aging', icon:'🧴',
    image:'linear-gradient(135deg,#1a0a2e,#2d1b69)',
    chapters:4, lessons:12,
    description:'Guida completa alla skincare maschile: routine, ingredienti attivi, anti-aging, e protezione solare.',
    content:[
      {title:'I 4 Pilastri della Skincare', text:'1. DETERSIONE: Pulire senza aggredire (pH 5.5). 2. ATTIVI: Vitamina C (mattina), Retinolo (sera), Niacinamide (sempre). 3. IDRATAZIONE: Acido ialuronico + ceramidi. 4. PROTEZIONE: SPF 30-50 ogni giorno, tutto l\'anno.'},
      {title:'Retinolo: Il Gold Standard', text:'Il retinolo (vitamina A) accelera il turnover cellulare, stimola il collagene, riduce rughe e macchie. Inizia con 0.3% 2 volte/settimana. Dopo 4 settimane passa a 0.5% a giorni alterni. Dopo 3 mesi puoi usare 1% ogni sera. Sempre seguito da idratante. MAI senza SPF il giorno dopo.'},
      {title:'Esfoliazione Chimica', text:'BHA (acido salicilico 2%): penetra nei pori, ideale per pelle grassa/acne. AHA (acido glicolico 5-10%): esfoliazione superficiale, ideale per texture irregolare. Non usare entrambi lo stesso giorno. Non combinare con retinolo.'},
      {title:'Protezione Solare', text:'Il fotoinvecchiamento causa il 90% delle rughe visibili. SPF 30 blocca il 97% dei raggi UVB. SPF 50 blocca il 98%. Riapplica ogni 2 ore se sei all\'aperto. Usa filtri minerali (ossido di zinco) o chimici moderni. Mai saltare il SPF, nemmeno in inverno o con cielo coperto.'}
    ],
    relatedExercises:['morning-routine','evening-routine','weekly-treatment','dermarolling']
  },
  {
    id:'neckmaxxing', name:'Neckmaxxing', icon:'🦒',
    image:'linear-gradient(135deg,#0a192f,#172a45)',
    chapters:2, lessons:8,
    description:'Un collo grosso e definito cambia completamente il look maschile. Guida completa.',
    content:[
      {title:'Perché il Collo è Importante', text:'Un collo di 14-16 pollici (35-40 cm) di circonferenza è il range ideale per un uomo. Un collo grosso comunica mascolinità e forza. I muscoli target sono: SCM (sternocleidomastoideo), trapezi superiori, e i muscoli profondi del collo. Il collo si allena 2-3 volte a settimana con volume moderato.'},
      {title:'Programma di Allenamento Collo', text:'Lunedì: Neck curls 3x15 + Neck extensions 3x12. Mercoledì: Chin tucks 4x15 + Neck side raises 3x10 per lato. Venerdì: Shrugs 4x12 + Face pulls 3x15. Inizia SENZA peso, aumenta gradualmente con un asciugamano o disco. Mai movimenti bruschi.'}
    ],
    relatedExercises:['neck-extensions','neck-side-stretch','wall-angels','platysma-exercise','chin-tucks']
  },
  {
    id:'fat-loss', name:'Fat Loss Made Easy', icon:'🔥',
    image:'linear-gradient(135deg,#1a0000,#3d0000)',
    chapters:3, lessons:9,
    description:'Come perdere grasso per far emergere la struttura facciale. Jawline, zigomi, hollow cheeks.',
    content:[
      {title:'Deficit Calorico', text:'Per perdere grasso serve un deficit di 300-500 kcal/giorno. Calcola il tuo TDEE (Total Daily Energy Expenditure) e mangia meno di quello. 1 kg di grasso = ~7700 kcal. Con un deficit di 500 kcal/giorno perdi circa 0.5 kg/settimana. Non scendere sotto il 10% BF per la salute.'},
      {title:'Proteine e Composizione Corporea', text:'Mangia 1.6-2.2g di proteine per kg di peso corporeo per preservare la massa muscolare durante il deficit. Le proteine hanno anche il più alto effetto termico (25-30% delle calorie viene bruciato nella digestione). Fonti top: pollo, pesce, uova, greco yogurt.'},
      {title:'Cardio e Definizione Facciale', text:'Il cardio LISS (camminata veloce 30-45 min) è il più efficiente per bruciare grasso senza perdere muscolo. 10.000 passi al giorno = ~400-500 kcal bruciate. Il grasso facciale è l\'ultimo ad andarsene, ma sotto il 15% BF la jawline emerge, sotto il 12% appaiono gli zigomi.'}
    ],
    relatedExercises:['body-training','nutrition','hydration']
  },
  {
    id:'framemaxxing', name:'Framemaxxing', icon:'💪',
    image:'linear-gradient(135deg,#0d1117,#21262d)',
    chapters:2, lessons:6,
    description:'Come massimizzare la struttura corporea: spalle, clavicole, postura e fisico.',
    content:[
      {title:'Spalle e Clavicole', text:'Le clavicole larghe creano l\'illusione di un fisico più imponente. Non puoi allargare le ossa, ma puoi sviluppare i deltoidi laterali con lateral raises (4x15-20), face pulls (3x15), e overhead press. Spalle larghe + vita stretta = rapporto ideale (1.618 Golden Ratio).'},
      {title:'Postura e Presenza', text:'La postura influenza come vieni percepito. Spalle indietro, petto in fuori, mento leggermente sollevato. Wall angels 3x12 ogni giorno. Scapular squeezes ogni ora se lavori al computer. Un buon trapezio sviluppo e rhomboids forti mantengono la postura naturalmente.'}
    ],
    relatedExercises:['wall-angels','scapular-squeeze','body-training','neck-extensions']
  },
  {
    id:'mewing-guide', name:'Mewing In Depth', icon:'👅',
    image:'linear-gradient(135deg,#1a0533,#2d1069)',
    chapters:3, lessons:8,
    description:'Guida avanzata al mewing: postura linguale, espansione palatale, e ristrutturazione facciale.',
    content:[
      {title:'La Scienza del Mewing', text:'Il Dr. John Mew ha teorizzato che la postura della lingua influenza lo sviluppo del terzo medio facciale. La lingua premuta contro il palato 24/7 applica una forza costante che nel tempo può espandere il palato e migliorare la proiezione del mascellare superiore. I risultati sono più rapidi nei giovani (sotto i 25 anni) ma possibili a qualsiasi età.'},
      {title:'Errori Comuni', text:'1. Premere solo la punta (devi premere TUTTA la lingua). 2. Respirare dalla bocca (devi respirare dal naso). 3. Non essere costante (il mewing funziona solo se fatto 24/7). 4. Aspettarsi risultati immediati (servono 6-12 mesi minimo). 5. Stringere troppo i denti (devono toccarsi leggermente).'},
      {title:'Hard Mewing e Suction Hold', text:'Il hard mewing applica pressione extra e può accelerare i risultati, ma va fatto con cautela per evitare problemi alla ATM. Il suction hold è la tecnica più avanzata: crea un vuoto tra lingua e palato che mantiene la posizione automaticamente, anche durante il sonno.'}
    ],
    relatedExercises:['basic-mewing','hard-mewing','tongue-suction','tongue-chewing']
  },
  {
    id:'hair-guide', name:'Hair & Hairline', icon:'💇',
    image:'linear-gradient(135deg,#1a1a1a,#333333)',
    chapters:2, lessons:6,
    description:'Guida a capelli e attaccatura: cura, styling, e come massimizzare il look.',
    content:[
      {title:'Cura dei Capelli', text:'Lava i capelli 2-3 volte a settimana con shampoo senza solfati. Usa un balsamo dopo ogni lavaggio. Olio di argan o jojoba sulle punte per idratare. Biotina 5000 mcg/giorno per la crescita. Massaggio al cuoio capelluto 5 min/giorno per stimolare la circolazione.'},
      {title:'Scegliere il Taglio Giusto', text:'Il taglio deve complementare la forma del viso. Viso lungo: volume ai lati, corto sopra. Viso rotondo: volume sopra, corto ai lati (fade). Viso ovale: qualsiasi taglio funziona. Fronte alta: frangia o fringe. Jawline debole: barba corta per definirla.'}
    ],
    relatedExercises:[]
  },
  {
    id:'coloring', name:'Coloring Guide', icon:'🎨',
    image:'linear-gradient(135deg,#2d1b4e,#1a0a2e)',
    chapters:1, lessons:4,
    description:'Analisi del colore: come scegliere i colori che ti valorizzano.',
    content:[
      {title:'Trova il Tuo Sottotono', text:'Il sottotono della pelle è caldo (giallo/dorato), freddo (rosa/blu), o neutro. Guarda le vene del polso: verdi = caldo, blu/viola = freddo, mix = neutro. Sottotono caldo: usa colori terra (beige, marrone, verde oliva). Sottotono freddo: usa colori freddi (nero, grigio, blu navy). Neutro: tutto funziona.'}
    ],
    relatedExercises:[]
  },
  {
    id:'tanning', name:'Tanning 101', icon:'☀️',
    image:'linear-gradient(135deg,#3d2b1f,#5c3d2e)',
    chapters:1, lessons:5,
    description:'Abbronzatura sicura e strategica per un aspetto più attraente.',
    content:[
      {title:'Tanning Sicuro', text:'Un leggero tono abbronzato migliora l\'aspetto del viso: nasconde imperfezioni, aumenta il contrasto dei lineamenti, e dà un aspetto più sano. Regole: mai scottarsi (le scottature accelerano l\'invecchiamento 10x). Esposizione graduale: 15 min il primo giorno, aumenta di 5 min ogni giorno. Sempre SPF sul viso. Il corpo può abbronzarsi, il viso va protetto.'}
    ],
    relatedExercises:['sun-protocol']
  },
  {
    id:'browridge', name:'Browridge Guide', icon:'🦴',
    image:'linear-gradient(135deg,#111111,#2a2a2a)',
    chapters:1, lessons:3,
    description:'La cresta sopraccigliare e come influenza l\'attrattività maschile.',
    content:[
      {title:'Anatomia del Browridge', text:'La cresta sopraccigliare (brow ridge) è una struttura ossea sopra le orbite oculari. Nei maschi è tipicamente più prominente e contribuisce a uno sguardo più "intenso" e mascolino. È largamente genetica, ma una buona postura facciale (mewing) può influenzare lo sviluppo nel lungo termine. A livello estetico, sopracciglia grosse e ben curate amplificano l\'effetto del browridge.'}
    ],
    relatedExercises:['forehead-smoother','basic-mewing']
  },
  {
    id:'ratios', name:'Blackpilled Ratios', icon:'📐',
    image:'linear-gradient(135deg,#0a0a0a,#1a1a2e)',
    chapters:2, lessons:5,
    description:'Le proporzioni facciali ideali: golden ratio, terzi facciali, FWHR.',
    content:[
      {title:'Il Golden Ratio (φ 1.618)', text:'Il rapporto aureo appare ripetutamente nei volti attraenti. Rapporto larghezza zigomi / larghezza mascella ≈ 1.618. Rapporto altezza facciale / larghezza facciale ≈ 1.618. I terzi facciali ideali sono uguali: fronte-sopracciglia = sopracciglia-naso = naso-mento.'},
      {title:'FWHR (Facial Width-to-Height Ratio)', text:'Il FWHR è il rapporto tra la larghezza bizigomatica e l\'altezza del volto superiore (sopracciglia → labbro superiore). Un FWHR alto (>2.0) è associato a percezione di dominanza e mascolinità. Si può migliorare sviluppando i masseteri (aumenta la larghezza) e con mewing (migliora le proporzioni del terzo medio).'}
    ],
    relatedExercises:['basic-mewing','jaw-clench','cheekbone-sculptor','gum-chewing']
  },
  {
    id:'grooming', name:'Grooming Completo', icon:'✂️',
    image:'linear-gradient(135deg,#1a1a2e,#2d2d4e)',
    chapters:4, lessons:12,
    description:'Guida completa alla cura personale maschile: barba, sopracciglia, capelli, unghie.',
    content:[
      {title:'Barba: Crescita e Styling', text:'Per far crescere la barba: Minoxidil 5% 2x/giorno sulle zone sparse (risultati in 3-6 mesi). Dermaroller 0.5mm 1x/settimana sulle zone dove vuoi più crescita. Biotina 5000mcg/giorno. Per lo styling: definisci i contorni al collo (linea immaginaria da orecchio a orecchio, 2 dita sopra il pomo d\'Adamo). Guance: segui la linea naturale o raditi pulito. Usa olio da barba per idratare e balsamo per ammorbidire.'},
      {title:'Sopracciglia Maschili', text:'Le sopracciglia incorniciano gli occhi e definiscono lo sguardo. NON fare l\'arco femminile. Togli SOLO: i peli tra le sopracciglia (unibrow), i peli sotto l\'arco naturale che escono dalla forma, e quelli selvaggi troppo lunghi. Usa pinzetta, mai rasoio (ricrescita brutta). Pettina verso l\'alto con spazzolino, taglia quelli troppo lunghi con forbicine. Sopracciglia folte e naturali = look più mascolino.'},
      {title:'Cura delle Unghie', text:'Unghie pulite e curate sono essenziali. Taglia ogni 7-10 giorni con tronchesina, non con le forbici. Lima i bordi per evitare angoli taglienti. Spingi indietro le cuticole dopo la doccia, mai tagliarle. Usa crema mani con cheratina. Niente unghie sporche MAI — è la prima cosa che le persone notano dopo il viso.'},
      {title:'Igiene Quotidiana', text:'Doccia 1-2x al giorno. Lava il viso separatamente con detergente specifico (non il bagnoschiuma). Deodorante antitraspirante DOPO la doccia, non prima. Cambia biancheria intima ogni giorno. Lava i vestiti dopo ogni uso (soprattutto magliette). Cambia le federe del cuscino ogni 3-4 giorni — i batteri causano acne.'}
    ],
    relatedExercises:[]
  },
  {
    id:'hairstyle', name:'Analisi Hairstyle', icon:'💇',
    image:'linear-gradient(135deg,#1a0f2e,#2d1b4e)',
    chapters:3, lessons:8,
    description:'In base alla forma del viso, scopri i tagli di capelli che ti valorizzano di più.',
    content:[
      {title:'Viso Ovale (il più versatile)', text:'Il viso ovale è considerato la forma ideale — la maggior parte dei tagli funziona. MIGLIORI: Quiff, Pompadour, Slick Back, Buzz Cut. EVITA: frangia troppo lunga che accorcia il viso. Il segreto: mantieni volume proporzionato sopra e ai lati.'},
      {title:'Viso Rotondo (crea angoli)', text:'Obiettivo: allungare il viso e creare l\'illusione di angoli. MIGLIORI: Fade alto ai lati + volume sopra (crea verticalità), Textured Crop, Pompadour. EVITA: capelli lunghi ai lati (allargano), bob cut, tutto troppo piatto sopra. Il fade 1-2 ai lati è il tuo migliore amico.'},
      {title:'Viso Lungo/Rettangolare', text:'Obiettivo: accorciare visivamente e aggiungere larghezza. MIGLIORI: Side part classico, Fringe/Frangia (copre la fronte alta), Medium length con volume ai lati. EVITA: Pompadour alto (allunga), fade troppo corto ai lati (toglie larghezza), capelli dritti in su. Tieni un po\' di volume laterale.'},
      {title:'Viso Quadrato', text:'Hai già angoli definiti — valorizzali. MIGLIORI: Buzz cut (mostra la struttura), Crew cut, Slick back, Short textured. EVITA: niente di troppo voluminoso che nasconda la struttura. Il tuo jawline è il punto forte — un taglio corto lo mette in evidenza.'},
      {title:'Viso a Cuore/Triangolare', text:'Fronte larga, mento stretto. MIGLIORI: Side sweep, Medium length con volume ai lati del mento (crea equilibrio), Fringe per ridurre la fronte. EVITA: Pompadour (enfatizza la fronte), volume eccessivo sopra.'},
      {title:'Come Scegliere', text:'1. Scatta una foto frontale con capelli tirati indietro. 2. Identifica la forma confrontando con le descrizioni sopra. 3. Porta la foto del taglio desiderato al barbiere — non descrivere a parole. 4. Chiedi al barbiere un consiglio — loro vedono la tua testa da tutti gli angoli. 5. Cambia taglio ogni 3-4 mesi per trovare il migliore.'}
    ],
    relatedExercises:[]
  },
  {
    id:'social-confidence', name:'Social Confidence', icon:'🗣️',
    image:'linear-gradient(135deg,#1a0a00,#3d1f00)',
    chapters:4, lessons:10,
    description:'Mindset, body language, voce e social skills per essere più attraente e carismatico.',
    content:[
      {title:'Body Language Attraente', text:'1. POSTURA: spalle indietro, petto aperto, mento leggermente alzato — comunica sicurezza. 2. SPAZIO: occupi spazio = dominanza percepita. Non incrociarti. 3. MOVIMENTI LENTI: chi si muove lentamente appare più sicuro. Niente gesti nervosi. 4. SORRISO ASIMMETRICO: un mezzo sorriso è percepito come più attraente e misterioso. 5. MANI VISIBILI: mani nascoste comunicano insicurezza.'},
      {title:'Contatto Visivo', text:'Il contatto visivo è il singolo fattore più importante nel linguaggio non verbale. REGOLA DEL 70%: mantieni contatto visivo il 70% del tempo quando ASCOLTI, 50% quando PARLI. TRIANGOLO: alterna lo sguardo tra occhio sinistro, occhio destro, bocca. MAI: fissare senza pause (inquietante) o evitare lo sguardo (insicurezza). Quando incroci lo sguardo di qualcuno, non distogliere per primo — aspetta 2-3 secondi, poi sorridi leggermente e guarda altrove con calma.'},
      {title:'Voce Profonda e Carismatica', text:'La voce si può allenare: 1. RESPIRA DAL DIAFRAMMA: la voce profonda viene dal petto, non dalla gola. Metti la mano sulla pancia e parla — deve muoversi. 2. PARLA LENTAMENTE: chi parla veloce sembra nervoso. Pause strategiche = potere. 3. ESERCIZIO QUOTIDIANO: ogni mattina, canticchia a bocca chiusa "hmmm" dal registro più basso per 2 minuti. 4. EVITA: uptalk (alzare la voce alla fine delle frasi come se fosse una domanda).'},
      {title:'Come Approcciare', text:'1. Non pensare troppo — i primi 3 secondi dopo aver deciso di parlare, MUOVITI. Più aspetti, più ansia crei. 2. Apri con osservazione + domanda: "Ho notato [qualcosa su di lei/situazione], [domanda genuina]". 3. Sorridi PRIMA di parlare. 4. Voce calma e volume adeguato. 5. Se ti rifiuta: "Nessun problema, buona serata" con un sorriso. Il rifiuto non dice nulla su di te — lei non ti conosce. 6. L\'abilità sociale è un muscolo: più la usi, più diventa forte.'}
    ],
    relatedExercises:[]
  },
  {
    id:'igiene-odore', name:'Igiene & Profumo', icon:'🧼',
    image:'linear-gradient(135deg,#0a1a2e,#1a2d4e)',
    chapters:3, lessons:8,
    description:'Come profumare bene tutto il giorno, layering fragranze, e igiene avanzata.',
    content:[
      {title:'Routine Igiene Completa', text:'MATTINA: Doccia con sapone neutro, deodorante antitraspirante, profumo sui punti caldi. Denti: spazzola 2 min + filo interdentale + collutorio. SERA: Doccia o lavaggio rapido, cambio biancheria. SETTIMANALE: pulizia orecchie (no cotton fioc dentro), taglio unghie, esfoliazione corpo. OGNI 3 GIORNI: cambio federe cuscino, lavaggio asciugamani.'},
      {title:'Layering Fragranze', text:'Il layering crea una fragranza unica e duratura: LIVELLO 1 — Bagnoschiuma profumato (base, dura poco). LIVELLO 2 — Lozione/crema corpo profumata (stessa famiglia olfattiva). LIVELLO 3 — Deodorante (neutro o stesso profumo). LIVELLO 4 — Eau de Parfum (2-3 spruzzi max). DOVE APPLICARE: polsi, collo (lati), dietro le orecchie, petto. Mai strofinare i polsi — rompe le molecole del profumo.'},
      {title:'Alito Fresco Tutto il Giorno', text:'L\'alito è un dealbreaker assoluto. ROUTINE: spazzola denti 2x/giorno (mattina + sera), usa FILO INTERDENTALE ogni sera (il 90% dell\'alito cattivo viene dal cibo tra i denti), raschia la lingua con raschietto apposito (la lingua ospita il 50% dei batteri), collutorio senza alcol dopo il filo. EMERGENZA: gomme alla menta, spray orale. CAUSE NASCOSTE: tonsilloliths (sassolini bianchi sulle tonsille), reflusso gastrico, disidratazione. Bevi acqua costantemente.'}
    ],
    relatedExercises:['morning-routine','evening-routine','hydration']
  },
  {
    id:'guided-training', name:'Allenamento Guidato', icon:'▶️',
    image:'linear-gradient(135deg,#0a2e1a,#1a4e2d)',
    chapters:3, lessons:6,
    description:'Sessioni guidate step-by-step: segui il protocollo e l\'app ti dice cosa fare.',
    content:[
      {title:'Sessione Mattutina (15 min)', text:'Esegui in ordine: 1. Cold Water Face — 3 immersioni (2 min). 2. Gua Sha Massage — tutte le zone (5 min). 3. Basic Mewing — posizione e hold (3 min). 4. Chin Tucks — 3x15 (3 min). 5. Skincare Mattutina — tutti gli step (5 min). TOTALE: 18 min. Fallo OGNI mattina per 30 giorni e vedrai la trasformazione.'},
      {title:'Sessione Face Training (20 min)', text:'Esegui in ordine: 1. Jaw Clench isometrico — 4x10 (4 min). 2. Cheekbone Sculptor — 3x10 (4 min). 3. Eye Area Lift — 3x15 (4 min). 4. Cheek Lifts — 3x15 (3 min). 5. Gomma Dura masticazione — 10 min continui. TOTALE: 25 min. Fallo 3-4 volte a settimana per risultati massimi.'},
      {title:'Sessione Serale (10 min)', text:'Esegui in ordine: 1. Drenaggio Linfatico — tutte le zone (3 min). 2. Platysma Toner — 3x15 (3 min). 3. Hard Mewing — 3x60s (3 min). 4. Skincare Serale — tutti gli step (5 min). 5. Mouth Tape per la notte. TOTALE: 14 min. La costanza serale è fondamentale per il recupero notturno.'}
    ],
    relatedExercises:['cold-water-face','gua-sha','basic-mewing','chin-tucks','morning-routine','jaw-clench','cheekbone-sculptor','evening-routine']
  },
  {
    id:'eye-area-deep', name:'Sguardo & Eye Area', icon:'👁️',
    image:'linear-gradient(135deg,#0a0a2e,#1a1a4e)',
    chapters:4, lessons:10,
    description:'Guida completa alla zona occhi: occhiaie, borse, canthal tilt, e come avere uno sguardo attraente.',
    content:[
      {title:'Occhiaie: Cause e Soluzioni', text:'Le occhiaie hanno 3 cause principali: 1. PIGMENTAZIONE — colore scuro genetico. Soluzione: siero con Vitamina C + Vitamina K + Arbutina. 2. VASCOLARE — vene visibili sotto pelle sottile. Soluzione: caffeina topica + impacchi freddi. 3. STRUTTURALE — incavo sotto l\'occhio (tear trough). Soluzione: filler acido ialuronico dal medico, o trucco correttore. PER TUTTE: dormire 8+ ore, bere 3L acqua, ridurre sale, SPF anche sotto gli occhi.'},
      {title:'Borse: Come Eliminarle', text:'Le borse sono grasso orbitale che protrude o liquido accumulato. ROUTINE ANTI-BORSE: 1. Dormi con testa rialzata (2 cuscini). 2. Impacco freddo 5 min ogni mattina (cucchiai congelati funzionano). 3. Siero contorno occhi con caffeina 2x/giorno. 4. Massaggio linfatico delicato con anulare: dall\'angolo interno verso l\'esterno, poi giù verso l\'orecchio. 5. Riduci alcol e sodio. Le borse mattutine spariscono in 1-2 ore; se persistono tutto il giorno, potrebbe servire un consulto medico.'},
      {title:'Canthal Tilt & Eye Shape', text:'Il canthal tilt è l\'angolo tra canto interno e esterno dell\'occhio. POSITIVE canthal tilt (angolo esterno più alto) = considerato più attraente e mascolino. Non puoi cambiare la struttura ossea, ma puoi: 1. Ridurre upper eyelid exposure dormendo bene e riducendo gonfiore. 2. Eye lifts exercise per tonificare i muscoli orbicolari. 3. Sopracciglia ben curate che seguono l\'angolo naturale. 4. Lenti a contatto colorate per cambiare colore (effetto drammatico).'},
      {title:'Eye Drops & Occhi Luminosi', text:'Occhi bianchi e luminosi = attraenti. PROTOCOLLO: 1. Lumify eye drops (brimonidina) — riduce rossore per 8 ore, sicuro per uso occasionale. 2. Dormi 8+ ore (il rossore peggiora con poco sonno). 3. Regola 20-20-20 per schermi: ogni 20 min guarda qualcosa a 20 piedi per 20 secondi. 4. Omega-3 (2g/giorno) riduce secchezza oculare. 5. Occhiali anti luce blu la sera. 6. Mangia carote e bacche per la salute oculare.'}
    ],
    relatedExercises:['eye-lifts','under-eye-massage','forehead-smoother','morning-routine']
  }
];

const CELEBRITY_MATCHES = [
  { minScore: 8.5, names: ['Henry Cavill', 'Chris Hemsworth', 'Brad Pitt giovane'], traits: ['Struttura eccezionale', 'Simmetria alta', 'Jawline definita'] },
  { minScore: 7.5, names: ['Ryan Gosling', 'Timothee Chalamet', 'Zayn Malik'], traits: ['Proporzioni armoniose', 'Lineamenti fini', 'Buona simmetria'] },
  { minScore: 6.5, names: ['Tom Holland', 'Shawn Mendes', 'Harry Styles'], traits: ['Look accessibile', 'Tratti equilibrati', 'Potenziale alto'] },
  { minScore: 5.5, names: ['Ed Sheeran', 'Pete Davidson', 'Adam Driver'], traits: ['Carisma compensa', 'Tratti unici', 'Migliorabile'] },
  { minScore: 0, names: ['Nessun match specifico'], traits: ['Grande potenziale', 'Lavoro da fare', 'Trasformazione possibile'] }
];

const RECOMMENDED_PRODUCTS = [
  { name: 'CeraVe Detergente', price: '~€12', category: 'Skincare', icon: '🧴', bg: 'rgba(236,72,153,0.12)', note: 'Detergente delicato pH 5.5, non aggredisce la barriera cutanea' },
  { name: 'La Roche-Posay SPF50', price: '~€15', category: 'Skincare', icon: '☀️', bg: 'rgba(236,72,153,0.12)', note: 'Protezione solare alta, anti-aging #1, uso quotidiano' },
  { name: 'The Ordinary Retinol 0.5%', price: '~€8', category: 'Skincare', icon: '✨', bg: 'rgba(236,72,153,0.12)', note: 'Gold standard anti-aging, stimola collagene e turnover cellulare' },
  { name: 'The Ordinary Niacinamide 10%', price: '~€7', category: 'Skincare', icon: '💧', bg: 'rgba(236,72,153,0.12)', note: 'Riduce pori, controlla sebo, migliora texture della pelle' },
  { name: 'The Ordinary Vitamina C', price: '~€10', category: 'Skincare', icon: '🍊', bg: 'rgba(236,72,153,0.12)', note: 'Antiossidante potente, illumina la pelle, stimola collagene' },
  { name: 'Vitamina D3 4000UI', price: '~€10', category: 'Integratori', icon: '☀️', bg: 'rgba(245,158,11,0.12)', note: 'Essenziale per ossa, testosterone e sistema immunitario' },
  { name: 'Omega-3', price: '~€15', category: 'Integratori', icon: '🐟', bg: 'rgba(245,158,11,0.12)', note: 'Anti-infiammatorio, pelle luminosa, salute cardiovascolare' },
  { name: 'Zinco 30mg', price: '~€8', category: 'Integratori', icon: '💪', bg: 'rgba(245,158,11,0.12)', note: 'Pelle chiara, testosterone, sistema immunitario' },
  { name: 'Collagene Idrolizzato', price: '~€20', category: 'Integratori', icon: '✨', bg: 'rgba(245,158,11,0.12)', note: '10g/giorno per elasticita pelle, capelli e unghie' },
  { name: 'Ashwagandha 600mg', price: '~€15', category: 'Integratori', icon: '🌿', bg: 'rgba(245,158,11,0.12)', note: 'Riduce cortisolo del 30%, migliora sonno e testosterone' },
  { name: 'Falim Gum', price: '~€5', category: 'Jaw Training', icon: '🫧', bg: 'rgba(249,115,22,0.12)', note: 'Gomma dura turca per ipertrofia masseteri' },
  { name: 'Mastic Gum', price: '~€15', category: 'Jaw Training', icon: '🫧', bg: 'rgba(249,115,22,0.12)', note: 'Resina naturale, la migliore per sviluppare la mascella' },
  { name: 'Jawliner', price: '~€25', category: 'Jaw Training', icon: '🦴', bg: 'rgba(249,115,22,0.12)', note: 'Attrezzo in silicone per allenamento isometrico mascella' },
  { name: 'Gua Sha in Giada', price: '~€10', category: 'Tools', icon: '🪨', bg: 'rgba(6,182,212,0.12)', note: 'Massaggio linfatico, sgonfia il viso, definisce jawline' },
  { name: 'Dermaroller 0.5mm', price: '~€12', category: 'Tools', icon: '🔬', bg: 'rgba(6,182,212,0.12)', note: 'Microneedling domiciliare, stimola collagene +400%' },
  { name: 'Mouth Tape', price: '~€8', category: 'Tools', icon: '🩹', bg: 'rgba(6,182,212,0.12)', note: 'Cerotto per respirazione nasale notturna, supporta il mewing' }
];

const DAILY_CHECKLIST_ITEMS = [
  'Mewing praticato',
  'Acqua 3L',
  'Skincare mattina',
  'Skincare sera',
  'Esercizi facciali',
  'Postura controllata',
  'Niente zuccheri'
];

const BODY_MEASURE_FIELDS = [
  { id: 'jaw', label: 'Mandibola', unit: 'cm', step: 0.5, min: 20, max: 50, default: 30 },
  { id: 'neck', label: 'Collo', unit: 'cm', step: 0.5, min: 25, max: 55, default: 36 },
  { id: 'bf', label: 'Grasso %', unit: '%', step: 0.5, min: 3, max: 40, default: 15 },
  { id: 'weight', label: 'Peso', unit: 'kg', step: 0.5, min: 30, max: 200, default: 70 }
];

const ROUTINE_ALTERNATIVES = {
  mewing: [
    { id: 'basic-mewing', name: 'Basic Mewing', desc: 'Postura base — ideale per iniziare', default: true },
    { id: 'hard-mewing', name: 'Hard Mewing', desc: 'Pressione intensa — per avanzati', default: false },
    { id: 'tongue-suction', name: 'Suction Hold', desc: 'Aspirazione al palato — intermedio', default: false },
    { id: 'tongue-chewing', name: 'Tongue Chewing', desc: 'Masticazione linguale sul palato', default: false }
  ],
  jawline: [
    { id: 'chin-tucks', name: 'Chin Tucks', desc: 'Retrazione mento — fondamentale', default: true },
    { id: 'jaw-clench', name: 'Jaw Clench', desc: 'Contrazione isometrica masseteri', default: true },
    { id: 'jaw-resistance', name: 'Jaw Resistance', desc: 'Resistenza con pugno', default: false },
    { id: 'gum-chewing', name: 'Gomma Dura', desc: 'Masticazione intensa con mastic gum', default: true },
    { id: 'neck-curls', name: 'Neck Curls', desc: 'Curl del collo per mento definito', default: false },
    { id: 'jaw-side-to-side', name: 'Jaw Side-to-Side', desc: 'Movimenti laterali mandibola', default: false }
  ],
  faceYoga: [
    { id: 'cheek-lifts', name: 'Cheek Lifts', desc: 'Sollevamento zigomi — base', default: true },
    { id: 'cheekbone-sculptor', name: 'Cheekbone Sculptor', desc: 'Scolpire zigomi — hollow cheeks', default: true },
    { id: 'eye-lifts', name: 'Eye Area Lift', desc: 'Sollevamento zona occhi', default: false },
    { id: 'face-tightener', name: 'Face Tightener', desc: 'Tonificazione completa', default: false },
    { id: 'forehead-smoother', name: 'Forehead Smoother', desc: 'Liscia la fronte, anti-rughe', default: false },
    { id: 'lip-plumper', name: 'Lip Volumizer', desc: 'Volume naturale alle labbra', default: false },
    { id: 'nose-shaper', name: 'Nose Shaper', desc: 'Modellamento muscoli nasali', default: false },
    { id: 'nose-breathing', name: 'Nose Breathing Drill', desc: 'Respirazione nasale forzata', default: false },
    { id: 'under-eye-massage', name: 'Under Eye Massage', desc: 'Massaggio anti-occhiaie', default: false }
  ],
  neck: [
    { id: 'neck-extensions', name: 'Neck Extensions', desc: 'Estensioni base del collo', default: true },
    { id: 'wall-angels', name: 'Wall Angels', desc: 'Postura spalle e schiena', default: true },
    { id: 'scapular-squeeze', name: 'Scapular Squeeze', desc: 'Retrazione scapole', default: true },
    { id: 'hanging-bar', name: 'Hanging on Bar', desc: 'Decompressione spinale, postura, altezza', default: false },
    { id: 'platysma-exercise', name: 'Platysma Toner', desc: 'Tono del collo anteriore', default: false },
    { id: 'neck-side-stretch', name: 'Neck Side Stretch', desc: 'Stretching laterale collo', default: false }
  ],
  skincare: [
    { id: 'morning-routine', name: 'Routine Mattutina', desc: 'Skincare completa del mattino', default: true },
    { id: 'evening-routine', name: 'Routine Serale', desc: 'Skincare completa della sera', default: true },
    { id: 'weekly-treatment', name: 'Trattamento Settimanale', desc: 'Maschera + esfoliazione', default: false },
    { id: 'dermarolling', name: 'Dermarolling', desc: 'Microneedling domiciliare', default: false }
  ],
  lifestyle: [
    { id: 'sleep-optimization', name: 'Sleep Protocol', desc: 'Ottimizzazione sonno per recovery', default: true },
    { id: 'hydration', name: 'Protocollo Idratazione', desc: 'Idratazione quotidiana 2-3L', default: true },
    { id: 'nutrition', name: 'Nutrizione Anti-Aging', desc: 'Alimentazione per viso e corpo', default: false },
    { id: 'body-training', name: 'Body Training', desc: 'Allenamento fisico PPL', default: false },
    { id: 'sun-protocol', name: 'Protocollo Sole', desc: 'Esposizione solare intelligente', default: false }
  ],
  debloat: [
    { id: 'cold-water-face', name: 'Cold Water Shock', desc: 'Acqua fredda per sgonfiare subito', default: true },
    { id: 'gua-sha', name: 'Gua Sha Massage', desc: 'Massaggio linfatico con gua sha', default: true },
    { id: 'lymph-drainage', name: 'Drenaggio Linfatico', desc: 'Massaggio manuale linfatico', default: false },
    { id: 'debloat-diet', name: 'Protocollo Anti-Gonfiore', desc: 'Alimentazione anti-ritenzione', default: true },
    { id: 'face-yoga-debloat', name: 'Face Yoga Sgonfiante', desc: 'Esercizi per sgonfiare', default: false },
    { id: 'sleep-debloat', name: 'Sleep Debloat', desc: 'Posizione sonno anti-gonfiore', default: false }
  ],
  manhood: [
    { id: 'kegel-base', name: 'Kegel Base', desc: 'Pavimento pelvico base', default: true },
    { id: 'kegel-avanzato', name: 'Kegel Avanzato', desc: 'Contrazione intensa prolungata', default: false },
    { id: 'reverse-kegel', name: 'Reverse Kegel', desc: 'Rilassamento pavimento pelvico', default: true },
    { id: 'stamina-training', name: 'Stamina Training', desc: 'Tecniche per la resistenza', default: false },
    { id: 'nutrizione-performance', name: 'Nutrizione Performance', desc: 'Alimentazione per la salute maschile', default: true },
    { id: 'edging-protocol', name: 'Edging Protocol', desc: 'Allenamento con sleeve trainer', default: false },
    { id: 'breathing-sync', name: 'Breathing Sync', desc: 'Ritmo sincronizzato al respiro', default: false },
    { id: 'pc-engagement', name: 'PC Muscle Engagement', desc: 'Contrazione attiva durante uso', default: false },
    { id: 'progressive-duration', name: 'Progressive Duration', desc: 'Aumento graduale della durata', default: false },
    { id: 'warm-up-pe', name: 'Warm Up PE', desc: 'Riscaldamento pre-esercizi (obbligatorio)', default: true },
    { id: 'jelqing-base', name: 'Jelqing Base', desc: 'Tecnica fondamentale lunghezza e girth', default: false },
    { id: 'jelqing-avanzato', name: 'Jelqing Avanzato', desc: 'Jelq con rotazione per circonferenza', default: false },
    { id: 'stretch-manuale', name: 'Stretching Manuale', desc: 'Allungamento per la lunghezza', default: false },
    { id: 'v-stretch', name: 'V-Stretch', desc: 'Stretch avanzato per la tunica', default: false },
    { id: 'uli-squeeze', name: 'Uli Squeeze', desc: 'Tecnica per la circonferenza massima', default: false },
    { id: 'bundled-stretch', name: 'Bundled Stretch', desc: 'Stretch torsionale per la tunica profonda', default: false },
    { id: 'pe-schedule', name: 'PE Programma Settimanale', desc: 'Schema completo ottimale', default: false },
    { id: 'sleeve-tunnel-traction', name: 'Tunnel Traction Stretch', desc: 'Trazione sostenuta con canale aperto', default: false },
    { id: 'sleeve-canal-glide-jelq', name: 'Canal Glide Jelq', desc: 'Jelqing guidato dalla texture interna', default: false },
    { id: 'sleeve-open-end-pull', name: 'Open-End Extension Pull', desc: 'Allungamento a doppia apertura', default: false },
    { id: 'sleeve-progressive-hold', name: 'Progressive Depth Hold', desc: 'Allungamento a profondità progressiva', default: false },
    { id: 'sleeve-twist-grip-stretch', name: 'Ribbed Grip Twist Stretch', desc: 'Stretch torsionale con presa esterna', default: false }
  ]
};
