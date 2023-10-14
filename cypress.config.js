const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "xa3sre",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
