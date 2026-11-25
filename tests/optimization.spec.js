import{test,expect} from "@playwright/test"

let context;
let page;

test.beforeEach(async({browser})=>{

context=await browser.newContext();
page=await context.newPage();
await page.goto("https://demowebshop.tricentis.com/")
await page.getByRole("link",{name:"Log in"}).click()
await page.locator("#Email").fill("renukamani1999@gmail.com")
await page.locator("#Password").fill("Renuka@1499")
await page.getByRole("button",{name:"Log in"}).click()
})
test("books",async()=>{
await page.getlabel("Sort by").selectOption("Price: High to Low").click()
})


