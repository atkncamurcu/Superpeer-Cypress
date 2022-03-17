# Superpeer QA Assignment with Cypress

## :grey_question: What is Cypress & Cucumber & Gherkin
- [Cypress](https://www.cypress.io/) is a purely JavaScript-based front end testing tool built for the modern web. It aims to address the pain points developers or QA engineers face while testing an application.
  Cypress is a more developer-friendly tool that uses a unique DOM manipulation technique and operates directly in the browser.

- Cucumber is a tool that supports [Behaviour-Driven Development(BDD)](https://cucumber.io/docs/bdd).
  Cucumber reads executable specifications written in plain text and validates that the software does what those specifications say.
  The specifications consists of multiple examples, or scenarios. For example:
  ```bash
   Scenario: Breaker guesses a word
    Given the Maker has chosen a word
    When the Breaker makes a guess
    Then the Maker is asked to score
  ```
  Each scenario is a list of steps for Cucumber to work through. 
  Cucumber verifies that the software conforms with the specification and generates a report indicating ✅ success or ❌ failure for each scenario.
  In order for Cucumber to understand the scenarios, they must follow some basic syntax rules, called [Gherkin](https://cucumber.io/docs/gherkin/).

- Gherkin is a set of grammar rules that makes plain text structured enough for Cucumber to understand. Gherkin serves multiple purposes:
    - Unambiguous executable specification
    - Automated testing using Cucumber
    - Document how the system actually behaves
    
  Gherkin documents are stored in **`.feature`** text files and are typically versioned in source control alongside the software.
  

## :goal_net: Goals
- Create project with Cypress
- Create tests according to requirment in assignment
- Implementation of Cucumber & Gherkin


## :gear: Setup

 ```bash
 ## clone this repo to a local directory
 git clone https://github.com/atkncamurcu/superpeer-assignment-cypress.git
 
 ## cd into the cloned repo
 cd superpeer-assignment-cypress
 
 ## install the node_modules
 npm install
```


## :heavy_check_mark: Run tests

- If you installed Cypress via npm: 
    - Cypress Test Runner:
      - **`npx cypress open`**
   
- If you did not install Cypress:
    - [Follow these instructions to install and write tests in Cypress.](https://on.cypress.io/installing-cypress)

## :bulb: Information
#### :test_tube: Tests:
:file_folder: Tests are located in `cypress/integration` folder

:file_folder: Using Page Object Model(POM) design pattern and pages are located in `cypress/pages` folder 

#### :hammer_and_wrench: Configuration

Config files:
`cypress.json` - Main config file where default behavior of Cypress can be modified. [More info](https://docs.cypress.io/guides/references/configuration#cypress-json)


#### :diamond_shape_with_a_dot_inside: IDE setup and recommended extensions
- [VS Code](https://code.visualstudio.com/download) with following extensions:
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - to keep your code tidy
    - [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)


## :link: Links
1. https://docs.cypress.io/guides/references/best-practices.html
2. https://docs.cypress.io/api/cypress-api/custom-commands.html#Best-Practices
3. https://cucumber.io/docs/cucumber/
4. https://medium.com/nerd-for-tech/cypress-page-object-model-953791736972
