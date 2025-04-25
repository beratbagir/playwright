import { ContractsLocators } from "../Locators/contractsLocators";

export class Contracts {
    constructor(page) {
        this.page = page;
        this.locators = new ContractsLocators();
    }

    async contractsPage() {
        await this.page.locator(this.locators.contractsPageLink).click();
    }

    async contractsSearchFilter() {
        await this.page.locator(this.locators.contractsPageLink).click();
        await this.page.waitForTimeout(1500);
        await this.page.locator(this.locators.searchContractInput).fill("Sample Contract");
    }

    async createContract() {
        await this.page.locator(this.locators.contractsPageLink).click();
        await this.page.waitForTimeout(1500);
        await this.page.locator(this.locators.addContractButton).click();
        await this.page.locator(this.locators.vendorSelect).selectOption({ label: 'Sample Vendor' });
        await this.page.locator(this.locators.contractTypeDropdown).click();
        await this.page.locator(this.locators.selectContractType).click();
        await this.page.locator(this.locators.statusDropdown).selectOption({ label: 'Active' });
        await this.page.locator(this.locators.airportDropdown).click();
        await this.page.locator(this.locators.airportSearchInput).fill('AAA');
        await this.page.locator(this.locators.selectAirport).click();
        await this.page.locator(this.locators.contractNameInput).fill('AutomationTest');
        await this.page.waitForTimeout(500);
        await this.page.locator(this.locators.effectiveDatePicker).click();
        await this.page.locator(this.locators.selectEffectiveDate).click();
        await this.page.locator(this.locators.confirmAddContract).click();
    }

    async deleteContract() {
        await this.page.locator(this.locators.contractsPageLink).click();
        await this.page.locator(this.locators.deleteContractButton).click();
        await this.page.locator(this.locators.confirmDeleteContract).click();
    }

    async contractItems() {
        await this.page.locator(this.locators.contractsPageLink).click();
        await this.page.waitForTimeout(500);
        await this.page.locator(this.locators.contractItemsTab).click();
    }

    async contractPagination() {
        await this.page.locator(this.locators.contractsPageLink).click();
        await this.page.locator(this.locators.contractItemsTab).click();
        await this.page.locator(this.locators.nextPageButton).click();
    }

    async itemsSearchFilter() {
        await this.page.locator(this.locators.contractsPageLink).click();
        await this.page.locator(this.locators.contractItemsTab).click();
        await this.page.locator(this.locators.searchContractInput).fill('Sample Item');
    }
}