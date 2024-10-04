const { Before, After } = require("@cucumber/cucumber");
const { createSession, closeSession, client} = require("nightwatch-api");

Before({ timeout: 30 * 1000 }, async function () {
    await createSession();
});

After({ timeout: 30 * 1000 }, async function () {
    await closeSession();
});
