# LearningPlaywrightFundamentals2x

This repository contains Playwright learning materials, practice tests, and hands-on examples for Batch 2X. It covers the fundamentals of end-to-end testing with Playwright, including locators, assertions, browser contexts, frames, keyboard interactions, and project-based exercises.

## Overview

The goal of this project is to help learners build confidence with Playwright by practicing real test scenarios in a structured way. The exercises are organized by topic and gradually increase in complexity.

## Recent Updates

This repository now includes additional practice specs for:

- static and dynamic web tables
- pagination handling
- page locator and filter-based interactions
- task-driven exercises for table automation scenarios
- advanced select dropdown and iframe interaction examples
- practical frame and select handling exercises for real-world UI testing

## Prerequisites

Before getting started, make sure you have:

- Node.js installed
- npm available on your system

## Installation

Install dependencies:

```bash
npm install
```

Install the required Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
```

Run a specific test file:

```bash
npx playwright test tests/01_Basics/229_Basic_Test.spec.ts
```

## Project Structure

- tests/ - Test files and learning modules
  - 01_Basics/ - Playwright basics
  - 02_first_tests/ - Initial test-writing exercises
  - 03_Locators_Commands/ - Locators and common commands
  - 04_Session_Storage/ - Session storage topics
  - 05_Allure_Reporting/ - Allure reporting examples
  - 06_Multiple_Element_/ - Multiple element handling
  - 07_WebTables/ - Web table interactions
  - 08_Web_Select_Frames_Iframe/ - Selects, frames, and iframes
  - 09_Frame_Iframe/ - Frame and iframe exercises
  - 10_Keyboard_Hover_Drag_Drop/ - Advanced user interactions
  - 11_JS_Alerts/ - JavaScript alert handling
  - 12_Handle_SVG/ - SVG element handling
  - 13_Shadow_DOM/ - Shadow DOM interactions
  - 14_FileUpload/ - File upload scenarios
  - 15_File_Download/ - File download scenarios
  - 16_Scroll_toElement/ - Scroll-to-element examples
  - 17_Expect_Assertions/ - Assertions and expectations
  - 18_Test_hooks/ - Test hooks and lifecycle concepts
  - 19_Data_Driven_Testing/ - Data-driven testing examples
  - 20_Page_Object_Model/ - Page Object Model patterns
  - 21_Fixture/ - Fixture-based testing
  - 22_Misc_Concepts/ - Additional concepts
  - 23_Advance_Framework/ - Advanced framework topics
  - Projects/ - Practice projects
  - example.spec.ts - Sample Playwright test
- playwright.config.ts - Playwright configuration
- package.json - Project dependencies and scripts

## Configuration Notes

The current setup includes:

- Test directory: ./tests
- Test pattern: tests/**/*.spec.ts
- Chromium as the default browser
- HTML reporting enabled
- Tracing enabled
- Headed mode enabled by default
- Default viewport: 1920x1080

## Test Reports

- HTML reports are written to the playwright-report directory.
- Allure results are stored in allure-results and can be viewed with:

```bash
npx allure serve allure-results
```

## License

ISC
