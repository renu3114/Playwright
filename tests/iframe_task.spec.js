import{test,expect} from "@playwright/test"
test("handling iframe_task.spec.js",async({browser})=>{

    let context=await browser.newContext()
    let page=await context.newPage()

    await page.goto("https://vinothqaacademy.com/iframe/")
    let Frame1=await page.frameLocator('iframe[title="Registration Form"]')
    await Frame1.locator("#vfb-5").fill("Renuka M")
    //await Frame1.locator("#vfb-18").click()
    //await Frame1.locator("#ui-datepicker-div").selectOption("11")
    await Frame1.waitForTimeout(5000)
})