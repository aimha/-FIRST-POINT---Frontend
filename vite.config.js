import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  publicDir: './static/',
  base: "/",
  plugins: [
    solidPlugin(),
  ],
  server: {port: 3000},
  build: {
    target: 'esnext',
    outDir: './dist', 
    emptyOutDir: true,
    sourcemap: true
  },
});
