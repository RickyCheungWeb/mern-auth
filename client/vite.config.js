import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // for local testing adding proxy:
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
});
