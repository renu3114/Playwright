import{test,expect} from "@playwright/test"

// test("frame",async({browser})=>{

//     let context=await browser.newContext()
//     let page=await context.newPage()

//     await page.goto("https://ui.vision/demo/iframes")
//     let frame1=await page.frame({url:"https://docs.google.com/forms/d/e/1FAIpQLScP-K8zi-9ar0MCq93D3VIFhegSNPveBfdLqiMfTYR9Q1iSKQ/viewform?embedded=true"})

//     await frame1.locator(".Id5V1").first().click()
//     await page.waitForTimeout(5000)

// })

test("frame",async({browser})=>{

    let context=await browser.newContext()
    let page=await context.newPage()

    await page.goto("https://demo.automationtesting.in/Frames.html#google_vignette")
    let frame1=await page.frame({url:"https://demo.automationtesting.in/SingleFrame.html"})

    await frame1.locator('input[type="text"]').fill("Renuka M")
    await page.waitForTimeout(5000)

})