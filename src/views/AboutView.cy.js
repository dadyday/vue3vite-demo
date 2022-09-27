import AboutView from "./AboutView.vue";

describe("<AboutView />", () => {
  it("renders", () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(AboutView);

    cy.get('button')
      .contains('0.')
      .click()
      .should('have.text', '1.')
  })
})