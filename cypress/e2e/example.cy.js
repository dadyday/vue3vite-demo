// https://docs.cypress.io/api/introduction/api.html
// https://devhints.io/chai

describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[href="/"]').as("homeLink");
    cy.get('[href="/about"]').as("aboutLink");
  });

  it("visits the app root url", () => {
    cy.contains("You did it!")
      .should("be.tag", "h1"); // custom chainer
  });

  it("checks the visit counter", () => {
    cy.get("@aboutLink").click();

    cy.get(".about > div")
      .contains("visit!")
      .find("button")
      .as("theButton")
      .contains("1.")
      .click()
      .should("have.text", "2.");
    cy.screenshot();

    cy.get("@homeLink").click();
    cy.get("@aboutLink").click();
    cy.get("@theButton")
      .should("have.text", "3.");
  });
});
