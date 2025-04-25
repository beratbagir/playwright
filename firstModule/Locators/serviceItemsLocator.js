export class ServiceItemsLocator {
    constructor() {
        this.serviceItemsPageLink = "//a[@href='/service_items_page']";
        this.searchServiceItemInput = "//input[@id='service_item_search']";
        this.addServiceItemButton = "//button[@id='add_service_item']";
        this.serviceItemNameInput = "//input[@id='service_item_name']";
        this.costNumberInput = "//input[@id='cost_number_input']";
        this.confirmAddServiceItem = "//button[text()='Add Service Item']";
        this.paginationLastPage = "//button[@class='pagination_last_page']";
        this.editServiceItemButton = "//button[@class='edit_service_item']";
        this.editServiceItemNameInput = "//input[@id='edit_service_item_name']";
        this.editDocTypeDropdown = "//select[@id='edit_doc_type']";
        this.saveServiceItemChanges = "//button[text()='Save Service Item']";
        this.deleteServiceItemButton = "//button[@class='delete_service_item']";
        this.confirmDeleteServiceItem = "//button[text()='Delete Service Item']";
    }
}
