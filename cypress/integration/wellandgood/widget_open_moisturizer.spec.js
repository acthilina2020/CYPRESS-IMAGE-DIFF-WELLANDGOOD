describe("Open Widget moisturizer", () => {
  it("Compare the open widget", () => {
    cy.visit("https://www.wellandgood.com/skin-care-dupes/");
    cy.wait(6000);
    cy.get(":nth-child(14) > .wg-inline-shopable").scrollIntoView();
    cy.get(":nth-child(14) > .wg-inline-shopable").should("be.visible");
    cy.wait(2000);
    cy.get(":nth-child(14) > .wg-inline-shopable").click();
    cy.wait(6000);
    cy.get(
      "body > div.ReactModalPortal > div > div > div > div > div:nth-child(2) > div > form > div.components__ProductPriceContainer-bonsai-elements__sc-48h18i-4.geINor"
    ).hideElement();
    cy.get(
      ".product-modal__ContentContainer-bonsai-elements__sc-1i4vds-0"
    ).compareSnapshot("moisturizer widget open", 0.4);
  });
});
