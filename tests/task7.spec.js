import { test , expect} from "@playwright/test" ;


let url = "https://rahulshettyacademy.com/client/#/auth/login"
let email = "hsbharat2103@gmail.com"
let pwd = "Jaggu@2103"


test("task5" , async({page})=>{
    await page.goto(url);
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill(pwd) ;
    await page.locator("#login").click() ;
   
    //assert 1
    let signOut = await page.locator(".btn-custom").last() ;
    await expect(signOut).toBeVisible() ;


    //add zaracoat 3 to cart
    await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).locator(".w-10").click() ;
    let confirmationMessage = await page.locator(".toast-container");
    await expect(confirmationMessage).toBeVisible() ;


    await page.locator('button[routerlink="/dashboard/cart"]').click() ;
    await page.locator('.btn-primary').last().click() ;


    await page.locator(".ddl").first().selectOption("03");
    await page.locator(".ddl").last().selectOption("21") ;


    await page.locator('input[placeholder="Select Country"]').pressSequentially("india")
    await page.locator('.ta-item').last().click() ;
    await page.waitForTimeout(3000);
})
