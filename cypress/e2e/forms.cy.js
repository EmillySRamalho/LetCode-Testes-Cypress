import { faker } from '@faker-js/faker';

describe('Formulário LetCode', () => {

    beforeEach(() => {
        cy.visit('https://letcode.in/test')
    })

    it('Visitar campo de Form', () => {

        cy.get('.card-footer-item').eq(18).click()

        cy.get('#firstname').type(faker.person.firstName());
        cy.get('#lasttname').type(faker.person.lastName());
        cy.get('#email').clear().type(faker.internet.email());

        cy.contains('label', 'Country code')
            .siblings('div.control')
            .find('select')
            .select('Brazil (+55)')

        const phoneNumber = faker.string.numeric({ length: 10, exclude: ['0'] });
        cy.get('#Phno').type(phoneNumber);

        cy.get('#Addl1').type(faker.location.streetAddress())
        cy.get('#Addl2').type(faker.location.streetAddress())

        cy.get('#state').type(faker.location.state())

        cy.get('#postalcode').type(faker.location.zipCode('#####-###'))

        cy.get('#country')
            .parent()
            .find('select')
            .select('Brazil')

        const date = faker.date.birthdate().toISOString().split('T')[0]
        cy.get('#Date').type(date)

        cy.get('#female').check()

        cy.get('input[type="checkbox"]').check()

        cy.get('input[type="submit"]').click()
    })


})