describe('Test Log in Page', () => {
  it('Should be able to login successful', () => {
    cy.visit('http://localhost:3001/login');
    //cy.get('#contact-us').click({force: true})
    //email
    cy.get('[id="current-email"]').should('be.visible').type('testing12@gmail.com');
    //passed
    cy.get('[id="current-password"]').should('be.visible').type('testing123');
    //click on log in
    cy.get('[id="submit"]').should('be.visible').click();
    //verify you are logged in 
    cy.get('[id=logout]').should('be.visible')
  });

  it('Should be able to verify error messages when failed to log in', () => {
    cy.visit('http://localhost:3001/login');
    //cy.get('#contact-us').click({force: true})
    //email
    cy.get('[id="current-email"]').should('be.visible').type('testing12@gmail.com');
    //passed
    cy.get('[id="current-password"]').should('be.visible').type('testing');
    //click on log in
    cy.get('[id="submit"]').should('be.visible').click();
    //verify you are logged in 
    cy.get('[id=login-error]').should('be.visible').invoke('text').should('contains',"We're sorry, there is an error with your email and/or password.")
  });

});
