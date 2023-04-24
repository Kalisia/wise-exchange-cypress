///<reference types="cypress" />

describe('compare', () => {
    it('taxas de câmbio', () => {
        cy.visit('https://wise.com/pt/compare/')
        cy.contains('button', 'Accept' ).click()
        cy.contains('button', 'Libra esterlina').click()
        cy.get('input[placeholder="Buscar moeda"]').type('BRL').click()
        cy.contains('a', 'Real brasileiro').click()
        
    }) 
})

