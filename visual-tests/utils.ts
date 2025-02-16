import type { Page } from "@playwright/test";

export const waitForRender = async (page: Page) => {
  await page
    .locator("#storybook-root > *")
    .first()
    .waitFor({ state: "attached" });
};
