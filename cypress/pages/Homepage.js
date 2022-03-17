/// <reference types="cypress" />
export class Homepage{
    navigate(){
        cy.visit("https://www.youtube.com")
    }

    validateTheHomePage(title){
        cy.title().should('include',title)
    }

    searchKeyword(text){
        cy.get('input#search').type(text)
        cy.get('#search-icon-legacy').click()
    }
}