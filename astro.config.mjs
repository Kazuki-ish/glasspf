import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
      server: {
        host: true,
      },
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: `@import "src/styles/_vars.scss"; @import "src/styles/_mixin.scss";`
            }
          }
        }
      },
});
