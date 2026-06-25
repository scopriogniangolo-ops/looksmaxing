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
