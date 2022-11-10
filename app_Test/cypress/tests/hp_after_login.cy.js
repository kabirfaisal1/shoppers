describe('Test Log in Page', () => {
    beforeEach(() => {

        cy.visit('http://localhost:3001');
        //On Page load
        cy.get('[id="login-message"]').should('be.visible').invoke('text').should('contains',"Log in to view product prices and ratings")
        //click on log in 
        cy.get('[id="login"]').should('be.visible').click();
        //verify that login url
        cy.url().should('contains', "/login")
          //email
        cy.get('[id="current-email"]').should('be.visible').type('testing12@gmail.com');
        //passed
        cy.get('[id="current-password"]').should('be.visible').type('testing123');
        //click on log in
        cy.get('[id="submit"]').should('be.visible').click();
        //verify you are logged in 
        cy.get('[id=logout]').should('be.visible')
      })

  
  
    it('Without logging user should not see price after search', () => {
        
      //On Page load
      cy.get('[id="login-message"]').should('be.visible').invoke('text').should('include',"You are logged in as")
      //display user in
      cy.get('[id="userInfo"]').should('be.visible').invoke('text').should('include',"Search History for")
      //search field
      cy.get('[id="search-field"]').should('be.visible').type('Clorox disinfecting wipes');
     //click on submit
      cy.get('[id="btnSubmit"]').should('be.visible').click();
      //verify results are displayed
      cy.get('[id="fullResults"]', { timeout: 60000 }).should('be.visible');
       //verify price are not displayed
      cy.get('[id="price"]', { timeout: 60000 }).should('be.visible')
    });

    it('Verify Error when search is blank', () => {
     
        //On Page load
        cy.get('[id="login-message"]').should('be.visible').invoke('text').should('include',"You are logged in as")
        // //search field
        // cy.get('[id="search-field"]').should('be.visible').type('');
       //click on submit
        cy.get('[id="btnSubmit"]').should('be.visible').click();
        //verify the error 
        cy.get('[id="search-Error"]').should('be.visible').invoke('text').should('contains',"Error: Can't search for blank input!!");
      
      });
            afterEach(() => {
        cy.get('[id="logout"]').should('be.visible').click();
      })
  
  });