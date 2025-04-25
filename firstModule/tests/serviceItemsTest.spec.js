import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { ServiceItems } from '../pages/serviceItems'
import { CommonUtil } from '../Common/CommonUtil'

//filtrelerin bir kısmı bulunmamaktadır.

//yardımcı fonksiyon
async function loginToApp(page) {
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('example@example.com', 'example')
}

test('serviceItemsPageTest', async({page})=> {
    await loginToApp(page)
    const serviceItemspage = new ServiceItems(page)
    await serviceItemspage.serviceItemsPage()
    const commonutil = new CommonUtil(page)
    const locator = "//span[contains(@class,'font-medium text-6')]"
    await commonutil.expectElementContainsText(locator, 'Example Items')
})

test('searchFilterTest', async({page})=> {
    await loginToApp(page)
    const searchFilter = new ServiceItems(page)
    await searchFilter.searchFilter()
    const commonutil = new CommonUtil(page)
    const locator = "//div[normalize-space()='Example']"
    await commonutil.expectElementNotVisible(locator)
})

test('createServiceItemsTest', async ({page})=> {
    await loginToApp(page)
    const createServiceItems = new ServiceItems(page)
    await createServiceItems.createServiceItems()
    const commonutil = new CommonUtil(page)
    const locator = "//span[@class='mt-1']"
    await commonutil.expectElementVisible(locator)
})

test('editServiceItemsTest', async({page})=> {
    await loginToApp(page)
    const editServiceItems = new ServiceItems(page)
    await editServiceItems.editServiceItems()
    const commonutil = new CommonUtil(page)
    const locator = "//span[@class='example']"
    await commonutil.expectElementVisible(locator)
})

test('deleteServiceItemsTest', async({page})=> {
    await loginToApp(page)
    const deleteServiceItems = new ServiceItems(page)
    await deleteServiceItems.deleteServiceItems()
    const commonutil = new CommonUtil(page)
    const locator = "//span[@class='example']"
    await commonutil.expectElementVisible(locator)
})