const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  
  watchForFileChanges : false,
  video : true,
  screenshotOnRunFailure :false,
  
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "overwrite": true,
    "html": true,
    "json": true
  }
},
{
  "reporter": 'junit',
  "reporterOptions": {
    "mochaFile": 'cypress/reports/my-test-output-[hash].xml'
  }
  


});
