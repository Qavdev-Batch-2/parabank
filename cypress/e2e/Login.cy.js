/// <reference types="cypress" />

import {newUser} from '../fixtures/data.js'

describe('Testing login ', function() {
    before(function() {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
})

    it('should not be able to login with invalid credentials', function() {
        cy.get('[name="username"]').type('fabz')
        cy.get('[type="password"]').type('Pass12.@')
        cy.get('[class="button"]').eq(1).click()
        cy.get('p.error').should('be.visible')
        cy.get('p.error').should('have.text', 'The username and password could not be verified.')
    })

    it('should login with a valid credentials', function()  {
        cy.fixture('users').then((users) => {
        cy.login(users.admin.username, users.admin.password)
        })
    })

   // it.only('should open new account', function()  {
}) 