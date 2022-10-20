import AboutView from "./AboutView.vue";

describe("<AboutView />", () => {
  it("renders", () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(AboutView);

    cy.get('button')
      .contains('0th')
      .click()
      .should('have.text', '1st')

  })
})