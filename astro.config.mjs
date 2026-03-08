import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  site: 'https://talbarami.github.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss(), yaml()],
  },
});
