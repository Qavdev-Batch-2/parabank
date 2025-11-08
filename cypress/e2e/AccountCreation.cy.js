/// <reference types="cypress" />

import {newUser} from '../fixtures/data.js' // location/ direction
import AccountCreation from '../support/Page-Object/createAccountPage.js'

describe('Testing Web URL', () => {
    beforeEach(()=> {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    })

    
    it.only("Should be able to navigate to the create acc page", ()=> {
      AccountCreation.navigateToAccPage()
    })

    it.skip("Should not be able to create an account with empty fields", ()=> {
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
    
      it.skip("Should not be able to register without filling a required field", ()=> {
      cy.contains('Register').should('be.visible')
      cy.url().should('not.eql', 'https://parabank.parasoft.com/parabank/register.htm')
      cy.get('p a', {timeout:5000}).eq(1).click() // Register
      cy.get('input[type="submit"]').eq(1).click() //REGISTER
      cy.get('[class="button"]').eq(2).click() // REGISTER
      cy.get('[name="customer.firstName"]').type('Boladale')
      cy.get('[id="customer.lastName"]').type('Adeyinka')
      cy.get('[class="button"]').eq(2).click() // REGISTER
      })

      it.skip('should allow registration without phone number', function(){
        cy.contains('Register').should('be.visible')
        cy.url().should('not.eql', 'https://parabank.parasoft.com/parabank/register.htm')
        cy.get('p a', {timeout:5000}).eq(1).click() // Register
        //cy.get('input[type="submit"]').eq(1).click() //REGISTER
        //cy.get('[class="button"]').eq(2).click() // REGISTER
        cy.get('[name="customer.firstName"]').type('Boladale')
        cy.get('[id="customer.lastName"]').type('Adeyinka')
        cy.get('[id="customer.address.street"]').type('17,ibrahim street')
        cy.get('[class="input"]').eq(5).type('Anthony')
        cy.get('input[id="customer.address.state"]').type('Lagos')
        cy.get('[name="customer.address.zipCode"]').type('101245')
        //cy.get('[class="input"]').eq(8).type('08023456789')
        cy.get('[id="customer.ssn"]').type('2233')
        cy.get('[id="customer.username"]').type('Fabz')
        cy.get('[type="password"]').eq(1).type('Pass12.@')
        cy.get('[id="repeatedPassword"]').type('Pass12.@')
        cy.get('[class="button"]').eq(2).click()  
        })
  
        
      it.skip('Should not allow registration with same registered details', function() {
      cy.contains('Register').should('be.visible')
      cy.url().should('not.eql', 'https://parabank.parasoft.com/parabank/register.htm')
      cy.get('p a', {timeout:5000}).eq(1).click() // Register
      //cy.get('input[type="submit"]').eq(1).click() //REGISTER
      //cy.get('[class="button"]').eq(2).click() // REGISTER
      cy.get('[name="customer.firstName"]').type('Boladale')
      cy.get('[id="customer.lastName"]').type('Adeyinka')
      cy.get('[id="customer.address.street"]').type('17,ibrahim street')
      cy.get('[class="input"]').eq(5).type('Anthony')
      cy.get('input[id="customer.address.state"]').type('Lagos')
      cy.get('[name="customer.address.zipCode"]').type('101245')
      cy.get('[class="input"]').eq(8).type('08023456789')
      cy.get('[id="customer.ssn"]').type('2233')
      cy.get('[id="customer.username"]').type('Fabz')
      cy.get('[type="password"]').eq(1).type('Pass12.@')
      cy.get('[id="repeatedPassword"]').type('Pass12.@')
      cy.get('[class="button"]').eq(2).click()
      cy.get('[id="customer.username.errors"]').should('have.text', 'This username already exists.')
      })

      it('Should be able to login with valid details', ()=> {
       const value = newUser()
       
          cy.contains('Register').should('be.visible')
          cy.url().should('not.eql', 'https://parabank.parasoft.com/parabank/register.htm')
          cy.get('p a', {timeout:5000}).eq(1).click() // Register
          cy.get('[name="customer.firstName"]').type(value.firstName)
          cy.get('[id="customer.lastName"]').type('Adeyinka')
          cy.get('[id="customer.address.street"]').type('17,ibrahim street')
          cy.get('[class="input"]').eq(5).type('Anthony')
          cy.get('input[id="customer.address.state"]').type('Lagos')
          cy.get('[name="customer.address.zipCode"]').type('101245')
          cy.get('[class="input"]').eq(8).type('08023456788')
          cy.get('[id="customer.ssn"]').type(value.SSN)
          cy.get('[id="customer.username"]').type(value.userName)
          cy.get('[type="password"]').eq(1).type('Pass12.@')
          cy.get('[id="repeatedPassword"]').type('Pass12.@')
          //cy.log(`username: ${name.userName}`)
          cy.get('[class="button"]').eq(2).click()
          cy.get('h1.title').should('contain', 'Welcome newReg_')
          cy.get('div p').eq(2).should('have.text', 'Your account was created successfully. You are now logged in.')

          })
          
          
      })
  
      