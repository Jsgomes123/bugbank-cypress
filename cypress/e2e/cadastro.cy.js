describe("Cadastro de usuário - BugBank", () => {

  beforeEach(() => {
    cy.visit("https://bugbank.netlify.app");
  });

  it("Deve cadastrar usuário com sucesso", () => {

    const email = `teste${Date.now()}@mail.com`;

    cy.contains("Registrar").click();

    // Pega o segundo formulário (cadastro)
    cy.get("form").eq(1).within(() => {

      cy.get('input[name="email"]').type(email, { force: true });
      cy.get('input[name="name"]').type("Usuário Teste", { force: true });
      cy.get('input[name="password"]').type("123456", { force: true });
      cy.get('input[name="passwordConfirmation"]').type("123456", { force: true });

      cy.contains("Cadastrar").click({ force: true });
    });

    cy.contains("sucesso").should("be.visible");

  });

});