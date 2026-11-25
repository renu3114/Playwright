import{test,expect} from"@playwright/test"

test("task one",async({page})=>{

    await page.goto("http://automationexercise.com")
    await page.locator("a[href$='/login']").click()
    await page.getByPlaceholder("Email Address").first().fill("renukamani1999@gmail.com")
    await page.getByPlaceholder("Password").first().fill("Renuka@1499");
    await page.getByRole("button",{name:"Login"}).click();

    //check home tab is visible after login #assertion

    let home=await page.locator('li a[href="/"]');
    await expect(home).toBeVisible();

    await page.locator('a[data-product-id="1"]').first().click()
    await page.locator('a[data-product-id="2"]').first().click()

    await page.locator('a[href="/view_cart"]').click()

    await expect(page).toHaveURL("https://automationexercise.com/view_cart")

    await page.getByRole("button",{name:"Proceed To Checkout"}).click()
    await page.locator("")


    //how to verify address details
})
