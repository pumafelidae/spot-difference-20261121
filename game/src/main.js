// Reef Hunt — the game itself: state, timer, counter, hints, scenes.
// Wires the panels, the HUD, the input and the sounds together.
// Open the game normally for the title screen, or with ?shot=N for a
// frozen screenshot state (see shots.js).

import { CONFIG, KEYS } from './config.js';
import { SCENES } from './world.js';
import { artSvg, marksSvg, hintSvg, lensSvg } from './render.js';
import { attachInput, diffAt } from './input.js';
import { readShot } from './shots.js';
import * as sfx from './sounds.js';

// ---- DOM ----
const $ = (id) => document.getElementById(id);
const panelLeft = $('panel-left');
const panelRight = $('panel-right');
const lens = $('lens');
const lensSvgEl = $('lens-svg');
const crosshair = $('crosshair');
const wrongMark = $('wrong-mark');
const hudScene = $('hud-scene');
const hudCount = $('hud-count');
const hudTime = $('hud-time');
const hudTimerFill = $('hud-timer-fill');
const hudScore = $('hud-score');
const hudHints = $('hud-hints');
const hudTotal = $('hud-total');
const hudHintText = $('hud-hint-text');
const diffStrip = $('diff-strip');
const overlays = {
  title: $('overlay-title'),
  sceneDone: $('overlay-scene-done'),
  timeUp: $('overlay-time-up'),
  gameDone: $('overlay-game-done'),
};

// ---- State ----
const state = {
  phase: 'title', // title | playing | scene-done | time-up | game-done
  sceneIndex: 0,
  found: new Set(),
  foundOrder: [],
  timeLeft: CONFIG.timePerScene,
  hintsLeft: CONFIG.hintsPerScene,
  score: 0,
  totalFound: 0,
  magnifierOn: false,
  crosshair: { panel: 'left', x: 320, y: 240, visible: false },
  shot: null, // a frozen screenshot state, or null
  timerId: null,
  hintTimerId: null,
};

function scene() {
  return SCENES[state.sceneIndex];
}

// ---- Rendering ----
function renderPanels() {
  const sc = scene();
  $('art-left').innerHTML = artSvg(sc, 'left');
  $('art-right').innerHTML = artSvg(sc, 'right');
  $('marks-left').innerHTML = marksSvg(sc, state.foundOrder);
  $('marks-right').innerHTML = marksSvg(sc, state.foundOrder);
}

function renderHud() {
  const sc = scene();
  hudScene.textContent = `${sc.name} · ${sc.diffs.length} differences`;
  hudCount.textContent = `Found ${state.found.size} / ${sc.diffs.length}`;
  const m = Math.floor(state.timeLeft / 60);
  const s = state.timeLeft % 60;
  hudTime.textContent = `${m}:${String(s).padStart(2, '0')}`;
  const frac = Math.max(0, state.timeLeft / CONFIG.timePerScene);
  hudTimerFill.style.width = `${frac * 100}%`;
  hudTimerFill.classList.toggle('low', state.timeLeft <= 30);
  hudScore.textContent = `Score ${state.score}`;
  hudHints.textContent = `Hints ${state.hintsLeft}`;
  hudTotal.textContent = `Total found ${state.totalFound} / ${SCENES.length * CONFIG.diffsPerScene}`;
  // The strip: found differences show their label with a check, the
  // rest stay a mystery "?" so nothing is given away.
  diffStrip.innerHTML = sc.diffs
    .map((d) => {
      const isFound = state.found.has(d.id);
      const cls = isFound ? 'chip found' : 'chip';
      const label = isFound ? `✓ ${d.label}` : '?';
      return `<span class="${cls}">${label}</span>`;
    })
    .join('');
}

function showOverlay(name) {
  for (const [k, el] of Object.entries(overlays)) {
    el.classList.toggle('hidden', k !== name);
  }
}

function renderAll() {
  renderPanels();
  renderHud();
  if (state.phase === 'playing') showOverlay(null);
}

// ---- Timer ----
function startTimer() {
  stopTimer();
  if (state.shot) return; // screenshots freeze the clock
  state.timerId = setInterval(() => {
    if (state.phase !== 'playing') return;
    state.timeLeft -= 1;
    if (state.timeLeft <= 10 && state.timeLeft > 0) sfx.playTick();
    if (state.timeLeft <= 0) {
      state.timeLeft = 0;
      timeUp();
    }
    renderHud();
  }, 1000);
}
function stopTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

// ---- Scene flow ----
function startScene(index, keepScore) {
  state.sceneIndex = index;
  state.found = new Set();
  state.foundOrder = [];
  state.timeLeft = CONFIG.timePerScene;
  state.hintsLeft = CONFIG.hintsPerScene;
  if (!keepScore) {
    state.score = 0;
    state.totalFound = 0;
  }
  state.phase = 'playing';
  state.crosshair = { panel: 'left', x: 320, y: 240, visible: false };
  hideCrosshair();
  hideLens();
  clearHint();
  renderAll();
  showOverlay(null);
  startTimer();
}

