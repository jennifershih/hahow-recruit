// UI 第三題：最後一個 commit 的人是誰。
describe('latest commit', () => {
  it('shows who made the latest commit', () => {
    cy.visit('https://github.com/hahow/hahow-recruit');
    cy.get('[data-testid="latest-commit"] a[data-hovercard-type="user"]')
      .first()
      .invoke('attr', 'href')
      .then((href) => {
        const author = href.replace(/^\//, '');
        expect(author).to.not.be.empty;
        cy.log(`Latest commit by ${author}`);
      });
  });
});
