# LearningPlaywrightFundamentals2x

This repository contains Playwright learning material, practice tests, and hands-on examples for Batch 2X. It is designed to help learners build confidence with end-to-end testing using real-world scenarios covering locators, assertions, frames, dropdowns, tables, alerts, uploads, downloads, and reporting.

## Overview

The goal of this project is to provide a structured set of Playwright exercises that gradually increase in complexity. The test suite is organized by topic so learners can practice one concept at a time and build up to more advanced automation flows.

## Recent Updates

- Added practical SVG interaction examples in [tests/12_Handle_SVG/271_SVG.spec.ts](tests/12_Handle_SVG/271_SVG.spec.ts) and [tests/12_Handle_SVG/273_Advance_SVG.spec.ts](tests/12_Handle_SVG/273_Advance_SVG.spec.ts) for locating and interacting with SVG-based elements.
- Added shadow DOM practice coverage in [tests/13_Shadow_DOM/274_Shadow_DOM.spec.ts](tests/13_Shadow_DOM/274_Shadow_DOM.spec.ts).
- Added file upload exercises in [tests/14_FileUpload/275_File_Upload.spec.ts](tests/14_FileUpload/275_File_Upload.spec.ts) and [tests/14_FileUpload/276_Multiple_File_Upload.spec.ts](tests/14_FileUpload/276_Multiple_File_Upload.spec.ts).
- Added file download and scroll-to-element practice in [tests/15_File_Download/277_File_Download.spec.ts](tests/15_File_Download/277_File_Download.spec.ts), [tests/15_File_Download/Task_Upload_Download.spec.ts](tests/15_File_Download/Task_Upload_Download.spec.ts), and [tests/16_Scroll_toElement/278_ScrollToView.spec.ts](tests/16_Scroll_toElement/278_ScrollToView.spec.ts).
- Added multiple expect/assertion practice files under [tests/17_Expect_Assertions/](tests/17_Expect_Assertions/) including the interview-oriented cheatsheet in [tests/17_Expect_Assertions/283_Expect.cheatsheet.md](tests/17_Expect_Assertions/283_Expect.cheatsheet.md).
- Added Playwright hook and suite organization examples in [tests/18_Test_hooks/284_Test_Hook.spec.ts](tests/18_Test_hooks/284_Test_Hook.spec.ts), [tests/18_Test_hooks/286_Test_Hook_Cheatsheet.md](tests/18_Test_hooks/286_Test_Hook_Cheatsheet.md), [tests/18_Test_hooks/287_Group.spec.ts](tests/18_Test_hooks/287_Group.spec.ts), [tests/18_Test_hooks/288_Before_After.spec.ts](tests/18_Test_hooks/288_Before_After.spec.ts), [tests/18_Test_hooks/289_TestDescribe.spec.ts](tests/18_Test_hooks/289_TestDescribe.spec.ts), and [tests/18_Test_hooks/290_TestPriority.spec.ts](tests/18_Test_hooks/290_TestPriority.spec.ts).
- Expanded the learning notes to cover local test execution, browser setup, and report viewing for both HTML and Allure outputs.

## Shadow DOM Practice

A dedicated shadow DOM exercise is available in [tests/13_Shadow_DOM/274_Shadow_DOM.spec.ts](tests/13_Shadow_DOM/274_Shadow_DOM.spec.ts). Run it with:

```bash
npx playwright test tests/13_Shadow_DOM/274_Shadow_DOM.spec.ts
```

## File Upload Practice

The file-upload exercises now include both single-file and multi-file scenarios:

- Single-file upload flow in [tests/14_FileUpload/275_File_Upload.spec.ts](tests/14_FileUpload/275_File_Upload.spec.ts)
- Multiple-file upload flow in [tests/14_FileUpload/276_Multiple_File_Upload.spec.ts](tests/14_FileUpload/276_Multiple_File_Upload.spec.ts)

Run them directly with:

```bash
npx playwright test tests/14_FileUpload/275_File_Upload.spec.ts
npx playwright test tests/14_FileUpload/276_Multiple_File_Upload.spec.ts
```

## What's Included

Recent additions cover:

