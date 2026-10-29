const SWAPI = 'https://swapi.dev/api';

/** Fetch every page of a SWAPI list endpoint and yield all results. */
Cypress.Commands.add('swapiAll', (resource) => {
  const results = [];
  const fetchPage = (url) =>
    cy.request(url.replace(/^http:/, 'https:')).then(({ body }) => {
      results.push(...body.results);
      return body.next ? fetchPage(body.next) : cy.wrap(results, { log: false });
    });
  return fetchPage(`${SWAPI}/${resource}/`);
});
