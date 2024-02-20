describe('Pagina de Login', () => {

    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/')
  })

    it('Validar login com sucesso', () => {
    cy.get('[data-test="loginUserName"]').type('alinemacedo')
    cy.get('[data-test="loginPassword"]').type('alinemacedo123')
    cy.contains('button', 'login').click();
  })

  
  
})