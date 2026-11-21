# spot-difference-20261121

[![make.fun · best-spot-the-difference-game-20261121-0451](https://make.fun/badge/best-spot-the-difference-game-20261121-0451.svg)](https://make.fun/bounty/best-spot-the-difference-game-20261121-0451?utm_source=github&utm_medium=readme&utm_campaign=best-spot-the-difference-game-20261121-0451)
[![rank](https://make.fun/badge/best-spot-the-difference-game-20261121-0451/pumafelidae/spot-difference-20261121/rank.svg)](https://make.fun/bounty/best-spot-the-difference-game-20261121-0451/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-spot-the-difference-game-20261121-0451)
[![reward](https://make.fun/badge/best-spot-the-difference-game-20261121-0451/pumafelidae/spot-difference-20261121/reward.svg)](https://make.fun/bounty/best-spot-the-difference-game-20261121-0451?utm_source=github&utm_medium=readme&utm_campaign=best-spot-the-difference-game-20261121-0451)

**Reef Hunt** — a spot-the-difference game. Two near-identical coral reefs sit side by side; seven differences hide in each of three reefs (Sunlit Reef, Kelp Forest, Deep Reef). Click a difference on either panel to mark it, use hints and a magnifier lens, beat the clock.

## Play it

Serve `game/` with any static server and open `game/index.html` in desktop Chrome:

```sh
python3 -m http.server --directory game 8080
```

No network request is made; every script, image and sound is a file under `game/` or synthesized in code.

## Hand it in

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `game/` and `screenshots/` to the output directory and writes `dossier.json` with the vendored make.fun library.

## Files

- `game/index.html` — the page shell (HUD, panels, overlays)
- `game/src/config.js` — every tuning number in one place
- `game/src/world.js` — the three reef scenes: art and differences
- `game/src/render.js` — panels, markers and the magnifier lens as SVG
- `game/src/input.js` — mouse clicks and keyboard play
- `game/src/sounds.js` — WebAudio sounds, synthesized in code
- `game/src/shots.js` — frozen screenshot states (`?shot=1..4`)
- `game/src/main.js` — state, timer, counter, hints, scene flow
- `vendor/makefun-game.ts` — the kit's dossier library, unchanged
