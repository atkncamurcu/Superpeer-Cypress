import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { Homepage } from "../../pages/Homepage";
import { SearchResult } from "../../pages/SearchResult";

const homepage = new Homepage()
const searchResult = new SearchResult()

Given('I open youtube page', () => {
    homepage.navigate()
})

Then(`I see {string} in the title`, (text) =>{
    homepage.validateTheHomePage(text)
})

Given('Search {string} keyword on youtube',(text) => {
    homepage.searchKeyword(text)
})

Then(`I see {string} in the listed of contents`,(text) => {
    searchResult.validateTheVideoTitle(text)
})
