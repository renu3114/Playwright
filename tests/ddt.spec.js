import{test,expect} from "@playwright/test"

let product=['book','computer','jewelry','gift card']
let url="https://demowebshop.tricentis.com/"
let email="renukamani1999@gmail.com"
let pwd="Renuka@1499"

for(let item of product){
    test(`search for product ${item}`, async({page})=>{
    await page.goto(url)
    await page.locator(".ico-login").click() ; 
    await page.locator("#Email").fill(email); 
    await page.locator("#Password").fill(pwd); 
    await page.locator(".login-button").click() ;
    await page.locator("#small-searchterms").fill(item); 
    await page.getByRole('button' , {name :"Search"}).click() ; 
    await page.waitForTimeout(5000); 
})
}
