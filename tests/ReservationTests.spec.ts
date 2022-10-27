import test from "../helpers/BaseTest";
const data = JSON.parse(
  JSON.stringify(require("../test-data/reservation.data.json"))
);

test("TC-12 Successfully reserve a unit @fast", async ({
  user,
  studioPO,
  dashboardPO,
  reviewPO,
  reservationPO,
}) => {
  await test.step("Login via magic link", async () => {
    await user.logInWithMagicLink();
  }),
    await test.step("Go to /studio, skip the intro, go to available homes and select the top matching unit", async () => {
      await user.clickOn(dashboardPO.btn_findAHome);
      await user.clickOn(studioPO.btn_skipIntro);
      await user.clickOn(studioPO.btn_skipToHomes);
      await user.delay(2000);
      await user.clickOn(studioPO.unit_bestMatch);
      await user.clickOn(studioPO.btn_reviewAndReserve);
      await user.clickOn(reviewPO.btn_payNow);
      await reservationPO.setLegalNameAndSignTheDocuments(data.legal_name);
      await reservationPO.submitStripeForm(
        data.card_number,
        data.expiration_date,
        data.cvv,
        data.card_name
      );
    }),
    await test.step("Verify you have successfully reserved a unit", async () => {
      await user.verifyElementIsDisplayed(reservationPO.btn_start_now);
      await user.clickOn(reservationPO.btn_start_now);
      await user.verifyElementIsDisplayed(dashboardPO.btn_uploadDocuments);
    });
});

test("TC-13 Cancel unit reservation", async ({ user, dashboardPO }) => {
  await test.step("Login via magic link", async () => {
    await user.logInWithMagicLink();
  }),
    await test.step("Click on 'Actions' button", async () => {
      await user.clickOn(dashboardPO.btn_actions);
    });
  await test.step("Click on 'Cancel & refund' and confirm", async () => {
    await user.clickOn(dashboardPO.btn_cancel_and_refund);
    await user.clickOn(dashboardPO.btn_cancel_confirmation);
  });
  await test.step("Verify 'Refund had been successfully initiated' is displayed on the screen", async () => {
    await user.verifyElementIsDisplayed(dashboardPO.btn_find_another_home);
  });
});

// test("TC-10 Successfully join the Priority Waitlist", async ({
//   user,
//   studioPO,
//   dashboardPO,
//   reviewPO,
//   reservationPO,
// }) => {
//   await test.step("Login via magic link", async () => {
//     await user.logInWithMagicLink();
//   }),
//     await test.step("Go to /studio, skip the intro, go to available homes and select the top matching unit", async () => {
//       await user.clickOn(dashboardPO.btn_findAHome);
//       await user.pressKeyboardKey("ArrowDown");
//       await user.clickOn(studioPO.btn_skipIntro);
//       await user.clickOn(studioPO.btn_skipToHomes);
//       await user.delay(2000);
//       await user.clickOn(studioPO.btn_join_priority_waitlist);
//       await user.clickOn(reservationPO.btn_one_bedroom);
//       await user.clickOn(reservationPO.btn_two_bedroom);
//       await user.clickOn(reservationPO.btn_join_waitlist);
//       await user.delay(3000);
//       await reservationPO.setLegalNameAndSignTheDocuments(data.legal_name);
//       await reservationPO.submitStripeForm(
//         data.card_number,
//         data.expiration_date,
//         data.cvv,
//         data.card_name
//       );
//     }),
//     await test.step("Verify you have successfully reserved a unit", async () => {
//       await user.verifyElementIsDisplayed(reservationPO.btn_go_to_dashboard);
//     });
// });

// test("TC-14 Cancel priority waitlist reservation", async ({
//   user,
//   dashboardPO,
// }) => {
//   await test.step("Login via magic link", async () => {
//     await user.logInWithMagicLink();
//   }),
//     await test.step("Click on 'Cancel & refund' and confirm", async () => {
//       await user.clickOn(dashboardPO.btn_cancel_and_refund);
//       await user.clickOn(dashboardPO.btn_cancel_confirmation);
//     });
//   await test.step("Verify 'Refund had been successfully initiated' is displayed on the screen", async () => {
//     await user.verifyElementIsDisplayed(dashboardPO.btn_back_to_dashboard);
//   });
// });
