/// <reference types="cypress" />

context('CEP', () => {
    before(() => {
        cy.visit('http://localhost:3000/form-cep')
    })

    it('Should return cep', () => {
        addressRequest()
        cy.get('[id="cep"]').type('79002060')
        //cy.wait('@resAddress')
        cy.get('[id="bairro"]').should('have.value', 'Centro')
        cy.get('[id="logradouro"]').should('have.value', 'Rua Joel Dibo')
    })
})

const addressRequest = () => {
    cy.server()
    cy.route({
        method: 'GET',
        url: `https://viacep.com.br/ws/79002060/json`,
        response: 'fixture:address.json'
    }).as('resAddress')
}