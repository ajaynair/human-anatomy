import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/', // Default for user/organization pages (e.g., username.github.io)
  };

  if (command === 'build') {
    // For project pages (e.g., username.github.io/my-repo-name/)
    // Set this to your repository name
    config.base = '/human-anatomy/'; // <-- IMPORTANT: CHANGE 'your-repo-name' to your actual GitHub repository name
  }

  return config;
});
