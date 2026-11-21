// Reef Hunt — game configuration.
// One place for every number that tunes the game, so balancing is a
// one-line change and the rest of the code never hard-codes a value.

export const CONFIG = {
  // Each spot-the-difference panel is drawn in this coordinate space.
  panelW: 640,
  panelH: 480,
  // Three scenes, seven differences each — twenty-one finds in a full run.
  diffsPerScene: 7,
  // Seconds on the clock for each scene.
  timePerScene: 180,
  // What a hint costs: seconds taken off the clock, and how many per scene.
  hintCostSeconds: 10,
  hintsPerScene: 3,
  // Points: a flat award per find, plus a bonus for every second left
  // when a scene is cleared.
  findPoints: 100,
  timeBonusPerSecond: 2,
  // Magnifier lens: zoom factor and on-screen radius in pixels.
  magnifierZoom: 2,
  magnifierRadius: 90,
  // Wrong clicks: how long the red X stays visible (milliseconds).
  wrongMarkMs: 700,
  // Hint pulse: how long the hint ring pulses (milliseconds).
  hintPulseMs: 2200,
  // Keyboard crosshair step in panel pixels (Shift makes it fine).
  crosshairStep: 10,
  crosshairFineStep: 2,
};

// Keyboard controls. All of them also exist as on-screen buttons,
// so the game is fully playable with a mouse alone.
export const KEYS = {
  hint: 'h',
  magnifier: 'm',
  next: 'n',
  mute: 'u',
  restart: 'r',
  confirm: 'Enter',
  confirmAlt: ' ',
};
