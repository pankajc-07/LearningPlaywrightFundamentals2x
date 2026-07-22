# LearningPlaywrightFundamentals2x

This repository contains Playwright learning material, practice tests, and hands-on examples for Batch 2X. It is designed to help learners build confidence with end-to-end testing using real-world scenarios covering locators, assertions, frames, dropdowns, tables, alerts, uploads, downloads, and reporting.

## Overview

The goal of this project is to provide a structured set of Playwright exercises that gradually increase in complexity. The test suite is organized by topic so learners can practice one concept at a time and build up to more advanced automation flows.

## What's Included

Recent additions cover:

- static and dynamic web tables
- pagination and filtering interactions
- advanced select dropdown handling, including searchable and async select examples
- frame and iframe automation examples
- keyboard, hover, and drag-and-drop exercises
- context-menu handling and advanced drag-and-drop flows
- file upload and download scenarios
- HTML and Allure reporting examples

The current practice suite includes advanced select-box interactions in `tests/08_Web_Select_Frames_Iframe/261_Advance_Select_Pro.spec.ts`, iframe and frames exercises under `tests/09_Frame_Iframe/`, and keyboard, hover, drag-and-drop, and context-menu exercises under `tests/10_Keyboard_Hover_Drag_Drop/`.

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

Run the keyboard and pointer-interaction exercises:

```bash
npx playwright test tests/10_Keyboard_Hover_Drag_Drop
```

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
