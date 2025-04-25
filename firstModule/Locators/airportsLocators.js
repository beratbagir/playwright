export class AirportsLocator {
    constructor() {
        this.airportsPageLocator = "//a[@href='/airports_page']";
        this.addAirportButton = "//button[@id='add_airport_button']";
        this.countryDropdown = "//select[@id='country_select']";
        this.airportNameInput = "//input[@id='airport_name']";
        this.confirmAddButton = "//button[text()='Confirm Add Airport']";
        this.lastPage = "//span[@class='pagination_last']";
        this.editAirportButton = "//button[@class='edit_airport_btn']";
        this.editAirportNameInput = "//input[@id='edit_airport_name']";
        this.icaoCodeInput = "//input[@id='icao_code_input']";
        this.deleteAirportButton = "//button[@class='delete_airport_btn']";
        this.confirmDeleteAirport = "//button[text()='Delete Airport']";
        this.saveAirportChanges = "//button[text()='Save Airport Changes']";
    }
}
