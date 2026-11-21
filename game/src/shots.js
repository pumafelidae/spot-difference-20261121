// Reef Hunt — screenshot mode.
// The maker takes the screenshots by opening the game with ?shot=N.
// Each shot sets up one exact game state — a scene, some differences
// already found (so the markers show), a few still unfound, and the
// counter and timer frozen — so every screenshot is a real render of
// the game itself, never edited or composited.
//
//   ?shot=1  Sunlit Reef, 3 of 7 found — the cover
//   ?shot=2  Kelp Forest, 2 of 7 found
//   ?shot=3  Deep Reef, 4 of 7 found
//   ?shot=4  Sunlit Reef, 5 of 7 found, magnifier open over an unfound spot
//
// The `found` lists name differences by their index in the scene's
// diffs array (0-based): shot 1 finds the first three differences.

export const SHOTS = {
  1: { scene: 0, found: [0, 1, 2], timeLeft: 132, magnifier: null },
  2: { scene: 1, found: [0, 1], timeLeft: 148, magnifier: null },
  3: { scene: 2, found: [0, 1, 2, 3], timeLeft: 96, magnifier: null },
  // Shot 4: the magnifier is open over difference 6 (index 5), which is
  // still unfound, while five others are already marked.
  4: { scene: 0, found: [0, 1, 2, 3, 4], timeLeft: 121, magnifier: { diff: 5, side: 'right' } },
};

// Read ?shot=N from the page URL. Returns the shot spec, or null when
// the page was opened normally (then the game starts at its title).
export function readShot() {
  const params = new URLSearchParams(window.location.search);
  const n = Number(params.get('shot'));
  if (!Number.isInteger(n)) return null;
  return SHOTS[n] || null;
}

// The screenshot file names, in the order the dossier lists them.
// The first by name is the cover.
export const SHOT_FILES = ['1-cover.jpg', '2-kelp.jpg', '3-deep.jpg', '4-magnifier.jpg'];
