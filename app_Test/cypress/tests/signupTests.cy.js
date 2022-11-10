describe('Test Sign up Page', () => {
    it('Should be able to submit a successful sign up form', () => {
      cy.visit('http://localhost:3001/login');
      //name
      cy.get('[id="username"]').should('be.visible').type('Cy Tester');
      //email
      cy.get('[id="email"]').should('be.visible').type(`testing${Math.random()*2}@gmail.com`);
      //password
      cy.get('[id="password"]').should('be.visible').type('testing123');
      //click on log in
      cy.get('[id="sign-up"]').should('be.visible').click();
      //verify you are logged in 
      cy.get('[id=logout]').should('be.visible')
    });
  
    it('Should be able to verify log in due duplicate email', () => {
      cy.visit('http://localhost:3001/login');
       //name
       cy.get('[id="username"]').should('be.visible').type('Cy Tester');
       //email
       cy.get('[id="email"]').should('be.visible').type('testing123@gmail.com');
       //password
      cy.get('[id="password"]').should('be.visible').type('testing');
      //click on submit
      cy.get('[id="sign-up"]').should('be.visible').click();
      //verify you are logged in 
      cy.get('[id=signup-error]').should('be.visible').invoke('text').should('include',"Email address already in use")
    });
  
  });
  