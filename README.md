# LearningPlaywrightFundamentals2x

This repository contains learning materials and practice tests for Playwright fundamentals.

## Project Setup

This project uses [Playwright](https://playwright.dev/) for end-to-end testing.

### Prerequisites

- Node.js
- npm

### Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

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

- `tests/` - Test files and learning modules
  - `01_Basics/` - Playwright basics
    - `229_Basic_Test.spec.ts` - Basic Playwright test example
    - `230_Test_Annoations.spec.ts` - Test annotations and metadata
  - `02_first_tests/` - Writing your first tests
    - `231_First_Running_Verify.spec.ts` - First running and verification test
    - `232_BCP.spec.ts` - Browser Context & Page fundamentals
    - `233_BCP_MultipeContext.spec.ts` - Multiple browser contexts
    - `234_BCP_Multiple_Pages.spec.ts` - Handling multiple pages
    - `235_TEST_I_PW.spec.ts` - Introduction to Playwright testing
    - `236_BCP_TEST_PW.spec.ts` - Browser context and page tests
    - `237_BCP_Test_Options.spec.ts` - Test options and configurations
    - `Task_01_BCP.spec.ts` - Practice task for browser context and page
  - `03_Locators_Commands/` - Locators and commands
  - `04_Session_Storage/` - Session storage handling
  - `05_Allure_Reporting/` - Allure reporting integration
  - `06_Multiple_Element_/` - Handling multiple elements
  - `07_WebTables/` - Working with web tables
  - `08_Web_Select_Frames_Iframe/` - Select, frames, and iframes
  - `09_Frame_Iframe/` - Frame and iframe handling
  - `10_Keyboard_Hover_Drag_Drop/` - Keyboard, hover, drag & drop actions
  - `11_JS_Alerts/` - JavaScript alerts handling
  - `12_Handle_SVG/` - SVG element handling
  - `13_Shadow_DOM/` - Shadow DOM interactions
  - `14_FileUpload/` - File upload scenarios
  - `15_File_Download/` - File download scenarios
  - `16_Scroll_toElement/` - Scrolling to elements
  - `17_Expect_Assertions/` - Expect assertions
  - `18_Test_hooks/` - Test hooks (before/after)
  - `19_Data_Driven_Testing/` - Data-driven testing
  - `20_Page_Object_Model/` - Page Object Model pattern
  - `21_Fixture/` - Playwright fixtures
  - `22_Misc_Concepts/` - Miscellaneous concepts
  - `23_Advance_Framework/` - Advanced framework topics
  - `Projects/` - Practice projects
  - `example.spec.ts` - Sample Playwright tests against playwright.dev
- `playwright.config.ts` - Playwright configuration
- `package.json` - Project dependencies and scripts

## Configuration

The Playwright configuration includes:
- Test directory: `./tests`
- Test match pattern: `tests/**/*.spec.ts`
- Browsers: Chromium (default)
- HTML reporter enabled
- Tracing: enabled (`on`)
- Headless mode: disabled (runs in headed mode by default)
- Viewport: 1920x1080

## License

ISC
