import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/signup': 'https://assingment-1-backend.onrender.com,
      'user-list': 'https://assingment-1-backend.onrender.com/userlist', // Proxy requests to backend
    },
  },
});
