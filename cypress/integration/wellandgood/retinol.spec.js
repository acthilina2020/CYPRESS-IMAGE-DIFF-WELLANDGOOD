describe("retinol product is visible", () => {
  it("verify the native commerce widget is present", () => {
    cy.visit("https://www.wellandgood.com/skin-care-dupes/");
    cy.wait(6000);
    cy.get(":nth-child(10) > .wg-inline-shopable").scrollIntoView();
    cy.get(":nth-child(10) > .wg-inline-shopable").should("be.visible");
    cy.wait(3000);
    cy.get("body").then(($body) => {
      if ($body.find(".email-capture__circle").length > 0) {
        cy.get(".email-capture__circle").hideElement();
      }
    });
    cy.get(":nth-child(10) > .wg-inline-shopable").compareSnapshot(
      "retinol is displayed",
      0.2
    );
  });
});
