import { test, expect, request } from "@playwright/test";
import { waitForRender } from "./utils";

test.beforeEach(async ({}, testInfo) => {
  testInfo.snapshotSuffix = "";
});

const apiContext = await request.newContext();
const response = await apiContext.get("http://localhost:6006/index.json");
const allTests = await response.json();
const testNames = Object.keys(allTests.entries).filter(
  (test) => !test.includes("mainbankpage")
);

for (const testName of testNames) {
  test(`${allTests.entries[testName].title} ${allTests.entries[testName].name}`, async ({
    page,
  }) => {
    const params = new URLSearchParams({
      id: testName,
      viewMode: "story",
      nav: "0",
    });

    await page.goto(`http://localhost:6006/iframe.html?${params.toString()}`);
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.addStyleTag({
      content: `
              * {
                animation: none !important;
                transition: none !important;
              }
        `,
    });
    await waitForRender(page);

    await expect(page).toHaveScreenshot();
  });
}
