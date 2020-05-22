let total
describe('Submit Decision', () => {
  it('Logs in as s1@calc.edu', () => {
    cy.visit('http://localhost:8000/login/?next=/')
    cy.get('form').within(() => {
      cy.get('#id_email').type('s1@calc.edu')
      cy.get('#id_password').type('s1')
      cy.root().submit()
    })
    cy.get('h1').contains('Hello Player: s1@calc.edu')
  })
  it('Submits form', () => {
    cy.get('p').invoke('text').then(text => {
      total = parseInt(text.split(':')[1].trim(), 10)
      cy.get('form').within(() => {
        cy.get('#operand').clear().type('10')
        cy.root().submit()
      })
      total += 10
      cy.get('p').contains(`Current total: ${total}`)
      cy.screenshot()
    })
  })
  it('Logs out', () => {
    cy.visit('http://localhost:8000/logout/')
    cy.location('pathname').should('eq', '/login/')
  })
})

describe('View as Leader', () => {
  it('Logs in as leader@calc.edu', () => {
    cy.visit('http://localhost:8000/login/?next=/')
    cy.get('form').within(() => {
      cy.get('#id_email').type('leader@calc.edu')
      cy.get('#id_password').type('leader')
      cy.root().submit()
    })
    cy.get('h1').contains('Hello CALC Leader')
  })
  it('Shows player table', () => {
    cy.contains('s1@calc.edu').parent('tr').within(() => {
      cy.get('td').eq(2).contains(total)
    })
    cy.screenshot()
  })
})
