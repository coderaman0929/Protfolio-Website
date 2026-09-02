import { test, expect } from "@playwright/test";

test.describe("Portfolio Home E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("loads homepage and displays Hero section", async ({ page }) => {
    await expect(page).toHaveTitle(/Aman Soni/i);
    await expect(page.getByText("Available for new projects")).toBeVisible();
    await expect(page.getByRole("heading", { name: /I Build AI Agents/i })).toBeVisible();
  });

  test("navigation items jump to target sections", async ({ page }) => {
    const aboutLink = page.getByRole("button", { name: "About" }).first();
    await aboutLink.click();
    await expect(page.locator("#about")).toBeVisible();

    const projectsLink = page.getByRole("button", { name: "Projects" }).first();
    await projectsLink.click();
    await expect(page.locator("#projects")).toBeVisible();

    const contactLink = page.getByRole("button", { name: "Contact" }).first();
    await contactLink.click();
    await expect(page.locator("#contact")).toBeVisible();
  });

  test("health check API returns healthy status", async ({ request }) => {
    const response = await request.get("/api/health");
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.status).toBe("healthy");
    expect(body.service).toBe("portfolio-2026");
  });

  test("contact form validation works", async ({ page }) => {
    await page.goto("/#contact");
    const submitBtn = page.getByRole("button", { name: /send message/i });
    await submitBtn.click();
    await expect(page.getByText("Name is required")).toBeVisible();
    await expect(page.getByText("Email is required")).toBeVisible();
  });
});
