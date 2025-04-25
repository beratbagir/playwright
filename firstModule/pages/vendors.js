import { VendorsLocator } from "../Locators/vendorsLocator";

export class Vendors {
    constructor(page) {
        this.page = page;
        this.locators = new VendorsLocator();
    }

    async vendorSearchFilter(){
        await this.page.waitForTimeout(500);
        await this.page.locator(this.locators.vendorsPageLink).click();
        await this.page.waitForTimeout(500);
        await this.page.locator(this.locators.searchVendorInput).fill('Sample Vendor');
    }

    async vendorCreate() {
        await this.page.locator(this.locators.vendorsPageLink).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.locators.addVendorButton).click();
        await this.page.locator(this.locators.vendorNameInput).fill('TestVendor');
        await this.page.locator(this.locators.currencyDropdown).selectOption({label: 'USD'});
        await this.page.locator(this.locators.confirmAddVendor).click();
    }

    async vendorEdit() {
        await this.page.locator(this.locators.vendorsPageLink).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.locators.editVendorButton).click();
        await this.page.locator(this.locators.editVendorNameInput).fill('EditedVendor');
        await this.page.locator(this.locators.editVendorCurrencyDropdown).selectOption({label: 'EUR'});
        await this.page.locator(this.locators.saveVendorChanges).click();
    }

    async vendorDelete() {
        await this.page.locator(this.locators.vendorsPageLink).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.locators.deleteVendorButton).click();
        await this.page.locator(this.locators.confirmDeleteVendor).click();
    }
}
