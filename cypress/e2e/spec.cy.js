/// <reference types="cypress" />
describe('Site', () => {
  it('has slides', () => {
    cy.visit('/')
    cy.contains('section.present', 'Slide One!').should('be.visible')
    cy.get('[aria-label="next slide"]').click()
    cy.contains('section.present', 'Slide 2!').should('be.visible')
  })
})
