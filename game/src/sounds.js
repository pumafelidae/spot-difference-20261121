// Reef Hunt — sounds, synthesized with WebAudio.
// No audio files: every sound is built from oscillators in code, so the
// game loads nothing over the network and stays silent until the player
// first interacts (browsers only allow audio after a gesture).

let ctx = null;
let muted = false;

// Create the audio context on first use. Must be called from a user
// gesture (click or key) the first time, or the browser keeps it silent.
export function initAudio() {
  if (!ctx) {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      ctx = new AC();
    } catch (e) {
      ctx = null;
    }
  }
  if (ctx && ctx.state === 'suspended') ctx.resume();
  return ctx;
}

export function setMuted(m) {
  muted = !!m;
}
export function isMuted() {
  return muted;
}

// One note: an oscillator with a short envelope so it never clicks.
function note(freq, start, dur, type, vol) {
  if (!ctx || muted) return;
  const t0 = ctx.currentTime + start;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(vol, t0 + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(t0);
  osc.stop(t0 + dur + 0.05);
}

// A bright two-note chime: the satisfying mark on every find.
export function playFind() {
  initAudio();
  note(659.25, 0, 0.22, 'sine', 0.22); // E5
  note(880.0, 0.09, 0.35, 'sine', 0.22); // A5
  note(1318.5, 0.18, 0.3, 'triangle', 0.08); // E6 sparkle
}

// A soft low buzz for a wrong click: noticeable, never harsh.
export function playWrong() {
  initAudio();
  note(110.0, 0, 0.18, 'sawtooth', 0.06);
  note(103.83, 0.05, 0.18, 'sawtooth', 0.05);
}

// A rising shimmer when a hint is spent.
export function playHint() {
  initAudio();
  note(523.25, 0, 0.18, 'sine', 0.12);
  note(659.25, 0.08, 0.18, 'sine', 0.12);
  note(783.99, 0.16, 0.28, 'sine', 0.12);
}

// A short fanfare when a scene is cleared.
export function playSceneWin() {
  initAudio();
  const seq = [523.25, 659.25, 783.99, 1046.5];
  seq.forEach((f, i) => note(f, i * 0.11, 0.3, 'triangle', 0.18));
}

// The full win fanfare when all three reefs are cleared.
export function playGameWin() {
  initAudio();
  const seq = [523.25, 659.25, 783.99, 1046.5, 783.99, 1046.5, 1318.5];
  seq.forEach((f, i) => note(f, i * 0.12, 0.32, 'triangle', 0.18));
}

// A quiet tick for the last ten seconds of a scene.
export function playTick() {
  initAudio();
  note(1200.0, 0, 0.05, 'square', 0.04);
}

// A soft UI click for buttons.
export function playClick() {
  initAudio();
  note(440.0, 0, 0.06, 'sine', 0.08);
}
