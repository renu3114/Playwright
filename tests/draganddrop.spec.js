import {test , expect} from "@playwright/test"

// test("drag and drop1" , async({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")
//     let element=await page.locator("#draggable");
//     let source=await page.locator("#droppable");
//     await element.dragTo(source)
//     await page.waitForTimeout(5000)
// })

// test("drag and drop2" , async({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")
//     await page.dragAndDrop("#draggable","#droppable")
//     await page.waitForTimeout(5000)
// })

test("drag and drop3" , async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    await page.locator("#draggable").hover()
    await page.mouse.down()

    await page.locator("#droppable").hover()
    await page.mouse.up()
    
    await page.waitForTimeout(5000)
})