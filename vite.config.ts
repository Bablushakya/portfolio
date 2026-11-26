import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            if (id.includes('recharts') || id.includes('d3')) return 'charts';
            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('react-router') || id.includes('react-dom') || id.includes('react/')) return 'vendor';
          }
          return undefined;
        },
      },
    },
  },
});
