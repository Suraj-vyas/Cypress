# Expand.Network UI/API Automation Framework by Suraj

## Overview

This repository contains an UI/API test cases of :
1. app.expand.network application

## Features

- **Flexible Request Handling:** Interact with APIs using HTTP requests (GET and POST) and handle responses effectively for both Positive and Negative testing scenarion
- **Data-Driven Testing:** Perform data-driven testing
- **Assertions and Validations:** Validate API responses using built-in assertions.
- **Environment Management:** Manage multiple environments (e.g., Develop, UAT, API(Production)) seamlessly.
- **Comprehensive Reporting:** Generate detailed reports to track test execution results and identify issues.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system
- [Cypress](https://www.cypress.io/)

### Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/Suraj-vyas/Cypress_Expand.Network.git
    ```

2. Navigate to the project directory which you want to run, for example :

    ```bash
    cd cypress
    ```

3. Install dependencies:

     ```bash
    npm i
    ```

### Running Tests

* To run tests of particular testing file, execute the following command:

```bash
npx cypress run cypress\e2e\DeX\UI\HomePage_Dex.cy.js --headed
```

* To run tests for all test cases , execute the following command:

```bash
npx cypress run
```
### Changing of test execution Environment

> To run tests in specific environment, go to cypress.config.js and change the baseURL value.
