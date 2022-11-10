const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1400,
  viewportHeight:768,
  defaultCommandTimeout:1000,
  video: false,
  reporter: "cypress-mochawesome-reporter",
reporterOptions:{
reporterEnabled: "spec, cypress-multi-reporters",
reportoir: "cypress/algresults",
reportFilename: "Testresults",
reportageTitle: "Shoppers Test Suite",
quite: true,
overwrite: false,
html: true,
JSON: true,

charts: true,
embeddedScreenshots: false,
inlineAssets: true,
screenshotOnRunFailure: true,
screenshotsFolder:"screenshots"
},
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    //   return require("./cypress/plugins/index.js")(on, config)
    // },
    baseUrl: "http://localhost:3001/login",
    specPattern: "cypress/tests/**/*.cy.{js,jsx}"
  },
});
