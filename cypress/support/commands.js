
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { 
//     cy.get('input[name="username"]').type('efynyi')
//     cy.get('input[type="password"]').type('John123@')
//     cy.get('input[class="button"]').click()
// })


Cypress.Commands.add('login', (username, password) => { 
    cy.get('div h2').should('be.visible').and('have.text', 'Customer Login')
        cy.get('div h2').then(function(el){
            expect(el).to.be.visible
            expect(el.text()).to.eq('Customer Login')
            })
        cy.get('input[name="username"]')
            .should('be.enabled')
            .should('not.disabled')
            .and('be.visible') 
            .type(username, {log: false})
        cy.get('input[name="password"]')
            .should('be.enabled')
            .should('not.disabled')
            .and('be.visible')
            .type(password,{log: false}) 
        cy.get('input[class="button"]').click()
    })