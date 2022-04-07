describe('Home', () => {
  before(() => {
    cy.visit('http://localhost:1313/');
  });

  it('displays title', () => {
    cy.get('h1')
      .contains('This is')
      .contains('Massively');
  });

});
