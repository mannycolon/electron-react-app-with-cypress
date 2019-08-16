/// <reference types="Cypress" />

describe('My First Test', function() {
  beforeEach(() => {
    cy.visit('src/electron/index.html').then(function (win) {
      this.win = win;
    });

    // Using added command
    // cy.visitIndex().then(function (win) {
    //   this.win = win;
    // });
  });
  it('Gets, types and asserts', function() {
    const email = 'fake@email.com';
    cy.contains('Go to Login').click();

    // Get an input, type into it and verify that the value has been updated
    cy.get('#email-input')
      .type(email)
      .should('have.value', email);
    cy.get('#password-input')
      .type('fake_password')
      .should('have.value', 'fake_password')

    // Click the sign in button
    cy.get('#sign_in_button').click();

    // Get alert message and verify that the message is correct
    cy.on('window:alert', (str) => expect(str).to.equal(`You're logged in as ${email}`))
  });
});
