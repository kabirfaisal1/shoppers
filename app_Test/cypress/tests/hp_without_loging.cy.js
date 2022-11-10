describe('Test Log in Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001');
    })
    it('Should be able to login successful', () => {
        
    
      //On Page load
      cy.get('[id="login-message"]').should('be.visible').invoke('text').should('contains',"Log in to view product prices and ratings")
    });
  
  
    it('Without logging user should not see price after search', () => {
    
      //On Page load
      cy.get('[id="login-message"]').should('be.visible').invoke('text').should('contains',"Log in to view product prices and ratings")
      //search field
      cy.get('[id="search-field"]').should('be.visible').type('Clorox disinfecting wipes');
     //click on submit
      cy.get('[id="btnSubmit"]').should('be.visible').click();
      //verify results are displayed
      cy.get('[id="fullResults"]', { timeout: 60000 }).should('be.visible');
    });

    it('Verify Error when search is blank', () => {
        //On Page load
        cy.get('[id="login-message"]').should('be.visible').invoke('text').should('contains',"Log in to view product prices and ratings")
        //click on submit
        cy.get('[id="btnSubmit"]').should('be.visible').click();
        //verify the error 
        cy.get('[id="search-Error"]').should('be.visible').invoke('text').should('contains',"Error: Can't search for blank input!!");
      
      });

    //   afterEach(() => {
    //     cy.get('[id="logout"]').should('be.visible').click();
    //   })
  
  });