import { ServiceItemsLocator } from "../Locators/serviceItemsLocator";

export class ServiceItems {
    constructor(page) {
        this.page = page;
        this.locators = new ServiceItemsLocator();
    }

    async serviceItemsPage() {
        await this.page.locator(this.locators.serviceItemsPageLink).click();
    }

    async searchFilter() {
        await this.page.waitForTimeout(500);
        await this.page.locator(this.locators.serviceItemsPageLink).click();
        await this.page.waitForTimeout(1500);
        await this.page.locator(this.locators.searchServiceItemInput).fill('Sample Item');
    }

    async createServiceItems() {
        await this.page.locator(this.locators.serviceItemsPageLink).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.locators.addServiceItemButton).click();
        await this.page.locator(this.locators.serviceItemNameInput).fill('TestServiceItem');
        await this.page.locator(this.locators.costNumberInput).fill('123');
        await this.page.locator(this.locators.confirmAddServiceItem).click();
    }

    async editServiceItems() {
        await this.page.waitForTimeout(1500);
        await this.page.locator(this.locators.serviceItemsPageLink).click();
        await this.page.locator(this.locators.paginationLastPage).click();
        await this.page.waitForTimeout(1500);
        await this.page.locator(this.locators.editServiceItemButton).click();
        await this.page.locator(this.locators.editServiceItemNameInput).fill('EditedItem');
        await this.page.locator(this.locators.editDocTypeDropdown).selectOption({ label: 'DOC 3' });
        await this.page.locator(this.locators.saveServiceItemChanges).click();
    }

    async deleteServiceItems() {
        await this.page.locator(this.locators.serviceItemsPageLink).click();
        await this.page.locator(this.locators.paginationLastPage).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(this.locators.deleteServiceItemButton).click();
        await this.page.locator(this.locators.confirmDeleteServiceItem).click();
    }
}