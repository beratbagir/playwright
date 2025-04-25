import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/loginPage'

test('correctLogin', async ({page})=>{


    //login
    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('example@example.com', 'example');
    await expect(page.locator("//li[1]//a[1]")).toBeVisible();
    await page.waitForTimeout(3000)
});


