// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

chai.use((chai, utils) => {
  chai.Assertion.addMethod("tag", function (name) {
    const el = this._obj; // jQuery obj
    // console.log(el);
    const actual = el.prop("tagName").toUpperCase();
    const expected = name.toUpperCase();
    this.assert(
      actual === expected,
      `expect tag '${actual}' to be '${expected}'`
    );
  });
  /* todo
  chai.Assertion.addChainableMethod("tag", function (name) {
      var obj = utils.flag(this, 'object');
      new chai.Assertion(obj).to.have.prop(str);
    }
  ); //*/
});
