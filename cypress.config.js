const { defineConfig } = require("cypress");
require('dotenv').config();
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: '53ve86',
  env: {
    user: process.env.EMAIL,
    password: process.env.PASSWORD
  },
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      config.env = {
        ...process.env
      };
      return config;
    }
  }
});