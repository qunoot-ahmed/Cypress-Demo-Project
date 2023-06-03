class login {
    elements = {
        loginLink: () => cy.get('#login2'),
        loginBtn: () => cy.get('.btn-primary').contains('Log in'),
        modalHeading: () => cy.get('#logInModalLabel', {timeout:20000}).should("be.visible"),
        productImg: () => cy.get('img[src="bm.png"]').should('be.visible')
    }

    clickLoginLink() {
        this.elements.loginLink().click();
        this.elements.modalHeading()
    }

    goToHomePage() {
        this.elements.loginBtn().click();
    }

    productImage(){
        this.elements.productImg();
        cy.url().should('eq', 'https://www.demoblaze.com/');
    }
}
module.exports = new login();