describe("Login inválido - BugBank", () => {

  beforeEach(() => {
    cy.visit("https://bugbank.netlify.app");
  });

  it("Deve exibir mensagem de erro ao tentar login com dados inválidos", () => {

    cy.get('form').eq(0).within(() => {

      cy.get('input[name="email"]').type("usuarioinvalido@mail.com");
      cy.get('input[name="password"]').type("senhaerrada");

      cy.contains("Acessar").click();
    });

    cy.contains("Usuário ou senha inválido").should("be.visible");

  });

});