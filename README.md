# Playwright End-to-End Automation Framework

This repository contains an end-to-end test automation framework built with JavaScript and Playwright. The framework is designed to handle retry mechanisms, failure handling, and continuous integration with Jenkins.

## Features

- **Retry Mechanism**: Automatically retries failed tests for improved reliability.
- **Screenshot Capture**: Takes screenshots on test failure for easier debugging.
- **Video Recording**: Records video of test execution when a test case fails.
- **Jenkins Integration**: Seamless integration with Jenkins for Continuous Integration and Continuous Deployment (CI/CD).
- **Allure Reporting**: Integrated with Allure for detailed test reports.

## Project Structure
```
.
.
├── allure-results/          # Allure results stored after each test run
├── node_modules/            # Project dependencies
├── pageObjects/             # Page Object Model (POM) files for each page
│   ├── AddingProductToCart.js
│   ├── PlacingOrder.js
│   ├── POManager.js
│   ├── RegistrationPage.js
│   ├── VerifyingOrder.js
├── playwright-report/       # Playwright HTML reports
├── test-data/               # Test data in JSON format
│   └── userRegistrationData.json
├── test-results/            # Screenshots, videos, and logs from test runs
├── tests/                   # Test scripts
│   ├── EndtoEndTest.spec.js  # Sample End-to-End test
├── .gitignore               # Files to be ignored by Git
├── package.json             # Project dependencies and scripts
├── playwright.config.js     # Playwright configuration
└── README.md                # Project documentation

```

**## Prerequisites**

To set up and run the project, you need to have the following installed:

- [Node.js](https://nodejs.org/) (v14+)
- [Playwright](https://playwright.dev/)
- [Allure](https://docs.qameta.io/allure/) for generating reports
- [Jenkins](https://www.jenkins.io/) for CI/CD

**## Installation**

**1. Clone the repository:**
   ```bash
   git clone https://github.com/Sankr20/Playwright-End-to-End-Automation-Framework.git
   ```

**2. Navigate to the project directory:**
   ```bash
   cd your-repository-name
   ```

**3. Install dependencies:**
   ```bash
   npm install
   ```

**4. Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## Configuration

Playwright configuration is handled in `playwright.config.js`. You can modify the settings such as browser types, test timeout, and headless mode.

To set environment-specific variables, you can configure them in the `.env` file.

## Running Tests

To execute the tests, run the following command:

```bash
npx playwright test
```

You can run specific tests or use tags to filter tests.

### Running with Allure Report

To run tests with Allure and generate a report, use:

```bash
npx playwright test --reporter=line --reporter=allure-playwright
```

To view the Allure report, run:

```bash
npx allure generate allure-results --clean && npx allure open
```

### Running in Headed Mode

By default, tests run in headless mode. To run them in headed mode for debugging, use:

```bash
npx playwright test --headed
```

### Viewing Playwright HTML Report

You can view Playwright’s built-in HTML report after a test run by executing:

```bash
npx playwright show-report
```

## CI/CD with Jenkins

The project is configured to integrate with Jenkins for automated testing in CI/CD pipelines. Jenkins will run the Playwright tests, generate reports, and provide continuous feedback on the test results.

Ensure the following plugins are installed in Jenkins:
- Allure Jenkins Plugin
- NodeJS Plugin

In the Jenkinsfile, you can set up stages to:
- Install dependencies
- Run tests
- Generate and publish test reports

## Contributing

Feel free to fork the repository, open issues, and submit pull requests to contribute to the framework.
