import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // https://vitest.dev/guide/#configuring-vitest
  // https://vitest.dev/config
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['vitest.setup.js'],
  },
  // https://vitejs.dev/config/
  plugins: [react()],
});
