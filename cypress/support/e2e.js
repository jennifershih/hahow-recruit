import './commands';

// GitHub's own scripts sometimes throw while the page loads; they are not part of what we test.
Cypress.on('uncaught:exception', () => false);
