// cypress/integration/login_flow.spec.js

describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('/login'); // Navigate to the login page
  });

   it('should login', () => {
    cy.contains('Welcome to the Dashboard!'); // Check if the dashboard message is displayed
  });
});