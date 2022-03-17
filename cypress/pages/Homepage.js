/// <reference types="cypress" />

const URL = 'https://www.youtube.com'
const SEARCH_INPUT = 'input#search'
const SEARCH_ICON = '#search-icon-legacy'


export class Homepage{
    navigate(){
        cy.visit(URL)
    }

    validateTheHomePage(title){
        cy.title().should('include',title)
    }

    searchKeyword(text){
        cy.get(SEARCH_INPUT).type(text)
        cy.get(SEARCH_ICON).click()
    }
}