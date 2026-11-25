import {test,expect} from "@playwright/test"

let url="https://testautomationpractice.blogspot.com/"

test("Select multiple options",async({page})=>{

await page.goto(url)
await page.getByLabel("Colors:").selectOption(["Red","Green","Yellow"])
await page.waitForTimeout(5000)
})