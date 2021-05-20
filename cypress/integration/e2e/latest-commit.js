describe('latest commit', () => {
  it('list latest commit name', () => {
    cy.visit('https://github.com/hahow/hahow-recruit')
    cy.get('a.commit-author').then((dom) => {
      var name = dom.text();
      cy.log(name);
    }); 
  });
}); 