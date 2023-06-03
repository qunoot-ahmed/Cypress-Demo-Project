import loginpage from '../pages/login.page'
import homepage from '../pages/home.page'
import logoutpage from '../pages/logout.page'

describe('Home page', () => {
    before(() => {
        cy.openDemoblazeWebsite();
        loginpage.clickLoginLink();
        cy.login();
        loginpage.goToHomePage();
    })

    it('should have the correct page title', () => {
        cy.title().should('eq', 'STORE');
        homepage.getCategories();
    });

    after(() => {
        logoutpage.logoutFromApplication();
    })
})