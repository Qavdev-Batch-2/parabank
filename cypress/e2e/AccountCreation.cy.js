/// <reference types="cypress" />

import { data } from '../fixtures/data.js'


describe('Testing Web URL', () => {
    beforeEach(()=> {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
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
       const name = data()
          cy.contains('Register').should('be.visible')
          cy.url().should('not.eql', 'https://parabank.parasoft.com/parabank/register.htm')
          cy.get('p a', {timeout:5000}).eq(1).click() // Register
          cy.get('[name="customer.firstName"]').type('Hakim')
          cy.get('[id="customer.lastName"]').type('Adeyinka')
          cy.get('[id="customer.address.street"]').type('17,ibrahim street')
          cy.get('[class="input"]').eq(5).type('Anthony')
          cy.get('input[id="customer.address.state"]').type('Lagos')
          cy.get('[name="customer.address.zipCode"]').type('101245')
          cy.get('[class="input"]').eq(8).type('08023456788')
          cy.get('[id="customer.ssn"]').type(name.SSN)
          cy.get('[id="customer.username"]').type(name.userName)
          cy.get('[type="password"]').eq(1).type('Pass12.@')
          cy.get('[id="repeatedPassword"]').type('Pass12.@')
          //cy.log(`username: ${name.userName}`)
          cy.get('[class="button"]').eq(2).click()
          cy.get('h1.title').should('contain', 'Welcome newReg_')
          cy.get('div p').eq(2).should('have.text', 'Your account was created successfully. You are now logged in.')
          })
      })
  