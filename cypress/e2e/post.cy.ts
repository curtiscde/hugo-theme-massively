const post = {
  date: 'March 29, 2022',
  slug: 'lorem-ipsum',
  title: 'Lorem Ipsum',
}

describe('Post', () => {
  beforeEach(() => {
    cy.visit(`/post/${post.slug}`);
  });

  it('displays date', () => {
    cy.get('.date').contains(post.date);
  })

  it('displays title', () => {
    cy.get('h1')
      .contains(post.title);
  });
});
