import test from "../helpers/BaseTest";
const data = JSON.parse(
  JSON.stringify(require("../test-data/contactForm.data.json"))
);

test("Successfully submit the contact form as a Customer @fast", async ({
  user,
  contactPage,
}) => {
  await test.step("Go to the Contact page", async () => {
    await user.navigateTo(contactPage.page_url);
  }),
    await test.step("Fill in all the required data", async () => {
      await user.setText(contactPage.txt_customer_name, data.customer_name);
      await user.setText(contactPage.txt_customer_email, data.customer_email);
      await user.setText(contactPage.txt_customer_phone, data.customer_phone);
      await user.setText(
        contactPage.txt_customer_message,
        data.customer_message
      );
    }),
    await test.step('Click on "Submit" and verify the network request response', async () => {
      await user.clickAndVerifyRequestAndResponse(
        contactPage.request_url,
        "POST",
        200,
        contactPage.btn_submit
      );
    }),
    await test.step('Verify "Write another message" button is displayed', async () => {
      await user.verifyElementIsDisplayed(
        contactPage.btn_write_another_message
      );
    });
});

test("Successfully submit the contact form as a Partner @slow", async ({
  user,
  contactPage,
}) => {
  await test.step("Go to the Contact page", async () => {
    await user.navigateTo(contactPage.page_url);
  }),
    await test.step('Click on the "Partner" button', async () => {
      await user.clickOn(contactPage.btn_partner);
    });

  await test.step("Fill in all the required data", async () => {
    await user.setText(
      contactPage.txt_partner_company_name,
      data.company_partner_name
    );
    await user.setText(contactPage.txt_partner_name, data.partner_name);
    await user.setText(contactPage.txt_partner_title, data.partner_title);
    await user.setText(contactPage.txt_partner_email, data.partner_email);
    await user.setText(contactPage.txt_partner_phone, data.partner_phone);
    await user.selectOptionFromDropdown(
      contactPage.dd_partners_types,
      contactPage.ddo_architect
    );
    await user.setText(contactPage.txt_partner_message, data.partner_message);
  }),
    await test.step("Click on the Submit button and verify the network request response", async () => {
      await user.clickAndVerifyRequestAndResponse(
        contactPage.request_url,
        "POST",
        200,
        contactPage.btn_submit
      );
    });

  await test.step('Verify "Write another message" button is displayed', async () => {
    await user.verifyElementIsDisplayed(contactPage.btn_write_another_message);
  });
});

test("Successfully submit the contact form as a Press @slow", async ({
  user,
  contactPage,
}) => {
  await test.step("Go to the Contact page", async () => {
    await user.navigateTo(contactPage.page_url);
  }),
    await test.step('Click on the "Partner" button', async () => {
      await user.clickOn(contactPage.btn_press);
    });

  await test.step("Fill in all the required data", async () => {
    await user.setText(
      contactPage.txt_press_company_name,
      data.press_company_name
    );
    await user.setText(contactPage.txt_press_name, data.press_name);
    await user.setText(contactPage.txt_press_title, data.press_title);
    await user.setText(contactPage.txt_press_email, data.press_email);
    await user.setText(contactPage.txt_press_phone, data.press_phone);
    await user.setText(contactPage.txt_press_message, data.press_message);
  }),
    await test.step("Click on the Submit button and verify the network request response", async () => {
      await user.clickAndVerifyRequestAndResponse(
        contactPage.request_url,
        "POST",
        200,
        contactPage.btn_submit
      );
    });

  await test.step('Verify "Write another message" button is displayed', async () => {
    await user.verifyElementIsDisplayed(contactPage.btn_write_another_message);
  });
});

test("Verify if the message field is required @slow", async ({
  user,
  contactPage,
}) => {
  await test.step("Go to the Contact page", async () => {
    await user.navigateTo(contactPage.page_url);
  }),
    await test.step("Fill in all the fields except the message", async () => {
      await user.setText(contactPage.txt_customer_name, data.customer_name);
      await user.setText(contactPage.txt_customer_email, data.customer_email);
      await user.setText(contactPage.txt_customer_phone, data.customer_phone);
    }),
    await test.step('Click on the "Submit" button', async () => {
      await user.clickOn(contactPage.btn_submit);
    });

  await test.step("Verify error message is displayed and form is not submitted", async () => {
    await user.verifyElementIsDisplayed(
      contactPage.txa_message_is_required_field
    );
  });
});
