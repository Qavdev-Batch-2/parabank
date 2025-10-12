/// <reference types="cypress" />

describe('Testing Web URL', () => {
    beforeEach(()=> {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    })

    
    it.skip("Should be able to navigate to the create acc page", ()=> {
      cy.contains('Register').should('be.visible')
      cy.url().should('not.eql', 'https://parabank.parasoft.com/parabank/register.htm')
      cy.get('p a', {timeout:5000}).eq(1).click()
      //cy.contains('Register').click() // Click on the register button
      cy.url().should('contain','https://parabank.parasoft.com/parabank/register.htm')
      // cy.get('h1.title').should('be.visible')
      // cy.contains('Signing up is easy')
      // cy.get('h1').should('be.visible')   
      // cy.get('h1').contains('Signing up is easy')
      cy.get('.title').then((el) => { // .then converts the selector into variable
        expect(el).to.be.visible
        expect(el.text()).to.eq('Signing up is easy!')
      })
      //cy.get('h1.title').should('be.visible').and('have.text', 'Signing up is easy!')
    })

    it("Should not be able to create an account with empty fields", ()=> {
      cy.contains('Register').should('be.visible')
      cy.url().should('not.eql', 'https://parabank.parasoft.com/parabank/register.htm')
      cy.get('p a', {timeout:5000}).eq(1).click() // Register
      cy.get('input[type="submit"]').eq(1).click() //REGISTER
      //cy.get('[class="button"]').eq(2).click() // REGISTER
      cy.get('.error').eq(0).should('have.text', 'First name is required.')
      cy.get('.error').eq(1).should('have.text', 'Last name is required.')
      cy.get('.error').eq(2).should('have.text', 'Address is required.')
      cy.get('.error').eq(3).should('have.text', 'City is required.')
      cy.get('.error').eq(4).should('have.text', 'State is required.')
      cy.get('.error').eq(5).should('have.text', 'Zip Code is required.')
      cy.get('.error').eq(6).should('have.text', 'Social Security Number is required.')
      cy.get('.error').eq(7).should('have.text', 'Username is required.')
      cy.get('.error').eq(8).should('have.text', 'Password is required.')
      cy.get('.error').eq(9).should('have.text','Password confirmation is required.')
      })
    
      it("Should user cannot process without filling a required field", ()=> {


  })
})
