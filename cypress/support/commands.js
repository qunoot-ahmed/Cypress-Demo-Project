Cypress.Commands.add('openDemoblazeWebsite', () => {
  Cypress.log({
    name: 'openDemoblaze',
    message: 'Opening Demoblaze page',
  });
  cy.visit('https://www.demoblaze.com/');
});

Cypress.Commands.add('login', () => {
  const loginPwd = Cypress.env('password')
  cy.wait(5000)
  cy.get('#loginusername', { timeout: 10000 }).should("be.visible")
    .type('qunoot897@yopmail.com');
  cy.get('#loginpassword').type(loginPwd);
});
