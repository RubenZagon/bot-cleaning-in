import {password, username} from "../../../credentials";

context('Limpando...', () => {
    it('Comenzamos limpieza', () => {
        // Entramos a linkedin
        cy.visit('https://www.linkedin.com/')

        // Aceptamos las cookies
        cy.get('.artdeco-button--primary').contains('Accept').click()

        cy.get('#session_key')
            .type(username).should('have.value', username)
        cy.get('#session_password')
            .type(password).should('have.value', password)

        cy.get('.sign-in-form__submit-button').contains('Sign').click()
    })
})


