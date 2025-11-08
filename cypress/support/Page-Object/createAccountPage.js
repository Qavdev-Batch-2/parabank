class AccountCreation {

navigateToAccPage(){
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
}


}

export default new AccountCreation()