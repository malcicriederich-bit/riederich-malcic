import { defineConfig } from 'astro/config';
import github from '@astrojs/github-pages';

export default defineConfig({
  site: 'https://malcicriederich-bit.github.io',
  output: 'static',
  adapter: github(),
});