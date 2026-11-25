import{test,expect} from "@playwright/test"
test("handling inner/nested",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://demo.automationtesting.in/Frames.html#google_vignette")
    await page.getByRole("link",{name:"Iframe with in an Iframe"}).click()
    let Main_Frame=await page.frame({url:"https://demo.automationtesting.in/MultipleFrames.html"})
    let Multiple_Frame=await Main_Frame.childFrames();
    let childFrame=await Multiple_Frame[0];
    await childFrame.getByRole("textbox").fill("Renuka.M")
    await childFrame.waitForTimeout(4000)
})