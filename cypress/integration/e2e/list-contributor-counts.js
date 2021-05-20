describe('contributors', () => {
  it('list contributor counts', () => {
    cy.visit('https://github.com/hahow/hahow-recruit')
    cy.get('a[href="/hahow/hahow-recruit/graphs/contributors"] > span.Counter').then((dom) => {
      var counts = dom.text();
      cy.log(counts);
    }); 
  }); 

  it('list contributor name', () => {
    cy.visit('https://github.com/hahow/hahow-recruit')
    cy.get('ul.list-style-none > li.mb-2 > a > img').then((imgNodeList) => {
      var imgs = Array.from(imgNodeList)
      var usernames = imgs.map((img) => {
        var alt = img.getAttribute('alt');
        return alt;
      })
      var resultString = JSON.stringify(usernames)
      cy.log(resultString);
    });
  }); 
});