context('Limpando...', () => {
    it('Comenzamos limpieza', () => {
        // Entramos a linkedin
        cy.visit('https://www.linkedin.com/')

        // Aceptamos las cookies
        cy.get('.artdeco-button--primary').contains('Accept').click()
    })
})


