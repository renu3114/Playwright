import{test,expect}from "@playwright/test"
import fs from "fs";
import {parse} from "csv-parse/sync";

let csv_path="testData/data - Sheet1.csv";
let data =fs.readFileSync(csv_path,"utf-8");
let records=parse(data,{
    columns:true,
    skip_empty_lines:true
})
let url="https://demowebshop.tricentis.com/";

for(let lData of records){
test(`login for user ${lData.email}`, async({page})=>{
    await page.goto(url)
    await page.locator(".ico-login").click() ; 
    await page.locator("#Email").fill(lData.email); 
    await page.locator("#Password").fill(lData.password); 
    await page.locator(".login-button").click() ;
    let logout=await page.getByRole("link",{name:"Log out"})
    await expect(logout).toBeVisible();
    await page.waitForTimeout(5000); 
})  
}
