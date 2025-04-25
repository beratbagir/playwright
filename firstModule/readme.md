
# Playwright Test Automation Project

This project demonstrates a robust test automation structure built with [Playwright](https://playwright.dev/). It follows the Page Object Model (POM) architecture, includes a centralized utility helper class (`CommonUtil`), and features Bitbucket Pipelines for CI/CD integration.

---

## 🚀 Technologies Used

- Playwright
- JavaScript (ES6+)
- Node.js
- Bitbucket Pipelines (CI/CD)

---

## 📁 Project Structure

```
playwright/
├── firstModule/
│   ├── Common/              # Shared utility functions (CommonUtil)
│   ├── Locators/            # Page-specific locator classes
│   ├── pages/               # Page actions following POM
│   ├── tests/               # Test scenarios
│   ├── playwright.config.js # Playwright configuration
│   └── bitbucket-pipelines.yml # CI/CD integration
```

---

## 🧪 How to Run Tests

### Run Locally
```bash
npm install
npx playwright install
npx playwright test
```

### Run with CI/CD (Bitbucket Pipelines)
Tests are automatically executed on push using the `bitbucket-pipelines.yml` configuration:

```yaml
image: mcr.microsoft.com/playwright:focal
script:
  - npm ci
  - npx playwright install
  - npx playwright test
```

---

## 🧰 CommonUtil Utility Class

The `CommonUtil.js` class provides reusable assertions and interaction helpers:

| Function | Description |
|----------|-------------|
| `expectElementVisible(selector)` | Asserts that an element is visible |
| `expectElementNotVisible(selector)` | Asserts that an element is not visible |
| `expectElementEnabled(selector)` | Checks if an element is enabled |
| `expectElementText(selector, text)` | Verifies text content |
| `expectPageUrl(url)` | Validates page URL |
| `clickFirstFourCheckboxes(locator)` | Clicks on the first four checkboxes |

---

## ✅ Implemented Test Modules

-CRUD
-Filters
-Pagination
-Validations
-Utilities
-CI/CD Integration

---

## 📌 Suggestions for Improvement

- Include GitHub Actions as an alternative CI/CD option
- Add mock data sources (e.g., JSON files) for test inputs
- Enhance test coverage with validation/negative test scenarios
- Attach screenshots or HTML reports for failed test analysis

---
