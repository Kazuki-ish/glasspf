// .prettierrc.mjs 
// [error] Invalid configuration for file "/Users/kaz/dev_myproject/astro/glassportfolio/src/components/About.astro":
// [error] Cannot find module '/Users/kaz/dev_myproject/astro/glassportfolio/.prettierrc.mjs' imported from /Users/kaz/dev_myproject/astro/glassportfolio/node_modules/prettier/index.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};