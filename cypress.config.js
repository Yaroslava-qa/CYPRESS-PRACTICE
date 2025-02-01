const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "defaultCommandTimeout": 5000,
    "viewportWidth": 1280,
    "viewportHeight": 720
  },
});
