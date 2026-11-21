// Reef Hunt — world.js
// Hand-drawn SVG art for three coral-reef spot-the-difference scenes.
// Panel space: 640 x 480, origin top-left. No external images or fonts.
// Each scene: base elements drawn identically in both panels, plus
// exactly 7 differences (left / right) the player must find.

// ------------------------------------------------------------------
// Scene 1 — Sunlit Reef (difficulty 1)
// Bright shallow reef: sandy floor, branching corals, colourful fish.
// ------------------------------------------------------------------
const scene1 = {
  id: 'sunlit-reef',
  name: 'Sunlit Reef',
  sub: 'Shallow water, bright coral — 7 differences',
  difficulty: 1,
  water: ['#8fd8ef', '#2f8fc0'],
  base: [
    // — Sandy floor —
    { k: 'rect', a: { x: 0, y: 400, width: 640, height: 80, fill: '#f2d8a0' } },
    { k: 'ellipse', a: { cx: 180, cy: 430, rx: 150, ry: 18, fill: '#e8c887' } },
    { k: 'ellipse', a: { cx: 500, cy: 445, rx: 130, ry: 16, fill: '#e8c887' } },
    { k: 'ellipse', a: { cx: 330, cy: 455, rx: 90, ry: 12, fill: '#f7e3b0' } },
    // — Light rays from the surface —
    { k: 'path', a: { d: 'M120 0 L160 0 L110 400 L70 400 Z', fill: '#ffffff', opacity: 0.18 } },
    { k: 'path', a: { d: 'M300 0 L325 0 L290 400 L265 400 Z', fill: '#ffffff', opacity: 0.14 } },
    { k: 'path', a: { d: 'M480 0 L510 0 L470 400 L440 400 Z', fill: '#ffffff', opacity: 0.16 } },
    // — Rocks —
    { k: 'ellipse', a: { cx: 60, cy: 408, rx: 46, ry: 20, fill: '#9aa5a8' } },
    { k: 'ellipse', a: { cx: 350, cy: 412, rx: 58, ry: 22, fill: '#8b979a' } },
    { k: 'ellipse', a: { cx: 600, cy: 410, rx: 40, ry: 18, fill: '#9aa5a8' } },
    { k: 'circle', a: { cx: 140, cy: 418, r: 9, fill: '#b9c2c4' } },
    { k: 'circle', a: { cx: 430, cy: 420, r: 7, fill: '#b9c2c4' } },
    // — Seaweed —
    { k: 'g', a: { transform: 'translate(40,400)' }, c: [
      { k: 'path', a: { d: 'M0 0 C-8 -30 6 -55 -2 -85', stroke: '#2e9e5b', 'stroke-width': 6, fill: 'none' } },
      { k: 'path', a: { d: 'M12 0 C6 -25 18 -50 12 -75', stroke: '#37b06a', 'stroke-width': 6, fill: 'none' } },
    ] },
    { k: 'g', a: { transform: 'translate(250,405)' }, c: [
      { k: 'path', a: { d: 'M0 0 C-10 -35 8 -60 -4 -95', stroke: '#2e9e5b', 'stroke-width': 6, fill: 'none' } },
      { k: 'path', a: { d: 'M14 0 C8 -28 20 -55 14 -80', stroke: '#57c785', 'stroke-width': 5, fill: 'none' } },
    ] },
    { k: 'g', a: { transform: 'translate(580,405)' }, c: [
      { k: 'path', a: { d: 'M0 0 C-8 -30 6 -58 -2 -88', stroke: '#2e9e5b', 'stroke-width': 6, fill: 'none' } },
    ] },
    { k: 'g', a: { transform: 'translate(620,400)' }, c: [
      { k: 'path', a: { d: 'M0 0 C-6 -25 8 -48 0 -70', stroke: '#37b06a', 'stroke-width': 5, fill: 'none' } },
    ] },
    // — Branching corals —
    { k: 'g', a: { transform: 'translate(170,395)' }, c: [
      { k: 'path', a: { d: 'M0 0 L-6 -45 L-22 -70 M-6 -45 L6 -72 M-6 -45 L-2 -30 L14 -55', stroke: '#ff7fa5', 'stroke-width': 7, fill: 'none', 'stroke-linecap': 'round' } },
      { k: 'circle', a: { cx: -22, cy: -70, r: 6, fill: '#ff9ebb' } },
      { k: 'circle', a: { cx: 6, cy: -72, r: 6, fill: '#ff9ebb' } },
      { k: 'circle', a: { cx: 14, cy: -55, r: 5, fill: '#ff9ebb' } },
    ] },
    { k: 'g', a: { transform: 'translate(390,398)' }, c: [
      { k: 'path', a: { d: 'M0 0 L-4 -40 L-20 -62 M-4 -40 L10 -66 M-4 -40 L2 -25 L18 -48', stroke: '#ff9f43', 'stroke-width': 7, fill: 'none', 'stroke-linecap': 'round' } },
      { k: 'circle', a: { cx: -20, cy: -62, r: 6, fill: '#ffb877' } },
      { k: 'circle', a: { cx: 10, cy: -66, r: 6, fill: '#ffb877' } },
      { k: 'circle', a: { cx: 18, cy: -48, r: 5, fill: '#ffb877' } },
    ] },
    { k: 'g', a: { transform: 'translate(560,398)' }, c: [
      { k: 'path', a: { d: 'M0 0 L-5 -38 L-18 -58 M-5 -38 L8 -60', stroke: '#b388ff', 'stroke-width': 7, fill: 'none', 'stroke-linecap': 'round' } },
      { k: 'circle', a: { cx: -18, cy: -58, r: 6, fill: '#cdb4ff' } },
      { k: 'circle', a: { cx: 8, cy: -60, r: 6, fill: '#cdb4ff' } },
    ] },
    // — Fan corals —
    { k: 'g', a: { transform: 'translate(290,400)' }, c: [
      { k: 'path', a: { d: 'M0 0 C-25 -15 -30 -45 -8 -60 C5 -50 12 -25 0 0 Z', fill: '#ffd166' } },
      { k: 'path', a: { d: 'M0 0 C-15 -12 -18 -35 -5 -48', stroke: '#e8a93d', 'stroke-width': 2, fill: 'none' } },
    ] },
    { k: 'g', a: { transform: 'translate(470,402)' }, c: [
      { k: 'path', a: { d: 'M0 0 C-20 -12 -24 -38 -6 -50 C4 -42 10 -20 0 0 Z', fill: '#ff8fa3' } },
    ] },
    // — Tube coral —
    { k: 'g', a: { transform: 'translate(90,400)' }, c: [
      { k: 'rect', a: { x: -5, y: -42, width: 10, height: 42, rx: 5, fill: '#ff6b81' } },
      { k: 'rect', a: { x: 8, y: -32, width: 10, height: 32, rx: 5, fill: '#ff8fa3' } },
      { k: 'circle', a: { cx: 0, cy: -42, r: 5, fill: '#ffd166' } },
      { k: 'circle', a: { cx: 13, cy: -32, r: 5, fill: '#ffd166' } },
    ] },
    // — Fish (base) —
    { k: 'g', a: { transform: 'translate(240,140)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 26, ry: 13, fill: '#4aa8ff' } },
      { k: 'path', a: { d: 'M-24 0 L-38 -10 L-38 10 Z', fill: '#2f7fd0' } },
      { k: 'circle', a: { cx: 14, cy: -3, r: 3, fill: '#ffffff' } },
      { k: 'circle', a: { cx: 15, cy: -3, r: 1.5, fill: '#123' } },
    ] },
    { k: 'g', a: { transform: 'translate(430,110)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 24, ry: 12, fill: '#ffd93d' } },
      { k: 'path', a: { d: 'M-22 0 L-35 -9 L-35 9 Z', fill: '#e8a93d' } },
      { k: 'circle', a: { cx: 13, cy: -3, r: 3, fill: '#ffffff' } },
      { k: 'circle', a: { cx: 14, cy: -3, r: 1.5, fill: '#123' } },
    ] },
    { k: 'g', a: { transform: 'translate(350,230)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 20, ry: 10, fill: '#b388ff' } },
      { k: 'path', a: { d: 'M-18 0 L-29 -8 L-29 8 Z', fill: '#8a5cf6' } },
      { k: 'circle', a: { cx: 10, cy: -2, r: 2.5, fill: '#ffffff' } },
      { k: 'circle', a: { cx: 11, cy: -2, r: 1.2, fill: '#123' } },
    ] },
    { k: 'g', a: { transform: 'translate(180,260)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 12, ry: 6, fill: '#dfe9ec' } },
      { k: 'path', a: { d: 'M-11 0 L-18 -5 L-18 5 Z', fill: '#aab8bd' } },
      { k: 'circle', a: { cx: 6, cy: -1, r: 1.5, fill: '#123' } },
    ] },
    // — Shells —
    { k: 'g', a: { transform: 'translate(120,425)' }, c: [
      { k: 'path', a: { d: 'M0 0 C-12 -4 -16 -18 -6 -24 C4 -28 14 -18 12 -6 C10 2 4 4 0 0 Z', fill: '#ffb3c1' } },
      { k: 'path', a: { d: 'M-2 -4 C-6 -10 -4 -18 2 -20', stroke: '#e07a90', 'stroke-width': 2, fill: 'none' } },
    ] },
    { k: 'g', a: { transform: 'translate(300,435)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 12, ry: 7, fill: '#d9c9a8' } },
      { k: 'circle', a: { cx: -4, cy: -2, r: 2, fill: '#b39a6d' } },
      { k: 'circle', a: { cx: 4, cy: 1, r: 2, fill: '#b39a6d' } },
    ] },
    { k: 'g', a: { transform: 'translate(540,430)' }, c: [
      { k: 'path', a: { d: 'M0 0 C-10 -3 -13 -15 -5 -20 C3 -23 12 -15 10 -5 C8 2 3 3 0 0 Z', fill: '#ffe08a' } },
    ] },
    { k: 'ellipse', a: { cx: 230, cy: 440, rx: 8, ry: 5, fill: '#f7c6d3' } },
    // — Bubbles —
    { k: 'circle', a: { cx: 260, cy: 330, r: 7, fill: '#ffffff', opacity: 0.55 } },
    { k: 'circle', a: { cx: 275, cy: 300, r: 5, fill: '#ffffff', opacity: 0.5 } },
    { k: 'circle', a: { cx: 268, cy: 272, r: 4, fill: '#ffffff', opacity: 0.45 } },
    { k: 'circle', a: { cx: 480, cy: 320, r: 6, fill: '#ffffff', opacity: 0.55 } },
    { k: 'circle', a: { cx: 492, cy: 292, r: 4, fill: '#ffffff', opacity: 0.45 } },
    { k: 'circle', a: { cx: 90, cy: 300, r: 5, fill: '#ffffff', opacity: 0.5 } },
    // — Anemones —
    { k: 'g', a: { transform: 'translate(210,398)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 16, ry: 7, fill: '#ff8fa3' } },
      { k: 'circle', a: { cx: -8, cy: -10, r: 4, fill: '#ffb3c1' } },
      { k: 'circle', a: { cx: 2, cy: -13, r: 4, fill: '#ffb3c1' } },
      { k: 'circle', a: { cx: 10, cy: -9, r: 4, fill: '#ffb3c1' } },
    ] },
    { k: 'g', a: { transform: 'translate(520,400)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 12, ry: 6, fill: '#ff9f43' } },
      { k: 'circle', a: { cx: -5, cy: -8, r: 3, fill: '#ffc078' } },
      { k: 'circle', a: { cx: 5, cy: -9, r: 3, fill: '#ffc078' } },
    ] },
    // — Seagrass blades —
    { k: 'path', a: { d: 'M150 405 C145 370 155 345 148 320', stroke: '#57c785', 'stroke-width': 4, fill: 'none' } },
    { k: 'path', a: { d: 'M165 405 C162 375 170 350 164 328', stroke: '#2e9e5b', 'stroke-width': 4, fill: 'none' } },
    { k: 'path', a: { d: 'M440 405 C436 375 446 350 440 330', stroke: '#57c785', 'stroke-width': 4, fill: 'none' } },
    // — Coral polyps (tiny dots on the branching corals) —
    { k: 'circle', a: { cx: 148, cy: 325, r: 3, fill: '#ff9ebb' } },
    { k: 'circle', a: { cx: 396, cy: 336, r: 3, fill: '#ffb877' } },
    { k: 'circle', a: { cx: 552, cy: 340, r: 3, fill: '#cdb4ff' } },
    // — Fish shadows on the sand —
    { k: 'ellipse', a: { cx: 240, cy: 415, rx: 26, ry: 5, fill: '#d9b878', opacity: 0.6 } },
    { k: 'ellipse', a: { cx: 430, cy: 418, rx: 22, ry: 5, fill: '#d9b878', opacity: 0.6 } },
    // — Sea urchin —
    { k: 'g', a: { transform: 'translate(620,430)' }, c: [
      { k: 'circle', a: { cx: 0, cy: 0, r: 9, fill: '#3d348b' } },
      { k: 'path', a: { d: 'M-9 0 L-16 -4 M9 0 L16 -4 M0 -9 L0 -16 M-6 -6 L-11 -12 M6 -6 L11 -12', stroke: '#3d348b', 'stroke-width': 2 } },
    ] },
    // — Small crab —
    { k: 'g', a: { transform: 'translate(60,440)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 11, ry: 7, fill: '#ff6b4a' } },
      { k: 'circle', a: { cx: -5, cy: -6, r: 2, fill: '#123' } },
      { k: 'circle', a: { cx: 5, cy: -6, r: 2, fill: '#123' } },
      { k: 'path', a: { d: 'M-11 2 L-18 6 M11 2 L18 6', stroke: '#ff6b4a', 'stroke-width': 2 } },
    ] },
    // — Sand specks and light patch —
    { k: 'circle', a: { cx: 330, cy: 425, r: 2.5, fill: '#d9b878' } },
    { k: 'circle', a: { cx: 380, cy: 448, r: 2.5, fill: '#d9b878' } },
    { k: 'circle', a: { cx: 90, cy: 452, r: 2.5, fill: '#d9b878' } },
    { k: 'ellipse', a: { cx: 200, cy: 435, rx: 40, ry: 8, fill: '#fff3c4', opacity: 0.35 } },
    // — Tiny fish school —
    { k: 'g', a: { transform: 'translate(560,80)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 8, ry: 4, fill: '#dfe9ec' } },
      { k: 'ellipse', a: { cx: 16, cy: 10, rx: 8, ry: 4, fill: '#c9d8dd' } },
      { k: 'ellipse', a: { cx: 30, cy: 2, rx: 8, ry: 4, fill: '#dfe9ec' } },
    ] },
    // — Small starfish (base one; the big starfish is a difference) —
    { k: 'g', a: { transform: 'translate(410,455)' }, c: [
      { k: 'path', a: { d: 'M0 -9 L2.6 -2.8 L9 -2.8 L4 1.8 L6 8 L0 4 L-6 8 L-4 1.8 L-9 -2.8 L-2.6 -2.8 Z', fill: '#ffb3c1' } },
    ] },
  ],
  diffs: [
    // d1 — present/absent: orange fish, left only
    { id: 'd1', x: 120, y: 180, r: 30, label: 'the orange fish',
      left: { k: 'g', a: { transform: 'translate(120,180)' }, c: [
        { k: 'ellipse', a: { cx: 0, cy: 0, rx: 24, ry: 12, fill: '#ff7f2a' } },
        { k: 'path', a: { d: 'M-22 0 L-35 -9 L-35 9 Z', fill: '#e05e00' } },
        { k: 'circle', a: { cx: 13, cy: -3, r: 3, fill: '#ffffff' } },
        { k: 'circle', a: { cx: 14, cy: -3, r: 1.5, fill: '#123' } },
      ] },
      right: null },
    // d2 — colour change: big starfish pink on the left, orange on the right
    { id: 'd2', x: 480, y: 405, r: 30, label: 'the big starfish',
      left: { k: 'g', a: { transform: 'translate(480,405)' }, c: [
        { k: 'path', a: { d: 'M0 -16 L4.7 -5 L16 -5 L7 2.5 L10.5 14 L0 7 L-10.5 14 L-7 2.5 L-16 -5 L-4.7 -5 Z', fill: '#ff7fa5' } },
        { k: 'circle', a: { cx: 0, cy: 0, r: 3, fill: '#ffd166' } },
      ] },
      right: { k: 'g', a: { transform: 'translate(480,405)' }, c: [
        { k: 'path', a: { d: 'M0 -16 L4.7 -5 L16 -5 L7 2.5 L10.5 14 L0 7 L-10.5 14 L-7 2.5 L-16 -5 L-4.7 -5 Z', fill: '#ff9f43' } },
        { k: 'circle', a: { cx: 0, cy: 0, r: 3, fill: '#ffd166' } },
      ] } },
    // d3 — count change: one extra bubble on the right
    { id: 'd3', x: 320, y: 120, r: 26, label: 'the lone bubble near the top',
      left: null,
      right: { k: 'circle', a: { cx: 320, cy: 120, r: 8, fill: '#ffffff', opacity: 0.6 } } },
    // d4 — position change: clam shell shifted right
    { id: 'd4', x: 215, y: 438, r: 28, label: 'the clam shell on the sand',
      left: { k: 'g', a: { transform: 'translate(200,438)' }, c: [
        { k: 'ellipse', a: { cx: 0, cy: 0, rx: 14, ry: 8, fill: '#c9b8e8' } },
        { k: 'path', a: { d: 'M-12 0 L12 0', stroke: '#8a6fc0', 'stroke-width': 2 } },
      ] },
      right: { k: 'g', a: { transform: 'translate(232,438)' }, c: [
        { k: 'ellipse', a: { cx: 0, cy: 0, rx: 14, ry: 8, fill: '#c9b8e8' } },
        { k: 'path', a: { d: 'M-12 0 L12 0', stroke: '#8a6fc0', 'stroke-width': 2 } },
      ] } },
    // d5 — colour change: tall coral orange on the left, teal on the right
    { id: 'd5', x: 520, y: 300, r: 30, label: 'the tall coral on the right',
      left: { k: 'g', a: { transform: 'translate(520,300)' }, c: [
        { k: 'path', a: { d: 'M0 100 L-4 55 L-18 30 M-4 55 L8 28 M-4 55 L2 72 L16 50', stroke: '#ff9f43', 'stroke-width': 7, fill: 'none', 'stroke-linecap': 'round' } },
        { k: 'circle', a: { cx: -18, cy: 30, r: 6, fill: '#ffb877' } },
        { k: 'circle', a: { cx: 8, cy: 28, r: 6, fill: '#ffb877' } },
        { k: 'circle', a: { cx: 16, cy: 50, r: 5, fill: '#ffb877' } },
      ] },
      right: { k: 'g', a: { transform: 'translate(520,300)' }, c: [
        { k: 'path', a: { d: 'M0 100 L-4 55 L-18 30 M-4 55 L8 28 M-4 55 L2 72 L16 50', stroke: '#2ec4b6', 'stroke-width': 7, fill: 'none', 'stroke-linecap': 'round' } },
        { k: 'circle', a: { cx: -18, cy: 30, r: 6, fill: '#7fe0d4' } },
        { k: 'circle', a: { cx: 8, cy: 28, r: 6, fill: '#7fe0d4' } },
        { k: 'circle', a: { cx: 16, cy: 50, r: 5, fill: '#7fe0d4' } },
      ] } },
    // d6 — count change: one extra seaweed frond on the right
    { id: 'd6', x: 95, y: 320, r: 28, label: 'the seaweed frond on the left',
      left: null,
      right: { k: 'path', a: { d: 'M95 405 C88 375 102 350 94 320', stroke: '#2e9e5b', 'stroke-width': 5, fill: 'none' } } },
    // d7 — present/absent: small green fish, right only
    { id: 'd7', x: 560, y: 150, r: 28, label: 'the small green fish',
      left: null,
      right: { k: 'g', a: { transform: 'translate(560,150)' }, c: [
        { k: 'ellipse', a: { cx: 0, cy: 0, rx: 16, ry: 8, fill: '#57c785' } },
        { k: 'path', a: { d: 'M-15 0 L-24 -7 L-24 7 Z', fill: '#2e9e5b' } },
        { k: 'circle', a: { cx: 8, cy: -2, r: 2, fill: '#123' } },
      ] } },
  ],
};

