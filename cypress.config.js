const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:5173/", // using dev 5173 instead of 4173 for better HMR
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // console.log(config) // see everything in here!
      if (config.env.MODE == "preview") {
        config.baseUrl = "http://localhost:4173/";
      }
      return config;
    },
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
