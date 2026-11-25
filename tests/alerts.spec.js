import{test,expect} from"@playwright/test"
//simple alert
test("alert handling/dialog box",async({page})=>{

page.on("dialog",(dialog)=>{
dialog.accept()
})
await page.goto("https://testautomationpractice.blogspot.com/")
await page.getByRole("button",{name:"Simple Alert"}).click()
})

//confirmatiom alert
test("alert handling/dialog box",async({page})=>{

page.on("dialog",(dialog)=>{
dialog.dismiss()
})
await page.goto("https://testautomationpractice.blogspot.com/")
await page.getByRole("button",{name:"Confirmation Alert"}).click()
})

//prompt alert
test("alert handling/dialog box",async({page})=>{

page.on("dialog",(dialog)=>{
dialog.accept("Renuka")
})
await page.goto("https://testautomationpractice.blogspot.com/")
await page.getByRole("button",{name:"Prompt Alert"}).click()
let promptMSG=await page.locator("#demo")
await expect(promptMSG).toHaveText("Hello Renuka! How are you today?")
})



