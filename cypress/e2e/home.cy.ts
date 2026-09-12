describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays title', () => {
    cy.get('h1')
      .contains('This is')
      .contains('Massively');
  });

});
