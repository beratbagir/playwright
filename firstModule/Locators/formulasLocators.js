export class FormulasLocator {
    constructor() {
        this.formulasPageLink = "//a[@href='/formulas_page']";
        this.searchFormulaInput = "//input[@id='formula_search_input']";
        this.addFormulaButton = "//button[@id='add_formula_button']";
        this.formulaNameInput = "//input[@id='formula_name_input']";
        this.airportSelect = "//div[@class='airport_selector']";
        this.serviceItemSelect = "//div[@class='service_item_selector']";
        this.aircraftSelector = "//div[@class='aircraft_selector']";
        this.selectAircraftOption = "//div[text()='Selected Aircraft']";
        this.startDateInput = "//input[@id='formula_start_date']";
        this.selectStartDate = "//span[@aria-label='Formula Start Date']";
        this.formulaInputField = "//input[@id='formula_input']";
        this.confirmAddFormula = "//button[text()='Add New Formula']";
        this.editFormulaButton = "//button[@class='edit_formula_btn']";
        this.editFormulaNameInput = "//input[@id='edit_formula_name']";
        this.editFormulaAmountInput = "//input[@id='edit_formula_amount']";
        this.saveFormulaButton = "//button[text()='Save Formula Changes']";
        this.deleteFormulaButton = "//button[@class='delete_formula_btn']";
        this.confirmDeleteFormula = "//button[text()='Delete Formula']";
        this.duplicateFormulaButton = "//button[@class='duplicate_formula_btn']";
    }
}
