describe("User can see application on render", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to render a list of employees", () => {
    cy.get("[data-cy=employee-list").should("have.lenght", 6);
  });

  xit("is expected to include employee name", () => {
    cy.get("[data-cy=employee-list")
      .first()
      .should("contain.text", "Some name");
  });

  xit("is expected to render employees with image", () => {
    cy.get("[data-cy=employee-list")
      .first()
      .find("[data-cy=avatar]")
      .should("be.visible");
  });
});
