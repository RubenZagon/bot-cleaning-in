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

        // Bucle eliminar contactos
        cy.get("ul")
            .find('.artdeco-dropdown__trigger--placement-bottom.artdeco-button--circle')
            .each(function($btn){
            if ($btn.hasClass('artdeco-button--circle')){
                cy.wrap($btn).click();
                cy.get(".artdeco-dropdown__content.artdeco-dropdown--is-dropdown-element.artdeco-dropdown__content--has-arrow.artdeco-dropdown__content--arrow-right.artdeco-dropdown__content--justification-right.artdeco-dropdown__content--placement-bottom.ember-view")
                    .find(".display-flex.align-items-center.t-14.t-black--light.t-normal")
                    .click();
                cy.get(".mv2.artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view")
                    .click();
            }
        })
    })
})