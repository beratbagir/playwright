import { AirportsLocator } from "../Locators/airportsLocators";

export class Airports {
    constructor(page) {
        this.page = page;
        this.locators = new AirportsLocator();
    }

    async searchFilter() {
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.locators.airportsPageLocator).click();
        await this.page.waitForTimeout(500);
        await this.page.locator(this.locators.searchAirportInput).fill('Sample Airport');
    }

    async createAirports() {
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.locators.airportsPageLocator).click();
        await this.page.locator(this.locators.addAirportButton).click();
        await this.page.locator(this.locators.countryDropdown).selectOption({ label: 'Sample Country' });
        await this.page.locator(this.locators.airportNameInput).fill('TestAirport');
        await this.page.locator(this.locators.confirmAddButton).click();
    }

    async editAirports() {
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.locators.airportsPageLocator).click();
        await this.page.locator(this.locators.lastPage).click();
        await this.page.locator(this.locators.editAirportButton).click();
        await this.page.locator(this.locators.editAirportNameInput).fill('EditedAirport');
        await this.page.locator(this.locators.icaoCodeInput).fill('ABCD');
        await this.page.locator(this.locators.saveAirportChanges).click();
    }

    async deleteAirports() {
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.locators.airportsPageLocator).click();
        await this.page.locator(this.locators.lastPage).click();
        await this.page.locator(this.locators.deleteAirportButton).click();
        await this.page.locator(this.locators.confirmDeleteAirport).click();
    }
}
