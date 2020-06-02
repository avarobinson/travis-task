describe ('Test App', () => {

    it ('launches', () => {
        cy.visit ('/');
    });

    it ('opens with Google Sign In', () => {
        cy.visit ('/');
        cy.contains('Sign in with Google');
    });
    
    it('shows message when More button clicked', () => {
        cy.visit ('/');
        cy.get('[data-cy=testInteraction]').click();
        cy.get('[data-cy=message]').should('contain' ,'Welcome to Linx!');
      });
});