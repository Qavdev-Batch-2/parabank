/// <reference types="cypress" />

describe('Testing login ', function() {
    beforeEach(function() {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
})

it('user should be able to login with valid credentials', function() {
    cy.get('[name="username"]').type('fabz')
    cy.get('[type="password"]').type('Pass12.@')
    cy.get('[class="button"]').eq(1).click()
})

    // it('should not be able to login with invalid credentials', function()  {
        
    // })
}) 