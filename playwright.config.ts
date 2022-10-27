import { PlaywrightTestConfig, test } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  timeout: 70 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 1,
  reporter: process.env.CI ? [["github"], ["html"]] : "html",
  projects: [
    {
      name: "staging-desktop-chrome",
      use: {
        headless: process.env.CI ? true : false,
        actionTimeout: 50000,
        viewport: null,
        baseURL: "https://showroom.nabr.devhive.net",
        trace: "retain-on-failure",
        browserName: "chromium",
        channel: "chrome",
        video: "on",
        launchOptions: {
          args: ["--start-maximized"],
        },
      },
    },
  ],
  outputDir: "test-results/",
};

export default config;
