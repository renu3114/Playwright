import {test,expect} from "@playwright/test"

let url="https://testautomationpractice.blogspot.com/"

test("playwright loc",async({page})=>{

    await page.getByPlaceholder("Enter Name").fill("Renuka M");
    await page.getByPlaceholder("Enter EMail").fill("renukamani1999@gmail.com");
    await page.getByPlaceholder("Enter Phone").fill("9663331968")
    await page.getByLabel("Address:").fill("#274 ,/1 sector A , sri mookambika nilayam , ramaiah reddy colony , basavanagar ,  b'lore-560037")
})