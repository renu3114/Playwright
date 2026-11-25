import {test , expect} from "@playwright/test"

test("Error message displayed" , async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator(".ico-login").click()
    await page.locator("#Email").fill("renukamani1999@gmail.com")
    await page.locator("#Password").fill("abc")
    await page.locator(".login-button").click()

    let errorMessage = await page.locator(".validation-summary-errors")
    await expect(errorMessage).toContainText("The credentials provided are incorrect")
})