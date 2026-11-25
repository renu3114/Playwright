import{test,expect} from "@playwright/test";
import fs from "fs"

let jsonPath="testData/data.json"
let loginData=JSON.parse(fs.readFileSync(jsonPath,'utf-8'));
let url="https://demowebshop.tricentis.com/"

for(let{email,pwd}of loginData){
test(`login for user ${email}`, async({page})=>{
    await page.goto(url)
    await page.locator(".ico-login").click() ; 
    await page.locator("#Email").fill(email); 
    await page.locator("#Password").fill(pwd); 
    await page.locator(".login-button").click() ;
    let logout=await page.getByRole("link",{name:"Log out"})
    await expect(logout).toBeVisible();
    await page.waitForTimeout(5000); 
}) 
}