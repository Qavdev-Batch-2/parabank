/// <reference types="cypress" />

describe('Testing Web URL', () => {
  beforeEach(()=> {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  })

  it('Should be able to launch the URl', () => {
    cy.url().should('include', '.com').and('include', 'htm')
    cy.url().should('not.contain', 'ng')
    cy.url().should('not.contain', '.net')
    cy.url().should('contain', 'parabank')
    cy.url().should('eq', 'https://parabank.parasoft.com/parabank/index.htm')
    cy.location('protocol').should('eq', 'https:')
    cy.location('hostname').should('eq', 'parabank.parasoft.com')
  })


})