export class ContractsLocators {
    constructor() {
        this.noContractText = "//span[text()='No contracts available']";
        this.contractsPageLink = "//a[@href='/contracts_page']";
        this.searchContractInput = "//input[@id='contract_search_input']";
        this.addContractButton = "//button[@id='add_contract_button']";
        this.vendorSelect = "//select[@id='vendor_select']";
        this.contractTypeDropdown = "//div[@class='contract_type_dropdown']";
        this.selectContractType = "//div[text()='Contract Type Option']";
        this.statusDropdown = "//select[@id='contract_status']";
        this.airportDropdown = "//div[@class='airport_dropdown']";
        this.airportSearchInput = "//input[@id='airport_search_input']";
        this.selectAirport = "//div[text()='Selected Airport']";
        this.contractNameInput = "//input[@id='contract_name']";
        this.effectiveDatePicker = "//input[@id='effective_date']";
        this.selectEffectiveDate = "//span[@aria-label='Date Placeholder']";
        this.confirmAddContract = "//button[text()='Confirm Contract']";
        this.deleteContractButton = "//button[@class='delete_contract_btn']";
        this.confirmDeleteContract = "//button[text()='Delete Contract']";
        this.contractItemsTab = "//a[@href='/contract_items']";
        this.nextPageButton = "//button[@aria-label='Next Page']";
    }
}
