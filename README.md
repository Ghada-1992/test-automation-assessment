[![CircleCI](https://circleci.com/gh/Ghada-1992/test-automation-assessment/tree/main.svg?style=svg&circle-token=42b2c4f0d153e6f18970bacd1b075f4455272c73)](https://circleci.com/gh/Ghada-1992/test-automation-assessment/tree/main)

# 🎭 E2E Test Automation Framework - Playwright

An e2e testing framework in JavaScript developed using [Playwright](https://playwright.dev/)

## Pre-requisites

-   [NodeJs](https://nodejs.org/en/)
-   [NPM](https://www.npmjs.com/)

### Get Started:

-   Clone and install :

    ```
    git clone https://github.com/Ghada-1992/test-automation-assessment.git
    cd test-automation-assessment
    npm ci
    npm install
    ```

-   Run Test Locally :
    ```
    npm test
    ```

-   CI/CD :

    - CI is set up using CircleCI 

    - Config for the CI is defined in `.circleci/config.yml`.

    - View the Builds for this repo @ https://circleci.com/gh/Ghada-1992/test-automation-assessment/tree/main ( **You need to be logged in to your own CircleCI account using your GitHub credentials to view this** )

    - View Jest HTML Report under `Artifacts` tab of the Job run


![Alt text](images/jest-html-report.png?raw=true "Report Artifacts")
