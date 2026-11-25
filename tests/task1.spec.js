import {test , expect} from "@playwright/test"

test ("check url is present" , async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator(".ico-login").click();
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/login")
})