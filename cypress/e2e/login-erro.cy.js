describe('Pagina de Login', () => {

    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/')
      cy.intercept('POST', 'https://alurapic-api.onrender.com/user/login', {
                statusCode: 401
                }).as('stubPost')
  })
  
    it('Validar campos obrigatorios', () => {
        cy.contains('User name is required!').should('be.visible');
        cy.contains('Password is required!').should('be.visible');
  })

    it('Validar erro, mesmo com dados corretos', () => {
        cy.login('alinemacedo', 'alinemacedo123');
        cy.wait('@stubPost');
  })
  
  
})