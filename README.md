# Cypress-Demo-Project

This project is a Cypress automation project for testing the [DemoBlaze](https://www.demoblaze.com/) website. Allure reporting is used for generating test reports.

## Dependencies

- "@shelex/cypress-allure-plugin": "^2.39.1"
- "allure-commandline": "^2.22.1"
- "cypress": "^12.12.0"

## Usage

1. Clone the repository to your local machine.
2. Install the project dependencies by running the following command: npm install.
3. Select the desired test file from the Cypress test runner interface and watch the tests execute in the browser.

## Allure Reporting

This project utilizes Allure reporting for generating test reports. After running the Cypress tests, you can generate the Allure report by following these steps:

1. Install the Allure command-line tool by running the following command:
npm install -g allure-commandline

2. Generate the Allure report by executing the following command:
allure generate allure-results --clean && allure open

This will generate the Allure report based on the test results and open it in your default browser.
