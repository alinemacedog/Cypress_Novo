describe('Pagina de Cadastro', () => {

  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/')
})

  it('Validar cadastro com dados validos', () => {
      cy.contains('a','Register now').click();
      cy.get('[data-test="email"]').type('aline_macedog@hotmail.com')
      cy.get('[data-test="fullName"]').type('Aline Macedo')
      cy.get('[data-test="registerUserName"]').type('alinemacedo')
      cy.get('[data-test="registerPassword"]').type('alinemacedo123')
      cy.contains('button', 'Register').click();
})

it('Validar mensagens de erro dos campos', () => {
  cy.contains('a','Register now').click();
  cy.contains('button', 'Register').click();
  cy.contains('button', 'Register').click();
  cy.contains('Email is required!').should('be.visible');
  cy.contains('Full name is required!').should('be.visible');
  cy.contains('User name is required!').should('be.visible');
  cy.contains('Password is required!').should('be.visible');
})

})