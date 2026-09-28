# Getting Started

## Purpose

This project contains automated tests for the Automation Exercise website using Playwright and TypeScript.

The test suite includes UI tests for:

- Test Case 14 - Place Order: Register while Checkout
- Test Case 15 - Place Order: Register before Checkout

## Getting the Latest Code

Clone the repository:

git clone https://github.com/natalie-horne/automation-testing-exercise.git

Navigate into the project directory:

cd automation-testing-exercise

If the repository has already been cloned, get the latest changes using:

git pull

## Setting Up the Environment

Node.js and npm are required to run the project.

Install the project dependencies:

npm install

Install the Playwright browsers:

npx playwright install

## Running the Tests

Run all Playwright tests:

npx playwright test

Run the two UI test cases:

npx playwright test tests/test-case-14.spec.ts tests/test-case-15.spec.ts

To run a test with the browser visible, use:

npx playwright test tests/test-case-14.spec.ts --headed

To check the TypeScript code for errors:

npx tsc --noEmit

## Additional Details

The tests run using Chromium.

The tests use Page Objects to keep the test steps separate from the code that interacts with each page.

Faker creates different user details each time the tests run, rather than using the same fixed details.

I added a helper to block known advertising content because some ads were appearing unexpectedly and interfering with the automated tests.

The UI tests run one test at a time because I found the shared test website became less reliable when multiple end-to-end tests were run in parallel.

I spent four hours on the exercise. In that time I focused on setting up the framework, completing and stabilising the two UI tests, creating reusable Page Objects and test data, and making the tests reliable. I did not complete the requested API tests within this time.

---

## Links

[README](README.md) | [EXERCISE](EXERCISE.md) | [ISSUES](ISSUES.md) | [FEEDBACK](FEEDBACK.md)