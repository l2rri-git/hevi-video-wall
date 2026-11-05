# Hevi video wall prototype

Proof of concept: layout desk and video wall for an operations room.

## Run locally

```sh
npm install
npm run dev
```

Opens http://localhost:5173 (layout B). Layout A: http://localhost:5173/?layout=a

Wall on its own: http://localhost:5173/wall (open it in another tab or window; it follows the desk).

Refresh the page to reset the prototype.

## Build

```sh
npm run build     # static files in dist/
npm run preview   # serves dist/ at http://localhost:4173
```

## Structure

- `src/Prototype.jsx` — state, data and behaviour
- `src/Template.jsx` — markup
- `src/styles.css` — global styles and scene classes
- `public/scenes/` — 20 camera scenes (day and thermal)
