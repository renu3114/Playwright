import {test , expect} from "@playwright/test"

test("Negative username test" , async({page})=>{

 await page.goto("https://practicetestautomation.com/practice-test-login/")
 await page.locator("#username").fill("incorrectUser ")
 await page.locator("#password").fill("Password123")
 await page.locator("#submit").click()
 
 let errorMessage = await page.locator("#error")
 await expect(errorMessage).toBeVisible()

 let error = await page.locator(".show")
 await expect(error).toHaveText("Your username is invalid!");
})