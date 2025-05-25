import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from "node:path";

export default defineConfig({
  base: '/barberSite/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});