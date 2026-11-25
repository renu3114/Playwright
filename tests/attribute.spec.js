import {test , expect} from "@playwright/test"

test("attribute test cases" , async({page})=>{

 await page.goto("https://demowebshop.tricentis.com/")
 await page.locator(".ico-login").click()
 await page.locator("#Email").fill("renukamani1999@gmail.com")
 await page.locator("#Password").fill("Renuka@1499")
 await page.locator(".ico-login").click()

 await page.locator('a[href="/books"]').first().click();

 await page.locator("#products-orderby").selectOption("Price: High to Low");
 

 await page.locator("#products-pagesize").selectOption("12");
 await page.locator("#products-viewmode").selectOption("List");
 await page.waitForTimeout(3000);
})