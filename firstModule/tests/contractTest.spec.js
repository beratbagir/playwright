import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { Contracts } from '../pages/contracts'
import { CommonUtil } from '../Common/CommonUtil'

//filtrelerin bir kısmı bulunmamaktadır.

//yardımcı fonksiyon
async function loginToApp(page) {
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('example@example.com', 'example')
}

test('contractsPageTest', async({page})=>{
    await loginToApp(page)
    const contractsPage = new Contracts(page)
    await contractsPage.contractsPage()
    const commonutil = new CommonUtil(page)
    const locator = "span[class='example']"
    await commonutil.expectElementContainsText(locator, "example")
})

test('contractSearchFilterTest', async({page})=> {
    await loginToApp(page)
    const contractsSearchFilter = new Contracts(page)
    await contractsSearchFilter.contractsSearchFilter()
    const commonutil = new CommonUtil(page)
    const locator = "//div[normalize-space()='example']"
    const second = "//div[normalize-space()='example']"
    await commonutil.expectElementContainsText(locator, 'example')
    await commonutil.expectElementNotVisible(second)
})

test('createContractTest', async({page})=> {
    await loginToApp(page)
    const createContract = new Contracts(page)
    await createContract.createContract()
    const commonutil = new CommonUtil(page)
    const locator = "example-locator"
    await commonutil.expectElementVisible(locator)
})

test('deleteContractTest', async({page})=> {
    await loginToApp(page)
    const deleteContract = new Contracts(page)
    await deleteContract.deleteContract()
    const commonutil = new CommonUtil(page)
    const locator = "//span[@class='example']"
    await commonutil.expectElementContainsText(locator, "Successfully")
})

test('contractItemsPageTest', async({page})=> {
    await loginToApp(page)
    const contractItems = new Contracts(page)
    await contractItems.contractItems()
    const commonutil = new CommonUtil(page)
    const first = "//button[contains(@class,'btn neutral sm with-icon-left')]"
    const second = "//th[normalize-space()='Airports']"
    await commonutil.expectElementNotVisible(first)
    await commonutil.expectElementVisible(second)
})

test('contractPaginationTest', async({page})=>{
    await loginToApp(page)
    const contractPagination = new Contracts(page)
    await contractPagination.contractPagination()
    const commonutil = new CommonUtil(page)
    const pageURL = "https://example.com/"
    await commonutil.expectPageUrl(pageURL)
})

test('itemsSearchFilterTest', async({page})=> {
    await loginToApp(page)
    const itemsSearchFilter = new Contracts(page)
    await itemsSearchFilter.itemsSearchFilter()
    const commonutil = new CommonUtil(page)
    const locator = "example-locator"
    await commonutil.expectElementContainsText(locator, 'Example')
})