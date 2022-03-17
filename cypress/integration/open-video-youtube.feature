Feature: Open video and Verify video information
    I want to open video and verify it's information

    Scenario: Click and Open the video
        Given I click "Superpeer'in kuruluş hikayesi" title the listed of contents
        Then I see "/watch?v=ZNe-TIiLiEI" in the url
        And I see "Superpeer'in kuruluş hikayesi" in the title
        And I see added date is "11 Ara 2020"
        And I see video owner is "Fatih Acet"
        And I see the number of like is more than "100"
    
    Scenario: Click the pause button and stop the video
        Given I click the pause button
        Then I see the button title contain "Oynat"
    
    Scenario: Scroll down the Page and verify page header is fixed at the top
        Given I scroll down the page
        Then I see the header is fixed at the top

    Scenario: Click a random video from suggested videos
        Given I click the random video from suggested videos
        Then I see the clicked video name in the title