import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { SearchResult } from "../../pages/SearchResult";
import { VideoDetail } from "../../pages/VideoDetail";
import { Homepage } from "../../pages/Homepage";

const videoDetail = new VideoDetail()
const searchResult = new SearchResult()
const homepage = new Homepage()

Given('I click {string} title the listed of contents', (text) => {
    searchResult.openClickedVideo(text)
})

Then(`I see {string} in the title`, (text) =>{
    homepage.validateTheHomePage(text)
})

Then(`I see {string} in the url`, (urlPart) => {
    videoDetail.validateTheVideoUrl(urlPart)
})

Then("I see added date is {string}", (date) => {
    videoDetail.validateTheVideoAddedDate(date)
})

Then("I see video owner is {string}", (owner) => {
    videoDetail.validateTheVideoOwner(owner)
})

Then("I see the number of like is more than {string}", (likeCount) => {
    videoDetail.validateTheNumberOfLike(likeCount)
})

Given('I click the pause button', () => {
    videoDetail.stopVideo()
})

Then("I see the button title contain {string}", (buttonTitle) => {
    videoDetail.validateTheVideoIsStopped(buttonTitle)
})

Given('I scroll down the page', () => {
    videoDetail.scrollDown()
})

Then("I see the header is fixed at the top", () => {
    videoDetail.validateTheHeaderIsFixedAtTop()
})

let randomSelectedVideoTitle
Given("I click the random video from suggested videos", () => {
    videoDetail.openClickedRandomSuggestVideo().then(title=>{
        randomSelectedVideoTitle = title;
    });
})

Then("I see the clicked video name in the title", () => {
    videoDetail.validateTheSuggestedVideoTitle(randomSelectedVideoTitle)
})

