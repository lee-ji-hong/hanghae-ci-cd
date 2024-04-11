import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  build: {
    lib: {
      // library 빌드 엔트리 포인트와 빌드될 파일 이름을 결정해요
      entry: path.join(path.resolve(), 'src/lib/index.jsx'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      // 번들러 설정을 제어해요. react가 함꼐 번들되지 않고 참조할 수 있도록 해요
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
    commonjsOptions: {
      // cjs 빌드시 위와 동일한 효과를 위해 설정해요.
      esmExternals: ['react'],
    },
  },
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
