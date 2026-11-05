# Hevi video wall prototype

Proof of concept: layout desk and video wall for an operations room.

Hosted on GitHub Pages behind a shared password:

- Desk: https://l2rri-git.github.io/hevi-video-wall/
- Wall: https://l2rri-git.github.io/hevi-video-wall/wall/ (open in a second window of the same browser; it follows the desk)
- Session deck: https://l2rri-git.github.io/hevi-video-wall/deck.html

## Run locally

```sh
npm install
npm run dev
```

Opens http://localhost:5173 (layout B). Layout A: http://localhost:5173/?layout=a

Wall on its own: http://localhost:5173/wall (open it in another tab or window; it follows the desk).

Refresh the page to reset the prototype.

## Session deck

`public/deck.html`, served at `/deck.html`. ← → move between slides, F goes full screen.

## Build

Publish to GitHub Pages (asks for the site password, builds, puts a password page in front of the desk, wall and deck, and pushes to the `gh-pages` branch):

```sh
npm run deploy
```

Use the same password each time and keep `.staticrypt.json` in the repo, so "Remember me" keeps working. `npm run deploy -- --local` builds the encrypted site into `dist/` without publishing.


```sh
npm run build     # static files in dist/
npm run preview   # serves dist/ at http://localhost:4173
```

## Structure

- `src/Prototype.jsx` — state, data and behaviour
- `src/Template.jsx` — markup
- `src/styles.css` — global styles and scene classes
- `public/scenes/` — 20 camera scenes (day and thermal)
