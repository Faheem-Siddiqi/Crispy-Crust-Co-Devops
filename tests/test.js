const { By, Builder, until } = require('selenium-webdriver');
const assert = require('assert');
const config = require('config');

const baseURL = config.get('baseURL');

describe('Add New Pizza Form', function () {
  let driver;

  before(async function () {
    try {
      driver = await new Builder()
        .usingServer('http://selenium-hub:4444/')
        .forBrowser('chrome')
        .build();
    } catch (error) {
      console.error('An error occurred:', error);
    }
  });

  after(async function () {
    try {
      await driver.quit();
    } catch (error) {
      console.error('An error occurred:', error);
    }
  });

  it('should render the Add New Pizza form', async function () {
    await driver.get(${baseURL}/add-new-pizza); // Replace with actual route

    const formExists = await driver.findElement(By.tagName('form'));
    assert.ok(formExists, 'Add New Pizza form is not rendered');
  });

  it('should fill and submit the form', async function () {
    await driver.get(${baseURL}/add-new-pizza); // Replace with actual route

    // Fill form fields
    await driver.findElement(By.css('[placeholder="Enter Pizza Name"]')).sendKeys('Test Pizza');
    // Fill other form fields similarly

    // Submit the form
    await driver.findElement(By.css('form')).submit();

    // Wait for success message or redirection
    await driver.wait(
      until.elementLocated(By.xpath('//*[contains(text(),"Pizza Added Successfully")]')),
      5000
    );

    const successMessage = await driver.findElement(By.xpath('//*[contains(text(),"Pizza Added Successfully")]'));
    assert.ok(successMessage, 'Success message not found');
  });
});