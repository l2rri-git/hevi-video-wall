import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, mkdirSync } from 'node:fs';

// Static hosts have no fallback route, so the build also writes wall/index.html (and 404.html).
function wallPage() {
  return {
    name: 'wall-page',
    apply: 'build',
    closeBundle() {
      mkdirSync('dist/wall', { recursive: true });
      copyFileSync('dist/index.html', 'dist/wall/index.html');
      copyFileSync('dist/index.html', 'dist/404.html');
    },
  };
}

// GITHUB_PAGES=1 builds for https://l2rri-git.github.io/hevi-video-wall/
const base = process.env.GITHUB_PAGES ? '/hevi-video-wall/' : '/';

export default defineConfig({
  base,
  plugins: [react(), wallPage()],
  server: { port: 5173, open: true },
  preview: { port: 4173 }
});
