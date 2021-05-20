describe('sort movies', () => {
  it('sort movies name by episode', () => {
    cy.request('GET', 'https://swapi.dev/api/films').then(
      (response) => {
          const films = response.body.results;
          films.sort((film1,film2) => {
              return film1.episode_id - film2.episode_id;
          })
          const filmTitles = films.map((film) =>{
              return film.title
          })
        cy.log(JSON.stringify(filmTitles));
      }
    )
  }); 
});