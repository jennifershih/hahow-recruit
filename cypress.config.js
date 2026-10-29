const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    // GitHub pages are heavy; give them time to render.
    defaultCommandTimeout: 15000,
    video: false,
  },
});
