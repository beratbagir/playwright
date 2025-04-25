import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { Airports, Formulas } from '../pages/formulas'
import { CommonUtil } from '../Common/CommonUtil'

//filtrelerin bir kısmı bulunmamaktadır.

//yardımcı fonksiyon
async function loginToApp(page) {
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('example@example.com', 'example')
}

test('searchFilterTest', async({page})=> {
    await loginToApp(page)
    const searchFilter = new Formulas(page)
    await searchFilter.searchFilter()
    const commonutil = new CommonUtil()
    const locator = "//div[normalize-space()='Silinmemeli']"
    const locator2 = "//div[normalize-space()='Landing Take Off']"
    await commonutil.expectElementVisible(locator)
    await commonutil.expectElementNotVisible(locator2)
})

test('createFormulaTest', async({page})=>{
    await loginToApp(page)
    const createFormula = new Formulas(page)
    await createFormula.createFormula(page)
    const commonutil = new CommonUtil(page)
    const locator = "//span[@class='mt-1']"
    await commonutil.expectElementVisible(locator)
})

test('dupFormulaTest', async({page})=>{
    await loginToApp(page)
    const dupformula = new Formulas(page)
    await dupformula.dupFormula()
    const commonutil = new CommonUtil(page)
    const locator = "//div[normalize-space()='Duplicated otomasyonTest']"
    await commonutil.expectElementVisible(locator)
})



