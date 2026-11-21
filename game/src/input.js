// Reef Hunt — input: mouse clicks on the panels and keyboard play.
// The game is fully playable with a mouse alone; the keyboard is a
// second way in (arrows move a crosshair, Enter checks a spot).

import { CONFIG, KEYS } from './config.js';

// Convert a mouse event on a panel's <svg> to panel coordinates
// (the 640 x 480 space the scene art is drawn in).
export function eventToPanelPoint(svg, evt) {
  const rect = svg.getBoundingClientRect();
  const x = ((evt.clientX - rect.left) / rect.width) * CONFIG.panelW;
  const y = ((evt.clientY - rect.top) / rect.height) * CONFIG.panelH;
  return { x, y };
}

// Which difference, if any, covers a point (in panel coordinates)?
// Returns the difference object, or null. Only unfound ones count.
export function diffAt(scene, found, x, y) {
  for (const d of scene.diffs) {
    if (found.has(d.id)) continue;
    const dx = x - d.x;
    const dy = y - d.y;
    if (dx * dx + dy * dy <= d.r * d.r) return d;
  }
  return null;
}

// Attach all input handling. `api` is the set of callbacks main.js
// provides; each one is named for the action it performs.
// Returns a function that removes every listener again.
export function attachInput(api) {
  const { panelLeft, panelRight, onPanelClick, onKey, onMouseMove } = api;

  function clickHandler(side) {
    return (evt) => {
      const svg = side === 'left' ? panelLeft : panelRight;
      const p = eventToPanelPoint(svg, evt);
      onPanelClick(side, p.x, p.y, evt);
    };
  }
  const leftClick = clickHandler('left');
  const rightClick = clickHandler('right');
  panelLeft.addEventListener('click', leftClick);
  panelRight.addEventListener('click', rightClick);

  function moveHandler(evt) {
    const target = evt.target.closest('svg');
    if (!target) return;
    const side = target === panelLeft ? 'left' : target === panelRight ? 'right' : null;
    if (!side) return;
    const p = eventToPanelPoint(target, evt);
    onMouseMove(side, p.x, p.y, evt);
  }
  document.addEventListener('mousemove', moveHandler);

  // Keyboard: arrows move the crosshair, Enter/Space checks the spot,
  // H hint, M magnifier, N next scene, U mute, R restart the scene.
  // Tab switches the crosshair between the two panels.
  function keyHandler(evt) {
    if (evt.target && (evt.target.tagName === 'INPUT' || evt.target.tagName === 'TEXTAREA')) return;
    const k = evt.key;
    if (k === 'ArrowLeft' || k === 'ArrowRight' || k === 'ArrowUp' || k === 'ArrowDown') {
      evt.preventDefault();
      const step = evt.shiftKey ? CONFIG.crosshairFineStep : CONFIG.crosshairStep;
      const dx = k === 'ArrowLeft' ? -step : k === 'ArrowRight' ? step : 0;
      const dy = k === 'ArrowUp' ? -step : k === 'ArrowDown' ? step : 0;
      onKey('move', { dx, dy });
    } else if (k === 'Tab') {
      evt.preventDefault();
      onKey('switch-panel', null);
    } else if (k === KEYS.confirm || k === KEYS.confirmAlt) {
      evt.preventDefault();
      onKey('confirm', null);
    } else if (k.toLowerCase() === KEYS.hint) {
      onKey('hint', null);
    } else if (k.toLowerCase() === KEYS.magnifier) {
      onKey('magnifier', null);
    } else if (k.toLowerCase() === KEYS.next) {
      onKey('next', null);
    } else if (k.toLowerCase() === KEYS.mute) {
      onKey('mute', null);
    } else if (k.toLowerCase() === KEYS.restart) {
      onKey('restart', null);
    }
  }
  document.addEventListener('keydown', keyHandler);

  return () => {
    panelLeft.removeEventListener('click', leftClick);
    panelRight.removeEventListener('click', rightClick);
    document.removeEventListener('mousemove', moveHandler);
    document.removeEventListener('keydown', keyHandler);
  };
}
