import {test , expect} from "@playwright/test"

test("drop_down" , async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator("#country").selectOption("India");
await page.waitForTimeout(5000)

})