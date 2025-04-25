import {test, expect} from '@playwright/test'

exports.LoginPage = 
class LoginPage {
    
    
    constructor(page) {
        this.page = page;
        this.usernameInput = '#email';
        this.passwordInput = '#password';
        this.loginButton = "//button[normalize-space()='Login']";
    }

    async gotoLoginPage() {
        await this.page.goto('https://sample@sampel.com/');
    }

    async login(username,password) {
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password)
        await this.page.locator(this.loginButton).click();

    }














}
