import {password, username} from "../../../credentials-dev";

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.linkedin.com/')
    })

    it("Probando", ()=>{
        // Aceptamos las cookies
        cy.get('.artdeco-button--primary').contains('Accept cookies').click()

        // Relleno campos de login
        cy.get('#session_key')
            .type(username).should('have.value', username)
        cy.get('#session_password')
            .type(password).should('have.value', password)

        // Clicko boton de loguear
        cy.get('.sign-in-form__submit-button').contains('Sign in').click()

        // Voy a "Mi red"
        cy.visit('https://www.linkedin.com/mynetwork/invite-connect/connections/')

        // Cerrar el chat
        cy.wait(5000)
        cy.get('.msg-overlay-bubble-header').click('center')

        /*Antes de ponerse a eliminar usuarios, busca un conejillo de indias*/
    })
})