function sceneComplete() {
  stopTimer();
  const bonus = state.timeLeft * CONFIG.timeBonusPerSecond;
  state.score += bonus;
  state.phase = 'scene-done';
  sfx.playSceneWin();
  renderHud();
  $('scene-done-title').textContent = `${scene().name} complete!`;
  $('scene-done-text').textContent =
    `All ${scene().diffs.length} differences found. Time bonus +${bonus} points.`;
  $('scene-done-score').textContent = `Score ${state.score}`;
  const last = state.sceneIndex === SCENES.length - 1;
  $('btn-next-scene').textContent = last ? 'See my results' : 'Next reef';
  showOverlay('sceneDone');
}

function timeUp() {
  stopTimer();
  state.phase = 'time-up';
  renderHud();
  $('time-up-text').textContent =
    `Time ran out on ${scene().name} — you found ${state.found.size} of ${scene().diffs.length}.`;
  showOverlay('timeUp');
}

function gameComplete() {
  state.phase = 'game-done';
  sfx.playGameWin();
  $('game-done-score').textContent = `Final score ${state.score}`;
  $('game-done-found').textContent =
    `You found ${state.totalFound} of ${SCENES.length * CONFIG.diffsPerScene} differences.`;
  showOverlay('gameDone');
}

// ---- Clicks ----
function checkSpot(side, x, y) {
  if (state.phase !== 'playing') return;
  sfx.initAudio();
  const sc = scene();
  const d = diffAt(sc, state.found, x, y);
  if (d) {
    state.found.add(d.id);
    state.foundOrder.push(d.id);
    state.totalFound += 1;
    state.score += CONFIG.findPoints;
    sfx.playFind();
    renderPanels();
    renderHud();
    if (state.found.size === sc.diffs.length) sceneComplete();
  } else {
    sfx.playWrong();
    flashWrongMark(side, x, y);
  }
}

function flashWrongMark(side, x, y) {
  const svg = side === 'left' ? panelLeft : panelRight;
  const rect = svg.getBoundingClientRect();
  const host = svg.parentElement.getBoundingClientRect();
  wrongMark.style.left = `${rect.left - host.left + (x / CONFIG.panelW) * rect.width - 14}px`;
  wrongMark.style.top = `${rect.top - host.top + (y / CONFIG.panelH) * rect.height - 14}px`;
  wrongMark.classList.remove('hidden');
  wrongMark.classList.remove('fade');
  // Restart the fade animation.
  void wrongMark.offsetWidth;
  wrongMark.classList.add('fade');
  setTimeout(() => wrongMark.classList.add('hidden'), CONFIG.wrongMarkMs);
}

// ---- Hints ----
function useHint() {
  if (state.phase !== 'playing') return;
  if (state.hintsLeft <= 0) {
    hudHintText.textContent = 'No hints left in this reef.';
    return;
  }
  const sc = scene();
  const unfound = sc.diffs.filter((d) => !state.found.has(d.id));
  if (unfound.length === 0) return;
  const d = unfound[Math.floor(Math.random() * unfound.length)];
  state.hintsLeft -= 1;
  state.timeLeft = Math.max(0, state.timeLeft - CONFIG.hintCostSeconds);
  sfx.playHint();
  $('hint-left').innerHTML = hintSvg(d);
  $('hint-right').innerHTML = hintSvg(d);
  hudHintText.textContent = `Hint: look for ${d.label}  (−${CONFIG.hintCostSeconds}s)`;
  renderHud();
  clearTimeout(state.hintTimerId);
  state.hintTimerId = setTimeout(clearHint, CONFIG.hintPulseMs);
}
function clearHint() {
  $('hint-left').innerHTML = '';
  $('hint-right').innerHTML = '';
}

// ---- Magnifier ----
function setMagnifier(on) {
  state.magnifierOn = on;
  $('btn-magnifier').classList.toggle('active', on);
  if (!on) hideLens();
}
function hideLens() {
  lens.classList.add('hidden');
}
function moveLens(side, x, y, clientX, clientY) {
  if (!state.magnifierOn || state.phase !== 'playing') {
    hideLens();
    return;
  }
  const host = $('game-area').getBoundingClientRect();
  const r = CONFIG.magnifierRadius;
  lens.style.left = `${clientX - host.left - r}px`;
  lens.style.top = `${clientY - host.top - r}px`;
  lensSvgEl.setAttribute('width', String(r * 2));
  lensSvgEl.setAttribute('height', String(r * 2));
  lensSvgEl.innerHTML = lensSvg(side === 'left' ? 'art-left' : 'art-right', x, y);
  lens.classList.remove('hidden');
}

// ---- Crosshair (keyboard play) ----
function showCrosshair() {
  state.crosshair.visible = true;
  positionCrosshair();
  crosshair.classList.remove('hidden');
}
function hideCrosshair() {
  state.crosshair.visible = false;
  crosshair.classList.add('hidden');
}
function positionCrosshair() {
  const svg = state.crosshair.panel === 'left' ? panelLeft : panelRight;
  const rect = svg.getBoundingClientRect();
  const host = svg.parentElement.getBoundingClientRect();
  crosshair.style.left = `${rect.left - host.left + (state.crosshair.x / CONFIG.panelW) * rect.width - 16}px`;
  crosshair.style.top = `${rect.top - host.top + (state.crosshair.y / CONFIG.panelH) * rect.height - 16}px`;
}

