import { defineConfig as defineViteConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineVitestConfig({
  ...defineViteConfig({
    base: '/coding-ai-chat',
    plugins: [
      react({
        plugins: [['@swc/plugin-styled-components', {}]],
      }),
    ],
  }),
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['coverage/**', '**/*.d.ts', '**/*.test.*', 'src/test/setup.ts'],
    },
    passWithNoTests: true,
    exclude: ['**/node_modules/**', '**/dist/**', 'storybook-static/**'],
  },
});
