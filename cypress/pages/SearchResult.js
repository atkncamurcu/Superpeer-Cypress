/// <reference types="cypress" />
export class SearchResult{
    validateTheVideoTitle(title){
        cy.contains('yt-formatted-string', title)
    }

    openClickedVideo(text){
        cy.viewport("macbook-16")
        cy.contains('yt-formatted-string', text).click()
    }
}