import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'; // Import TypeScript paths plugin
import { ViteEjsPlugin } from 'vite-plugin-ejs'; // Example: EJS plugin for template support

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // Enables TypeScript path aliasing
    ViteEjsPlugin({ // Example EJS configuration
      data: {
        title: "Evolvtech UI Kit",
      },
    }),
  ],
  server: {
    open: true, // Automatically opens the app in the browser
    port: 3000, // Sets the development server port
  },
  resolve: {
    alias: {
      '@components': '/src/components', // Example alias
      '@styles': '/src/styles',
    },
  },
  build: {
    outDir: 'dist', // Output directory
    sourcemap: true, // Enable source maps for easier debugging
  },
  optimizeDeps: {
    include: ['@storybook/react', '@storybook/addon-links'], // Pre-bundles dependencies for faster startup
  },
});