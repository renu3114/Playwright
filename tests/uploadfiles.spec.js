import {test,expect} from "@playwright/test"

let url="https://testautomationpractice.blogspot.com/"

test("upload single ",async({page})=>{

await page.goto(url)
await page.locator("#singleFileInput").setInputFiles(["tests/Renuka.M_Resume_1.pdf"])
await page.waitForTimeout(5000)
})

test("upload multiple files ",async({page})=>{

await page.goto(url)
await page.locator("#multipleFilesInput").setInputFiles(["tests/Renuka.M_Resume_1.pdf","tests/Offer_Letter.pdf"])
await page.waitForTimeout(5000)
})

