/// <reference types="cypress" />

const VIDEO_TITLE = 'yt-formatted-string'
const VIEWPORT_SIZE = 'macbook-16'

export class SearchResult{
    validateTheVideoTitle(title){
        cy.contains(VIDEO_TITLE, title)
    }

    openClickedVideo(text){
        cy.viewport(VIEWPORT_SIZE)
        cy.contains(VIDEO_TITLE, text).click()
    }
}