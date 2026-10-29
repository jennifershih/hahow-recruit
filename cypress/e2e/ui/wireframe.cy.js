// UI 第二題：進入 frontend.md 並查看 "Wireframe" 的圖片是否存在。
describe('frontend.md wireframes', () => {
  it('shows both wireframe images', () => {
    cy.visit('https://github.com/hahow/hahow-recruit/blob/master/frontend.md');

    ['hero-list-page.png', 'hero-profile-page.png'].forEach((file) => {
      cy.get(`img[src$="/assets/${file}"]`)
        .should('be.visible')
        // The image actually loaded, not just a broken <img>.
        .and(($img) => expect($img[0].naturalWidth).to.be.greaterThan(0));
    });
  });
});
