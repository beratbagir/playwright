import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { Airports } from '../pages/airports'
import { CommonUtil } from '../Common/CommonUtil'

//filtrelerin bir kısmı bulunmamaktadır.

//yardımcı fonksiyon
async function loginToApp(page) {
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('example@example.com', 'example')
}

test('createAirportTest', async({page})=>{
    await loginToApp(page)
    const createAirports = new Airports(page)
    await createAirports.createAirports()
    const commonutil = new CommonUtil(page)
    const locator = "//span[@class='example']"
    await commonutil.expectElementVisible(locator)
})

test('editAirportsTest', async({page})=>{
    await loginToApp(page)
    const editAirports = new Airports(page)
    await editAirports.editAirports()
    const commonutil = new CommonUtil(page)
    const locator1 = "//div[normalize-space()='renameOtomasyon']"
    const locator2 = "//div[normalize-space()='12345']"
    await commonutil.expectElementVisible(locator1)
    await commonutil.expectElementVisible(locator2)
})

test('deleteAirportTest', async({page})=> {
    await loginToApp(page)
    const deleteAirports = new Airports(page)
    await deleteAirports.deleteAirports()
    const commonutil = new CommonUtil(page)
    const locator = "//div[normalize-space()='example']"
    await commonutil.expectElementNotVisible(locator)
})

test('airportsSearchFilterTest', async({page})=>{
    await loginToApp(page)
    const searchFilter = new Airports(page)
    await searchFilter.searchFilter()
    const commonutil = new CommonUtil(page)
    const locator = "//div[normalize-space()='Example']"
    await commonutil.expectElementVisible(locator)
})
