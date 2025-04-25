import { FormulasLocator } from "../Locators/formulasLocators";

export class Formulas {
    constructor(page) {
        this.page = page;
        this.locators = new FormulasLocator();
    }

    async searchFilter() {
        await this.page.locator(this.locators.formulasPageLink).click();
        await this.page.locator(this.locators.searchFormulaInput).click();
    }

    async createFormula() {
        await this.page.locator(this.locators.formulasPageLink).click();
        await this.page.locator(this.locators.addFormulaButton).click();
        await this.page.locator(this.locators.formulaNameInput).fill('TestFormula');
        await this.page.locator(this.locators.airportSelect).click();
        await this.page.locator(this.locators.serviceItemSelect).click();
        await this.page.locator(this.locators.startDateInput).click();
        await this.page.locator(this.locators.selectStartDate).click();
        await this.page.locator(this.locators.formulaInputField).fill('pow((Mtow/50),0.7)*Amount');
        await this.page.locator(this.locators.confirmAddFormula).click();
    }

    async editFormula() {
        await this.page.locator(this.locators.formulasPageLink).click();
        await this.page.locator(this.locators.editFormulaButton).click();
        await this.page.locator(this.locators.editFormulaNameInput).fill('EditedFormula');
        await this.page.locator(this.locators.editFormulaAmountInput).fill('round(Amount*round(log(Mtow,2),1.5),0)');
        await this.page.locator(this.locators.saveFormulaButton).click();
    }

    async deleteFormula() {
        await this.page.locator(this.locators.formulasPageLink).click();
        await this.page.locator(this.locators.deleteFormulaButton).click();
        await this.page.locator(this.locators.confirmDeleteFormula).click();
    }

    async dupFormula() {
        await this.page.locator(this.locators.formulasPageLink).click();
        await this.page.locator(this.locators.duplicateFormulaButton).click();
    }
}