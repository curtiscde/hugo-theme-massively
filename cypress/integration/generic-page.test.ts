describe('Generic Page', () => {
  before(() => {
    cy.visit('http://localhost:1313/generic-page');
  });

  it('displays title', () => {
    cy.get('h1')
      .contains('Generic Page');
  });

});
