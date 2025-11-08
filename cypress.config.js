const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.google.com/",
    watchForFileChanges: false,
    failOnStatusCode: false,

    //watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners 
    },

    env: {
      originalURL: 'https://parabank.parasoft.com/parabank',
      paraURL: 'https://parabank.parasoft.com/parabank/index.htm',
      login: 'https://parabank.parasoft.com/parabank/login.htm',
      Register: 'https://parabank.parasoft.com/parabank/register.htm',
      forgotLogin: 'https://parabank.parasoft.com/parabank/lookup.htm'
    }
  },
});

