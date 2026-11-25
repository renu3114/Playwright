import {test , expect} from "@playwright/test"

test("login button visible or not" , async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator(".ico-login").click()
    await page.locator("#Email").fill("renukamani1999@gmail.com")
    await page.locator("#Password").fill("Renuka@1499")
    await page.locator(".login-button").click()

    let logout_btn = await page.locator(".ico-logout")
    await expect(logout_btn).toBeVisible();
})