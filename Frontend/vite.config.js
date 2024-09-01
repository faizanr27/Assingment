import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/': 'https://assingment-1-backend.onrender.com', // Proxy requests to backend
    },
  },
});
