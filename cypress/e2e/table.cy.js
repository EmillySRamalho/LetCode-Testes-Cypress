describe('Testes de funcionalidade de Table', () => {

    beforeEach(() => {
        cy.visit('https://letcode.in/test')
    })

    it('Visitar campo de Form', () => {

        cy.get('.card-footer-item').eq(16).click()
        cy.get('#dt-length-0').select('25')

        cy.get('#dt-search-0').type('University of Abertay Dundee')

        cy.wait(2000)

        cy.get('#dt-search-0').clear()

        cy.get('.dt-type-numeric.dt-orderable-desc').click()

        cy.wait(2000)

        cy.get('.dt-type-numeric.dt-orderable-asc').click()

        cy.contains(
            'button.dt-paging-button',
            '2'
        ).click()








    })
})