describe('check wireframe', () => {
  it('check wireframe images exist', () => {
    cy.visit('https://github.com/hahow/hahow-recruit/blob/master/frontend.md')
    cy.get('a > img[src="/hahow/hahow-recruit/raw/master/assets/hero-list-page.png"]').should('be.visible');
    cy.get('a > img[src="/hahow/hahow-recruit/raw/master/assets/hero-profile-page.png"]').should('be.visible');
  }); 
});