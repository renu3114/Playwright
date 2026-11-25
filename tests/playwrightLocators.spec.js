import {test,expect} from "@playwright/test"

let url="https://demowebshop.tricentis.com/"
let mail="renukamani1999@gmail.com"
let pwd="Renuka@1499"

test("playwright locators",async({page})=>{

    await page.goto(url);
    await page.getByRole("link",{name:"Log in"}).click()
    await page.getByLabel("Email").fill(mail)
    await page.getByLabel("Password").fill(pwd)
    await page.getByRole("button",{name:"Log in"}).click()
    
    let logout=await page.getByRole("link",{name:"Log out"})
    await expect(logout).toBeVisible();    

    await page.getByRole("link",{name:"Books"}).first().click()
    await page.locator("product-item").filter({hasText:'Health Book'}).getByRole("button",{name:"Add to cart"}).click()
     
    page.waitForTimeout(3000)

    let message=await page.getByText("The product has been added to your ");
    await expect(message).toBeVisible()

    let displayMessage=await page.getByText("The product has been added to your ").textContent()
    console.log(displayMessage)
})