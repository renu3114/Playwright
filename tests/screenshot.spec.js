import {test,expect} from "@playwright/test"

let url="https://demowebshop.tricentis.com/"


test("visible screen's screenshot ",async({page})=>{

await page.goto(url)
await page.screenshot({path:"screen.png"})
await page.waitForTimeout(5000)
})

// test("entire page's screenshot ",async({page})=>{

// await page.goto(url)
// await page.screenshot({path:"screen1.png",fullPage:true})
// await page.waitForTimeout(5000)
// })

// test("particular ele's screenshot ",async({page})=>{

// await page.goto(url)
// await page.getByRole("img",{name:"Tricentis Demo Web Shop"}).screenshot({path:"screenshots/demowebshop"})
// await page.waitForTimeout(5000)
// })

// test("particular ele's screenshot ",async({page})=>{

// await page.goto("https://testautomationpractice.blogspot.com/")
// await page.getByRole("img",{name:"Automation Testing Practice"}).screenshot({path:"screenshots/automation"})
// await page.waitForTimeout(5000)
// })