// ------------------------------------------------------------------
// Scene 2 — Kelp Forest (difficulty 2)
// Greener, denser, more clutter: tall kelp, rocks, a school of fish,
// anemones, and a sea turtle gliding through.
// ------------------------------------------------------------------
const scene2 = {
  id: 'kelp-forest',
  name: 'Kelp Forest',
  sub: 'Tall kelp, deep green — 7 differences',
  difficulty: 2,
  water: ['#7fb069', '#2d6a4f'],
  base: [
    // — Sandy floor, darker green-brown —
    { k: 'rect', a: { x: 0, y: 410, width: 640, height: 70, fill: '#c9b083' } },
    { k: 'ellipse', a: { cx: 200, cy: 440, rx: 160, ry: 16, fill: '#b39a6d' } },
    { k: 'ellipse', a: { cx: 520, cy: 450, rx: 120, ry: 14, fill: '#b39a6d' } },
    // — Dim light rays —
    { k: 'path', a: { d: 'M200 0 L225 0 L195 410 L170 410 Z', fill: '#ffffff', opacity: 0.10 } },
    { k: 'path', a: { d: 'M420 0 L440 0 L415 410 L395 410 Z', fill: '#ffffff', opacity: 0.08 } },
    // — Tall kelp fronds (back layer, darker) —
    { k: 'path', a: { d: 'M70 410 C60 300 85 200 70 90', stroke: '#1e5c3a', 'stroke-width': 10, fill: 'none' } },
    { k: 'path', a: { d: 'M150 410 C140 290 165 180 150 60', stroke: '#256b45', 'stroke-width': 10, fill: 'none' } },
    { k: 'path', a: { d: 'M330 410 C320 300 345 190 330 80', stroke: '#1e5c3a', 'stroke-width': 10, fill: 'none' } },
    { k: 'path', a: { d: 'M480 410 C470 290 495 170 480 50', stroke: '#256b45', 'stroke-width': 10, fill: 'none' } },
    { k: 'path', a: { d: 'M600 410 C590 310 615 210 600 110', stroke: '#1e5c3a', 'stroke-width': 10, fill: 'none' } },
    // — Kelp blades (front layer, lighter) —
    { k: 'path', a: { d: 'M110 410 C100 320 125 230 110 140', stroke: '#40916c', 'stroke-width': 8, fill: 'none' } },
    { k: 'path', a: { d: 'M230 410 C220 310 245 210 230 120', stroke: '#52b788', 'stroke-width': 8, fill: 'none' } },
    { k: 'path', a: { d: 'M390 410 C380 320 405 220 390 130', stroke: '#40916c', 'stroke-width': 8, fill: 'none' } },
    { k: 'path', a: { d: 'M540 410 C530 320 555 230 540 150', stroke: '#52b788', 'stroke-width': 8, fill: 'none' } },
    // — Kelp leaves —
    { k: 'ellipse', a: { cx: 72, cy: 180, rx: 14, ry: 26, fill: '#2d6a4f', transform: 'rotate(18 72 180)' } },
    { k: 'ellipse', a: { cx: 152, cy: 150, rx: 14, ry: 26, fill: '#40916c', transform: 'rotate(-14 152 150)' } },
    { k: 'ellipse', a: { cx: 332, cy: 170, rx: 14, ry: 26, fill: '#2d6a4f', transform: 'rotate(16 332 170)' } },
    { k: 'ellipse', a: { cx: 482, cy: 140, rx: 14, ry: 26, fill: '#40916c', transform: 'rotate(-18 482 140)' } },
    { k: 'ellipse', a: { cx: 602, cy: 200, rx: 13, ry: 24, fill: '#2d6a4f', transform: 'rotate(14 602 200)' } },
    { k: 'ellipse', a: { cx: 112, cy: 260, rx: 12, ry: 22, fill: '#52b788', transform: 'rotate(-12 112 260)' } },
    { k: 'ellipse', a: { cx: 232, cy: 240, rx: 12, ry: 22, fill: '#40916c', transform: 'rotate(15 232 240)' } },
    { k: 'ellipse', a: { cx: 392, cy: 250, rx: 12, ry: 22, fill: '#52b788', transform: 'rotate(-16 392 250)' } },
    // — Rocks —
    { k: 'ellipse', a: { cx: 90, cy: 415, rx: 52, ry: 20, fill: '#6b7a6e' } },
    { k: 'ellipse', a: { cx: 300, cy: 418, rx: 64, ry: 22, fill: '#5d6e60' } },
    { k: 'ellipse', a: { cx: 560, cy: 415, rx: 48, ry: 19, fill: '#6b7a6e' } },
    { k: 'circle', a: { cx: 180, cy: 422, r: 8, fill: '#8a9a8d' } },
    { k: 'circle', a: { cx: 440, cy: 424, r: 7, fill: '#8a9a8d' } },
    // — Sea turtle gliding —
    { k: 'g', a: { transform: 'translate(400,250)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 42, ry: 26, fill: '#5a7d4f' } },
      { k: 'ellipse', a: { cx: 0, cy: -4, rx: 30, ry: 17, fill: '#7fa36a' } },
      { k: 'path', a: { d: 'M0 -18 L0 14 M-28 -4 L28 -4', stroke: '#4a6b40', 'stroke-width': 2 } },
      { k: 'circle', a: { cx: 44, cy: -2, r: 11, fill: '#6b8f5c' } },
      { k: 'circle', a: { cx: 47, cy: -5, r: 2, fill: '#123' } },
      { k: 'ellipse', a: { cx: -30, cy: -22, rx: 18, ry: 7, fill: '#6b8f5c', transform: 'rotate(-30 -30 -22)' } },
      { k: 'ellipse', a: { cx: -30, cy: 22, rx: 18, ry: 7, fill: '#6b8f5c', transform: 'rotate(30 -30 22)' } },
      { k: 'path', a: { d: 'M-40 0 L-58 -8 L-58 8 Z', fill: '#6b8f5c' } },
    ] },
    // — School of small fish —
    { k: 'g', a: { transform: 'translate(180,120)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 11, ry: 6, fill: '#e9f5ec' } },
      { k: 'ellipse', a: { cx: 24, cy: 12, rx: 11, ry: 6, fill: '#d8ead9' } },
      { k: 'ellipse', a: { cx: 48, cy: 2, rx: 11, ry: 6, fill: '#e9f5ec' } },
      { k: 'ellipse', a: { cx: 70, cy: 14, rx: 11, ry: 6, fill: '#d8ead9' } },
    ] },
    { k: 'g', a: { transform: 'translate(90,200)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 14, ry: 7, fill: '#ffd93d' } },
      { k: 'path', a: { d: 'M-13 0 L-21 -6 L-21 6 Z', fill: '#e8a93d' } },
      { k: 'circle', a: { cx: 7, cy: -2, r: 2, fill: '#123' } },
    ] },
    { k: 'g', a: { transform: 'translate(560,300)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 15, ry: 8, fill: '#4aa8ff' } },
      { k: 'path', a: { d: 'M-14 0 L-22 -7 L-22 7 Z', fill: '#2f7fd0' } },
      { k: 'circle', a: { cx: 8, cy: -2, r: 2, fill: '#123' } },
    ] },
    // — Anemones —
    { k: 'g', a: { transform: 'translate(260,412)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 15, ry: 6, fill: '#ff8fa3' } },
      { k: 'circle', a: { cx: -7, cy: -9, r: 3.5, fill: '#ffb3c1' } },
      { k: 'circle', a: { cx: 2, cy: -11, r: 3.5, fill: '#ffb3c1' } },
      { k: 'circle', a: { cx: 9, cy: -8, r: 3.5, fill: '#ffb3c1' } },
    ] },
    { k: 'g', a: { transform: 'translate(500,412)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 13, ry: 6, fill: '#ff9f43' } },
      { k: 'circle', a: { cx: -5, cy: -8, r: 3, fill: '#ffc078' } },
      { k: 'circle', a: { cx: 5, cy: -9, r: 3, fill: '#ffc078' } },
    ] },
    // — Bubbles —
    { k: 'circle', a: { cx: 320, cy: 340, r: 6, fill: '#ffffff', opacity: 0.4 } },
    { k: 'circle', a: { cx: 332, cy: 312, r: 4, fill: '#ffffff', opacity: 0.35 } },
    { k: 'circle', a: { cx: 140, cy: 300, r: 5, fill: '#ffffff', opacity: 0.4 } },
    { k: 'circle', a: { cx: 520, cy: 250, r: 5, fill: '#ffffff', opacity: 0.35 } },
    // — Shells on the floor —
    { k: 'g', a: { transform: 'translate(140,440)' }, c: [
      { k: 'path', a: { d: 'M0 0 C-11 -4 -14 -16 -5 -21 C4 -24 13 -16 11 -5 C9 2 3 3 0 0 Z', fill: '#e8e0f7' } },
    ] },
    { k: 'g', a: { transform: 'translate(380,442)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 12, ry: 7, fill: '#ffe08a' } },
      { k: 'path', a: { d: 'M-10 0 L10 0', stroke: '#d9a93d', 'stroke-width': 2 } },
    ] },
    { k: 'ellipse', a: { cx: 250, cy: 448, rx: 7, ry: 4, fill: '#ffb3c1' } },
    // — Fallen kelp bits and pebbles —
    { k: 'path', a: { d: 'M210 448 C220 438 235 440 242 448', stroke: '#40916c', 'stroke-width': 4, fill: 'none' } },
    { k: 'circle', a: { cx: 470, cy: 445, r: 3, fill: '#8a9a8d' } },
    { k: 'circle', a: { cx: 60, cy: 452, r: 3, fill: '#8a9a8d' } },
    { k: 'circle', a: { cx: 600, cy: 448, r: 2.5, fill: '#8a9a8d' } },
    // — Small starfish tucked by a rock —
    { k: 'g', a: { transform: 'translate(320,448)' }, c: [
      { k: 'path', a: { d: 'M0 -8 L2.3 -2.4 L8 -2.4 L3.5 1.5 L5.3 7 L0 3.5 L-5.3 7 L-3.5 1.5 L-8 -2.4 L-2.3 -2.4 Z', fill: '#ff9f43' } },
    ] },
    // — Drifting plankton dots —
    { k: 'circle', a: { cx: 280, cy: 90, r: 2, fill: '#e9f5ec', opacity: 0.7 } },
    { k: 'circle', a: { cx: 430, cy: 180, r: 2, fill: '#e9f5ec', opacity: 0.7 } },
    { k: 'circle', a: { cx: 60, cy: 260, r: 2, fill: '#e9f5ec', opacity: 0.6 } },
    { k: 'circle', a: { cx: 620, cy: 80, r: 2, fill: '#e9f5ec', opacity: 0.7 } },
    // — Shadow under the turtle —
    { k: 'ellipse', a: { cx: 400, cy: 420, rx: 42, ry: 6, fill: '#8a9a6d', opacity: 0.5 } },
  ],
  diffs: [
    // d1 — colour change: anemone orange on the left, pink on the right
    { id: 'd1', x: 150, y: 385, r: 30, label: 'the anemone by the kelp',
      left: { k: 'g', a: { transform: 'translate(150,412)' }, c: [
        { k: 'ellipse', a: { cx: 0, cy: 0, rx: 14, ry: 6, fill: '#ff9f43' } },
        { k: 'circle', a: { cx: -6, cy: -9, r: 3.5, fill: '#ffc078' } },
        { k: 'circle', a: { cx: 3, cy: -11, r: 3.5, fill: '#ffc078' } },
        { k: 'circle', a: { cx: 9, cy: -8, r: 3.5, fill: '#ffc078' } },
      ] },
      right: { k: 'g', a: { transform: 'translate(150,412)' }, c: [
        { k: 'ellipse', a: { cx: 0, cy: 0, rx: 14, ry: 6, fill: '#ff8fa3' } },
        { k: 'circle', a: { cx: -6, cy: -9, r: 3.5, fill: '#ffb3c1' } },
        { k: 'circle', a: { cx: 3, cy: -11, r: 3.5, fill: '#ffb3c1' } },
        { k: 'circle', a: { cx: 9, cy: -8, r: 3.5, fill: '#ffb3c1' } },
      ] } },
    // d2 — count change: one extra kelp frond on the right
    { id: 'd2', x: 575, y: 200, r: 30, label: 'the extra kelp frond',
      left: null,
      right: { k: 'path', a: { d: 'M575 410 C565 320 590 250 575 160', stroke: '#40916c', 'stroke-width': 8, fill: 'none' } } },
    // d3 — count change: one school fish missing on the right
    { id: 'd3', x: 300, y: 150, r: 28, label: 'the school fish at the back',
      left: { k: 'g', a: { transform: 'translate(300,150)' }, c: [
        { k: 'ellipse', a: { cx: 0, cy: 0, rx: 11, ry: 6, fill: '#e9f5ec' } },
        { k: 'path', a: { d: 'M-10 0 L-17 -5 L-17 5 Z', fill: '#b9c9ba' } },
        { k: 'circle', a: { cx: 5, cy: -1, r: 1.5, fill: '#123' } },
      ] },
      right: null },
    // d4 — present/absent: spiral shell on the sand, left only
    { id: 'd4', x: 450, y: 432, r: 28, label: 'the spiral shell',
      left: { k: 'g', a: { transform: 'translate(450,432)' }, c: [
        { k: 'path', a: { d: 'M0 0 C-12 -4 -15 -17 -6 -22 C4 -26 13 -17 11 -6 C9 2 3 3 0 0 Z', fill: '#ffb3c1' } },
        { k: 'path', a: { d: 'M-2 -4 C-6 -10 -4 -17 2 -19', stroke: '#e07a90', 'stroke-width': 2, fill: 'none' } },
      ] },
      right: null },
    // d5 — count change: one extra bubble on the left
    { id: 'd5', x: 200, y: 90, r: 26, label: 'the bubble near the top',
      left: { k: 'circle', a: { cx: 200, cy: 90, r: 7, fill: '#ffffff', opacity: 0.45 } },
      right: null },
    // d6 — colour change: a kelp leaf darker green on the left, brighter on the right
    { id: 'd6', x: 152, y: 150, r: 30, label: 'the kelp leaf near the top',
      left: { k: 'ellipse', a: { cx: 152, cy: 150, rx: 14, ry: 26, fill: '#40916c', transform: 'rotate(-14 152 150)' } },
      right: { k: 'ellipse', a: { cx: 152, cy: 150, rx: 14, ry: 26, fill: '#74c69d', transform: 'rotate(-14 152 150)' } } },
    // d7 — present/absent: small crab by the rock, right only
    { id: 'd7', x: 80, y: 432, r: 28, label: 'the small crab',
      left: null,
      right: { k: 'g', a: { transform: 'translate(80,432)' }, c: [
        { k: 'ellipse', a: { cx: 0, cy: 0, rx: 11, ry: 7, fill: '#ff6b4a' } },
        { k: 'circle', a: { cx: -5, cy: -6, r: 2, fill: '#123' } },
        { k: 'circle', a: { cx: 5, cy: -6, r: 2, fill: '#123' } },
        { k: 'path', a: { d: 'M-11 2 L-18 6 M11 2 L18 6', stroke: '#ff6b4a', 'stroke-width': 2 } },
      ] } },
  ],
};

