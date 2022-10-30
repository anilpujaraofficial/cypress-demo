const { defineConfig } = require("cypress");
const fs = require("fs");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        checkFileExists(filepath) {
          if (fs.existsSync(filepath)) {
            return true;
          } else {
            return false;
          }
        },
      });
    },

    excludeSpecPattern: ["cypress/e2e/2-advanced-examples"],
    retries: {
      runMode: 2,
      openMode: 0,
    },
    //report
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mocha",
      reportFilename: "[status]-[datetime]-[name]-report",
      overwrite: false,
      html: true,
      json: true,
    },

    //environment
    env: {
      testingEnv: "qa",
      qa: {},
      dev: {},
      uat: {},
    },
  },
});
