import { expect } from '@playwright/test';

export class CommonUtil {
    constructor(page) {
        this.page = page;
    }

    // 1. Elementin görünür olduğunu kontrol et
    async expectElementVisible(selector) {
        const element = this.page.locator(selector);
        await expect(element, `Element '${selector}' görünür değil.`).toBeVisible(); 
    }

    // 2. Elementin görünmez olduğunu kontrol et
    async expectElementNotVisible(selector) {
        const element = this.page.locator(selector);
        await expect(element, `Element '${selector}' görünür olmamalı.`).not.toBeVisible(); 
    }

    // 3. Elementin etkin olduğunu kontrol et
    async expectElementEnabled(selector) {
        const element = this.page.locator(selector);
        await expect(element, `Element '${selector}' etkin değil.`).toBeEnabled(); 
    }

    // 4. Elementin devre dışı olduğunu kontrol et
    async expectElementDisabled(selector) {
        const element = this.page.locator(selector);
        await expect(element, `Element '${selector}' devre dışı olmalı.`).toBeDisabled(); 
    }

    // 5. Elementin seçili olduğunu kontrol et (checkbox, radio button)
    async expectElementChecked(selector) {
        const element = this.page.locator(selector);
        await expect(element, `Element '${selector}' seçili değil.`).toBeChecked(); 
    }

    // 6. Elementin seçili olmadığını kontrol et (checkbox, radio button)
    async expectElementNotChecked(selector) {
        const element = this.page.locator(selector);
        await expect(element, `Element '${selector}' seçili olmamalı.`).not.toBeChecked(); 
    }

    // 7. Elementin içerdiği metni doğrula
    async expectElementText(selector, expectedText) {
        const element = this.page.locator(selector);
        await expect(element, `Element '${selector}' metni '${expectedText}' olmalı.`).toHaveText(expectedText); 
    }

    // 8. Elementin içindeki değeri doğrula (input değerleri için)
    async expectElementValue(selector, expectedValue) {
        const element = this.page.locator(selector);
        await expect(element, `Element '${selector}' değeri '${expectedValue}' olmalı.`).toHaveValue(expectedValue); 
    }

    // 9. Elementin belirli bir attribute'a sahip olduğunu kontrol et
    async expectElementAttribute(selector, attribute, expectedValue) {
        const element = this.page.locator(selector);
        await expect(element, `Element '${selector}' ${attribute} özelliği '${expectedValue}' olmalı.`)
            .toHaveAttribute(attribute, expectedValue); 
    }

    // 10. Sayfanın URL'inin doğru olduğunu kontrol et
    async expectPageUrl(expectedUrl) {
        await expect(this.page, `Sayfanın URL'si '${expectedUrl}' olmalı.`).toHaveURL(expectedUrl); 
    }

    // 11. Elementin içindeki metnin belirli bir metni içerdiğini doğrula
    async expectElementContainsText(selector, expectedSubstring) {
        const element = this.page.locator(selector);
        await expect(element, `Element '${selector}' metni '${expectedSubstring}' içermeli.`).toContainText(expectedSubstring); 
    }

    // 12. Elementin belirli bir CSS class'ına sahip olduğunu kontrol et
    async expectElementHasClass(selector, className) {
        const element = this.page.locator(selector);
        await expect(element, `Element '${selector}' sınıfı '${className}' olmalı.`).toHaveClass(className); 
    }

    // 13. Elementin belirli bir durumunu (visible, enabled, checked vs.) genel kontrol et
    async expectElementState(selector, state) {
        const element = this.page.locator(selector);
        await expect(element, `Element '${selector}' durumu '${state}' olmalı.`)[state](); 
    }

    // 14. Yeni sekmenin açıldığını ve belirli bir URL'i içerdiğini doğrula
    async expectNewTabOpened(expectedUrl) {
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.page.locator('a[target="_blank"]').click(),
        ]);
        await newPage.waitForLoadState();
        await expect(newPage, `Yeni açılan sekmenin URL'si '${expectedUrl}' olmalı.`).toHaveURL(expectedUrl); 
    }

    // 15. Dosyanın başarılı bir şekilde yüklendiğini doğrula
    async expectFileUploadSuccess(selector, filePath) {
        const input = this.page.locator(selector);
        await input.setInputFiles(filePath);
        await expect(input, `Dosya '${filePath}' yüklenemedi.`).toHaveValue(filePath); 
    }

    async clickFirstFourCheckboxes(locator) {
        const checkboxes = this.page.locator(locator); // Checkbox'ları bul
        const count = await checkboxes.count(); // Checkbox sayısını al
        for (let i = 0; i < Math.min(4, count); i++) {
            await checkboxes.nth(i).click(); // İlk 4 tanesine tıkla
        }
    }
}
