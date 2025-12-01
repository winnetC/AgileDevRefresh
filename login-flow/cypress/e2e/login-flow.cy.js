// cypress/integration/login_flow.spec.js

describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Navigate to the home page
  });

   it('should navigate to login and then login successfully', () => {
    // Click the button to navigate to the Login page
    cy.get('button').contains('Go to Login').click(); // Click the login button

    // Verify the URL is now the login page
    cy.url().should('include', '/login');

    // Mock the login API response
    cy.intercept('POST', '/api/login', {
      statusCode: 200,
      body: { success: true },
    }).as('loginRequest');

    // Fill the login form
    cy.get('input[placeholder="Email"]').type('test@example.com');
    cy.get('input[placeholder="Password"]').type('password123');
    cy.get('button[type="submit"]').click();

    // Wait for the API call to be made
    cy.wait('@loginRequest');

    // Assert that we are redirected to the dashboard
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome to the Dashboard!'); // Check if the dashboard message is displayed
  });
});