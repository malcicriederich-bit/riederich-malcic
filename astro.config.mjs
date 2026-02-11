import { defineConfig } from 'astro/config';
import github from '@astrojs/github-pages';

export default defineConfig({
  site: 'https://github.com/malcicriederich-bit/riederich-malcic.git',
  base: '/riederich-malcic/',
  output: 'static',
  adapter: github(),
});