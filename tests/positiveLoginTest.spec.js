import {test , expect} from "@playwright/test";

test("PositiveLoginTest" , async({page})=>{

await page.goto("https://practicetestautomation.com/practice-test-login/")
await page.locator("#username").fill("student")
await page.locator("#password").fill("Password123")
await page.locator("#submit").click()
await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/");

let message=await page.locator(".post-title")
await expect(message).toContainText("Successfully")

let logout=await page.locator(".wp-block-button__link")
await expect(logout).toBeVisible()
})