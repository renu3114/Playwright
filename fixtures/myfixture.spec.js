const {test : Base} = require("@playwright/test")

export const test = Base.extend({
    webPage : async({page} , use)=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await page.getByRole("link",{name:"Log in"}).click()
    await page.getByLabel("Email:").fill("renukamani1999@gmail.com")
    await page.getByLabel("Password:").fill("Renuka@1499")
    await page.getByRole("button",{name:"Log in"}).click()
    await use(page)
    await console.log("test completed") //tear down
    }
})