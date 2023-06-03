class home {
    elements = {
        categories: () => cy.get('#cat'),
        items: () => cy.get('#itemc', {timeout:20000}).should("be.visible")
    }

    getCategories(){
        this.elements.categories();
        this.elements.items().contains('Phones');

      }
    }
module.exports = new home();