describe('Teste básico', () => {

  beforeEach(() => {
    cy.visit('https://letcode.in/test')
  })

  it('Visitar campo de POM', () => {

    cy.get('.card-footer-item').first().click()
    cy.contains('button', ' ₹ 15.99 ').click()
    cy.contains('span', 'Add to Cart').click()
    
    cy.wait(5000)

    cy.get('.button.is-pulled-right').first().click()
    cy.wait(2000)

    cy.contains('button', '+').click() 
    cy.wait(2000)

    cy.contains('button', 'Checkout').click()

    cy.contains('span', 'Products').click()

    cy.contains('button', '₹ 695').click()
    cy.contains('span', 'Add to Cart').click()
    cy.get('.button.is-pulled-right').first().click()
    cy.wait(2000)

    cy.get('.fas.fa-trash').click()

    cy.contains('button', 'Continue Shopping').click()

    cy.get('.fas.fa-user').click()
    
    cy.get('input[placeholder="Enter Username"]').type('mor_2314')
    cy.get('input[placeholder="Enter Password"]').type('83r5^_')

    cy.contains('button', 'Login').click()

    cy.get('.navbar-burger.burger').click()
    cy.wait(2000)

    cy.get('.fa.fa-sun').click()
    cy.wait(2000)

    cy.get('.fa.fa-moon').click()

    cy.get('.navbar-burger')
      .click()
      .should('have.attr', 'aria-expanded', 'false')

    cy.get('.fas.fa-sign-out-alt').click()

    
  })

})

