import { Page } from "@playwright/test";
import { WebActions } from "../WebActions";

export class ReservationPO extends WebActions {
  //urls
  page_url = "/reservation";
  request_url = "test";

  //input fields
  txt_legal_name = '[name="legalName"]';

  //buttons
  btn_agree_and_continue = 'button:has-text("Agree and Continue")';
  btn_start_now = 'button:has-text("Start Now")';
  btn_one_bedroom = 'button[value="1"]';
  btn_two_bedroom = 'button[value="2"]';
  btn_join_waitlist = 'button:has-text("Join Waitlist")';
  btn_go_to_dashboard = 'button:has-text("Go to Dashboard")';

  //documents
  lnk_reservation_terms = 'p:has-text("Reservation Terms")';
  chk_reservation_terms =
    '//div[normalize-space()="Reservation Agreement"]/following-sibling::label/input';
  btn_agree_reservation_terms =
    "//div[@id='ps-clickwrap-reservation-agreement']/../../../div[4]//button";

  lnk_agency_disclosure = 'p:has-text("Agency Disclosure")';
  chk_agency_disclosure =
    '//div[normalize-space()="Agency Disclosure"]/following-sibling::label/input';
  btn_agree_agency_disclosure =
    "//div[@id='ps-clickwrap-agency-disclosure']/../../../div[4]//button";

  lnk_preliminary_report =
    'p:has-text("Preliminary Public Report and Receipt")';
  chk_preliminary_report =
    '//div[normalize-space()="Receipt For Preliminary Public Report"]/following-sibling::label/input';
  btn_agree_preliminary_report =
    "//div[@id='ps-clickwrap-public-report-and-receipt']/../../../div[4]//button";

  //Stripe form
  fra_card_number = '//iframe[@title="Secure card number input frame"]';
  txt_card_number = '[name="cardnumber"]';

  fra_expiration_date = '//iframe[@title="Secure expiration date input frame"]';
  txt_expiration_date = '[name="exp-date"]';

  fra_cvc_number = '//iframe[@title="Secure CVC input frame"]';
  txt_cvc_number = '[name="cvc"]';

  txt_name = '[name="name"]';

  btn_complete_payment = "//button[@id='submit']";

  //Available homes
  unit_best_match = "[data-testid='paper']";

  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  /**
   * Use this method to submit Stripe form by passing to it all the required fields.
   * Can be used for both unit and priority waitlist reservation
   * @param card_number The 16-digit card number
   * @param expiration_date The expiration date can be found on the card, written as XX/XX
   * @param cvc_number The final three digits of the number printed on the signature strip on the reverse of your card
   * @param name The user's name
   */

  async submitStripeForm(
    card_number: string,
    expiration_date: string,
    cvc_number: string,
    name: string
  ) {
    await super.setTextInFrame(
      this.fra_card_number,
      this.txt_card_number,
      card_number
    );
    await super.setTextInFrame(
      this.fra_expiration_date,
      this.txt_expiration_date,
      expiration_date
    );
    await super.setTextInFrame(
      this.fra_cvc_number,
      this.txt_cvc_number,
      cvc_number
    );
    await super.setText(this.txt_name, name);
    await super.clickOn(this.btn_complete_payment);
  }

  /**
   * Use this method to set the legal name and sign all the required documents
   * @param legal_name The name that is going to be used in the documents
   */
  async setLegalNameAndSignTheDocuments(legal_name: string) {
    await super.setText(this.txt_legal_name, legal_name);
    await super.clickOn(this.lnk_reservation_terms);
    await super.delay(2000);
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight)
    );
    await super.delay(2000);
    await super.check(this.chk_reservation_terms);
    await super.clickOn(this.btn_agree_reservation_terms);
    await super.clickOn(this.lnk_agency_disclosure);
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight)
    );
    await super.delay(2000);
    await super.check(this.chk_agency_disclosure);
    await super.clickOn(this.btn_agree_agency_disclosure);
    await super.clickOn(this.lnk_preliminary_report);
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight)
    );
    await super.delay(2000);
    await super.check(this.chk_preliminary_report);
    await super.clickOn(this.btn_agree_preliminary_report);
  }
}
