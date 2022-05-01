describe("makup remover product is visible", () => {
  it("verify the native commerce widget is present", () => {
    cy.visit("https://www.wellandgood.com/skin-care-dupes/");
    cy.wait(6000);
    cy.get(
      "#post-687909 > section > div > div > div > div:nth-child(8)"
    ).scrollIntoView();
    cy.get(
      "#post-687909 > section > div > div > div > div:nth-child(8)"
    ).should("be.visible");
    cy.wait(3000);
    cy.get("body").then(($body) => {
      if ($body.find(".email-capture__circle").length > 0) {
        cy.get(".email-capture__circle").hideElement();
      }
    });
    cy.get(":nth-child(8) > .wg-inline-shopable").compareSnapshot(
      "makupremover is displayed",
      0.2
    );
  });
});
