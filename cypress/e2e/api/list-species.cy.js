// API 第一題：有多少不同種族的人出現在第六部？
// 「第六部」解讀為 SWAPI 的第 6 部電影（/films/6/，即上映順序第六部《西斯大帝的復仇》）。
describe('species in the sixth film', () => {
  it('counts the distinct species', () => {
    cy.request('https://swapi.dev/api/films/6/').then(({ body }) => {
      const species = new Set(body.species);
      expect(species.size, 'distinct species').to.be.greaterThan(0);
      expect(species.size, 'no duplicates in the list').to.eq(body.species.length);
      cy.log(`${body.title}: ${species.size} species`);
    });
  });
});
