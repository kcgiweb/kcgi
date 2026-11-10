import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { seoPrerender } from './seo/prerender';

export default defineConfig({
  plugins: [react(), seoPrerender()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
