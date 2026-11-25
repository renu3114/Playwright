//fixtures-->pre-defined environments
//in-built fixtures 
// a) browser fixtures and b) page fixtures

//launch browser for single tab project
import { test , expect } from "@playwright/test" ;

test("launch browser" , async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    await page.waitForTimeout(5000)
})



