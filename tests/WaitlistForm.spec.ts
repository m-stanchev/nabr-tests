import test from "../helpers/BaseTest";
const data = JSON.parse(
  JSON.stringify(require("../test-data/waitlist.data.json"))
);

var randomstring = require("randomstring");
const random_email = `martin.stanchev${randomstring
  .generate(32)
  .toLowerCase()}@primeholding.com`;

test("TC-1 Successfully create a profile by submitting the Waitlist form", async ({
  user,
  waitListPage,
}) => {
  await test.step("Go to the Waitlist page", async () => {
    await user.navigateTo(waitListPage.url);
  }),
    //Generating random email for every execution. Once we set up the clean up we can use the one from the json file
    await test.step("Fill in the waitlist form", async () => {
      await user.setText(waitListPage.txt_firstName, data.firstname);
      await user.setText(waitListPage.txt_lastName, data.lastname);
      await user.setText(waitListPage.txt_email, random_email);
      await user.setText(waitListPage.txt_zip, data.zip);
      await user.check(waitListPage.btn_house);
      await user.check(waitListPage.btn_rent);
      await user.check(waitListPage.btn_USother);
      await user.setText(waitListPage.txt_city, data.city);
      await user.selectOptionFromDropdown(
        waitListPage.dd_choose_timeFrame,
        waitListPage.dd_nextYear
      );
      await user.check(waitListPage.btn_isBroker);
      await user.selectOptionFromDropdown(
        waitListPage.dd_howDidYouHear,
        waitListPage.ddo_Google
      );
      await user.clickOn(waitListPage.btn_termsAndConditions);
    });

  await test.step("Click on 'Submit' and verify the request and response", async () => {
    await user.clickAndVerifyRequestAndResponse(
      waitListPage.requestURL,
      "POST",
      200,
      waitListPage.btn_submit
    );
  });
});

test("TC-2 User should not be able to use already used email while submitting the Waitlist form", async ({
  user,
  waitListPage,
}) => {
  await test.step("Go to the Waitlist page", async () => {
    await user.navigateTo(waitListPage.url);
  }),
    //Generating random email for every execution. Once we set up the clean up we can use the one from the json file
    await test.step("Fill in the waitlist form", async () => {
      await user.setText(waitListPage.txt_firstName, data.firstname);
      await user.setText(waitListPage.txt_lastName, data.lastname);
      await user.setText(waitListPage.txt_email, "stanchev.m@abv.bg");
      await user.setText(waitListPage.txt_zip, data.zip);
      await user.check(waitListPage.btn_house);
      await user.check(waitListPage.btn_rent);
      await user.check(waitListPage.btn_USother);
      await user.setText(waitListPage.txt_city, data.city);
      await user.selectOptionFromDropdown(
        waitListPage.dd_choose_timeFrame,
        waitListPage.dd_nextYear
      );
      await user.check(waitListPage.btn_isBroker);
      await user.selectOptionFromDropdown(
        waitListPage.dd_howDidYouHear,
        waitListPage.ddo_Google
      );
      await user.clickOn(waitListPage.btn_termsAndConditions);
    });

  await test.step("Click on 'Submit' and verify the error message is displayed", async () => {
    await user.clickOn(waitListPage.btn_submit);
    await user.verifyElementIsDisplayed(waitListPage.already_used_email);
  });
});
