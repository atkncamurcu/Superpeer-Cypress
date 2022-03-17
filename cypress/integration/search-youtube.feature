Feature: Open Youtube and Search for Superpeer
    I want to open youtube and search for Superpeer

    Scenario: Open Youtube Page
        Given I open youtube page
        Then I see "YouTube" in the title

    Scenario: Search on Youtube
        Given Search "Superpeer" keyword on youtube
        Then I see "Superpeer'in kuruluş hikayesi" in the listed of contents