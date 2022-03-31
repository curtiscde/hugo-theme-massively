const post = {
  date: 'March 29, 2022',
  slug: 'lorem-ipsum',
  title: 'Lorem Ipsum',
}

describe('Post', () => {
  before(() => {
    cy.visit(`http://localhost:1313/post/${post.slug}`);
  });

  it('displays date', () => {
    cy.get('.date').contains(post.date);
  })

  it('displays title', () => {
    cy.get('h1')
      .contains(post.title);
  });
});
