import {test , expect} from "@playwright/test"

let url = "https://demowebshop.tricentis.com/"
let email = "renukamani1999@gmail.com"
let password = "Renuka@1499"

test("Add to cart" , async({page})=>{

    await page.goto(url);
    await page.locator(".ico-login").click()
    await page.locator("#Email").fill(email);
    await page.locator("#Password").fill(password)
    await page.locator(".login-button").click()
    await page.locator('a[href="/books"]').first().click()
    await page.locator('h2 a[href="/health"]').click()
    await page.locator("#add-to-cart-button-22").click()

    let message=await page.locator(".content")
    await expect(message).toContainText("The product has been added to your")
    
    await page.locator("#topcartlink").click()
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/cart")

    let sp_message= await page.locator(".page-title")
    await expect(sp_message).toContainText("Shopping cart")

    await page.locator("#CountryId").selectOption("India")

    await page.locator("#ZipPostalCode").fill(560037)
    await page.locator("#termsofservice").check()
    await page.waitForTimeout(5000)

})