import{test,expect}from "@playwright/test"
let user=[["bharat1234@gmail.com",'Bharat@123'],
["swapna.potnuru07@gmai.com",'Password@123'],
["himanitest@gmail.com","htest@123"],
["renukamani1999@gmail.com","Renuka@1499"],
["sontest123@gmail.com","sontest123"],
["manojrasetty2005@gmail.com","manoj@012"],
["manishmarley222gmail.com","mani1316"],
["pradeeshp034@gmail.com","pradeeshp03"]]

let url="https://demowebshop.tricentis.com/"
for(let[email , pwd]of user){

test(`login for user ${email}`, async({page})=>{
    await page.goto(url)
    await page.locator(".ico-login").click() ; 
    await page.locator("#Email").fill(email); 
    await page.locator("#Password").fill(pwd); 
    await page.locator(".login-button").click() ;
    let logout=await page.getByRole("link",{name:"Log out"})
    await expect(logout).toBeVisible();
    await page.waitForTimeout(5000); 
})
}

