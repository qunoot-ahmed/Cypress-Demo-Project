import loginpage from '../pages/login.page'
import logoutpage from '../pages/logout.page'

describe('Opencart Login Page', () => {
  before(() => {
    cy.openDemoblazeWebsite();
  })

  it.only('should log in to Opencart', () => {
    loginpage.clickLoginLink()
    cy.login(Cypress.env('user'), Cypress.env('password'))
    loginpage.goToHomePage()
    loginpage.productImage()
  });

  after(() => {
    logoutpage.logoutFromApplication()
  })
});
