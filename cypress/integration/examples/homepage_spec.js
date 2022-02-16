describe("Load the homepage and render expected components", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Should be able to visit the page and render the page title", () => {
    cy.contains("h1", "Turing Cafe Reservations");
  });
  it("Should be able to visit the page and render form component", () => {
    cy.get('input[type="text"]')
      .should("be.visible")
      .get('input[type="number"]')
      .should("be.visible");
  });
  it("Should render the Make Reservation button", () => {
    cy.get("button").should("be.visible");
  });
  it("Should render the Make Reservation button", () => {
    cy.get("button").should("be.visible");
  });
  it("Should show the current reservations container", () => {
    cy.get("div.res-container").should("be.visible");
  });
  it("Should show the a card for each reservation", () => {
    cy.get("div.res-details").should("be.visible");
  });
  it("Should check input boxes for values", () => {
    cy.get("input[placeholder='Name']").type("Bob").should("have.value", "Bob");
    cy.get("input[placeholder='Date (mm/dd)']")
      .type("02/22")
      .should("have.value", "02/22");
    cy.get("input[placeholder='Time']")
      .type("3:00")
      .should("have.value", "3:00");
    cy.get("input[placeholder='Number of guests']")
      .type(2)
      .should("have.value", 2);
  });
  it("Should check for a new reservation when the make reservation button is clicked", () => {
    cy.get("input[placeholder='Name']").type("Bob").should("have.value", "Bob");
    cy.get("input[placeholder='Date (mm/dd)']")
      .type("02/22")
      .should("have.value", "02/22");
    cy.get("input[placeholder='Time']")
      .type("3:00")
      .should("have.value", "3:00");
    cy.get("input[placeholder='Number of guests']")
      .type(2)
      .should("have.value", 2);
    cy.get("button.res-button").click();
    cy.get("div.res-container").should("be.visible");
    cy.get("div.res-details").contains("h1", "Bob");
  });
});
