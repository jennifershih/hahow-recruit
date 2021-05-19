describe('list species', () => {
  it('list species in films6', () => {
    cy.request('GET', 'https://swapi.dev/api/films/6/').then(
      (response) => {
        cy.log(response.body.species.length);
      }
    )
  }); 
});