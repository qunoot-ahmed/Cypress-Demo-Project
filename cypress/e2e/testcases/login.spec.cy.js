import loginpage from '../pages/login.page'
import logoutpage from '../pages/logout.page'

describe('Opencart Login Page', () => {
  before(() => {
    cy.openDemoblazeWebsite();
  })

  it('should log in to Opencart', () => {
    loginpage.clickLoginLink()
    cy.login()
    loginpage.goToHomePage()
    loginpage.productImage()
  });

  after(() => {
    logoutpage.logoutFromApplication()
  })
});
