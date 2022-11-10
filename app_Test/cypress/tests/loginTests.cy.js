describe('Test Log in Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/login');
})
  it('Should be able to login successful', () => {
   
    //email
    cy.get('[id="current-email"]').should('be.visible').type('testing12@gmail.com');
    //passed
    cy.get('[id="current-password"]').should('be.visible').type('testing123');
    //click on log in
    cy.get('[id="submit"]').should('be.visible').click();
    //verify you are logged in 
    cy.get('[id=logout]').should('be.visible').click();
  });

  it('Should be able to verify error messages when failed to log in', () => {
 
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
