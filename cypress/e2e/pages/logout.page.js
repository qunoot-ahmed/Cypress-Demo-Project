class logout {
    elements = {
        logoutBtn: () => cy.get('#logout2', {timeout:20000}).should("be.visible")
    }

    logoutFromApplication(){
        this.elements.logoutBtn().click();
    }
}
module.exports = new logout();