// ------------------------------------------------------------------
// Scene 3 — Deep Reef (difficulty 3)
// Dark blue-purple deep water: bioluminescent corals, a jellyfish,
// an anglerfish with its lure, dark rocks, faint light rays.
// ------------------------------------------------------------------
const scene3 = {
  id: 'deep-reef',
  name: 'Deep Reef',
  sub: 'Dark water, glowing coral — 7 differences',
  difficulty: 3,
  water: ['#3d348b', '#12082e'],
  base: [
    // — Rocky floor —
    { k: 'rect', a: { x: 0, y: 415, width: 640, height: 65, fill: '#241a3d' } },
    { k: 'ellipse', a: { cx: 170, cy: 445, rx: 150, ry: 16, fill: '#1c1430' } },
    { k: 'ellipse', a: { cx: 500, cy: 450, rx: 130, ry: 14, fill: '#1c1430' } },
    // — Faint light rays from far above —
    { k: 'path', a: { d: 'M150 0 L175 0 L140 415 L115 415 Z', fill: '#8fa8ff', opacity: 0.08 } },
    { k: 'path', a: { d: 'M400 0 L420 0 L390 415 L370 415 Z', fill: '#8fa8ff', opacity: 0.06 } },
    { k: 'path', a: { d: 'M560 0 L578 0 L555 415 L537 415 Z', fill: '#8fa8ff', opacity: 0.07 } },
    // — Dark rocks —
    { k: 'ellipse', a: { cx: 70, cy: 420, rx: 55, ry: 22, fill: '#2e2450' } },
    { k: 'ellipse', a: { cx: 320, cy: 422, rx: 70, ry: 24, fill: '#261d42' } },
    { k: 'ellipse', a: { cx: 590, cy: 420, rx: 45, ry: 20, fill: '#2e2450' } },
    { k: 'circle', a: { cx: 150, cy: 428, r: 9, fill: '#3a2f5e' } },
    { k: 'circle', a: { cx: 450, cy: 430, r: 8, fill: '#3a2f5e' } },
    { k: 'circle', a: { cx: 250, cy: 432, r: 6, fill: '#3a2f5e' } },
    // — Bioluminescent coral clusters —
    { k: 'g', a: { transform: 'translate(120,415)' }, c: [
      { k: 'path', a: { d: 'M0 0 L-5 -38 L-16 -55 M-5 -38 L7 -58 M-5 -38 L0 -25 L13 -45', stroke: '#4a3f7a', 'stroke-width': 7, fill: 'none', 'stroke-linecap': 'round' } },
      { k: 'circle', a: { cx: -16, cy: -55, r: 5, fill: '#7ef0d4' } },
      { k: 'circle', a: { cx: 7, cy: -58, r: 5, fill: '#7ef0d4' } },
      { k: 'circle', a: { cx: 13, cy: -45, r: 4, fill: '#9d8cff' } },
    ] },
    { k: 'g', a: { transform: 'translate(280,418)' }, c: [
      { k: 'path', a: { d: 'M0 0 L-4 -34 L-15 -50 M-4 -34 L9 -52', stroke: '#4a3f7a', 'stroke-width': 7, fill: 'none', 'stroke-linecap': 'round' } },
      { k: 'circle', a: { cx: -15, cy: -50, r: 5, fill: '#ffd166' } },
      { k: 'circle', a: { cx: 9, cy: -52, r: 5, fill: '#7ef0d4' } },
    ] },
    { k: 'g', a: { transform: 'translate(470,416)' }, c: [
      { k: 'path', a: { d: 'M0 0 L-5 -40 L-18 -60 M-5 -40 L8 -62 M-5 -40 L2 -26 L16 -48', stroke: '#4a3f7a', 'stroke-width': 7, fill: 'none', 'stroke-linecap': 'round' } },
      { k: 'circle', a: { cx: -18, cy: -60, r: 5, fill: '#9d8cff' } },
      { k: 'circle', a: { cx: 8, cy: -62, r: 5, fill: '#7ef0d4' } },
      { k: 'circle', a: { cx: 16, cy: -48, r: 4, fill: '#ffd166' } },
    ] },
    // — Glowing anemone dots —
    { k: 'g', a: { transform: 'translate(200,418)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 13, ry: 6, fill: '#5c4a8a' } },
      { k: 'circle', a: { cx: -6, cy: -8, r: 3, fill: '#7ef0d4' } },
      { k: 'circle', a: { cx: 3, cy: -10, r: 3, fill: '#ffd166' } },
      { k: 'circle', a: { cx: 9, cy: -7, r: 3, fill: '#7ef0d4' } },
    ] },
    { k: 'g', a: { transform: 'translate(540,418)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 12, ry: 6, fill: '#5c4a8a' } },
      { k: 'circle', a: { cx: -5, cy: -8, r: 3, fill: '#9d8cff' } },
      { k: 'circle', a: { cx: 5, cy: -9, r: 3, fill: '#7ef0d4' } },
    ] },
    // — Jellyfish drifting —
    { k: 'g', a: { transform: 'translate(180,140)' }, c: [
      { k: 'path', a: { d: 'M-28 0 C-28 -26 -14 -40 0 -40 C14 -40 28 -26 28 0 C14 -8 -14 -8 -28 0 Z', fill: '#c9b8ff', opacity: 0.9 } },
      { k: 'path', a: { d: 'M-16 0 C-18 18 -12 30 -16 48', stroke: '#e0d4ff', 'stroke-width': 3, fill: 'none' } },
      { k: 'path', a: { d: 'M0 -2 C-2 16 2 28 0 46', stroke: '#e0d4ff', 'stroke-width': 3, fill: 'none' } },
      { k: 'path', a: { d: 'M16 0 C18 18 12 30 16 48', stroke: '#e0d4ff', 'stroke-width': 3, fill: 'none' } },
      { k: 'circle', a: { cx: 0, cy: -22, r: 4, fill: '#ffd166' } },
    ] },
    // — Anglerfish with its lure —
    { k: 'g', a: { transform: 'translate(450,300)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 30, ry: 20, fill: '#241a3d' } },
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 30, ry: 20, fill: 'none', stroke: '#5c4a8a', 'stroke-width': 2 } },
      { k: 'path', a: { d: 'M-28 -4 L-44 -14 L-44 6 Z', fill: '#1c1430' } },
      { k: 'path', a: { d: 'M-6 -18 C-2 -32 10 -38 16 -34', stroke: '#5c4a8a', 'stroke-width': 3, fill: 'none' } },
      { k: 'circle', a: { cx: 17, cy: -34, r: 5, fill: '#ffd166' } },
      { k: 'circle', a: { cx: 18, cy: -4, r: 3, fill: '#7ef0d4' } },
      { k: 'path', a: { d: 'M26 -6 L30 -2 L26 2 L30 6', stroke: '#e0d4ff', 'stroke-width': 2, fill: 'none' } },
    ] },
    // — Small deep fish —
    { k: 'g', a: { transform: 'translate(300,180)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 16, ry: 8, fill: '#6a5acd' } },
      { k: 'path', a: { d: 'M-15 0 L-23 -7 L-23 7 Z', fill: '#4a3f7a' } },
      { k: 'circle', a: { cx: 8, cy: -2, r: 2.5, fill: '#7ef0d4' } },
    ] },
    { k: 'g', a: { transform: 'translate(90,260)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 13, ry: 7, fill: '#7a68c9' } },
      { k: 'path', a: { d: 'M-12 0 L-19 -6 L-19 6 Z', fill: '#4a3f7a' } },
      { k: 'circle', a: { cx: 6, cy: -2, r: 2, fill: '#ffd166' } },
    ] },
    // — Glowing dots scattered in the water —
    { k: 'circle', a: { cx: 240, cy: 120, r: 3, fill: '#7ef0d4', opacity: 0.9 } },
    { k: 'circle', a: { cx: 360, cy: 90, r: 2.5, fill: '#9d8cff', opacity: 0.85 } },
    { k: 'circle', a: { cx: 520, cy: 130, r: 3, fill: '#7ef0d4', opacity: 0.9 } },
    { k: 'circle', a: { cx: 60, cy: 160, r: 2.5, fill: '#ffd166', opacity: 0.85 } },
    { k: 'circle', a: { cx: 420, cy: 200, r: 2.5, fill: '#9d8cff', opacity: 0.8 } },
    { k: 'circle', a: { cx: 140, cy: 320, r: 2.5, fill: '#7ef0d4', opacity: 0.8 } },
    { k: 'circle', a: { cx: 590, cy: 230, r: 2.5, fill: '#ffd166', opacity: 0.8 } },
    { k: 'circle', a: { cx: 330, cy: 300, r: 2, fill: '#7ef0d4', opacity: 0.75 } },
    { k: 'circle', a: { cx: 200, cy: 210, r: 2.5, fill: '#ffd166', opacity: 0.8 } },
    { k: 'circle', a: { cx: 480, cy: 340, r: 2.5, fill: '#9d8cff', opacity: 0.8 } },
    // — Bubbles rising in the dark —
    { k: 'circle', a: { cx: 220, cy: 350, r: 5, fill: '#ffffff', opacity: 0.3 } },
    { k: 'circle', a: { cx: 232, cy: 322, r: 4, fill: '#ffffff', opacity: 0.25 } },
    { k: 'circle', a: { cx: 226, cy: 296, r: 3, fill: '#ffffff', opacity: 0.25 } },
    { k: 'circle', a: { cx: 560, cy: 340, r: 4, fill: '#ffffff', opacity: 0.3 } },
    // — Tiny glowing shell on the floor —
    { k: 'g', a: { transform: 'translate(380,440)' }, c: [
      { k: 'ellipse', a: { cx: 0, cy: 0, rx: 12, ry: 7, fill: '#3a2f5e' } },
      { k: 'circle', a: { cx: 0, cy: -2, r: 2.5, fill: '#7ef0d4' } },
    ] },
    // — Pale seagrass in the dark —
    { k: 'path', a: { d: 'M40 418 C34 385 46 360 38 335', stroke: '#4a3f7a', 'stroke-width': 4, fill: 'none' } },
    { k: 'path', a: { d: 'M55 418 C52 390 60 368 55 348', stroke: '#5c4a8a', 'stroke-width': 4, fill: 'none' } },
    { k: 'path', a: { d: 'M620 418 C614 388 624 365 618 342', stroke: '#4a3f7a', 'stroke-width': 4, fill: 'none' } },
    // — Faint starfish in the dark —
    { k: 'g', a: { transform: 'translate(90,448)' }, c: [
      { k: 'path', a: { d: 'M0 -8 L2.3 -2.4 L8 -2.4 L3.5 1.5 L5.3 7 L0 3.5 L-5.3 7 L-3.5 1.5 L-8 -2.4 L-2.3 -2.4 Z', fill: '#5c4a8a' } },
    ] },
    // — Drifting marine snow —
    { k: 'circle', a: { cx: 180, cy: 60, r: 1.8, fill: '#e0d4ff', opacity: 0.6 } },
    { k: 'circle', a: { cx: 480, cy: 70, r: 1.8, fill: '#e0d4ff', opacity: 0.6 } },
    { k: 'circle', a: { cx: 300, cy: 240, r: 1.8, fill: '#e0d4ff', opacity: 0.55 } },
    { k: 'circle', a: { cx: 620, cy: 300, r: 1.8, fill: '#e0d4ff', opacity: 0.55 } },
    { k: 'circle', a: { cx: 40, cy: 90, r: 1.8, fill: '#e0d4ff', opacity: 0.6 } },
    // — Glow halo under the anglerfish lure —
    { k: 'circle', a: { cx: 467, cy: 266, r: 12, fill: '#ffd166', opacity: 0.15 } },
  ],
  diffs: [
    // d1 — colour change: jellyfish dome lilac on the left, teal on the right
    { id: 'd1', x: 180, y: 125, r: 30, label: 'the jellyfish dome',
      left: { k: 'path', a: { d: 'M152 140 C152 114 166 100 180 100 C194 100 208 114 208 140 C194 132 166 132 152 140 Z', fill: '#c9b8ff', opacity: 0.9 } },
      right: { k: 'path', a: { d: 'M152 140 C152 114 166 100 180 100 C194 100 208 114 208 140 C194 132 166 132 152 140 Z', fill: '#7ef0d4', opacity: 0.9 } } },
    // d2 — present/absent: tiny glowing fish near the anglerfish, right only
    { id: 'd2', x: 540, y: 180, r: 26, label: 'the tiny glowing fish',
      left: null,
      right: { k: 'g', a: { transform: 'translate(540,180)' }, c: [
        { k: 'ellipse', a: { cx: 0, cy: 0, rx: 12, ry: 6, fill: '#9d8cff' } },
        { k: 'path', a: { d: 'M-11 0 L-18 -5 L-18 5 Z', fill: '#5c4a8a' } },
        { k: 'circle', a: { cx: 6, cy: -1, r: 2, fill: '#ffd166' } },
      ] } },
    // d3 — count change: one extra glowing coral dot on the left
    { id: 'd3', x: 320, y: 380, r: 26, label: 'the glowing dot on the rock',
      left: { k: 'circle', a: { cx: 320, cy: 380, r: 5, fill: '#7ef0d4' } },
      right: null },
    // d4 — present/absent: small deep fish, left only
    { id: 'd4', x: 550, y: 320, r: 28, label: 'the small fish by the rock',
      left: { k: 'g', a: { transform: 'translate(550,320)' }, c: [
        { k: 'ellipse', a: { cx: 0, cy: 0, rx: 14, ry: 7, fill: '#7a68c9' } },
        { k: 'path', a: { d: 'M-13 0 L-20 -6 L-20 6 Z', fill: '#4a3f7a' } },
        { k: 'circle', a: { cx: 7, cy: -2, r: 2, fill: '#ffd166' } },
      ] },
      right: null },
    // d5 — count change: one extra faint light ray on the right
    { id: 'd5', x: 100, y: 90, r: 28, label: 'the faint light ray',
      left: null,
      right: { k: 'path', a: { d: 'M100 0 L118 0 L96 300 L78 300 Z', fill: '#8fa8ff', opacity: 0.09 } } },
    // d6 — colour change: a glowing dot teal on the left, gold on the right
    { id: 'd6', x: 240, y: 120, r: 26, label: 'the glowing dot in the water',
      left: { k: 'circle', a: { cx: 240, cy: 120, r: 3, fill: '#7ef0d4', opacity: 0.9 } },
      right: { k: 'circle', a: { cx: 240, cy: 120, r: 3, fill: '#ffd166', opacity: 0.9 } } },
    // d7 — present/absent: glowing starfish on the floor, left only
    { id: 'd7', x: 500, y: 438, r: 28, label: 'the glowing starfish',
      left: { k: 'g', a: { transform: 'translate(500,438)' }, c: [
        { k: 'path', a: { d: 'M0 -9 L2.6 -2.8 L9 -2.8 L4 1.8 L6 8 L0 4 L-6 8 L-4 1.8 L-9 -2.8 L-2.6 -2.8 Z', fill: '#9d8cff' } },
        { k: 'circle', a: { cx: 0, cy: 0, r: 2, fill: '#7ef0d4' } },
      ] },
      right: null },
  ],
};

export const SCENES = [scene1, scene2, scene3];
