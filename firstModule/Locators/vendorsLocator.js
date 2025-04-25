export class VendorsLocator {
    constructor() {
        this.vendorsPageLink = "//a[@href='/vendors_page']";
        this.searchVendorInput = "//input[@id='vendor_search_input']";
        this.addVendorButton = "//button[@id='add_vendor_button']";
        this.vendorNameInput = "//input[@id='vendor_name_input']";
        this.currencyDropdown = "//select[@id='currency_select']";
        this.confirmAddVendor = "//button[text()='Confirm Add Vendor']";
        this.deleteVendorButton = "//button[@class='delete_vendor_btn']";
        this.confirmDeleteVendor = "//button[text()='Delete Vendor']";
        this.editVendorButton = "//button[@class='edit_vendor_btn']";
        this.editVendorNameInput = "//input[@id='edit_vendor_name']";
        this.editVendorCurrencyDropdown = "//select[@id='edit_currency_select']";
        this.saveVendorChanges = "//button[text()='Save Vendor']";
    }
}
