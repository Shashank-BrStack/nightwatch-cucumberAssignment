const { Given, When, Then } = require('@cucumber/cucumber');
const { client } = require('nightwatch-api');
const assert = require('assert');

Given('I open Flipkart homepage {string}', async function (string) {
  await client.url(string);
  await client.waitForElementVisible('body', 10000);
});

When('I search for a product {string}', async function (string) {
  await client.setValue('input[name="q"]', string);
  await client.click('button[type="submit"]');
});

Then('I should see search results containing {string}', async function (string) {
  const searchResult = await client.getText({
    selector: '.KzDlHZ',
    timeout: 10000
  }, (result) => {
    assert(result.value.toLowerCase().includes(string.toLowerCase()));
  }); 
});
