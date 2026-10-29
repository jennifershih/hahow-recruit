// UI 第一題：此專案裡有幾個合作者，並且分別列出他們的名字。
describe('contributors', () => {
  beforeEach(() => cy.visit('https://github.com/hahow/hahow-recruit'));

  it('shows the contributor count and their names', () => {
    cy.get('a[href$="/graphs/contributors"]')
      .closest('h2')
      .find('[data-component="CounterLabel"]')
      .invoke('text')
      .then((text) => {
        const count = Number(text.trim());
        expect(count).to.be.greaterThan(0);
        cy.log(`${count} contributors`);
      });

    cy.get('a[href$="/graphs/contributors"]')
      .closest('h2')
      .parent()
      .parent()
      .find('img[alt^="@"]')
      .should('have.length.greaterThan', 0)
      .then(($imgs) => {
        const names = [...$imgs].map((img) => img.alt.replace(/^@/, ''));
        cy.log(names.join(', '));
      });
  });
});
