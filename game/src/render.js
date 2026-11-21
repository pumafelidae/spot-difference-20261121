// Reef Hunt — rendering: the two spot-the-difference panels as SVG,
// the gold markers on found differences, and the magnifier lens.
// The art itself lives in world.js as data; this file only turns that
// data into SVG strings and moves the overlays.

import { CONFIG } from './config.js';

// Escape a value for use inside an SVG attribute or text node.
function esc(v) {
  return String(v)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Turn one element object from world.js into an SVG string.
// { k: 'circle', a: { cx, cy, r, fill } } -> <circle cx=".." ... />
export function elToSvg(el) {
  const attrs = Object.entries(el.a || {})
    .map(([k, v]) => ` ${k}="${esc(v)}"`)
    .join('');
  if (el.k === 'text') return `<text${attrs}>${esc(el.t ?? '')}</text>`;
  if (el.k === 'g') {
    const kids = (el.c || []).map(elToSvg).join('');
    return `<g${attrs}>${kids}</g>`;
  }
  return `<${el.k}${attrs}/>`;
}

// The art of one panel (background + base + that side's differences),
// without any markers. Returned as the inner HTML of a <g id="art-…">.
export function artSvg(scene, side) {
  const gradId = `water-${scene.id}-${side}`;
  const parts = [];
  parts.push(`<defs><linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="1">`);
  parts.push(
    `<stop offset="0" stop-color="${scene.water[0]}"/>` +
      `<stop offset="1" stop-color="${scene.water[1]}"/>`,
  );
  parts.push('</linearGradient></defs>');
  parts.push(
    `<rect x="0" y="0" width="${CONFIG.panelW}" height="${CONFIG.panelH}" ` +
      `fill="url(#${gradId})"/>`,
  );
  for (const el of scene.base) parts.push(elToSvg(el));
  for (const d of scene.diffs) {
    const piece = side === 'left' ? d.left : d.right;
    if (piece) parts.push(elToSvg(piece));
  }
  return parts.join('');
}

// One found-difference marker: a gold ring around the spot and a small
// numbered badge sitting on the ring, clear of the difference itself.
export function markerSvg(diff, num) {
  const r = diff.r + 6;
  // Badge sits on the ring at 45 degrees up-right, clamped inside the panel.
  const bx = Math.max(12, Math.min(CONFIG.panelW - 12, diff.x + r * 0.707));
  const by = Math.max(12, Math.min(CONFIG.panelH - 12, diff.y - r * 0.707));
  return (
    `<g class="found-marker">` +
    `<circle cx="${diff.x}" cy="${diff.y}" r="${r}" fill="rgba(255,209,102,0.12)" ` +
    `stroke="#ffd166" stroke-width="4"/>` +
    `<circle cx="${diff.x}" cy="${diff.y}" r="${r}" fill="none" ` +
    `stroke="#7a4a00" stroke-width="1" opacity="0.45"/>` +
    `<circle cx="${bx}" cy="${by}" r="11" fill="#ffd166" stroke="#7a4a00" stroke-width="2"/>` +
    `<text x="${bx}" y="${by + 5}" text-anchor="middle" font-size="14" ` +
    `font-weight="bold" fill="#7a4a00">${num}</text>` +
    `</g>`
  );
}

// The markers layer for one panel: every found difference, numbered in
// the order it was found. Returned as the inner HTML of a <g id="marks-…">.
export function marksSvg(scene, foundOrder) {
  const parts = [];
  for (let i = 0; i < foundOrder.length; i++) {
    const d = scene.diffs.find((x) => x.id === foundOrder[i]);
    if (d) parts.push(markerSvg(d, i + 1));
  }
  return parts.join('');
}

// A pulsing ring for a hint: drawn over an unfound difference.
export function hintSvg(diff) {
  return (
    `<g class="hint-ring">` +
    `<circle cx="${diff.x}" cy="${diff.y}" r="${diff.r + 10}" fill="none" ` +
    `stroke="#ffffff" stroke-width="4"/>` +
    `<circle cx="${diff.x}" cy="${diff.y}" r="${diff.r + 16}" fill="none" ` +
    `stroke="#ffd166" stroke-width="2" opacity="0.7"/>` +
    `</g>`
  );
}

// The magnifier lens: a circular window showing a zoomed copy of the
// panel art under the mouse. The lens is one <svg> whose <use> clones
// the panel's <g id="art-…"> and scales it, so the zoom always matches
// the art exactly. artId is 'art-left' or 'art-right'; mx,my are the
// mouse position in panel coordinates.
export function lensSvg(artId, mx, my) {
  const z = CONFIG.magnifierZoom;
  const c = CONFIG.magnifierRadius;
  return (
    `<defs><clipPath id="lens-clip">` +
    `<circle cx="${c}" cy="${c}" r="${c - 4}"/>` +
    `</clipPath></defs>` +
    `<g clip-path="url(#lens-clip)">` +
    `<use href="#${artId}" transform="translate(${c},${c}) scale(${z}) translate(${-mx},${-my})"/>` +
    `</g>` +
    `<circle cx="${c}" cy="${c}" r="${c - 4}" fill="none" stroke="#ffd166" stroke-width="4"/>` +
    `<circle cx="${c}" cy="${c}" r="${c - 4}" fill="none" stroke="#7a4a00" stroke-width="1" opacity="0.5"/>` +
    `<line x1="${c}" y1="${c - 8}" x2="${c}" y2="${c + 8}" stroke="#7a4a00" stroke-width="2"/>` +
    `<line x1="${c - 8}" y1="${c}" x2="${c + 8}" y2="${c}" stroke="#7a4a00" stroke-width="2"/>`
  );
}
