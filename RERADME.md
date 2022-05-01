# WeellandGood Publisher Visual Testing
Automated visual testing for https://www.wellandgood.com/skin-care-dupes/


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for visual testing of https://www.wellandgood.com/skin-care-dupes/
Cypress-Image-Diff open source plugin is used for this visual testing project


### Prerequisites

Cypress requires the following dependencies:
- macOS 10.9 and above (64-bit only)
- Or Windows 7 and above
- Node.js (https://nodejs.org/en/) >= v12
- VS Code
- Chrome browser


### Start running tests

To start running locally


#### 1. Clone the repo

```
$ git clone https://github.com/acthilina2020/CYPRESS-IMAGE-DIFF-WELLANDGOOD.git
```

#### 2. Install dependencies

```
$ npm install
```


### Open cypress test runner

- `npx cypress open` in the terminal
- Above command will open the test runner
- On the test runner, select which test to run from each folder
- Or click on 'Run all specs' to run all tests


### Documents to read

Cypress installation
`(https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)`

Chai assertions
`(https://docs.cypress.io/guides/references/assertions.html#Chai)`

Cypress best practices
`(https://docs.cypress.io/examples/examples/tutorials.html#Best-Practices)`

Using xpath with cypress
`(https://www.npmjs.com/package/cypress-xpath)`

Visual testing with Cypress-Image-Diff
`https://github.com/uktrade/cypress-image-diff`


### Structure

Cypress is based on Javascript and uses `Mocha` framework and `Chai` assertion library.
Cypress is used for end-to-end testing and also for unit testing


#### Visual testing

- `Cypress-Image-Diff` free plugin is used for visual testing in this project


### Using locators with Cypress

- cssSelectors are commonly used with Cypress
- Cypress test runner also comes with an in-built feature to inspect and grab cssSelector of elements
- ID/Xpath can also be used
- Example for usage of ID : //a[@id="header-nav-dropdown-notification”]
Html tag type+ID





