describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays title', () => {
    cy.get('h1')
      .contains('This is')
      .contains('Massively');
  });

  // The intro CSS hides the description's <br> at <= 980px, so the lines must be
  // separated by whitespace as well as the break or they run together. The default
  // Cypress viewport is 1000px wide, which is why this needs an explicit viewport.
  it('keeps intro description lines separated when the line break is hidden', () => {
    cy.viewport(768, 1024);

    cy.get('#intro p').should(($p) => {
      expect($p.get(0).innerText).to.match(/HTML5 UP\s+and released/);
    });
  });

});
