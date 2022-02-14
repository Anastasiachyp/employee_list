describe("User can see application on render", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to render a list of employees", () => {
    cy.get("[data-cy=employee-list").children().should("have.lenght", 6);
  });

  it("is expected to include employee name", () => {
    cy.get("[data-cy=employee-list")
      .children()
      .first()
      .should("contain.text", "George");
  });

  it("is expected to render employees with image", () => {
    cy.get("[data-cy=employee-list")
      .first()
      .find("[data-cy=avatar]")
      .should("be.visible");
  });
});
