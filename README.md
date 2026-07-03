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

- `tests/` - Test files
  - `example.spec.ts` - Sample Playwright tests against playwright.dev
- `playwright.config.ts` - Playwright configuration
- `package.json` - Project dependencies and scripts

## Configuration

The Playwright configuration includes:
- Test directory: `./tests`
- Browsers: Chromium, Firefox, WebKit
- HTML reporter enabled
- Tracing on first retry

## License

ISC
