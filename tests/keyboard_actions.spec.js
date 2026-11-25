import{test,expect} from "@playwright/test"

test("keyboard events",async({page})=>{

await page.goto("https://demoqa.com/automation-practice-form");
await page.getByPlaceholder("First Name").fill("Renuka");
await page.keyboard.press("Control+A");
await page.keyboard.press("Control+C");
await page.keyboard.press("Tab");
await page.keyboard.press("Control+V")
await page.waitForTimeout(5000);
})