// ---- Input callbacks ----
attachInput({
  panelLeft,
  panelRight,
  onPanelClick: (side, x, y) => checkSpot(side, x, y),
  onMouseMove: (side, x, y, evt) => moveLens(side, x, y, evt.clientX, evt.clientY),
  onKey: (action, data) => {
    if (action === 'move') {
      if (state.phase !== 'playing') return;
      showCrosshair();
      state.crosshair.x = Math.max(0, Math.min(CONFIG.panelW, state.crosshair.x + data.dx));
      state.crosshair.y = Math.max(0, Math.min(CONFIG.panelH, state.crosshair.y + data.dy));
      positionCrosshair();
      if (state.magnifierOn) {
        // Keep the lens on the crosshair while moving by keyboard.
        const svg = state.crosshair.panel === 'left' ? panelLeft : panelRight;
        const rect = svg.getBoundingClientRect();
        moveLens(
          state.crosshair.panel,
          state.crosshair.x,
          state.crosshair.y,
          rect.left + (state.crosshair.x / CONFIG.panelW) * rect.width,
          rect.top + (state.crosshair.y / CONFIG.panelH) * rect.height,
        );
      }
    } else if (action === 'switch-panel') {
      if (state.phase !== 'playing') return;
      showCrosshair();
      state.crosshair.panel = state.crosshair.panel === 'left' ? 'right' : 'left';
      positionCrosshair();
    } else if (action === 'confirm') {
      if (state.phase === 'playing') {
        showCrosshair();
        checkSpot(state.crosshair.panel, state.crosshair.x, state.crosshair.y);
      } else if (state.phase === 'title') {
        startGame();
      } else if (state.phase === 'scene-done') {
        nextScene();
      }
    } else if (action === 'hint') {
      useHint();
    } else if (action === 'magnifier') {
      setMagnifier(!state.magnifierOn);
    } else if (action === 'next') {
      if (state.phase === 'scene-done') nextScene();
    } else if (action === 'mute') {
      toggleMute();
    } else if (action === 'restart') {
      if (state.phase === 'playing' || state.phase === 'time-up') startScene(state.sceneIndex, true);
    }
  },
});

function toggleMute() {
  sfx.initAudio();
  sfx.setMuted(!sfx.isMuted());
  $('btn-mute').textContent = sfx.isMuted() ? '🔇 Sound off' : '🔊 Sound on';
}

// ---- Buttons ----
function startGame() {
  sfx.initAudio();
  sfx.playClick();
  startScene(0, false);
}
function nextScene() {
  sfx.playClick();
  if (state.sceneIndex === SCENES.length - 1) {
    gameComplete();
  } else {
    startScene(state.sceneIndex + 1, true);
  }
}
$('btn-start').addEventListener('click', startGame);
$('btn-next-scene').addEventListener('click', nextScene);
$('btn-retry-scene').addEventListener('click', () => {
  sfx.playClick();
  startScene(state.sceneIndex, true);
});
$('btn-skip-scene').addEventListener('click', () => {
  sfx.playClick();
  nextScene();
});
$('btn-play-again').addEventListener('click', () => {
  sfx.playClick();
  startScene(0, false);
});
$('btn-hint').addEventListener('click', () => {
  sfx.initAudio();
  useHint();
});
$('btn-magnifier').addEventListener('click', () => {
  sfx.initAudio();
  setMagnifier(!state.magnifierOn);
});
$('btn-mute').addEventListener('click', toggleMute);

// ---- Boot ----
function boot() {
  state.shot = readShot();
  if (state.shot) {
    // Frozen screenshot state: no title, no ticking clock.
    const sh = state.shot;
    state.sceneIndex = sh.scene;
    const sc = scene();
    state.found = new Set(sh.found.map((i) => sc.diffs[i].id));
    state.foundOrder = sh.found.map((i) => sc.diffs[i].id);
    state.timeLeft = sh.timeLeft;
    state.totalFound = state.found.size;
    state.score = state.found.size * CONFIG.findPoints;
    state.phase = 'playing';
    renderAll();
    showOverlay(null);
    if (sh.magnifier) {
      const d = sc.diffs[sh.magnifier.diff];
      setMagnifier(true);
      // Open the lens over the unfound difference, on the chosen panel.
      const svg = sh.magnifier.side === 'left' ? panelLeft : panelRight;
      const rect = svg.getBoundingClientRect();
      // Position it after layout settles.
      requestAnimationFrame(() => {
        const r2 = svg.getBoundingClientRect();
        moveLens(
          sh.magnifier.side,
          d.x,
          d.y,
          r2.left + (d.x / CONFIG.panelW) * r2.width,
          r2.top + (d.y / CONFIG.panelH) * r2.height,
        );
      });
    }
  } else {
    // Normal play: scene 1 behind the title overlay.
    state.phase = 'title';
    renderAll();
    showOverlay('title');
  }
}

boot();
