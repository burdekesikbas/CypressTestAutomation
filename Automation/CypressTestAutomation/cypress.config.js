const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "qvt34z",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
