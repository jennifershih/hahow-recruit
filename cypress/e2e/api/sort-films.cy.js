// API 第二題：請依據電影集數去排序電影名字。
describe('films by episode', () => {
  it('lists film titles in episode order', () => {
    cy.request('https://swapi.dev/api/films/').then(({ body }) => {
      const films = [...body.results].sort((a, b) => a.episode_id - b.episode_id);
      const episodes = films.map((film) => film.episode_id);

      expect(episodes).to.deep.eq([...episodes].sort((a, b) => a - b));
      expect(films[0].title).to.eq('The Phantom Menace');

      cy.log(films.map((film) => `Episode ${film.episode_id}: ${film.title}`).join(', '));
    });
  });
});
