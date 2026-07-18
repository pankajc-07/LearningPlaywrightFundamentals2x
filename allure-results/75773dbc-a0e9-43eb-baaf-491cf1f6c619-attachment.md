# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\253_WebTable_Dynamic.spec.ts >> How to Handle web tables
- Location: tests\07_WebTables\253_WebTable_Dynamic.spec.ts:21:1

# Error details

```
TypeError: rows01.nth is not a function
```

# Page snapshot

```yaml
- table "Sample Table" [ref=e2]:
  - rowgroup [ref=e3]:
    - row "Structure Country City Height Built Rank â€¦" [ref=e4]:
      - columnheader "Structure" [ref=e5]
      - columnheader "Country" [ref=e6]
      - columnheader "City" [ref=e7]
      - columnheader "Height" [ref=e8]
      - columnheader "Built" [ref=e9]
      - columnheader "Rank" [ref=e10]
      - columnheader "â€¦" [ref=e11]
  - rowgroup [ref=e12]:
    - row "Total 4 buildings" [ref=e13]:
      - rowheader "Total" [ref=e14]
      - cell "4 buildings" [ref=e15]
  - rowgroup [ref=e16]:
    - row "Burj Khalifa UAE Dubai 829m 2010 1" [ref=e17]:
      - rowheader "Burj Khalifa" [ref=e18]
      - cell "UAE" [ref=e19]
      - cell "Dubai" [ref=e20]
      - cell "829m" [ref=e21]
      - cell "2010" [ref=e22]
      - cell "1" [ref=e23]
      - cell [ref=e24]
    - row "Clock Tower Hotel Saudi Arabia Mecca 601m 2012 2" [ref=e25]:
      - rowheader "Clock Tower Hotel" [ref=e26]
      - cell "Saudi Arabia" [ref=e27]
      - cell "Mecca" [ref=e28]
      - cell "601m" [ref=e29]
      - cell "2012" [ref=e30]
      - cell "2" [ref=e31]
      - cell [ref=e32]
    - row "Taipei 101 Taiwan Taipei 509m 2004 3" [ref=e33]:
      - rowheader "Taipei 101" [ref=e34]
      - cell "Taiwan" [ref=e35]
      - cell "Taipei" [ref=e36]
      - cell "509m" [ref=e37]
      - cell "2004" [ref=e38]
      - cell "3" [ref=e39]
      - cell [ref=e40]
    - row "Financial Center China Shanghai 492m 2008 4" [ref=e41]:
      - rowheader "Financial Center" [ref=e42]
      - cell "China" [ref=e43]
      - cell "Shanghai" [ref=e44]
      - cell "492m" [ref=e45]
      - cell "2008" [ref=e46]
      - cell "4" [ref=e47]
      - cell [ref=e48]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Web Table Tests', () => {
  4  | 
  5  |     test('test_web_table_login - structured extraction', async ({ page }) => {
  6  |         await page.goto('https://awesomeqa.com/webtable1.html');
  7  | 
  8  |         const rows = page.locator('table[summary="Sample Table"] tbody tr');
  9  |         const rowCount = await rows.count();
  10 |         console.log(rowCount);
  11 | 
  12 |         for (let i = 0; i <= rowCount; i++) {
  13 |             const rowData = await rows.nth(i).locator('td').allInnerTexts();
  14 |             console.log(`Row ${i + 1}:`, rowData);
  15 |         }
  16 |     })
  17 | });
  18 | 
  19 | //Practice examples 
  20 | console.log("Example number 01 ");
  21 | test('How to Handle web tables', async ({ page }) => {
  22 |     await page.goto("https://awesomeqa.com/webtable1.html");
  23 | 
  24 |     const rows01 = await page.locator("//table[@summary='Sample Table']/tbody/tr").count()
  25 |     console.log(rows01);
  26 | 
  27 |     for (let i = 0; i <= rows01; i++) {
> 28 |         const rowData01 = await rows01.nth(i).locator('td').allInnerTexts();
     |                                        ^ TypeError: rows01.nth is not a function
  29 |         console.log(`Row ${i + 1}:`, rowData01);
  30 | 
  31 | 
  32 |     }
  33 | 
  34 | })
```