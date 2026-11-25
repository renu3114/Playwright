import{test,expect} from "@playwright/test"
test.describe("group1",()=>{
test("double_click" , async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator('button[ondblclick="myFunction1()"]').dblclick();
await page.waitForTimeout(5000)
})

})
test.describe("group2",()=>{
test("drop_down" , async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator("#country").selectOption("India");
await page.waitForTimeout(5000)
})
test("playwright loc",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
await page.getByPlaceholder("Enter Name").fill("Renuka M");
await page.getByPlaceholder("Enter EMail").fill("renukamani1999@gmail.com");
await page.getByPlaceholder("Enter Phone").fill("9663331968")
await page.getByLabel("Address:").fill("#274 ,/1 sector A , sri mookambika nilayam , ramaiah reddy colony , basavanagar ,  b'lore-560037")
})
})

