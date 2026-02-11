import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://malcicriederich-bit.github.io/',
  base: '/my-repo/',
  output: 'static',
  adapter: github(),
});
