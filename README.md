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

## Project Structure

- `tests/` - Test files and learning modules
  - `01_Basics/` - Playwright basics
  - `02_first_tests/` - Writing your first tests
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
- Browsers: Chromium (default)
- HTML reporter enabled
- Tracing on first retry

## License

ISC
