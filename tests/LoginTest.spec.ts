import test from "../helpers/BaseTest";
import { DashboardPO } from "../helpers/pageObjects/DashboardPO";
const data = JSON.parse(
  JSON.stringify(require("../test-data/login.data.json"))
);

test("TC-6 Successfully request a magic link", async ({ user, loginPage }) => {
  await test.step("Go to the login page", async () => {
    await user.navigateTo(loginPage.page_url);
  }),
    await test.step("Enter email that is already registered, click Submit and verify the request response", async () => {
      await user.setText(loginPage.txt_email, data.already_registered_email);
      await user.clickAndVerifyRequestAndResponse(
        loginPage.request_url,
        "POST",
        200,
        loginPage.btn_log_in
      );
    });
});

test("TC-7 User should not be able to request a magic link using not registered email", async ({
  user,
  loginPage,
}) => {
  await test.step("Go to the login page", async () => {
    await user.navigateTo(loginPage.page_url);
  }),
    await test.step("Enter email that is not registered", async () => {
      await user.setText(loginPage.txt_email, data.not_registered_email);
    }),
    await test.step("Click on 'Log In'", async () => {
      await user.clickOn(loginPage.btn_log_in);
    });
  await test.step("Verify error message is displayed", async () => {
    await user.verifyElementIsDisplayed(loginPage.email_not_found);
  });
});

test("TC-8 Log in with magic link", async ({ user, dashboardPO }) => {
  await test.step("Login via magic link", async () => {
    await user.logInWithMagicLink();
  }),
    await test.step("Verify you are logged int", async () => {
      await user.verifyElementIsDisplayed(dashboardPO.welcome_message);
    });
});

test("TC-9 Successfully log out", async ({ user, navBar }) => {
  await test.step("Go to the login page", async () => {
    await user.logInWithMagicLink();
  }),
    await test.step("Enter email that is not registered", async () => {
      await user.clickOn(navBar.btn_profile_dropdown);
    }),
    await test.step("Click on 'Log In'", async () => {
      await user.clickOn(navBar.btn_logOut);
    });
  await test.step("Verify error message is displayed", async () => {
    await user.verifyElementIsDisplayed(navBar.btn_logIn);
  });
});
