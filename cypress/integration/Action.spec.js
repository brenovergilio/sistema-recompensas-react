/// <reference types="cypress" />

context('Testing if can claim trophy', () => {
    before(() => {
        cy.visit('http://localhost:3000/rewards-manager')
    })

    it('Should not claim if user doesnt have all the rewards', () => {
        cy.get('[data-testid="card-trophy"]').should('exist')
        cy.get('[data-testid="claim-button"]').click()
        cy.get('[data-testid="modaltext"]').should('contain.text', 'Você não tem todas as recompensas para reinvindicar o troféu')
        cy.get('[data-testid="back"]').click()
    })

    it('Sould claim the trophy if user has all the rewards', () => {
        cy.get('[data-testid="1"]').click()
        cy.get('.btn-success').contains('Validar').click()

        cy.get('[data-testid="2"]').click()
        cy.get('.btn-success').contains('Validar').click()

        cy.get('[data-testid="3"]').click()
        cy.get('.btn-success').contains('Validar').click()

        cy.get('[data-testid="4"]').click()
        cy.get('.btn-success').contains('Validar').click()

        cy.get('[data-testid="5"]').click()
        cy.get('.btn-success').contains('Validar').click()

        cy.get('[data-testid="6"]').click()
        cy.get('.btn-success').contains('Validar').click()

        cy.get('[data-testid="7"]').click()
        cy.get('.btn-success').contains('Validar').click()

        cy.get('[data-testid="card-trophy"]').should('exist')
        cy.get('[data-testid="claim-button"]').click()
        cy.get('[data-testid="modaltext"]').should('not.exist')
    })
})

context('Testing filters', () => {
    before(() => {
        cy.visit('http://localhost:3000/rewards-manager')
    })

    it('Should render only rewards that the user already claimed', () => {
        cy.get('[data-testid="1"]').click()
        cy.get('.btn-success').contains('Validar').click()

        cy.get('[data-testid="filter"]').select('me')
        cy.get('div').contains('1 estrela')

    })

    it('Should render only rewards that the user has not claimed yet', () => {
        cy.get('[data-testid="filter"]').select('notme')
        cy.get('div').contains('2 estrelas')
        cy.get('div').contains('3 estrelas')
        cy.get('div').contains('4 estrelas')
        cy.get('div').contains('5 estrelas')
        cy.get('div').contains('6 estrelas')
        cy.get('div').contains('7 estrelas')
    })

    it('Should render all rewards', () => {
        cy.get('[data-testid="filter"]').select('all')
        cy.get('div').contains('1 estrela')
        cy.get('div').contains('2 estrelas')
        cy.get('div').contains('3 estrelas')
        cy.get('div').contains('4 estrelas')
        cy.get('div').contains('5 estrelas')
        cy.get('div').contains('6 estrelas')
        cy.get('div').contains('7 estrelas')
    })
})