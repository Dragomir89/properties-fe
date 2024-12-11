import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  base: './',

  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@http': path.resolve(__dirname, './src/http/index.ts'),
      '@types': path.resolve(__dirname, './src/common/types.ts'),
    },
  },
});