- static and dynamic web tables
- pagination and filtering interactions
- advanced select dropdown handling, including searchable and async select examples
- frame and iframe automation examples
- keyboard, hover, and drag-and-drop exercises
- context-menu handling and advanced drag-and-drop flows
- JavaScript alert, confirm, and prompt handling
- file upload and download scenarios
- assertion and expectation practice
- test hooks, grouping, and priority workflows
- HTML and Allure reporting examples
- SVG element interaction examples

The current practice suite includes advanced select-box interactions in `tests/08_Web_Select_Frames_Iframe/261_Advance_Select_Pro.spec.ts`, iframe and frames exercises under `tests/09_Frame_Iframe/`, keyboard, hover, drag-and-drop, and context-menu exercises under `tests/10_Keyboard_Hover_Drag_Drop/`, JavaScript dialog exercises in `tests/11_JS_Alerts/270_JS.spec.ts`, SVG handling examples in `tests/12_Handle_SVG/`, shadow DOM practice in `tests/13_Shadow_DOM/274_Shadow_DOM.spec.ts`, file upload scenarios in `tests/14_FileUpload/`, file download and upload tasks in `tests/15_File_Download/`, assertion examples in `tests/17_Expect_Assertions/`, and hook-focused learning exercises in `tests/18_Test_hooks/`.

## Prerequisites

Before getting started, make sure you have:

- Node.js 18 or newer
- npm available on your system

## Installation

Install project dependencies:

```bash
npm install
```

Install the required Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run the full suite:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific browser project:

```bash
npx playwright test --project=chromium
```

Run a single spec file:

```bash
npx playwright test tests/08_Web_Select_Frames_Iframe/261_Advance_Select_Pro.spec.ts
```

Run the dropdown exercises:

```bash
npx playwright test tests/08_Web_Select_Frames_Iframe/Task01_DropDown.spec.ts tests/08_Web_Select_Frames_Iframe/Task02_DropDown.spec.ts
```

Run the iframe exercises:

```bash
npx playwright test tests/09_Frame_Iframe
```

Run a specific data-driven test file:

```bash
npx playwright test tests/19_Data_Driven_Testing/298_JSON_DDT.spec.ts
```

Run a YAML-driven data-driven test example:

```bash
npx playwright test tests/19_Data_Driven_Testing/299_DDT_YAML.spec.ts
```

Run the keyboard and pointer-interaction exercises:

```bash
npx playwright test tests/10_Keyboard_Hover_Drag_Drop
```

Run the JavaScript alert exercises:

```bash
npx playwright test tests/11_JS_Alerts/270_JS.spec.ts
```

Run the hover and SVG exercises:

```bash
npx playwright test tests/10_Keyboard_Hover_Drag_Drop/Task01_HoverOverPage.spec.ts tests/12_Handle_SVG/271_SVG.spec.ts
```

Run the expectation and hook practice suites:

```bash
npx playwright test tests/17_Expect_Assertions
npx playwright test tests/18_Test_hooks
```

Run the tagged hook-priority examples from PowerShell using a quoted tag filter:

```powershell
npx playwright test --grep '@p2'
```

This avoids PowerShell treating `@p2` as a variable expression and keeps the tag literal so Playwright can match the test correctly.

## Working with Dynamic Dropdowns

The dropdown exercises demonstrate a reliable sequence for searchable fields:

1. Locate the field using a stable attribute such as `data-testid` or `aria-label`.
2. Click the field container and fill its descendant input.
3. Select the exact matching suggestion from the dynamically rendered list.

For example, the IndiGo exercise uses `[aria-label='sourceCity  Empty']` as the field container. A selector such as `sourceCity  Empty` is interpreted as a CSS selector and does not target that attribute, which causes Playwright to wait until the test timeout.

Some travel sites use bot protection, region-specific content, or unstable HTTP/2 connections. If navigation fails with `ERR_HTTP2_PROTOCOL_ERROR`, retry the test and check the site in a normal browser. This is generally a browser, network, or remote-server issue rather than a dropdown-locator issue.

## Project Structure

- tests/ - Playwright test modules and learning exercises
- playwright.config.ts - Playwright configuration
- package.json - Project dependencies and scripts
- allure-results/ - Allure test result output
- playwright-report/ - HTML report output

## Reporting

HTML reports can be viewed with:

```bash
npx playwright show-report
```

Allure results can be served locally with:

```bash
npx allure serve allure-results
```

## Notes

The current configuration includes Chromium as the default browser, HTML reporting, tracing, and a default viewport of 1920x1080.

## License

ISC
