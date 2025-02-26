Cypress.Commands.add('openDemoblazeWebsite', () => {
  Cypress.log({
    name: 'openDemoblaze',
    message: 'Opening Demoblaze page',
  });
  cy.visit('https://www.demoblaze.com/');
});

Cypress.Commands.add('login', (username, password) => {
  //const loginPwd = Cypress.env('password')
  cy.wait(5000)
  cy.get('#loginusername', { timeout: 10000 }).should("be.visible")
    .type(username);
  cy.get('#loginpassword').type(password);
});
