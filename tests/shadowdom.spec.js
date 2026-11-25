import {test,expect} from "@playwright/test"

test("shadow dome",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole("button",{name:"Choose File"}).last().setInputFiles("tests/Offer_Letter.pdf")
    await page.waitForTimeout(5000)
})