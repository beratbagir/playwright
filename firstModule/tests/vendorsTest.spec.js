import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { Vendors } from '../pages/vendors'
import { CommonUtil } from '../Common/CommonUtil'

//filtrelerin bir kısmı bulunmamaktadır.

//yardımcı fonksiyon
async function loginToApp(page) {
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('example@example.com', 'example')
}

test('vendorSearchFilterTest', async({page})=> {
    await loginToApp(page)
    const vendorSearchFilter = new Vendors(page)
    await vendorSearchFilter.vendorSearchFilter()
    const commonutil = new CommonUtil(page)
    const locator = "//div[contains(text(),'example')]"
    const locator2="//div[normalize-space()='example']"
    await commonutil.expectElementNotVisible(locator)
    await commonutil.expectElementVisible(locator2)
})

test('createVendorTest', async({page})=> {
    await loginToApp(page)
    const vendorCreate = new Vendors(page)
    await vendorCreate.vendorCreate()
    const commonutil = new CommonUtil(page)
    const locator = "//span[@class='example']"
    await commonutil.expectElementVisible(locator)
})

test('vendorsEditTest', async({page})=> {
    await loginToApp(page)
    const vendorEdit = new Vendors(page)
    await vendorEdit.vendorEdit()
    const commonutil = new CommonUtil(page)
    const locator = "//span[@class='example']"
    await commonutil.expectElementVisible(locator)
})

test('vendorDeleteTest', async({page})=> {
    await loginToApp(page)
    const vendorDelete = new Vendors(page)
    await vendorDelete.vendorDelete()
    const commonutil = new CommonUtil(page)
    const locator = "//span[@class='example']"
    await commonutil.expectElementVisible(locator)
})


