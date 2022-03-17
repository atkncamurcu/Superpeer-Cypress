/// <reference types="cypress" />
export class VideoDetail{
    validateTheVideoUrl(urlPart){
        cy.url().should('include',urlPart)
    }

    validateTheVideoAddedDate(date){
        cy.contains('#info-strings >yt-formatted-string',date)
    }

    validateTheVideoOwner(owner){
        cy.contains('#text >a', owner)
    }

    validateTheNumberOfLike(likeCount){
        //We have to check aria-label attribute because when like count is greater than 1000, youtube floor the number like 1 B
        cy.get('ytd-toggle-button-renderer yt-formatted-string:first').invoke("attr","aria-label")
        .then(parseFloat).should("be.gt", parseFloat(likeCount))
    }

    stopVideo(){
        cy.get(".ytp-play-button").click();
    }

    validateTheVideoIsStopped(buttonTitle){
        cy.get(".ytp-play-button").invoke("attr","title").contains(buttonTitle)
    }

    scrollDown(){
        cy.scrollTo(0,1000)
    }

    validateTheHeaderIsFixedAtTop(){
        cy.get("#masthead").should('be.inViewport');
    }

    openClickedRandomSuggestVideo(){
        return new Cypress.Promise((resolve,reject)=>{
            const element = "ytd-watch-next-secondary-results-renderer ytd-compact-video-renderer";
            cy.get(element).its('length').then(elementCount => {
                let selected = Cypress._.random(elementCount-1)
                cy.get(element).eq(selected).find('#video-title').invoke('text').then((title) => {
                    resolve(title.replace(/[\n\t\r]/g,"").trim());
                })
                cy.get(element).eq(selected).click()
            })
        });
    }

    validateTheSuggestedVideoTitle(title){
        cy.title().should('include',title)
    }
}