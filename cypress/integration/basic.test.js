context('Lodgify contact page', () => {
  it('Should have the right title', () => {
    cy.visit('http://localhost:8080/Contact.html');
    cy.title().should('include', 'Contact');
  });
})