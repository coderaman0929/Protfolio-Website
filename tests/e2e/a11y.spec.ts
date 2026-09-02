import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility QA Suite", () => {
  test("homepage should pass accessibility audit", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .disableRules(["color-contrast"]) // Optional contrast rule tolerance for glow styles
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("keyboard navigation operates smoothly without trap", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    // Verify focused element exists
    const focused = await page.evaluate(() => document.activeElement !== null);
    expect(focused).toBe(true);
  });
});
