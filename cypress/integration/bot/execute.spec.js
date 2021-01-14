import {password, username} from "../../../credentials";

context('Limpando...', () => {
    it('Comenzamos limpieza', () => {
        // Entramos a linkedin
        cy.visit('https://www.linkedin.com/')

        // Aceptamos las cookies
        cy.get('.artdeco-button--primary').contains('Accept').click()

        // Hacer el login accediendo a Linkedin
        cy.get('#session_key')
            .type(username).should('have.value', username)
        cy.get('#session_password')
            .type(password).should('have.value', password)
        cy.get('.sign-in-form__submit-button').contains('Sign').click()


        // Vamos a la página de contactos
        cy.visit('https://www.linkedin.com/mynetwork/invite-connect/connections/')


        // Cerramos el chat
        cy.wait(5000)
        cy.get('#ember549').click()

    })
})


