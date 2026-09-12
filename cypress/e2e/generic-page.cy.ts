describe('Generic Page', () => {
  beforeEach(() => {
    cy.visit('/generic-page');
  });

  it('displays title', () => {
    cy.get('h1')
      .contains('Generic Page');
  });

});
