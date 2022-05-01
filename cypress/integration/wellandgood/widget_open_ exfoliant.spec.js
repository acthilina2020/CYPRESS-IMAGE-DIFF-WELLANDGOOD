describe("verify open Widget exfoliant", () => {
  it("Compare the open widget", () => {
    cy.visit("https://www.wellandgood.com/skin-care-dupes/");
    cy.wait(6000);
    cy.get(":nth-child(12) > .wg-inline-shopable").scrollIntoView();
    cy.get(":nth-child(12) > .wg-inline-shopable").should("be.visible");
    cy.wait(2000);
    cy.get(":nth-child(12) > .wg-inline-shopable").click();
    cy.wait(6000);
    cy.get(
      "body > div.ReactModalPortal > div > div > div > div > div:nth-child(2) > div > form > div.components__ProductPriceContainer-bonsai-elements__sc-48h18i-4.geINor"
    ).hideElement();
    cy.get(
      "body > div.ReactModalPortal > div > div > div > div"
    ).compareSnapshot("exfoliant widget open", 0.4);
  });
});
