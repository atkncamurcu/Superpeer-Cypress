/// <reference types="cypress" />
const VIDEO_ADD_DATE ='#info-strings >yt-formatted-string'
const VIDEO_OWNER = '#text >a'
const NUMBER_OF_LIKE = 'ytd-toggle-button-renderer yt-formatted-string:first'
const STOP_BUTTON = '.ytp-play-button'
const HEADER = '#masthead'
const SUGGESTED_ELEMENT = 'ytd-watch-next-secondary-results-renderer ytd-compact-video-renderer'
const SUGGESTED_ELEMENT_TITLE = '#video-title'

export class VideoDetail{
    validateTheVideoUrl(urlPart){
        cy.url().should('include',urlPart)
    }

    validateTheVideoAddedDate(date){
        cy.contains(VIDEO_ADD_DATE,date)
    }

    validateTheVideoOwner(owner){
        cy.contains(VIDEO_OWNER, owner)
    }

    validateTheNumberOfLike(likeCount){
        //We have to check aria-label attribute because when like count is greater than 1000, youtube floor the number like 1 B
        cy.get(NUMBER_OF_LIKE).invoke("attr","aria-label")
        .then(parseFloat).should("be.gt", parseFloat(likeCount))
    }

    stopVideo(){
        cy.get(STOP_BUTTON).click();
    }

    validateTheVideoIsStopped(buttonTitle){
        cy.get(STOP_BUTTON).invoke("attr","title").contains(buttonTitle)
    }

    scrollDown(){
        cy.scrollTo(0,1000)
    }

    validateTheHeaderIsFixedAtTop(){
        cy.get(HEADER).should('be.inViewport');
    }

    openClickedRandomSuggestVideo(){
        return new Cypress.Promise((resolve,reject)=>{
            cy.get(SUGGESTED_ELEMENT).its('length').then(elementCount => {
                let selected = Cypress._.random(elementCount-1)
                cy.get(SUGGESTED_ELEMENT).eq(selected).find(SUGGESTED_ELEMENT_TITLE).invoke('text').then((title) => {
                    resolve(title.replace(/[\n\t\r]/g,"").trim());
                })
                cy.get(SUGGESTED_ELEMENT).eq(selected).click()
            })
        });
    }

    validateTheSuggestedVideoTitle(title){
        cy.title().should('include',title)
    }
}