import { Page, request } from "@playwright/test";
import { WebActions } from "../WebActions";

export class LoginPagePO extends WebActions {
  //page url
  page_url = "/login";
  request_url =
    "https://showroom-gateway.nabr.devhive.net/v1/auth/request-link";

  //buttons
  btn_log_in = 'button:has-text("Log In")';
  btn_Google = 'span:has-text("Google")';
  btn_next = '[id="identifierNext"]';

  //input fields
  txt_email = "[placeholder='john.doe@gmail.com']";
  txt_GoogleEmail = '[type="email"]';
  txt_GooglePassword = '[id="password_text_field"]';

  //links
  lnk_sign_up = 'a[href="/get-started"]';

  //messages
  txa_validEmail_message = 'p:has-text("Please enter a valid email.")';
  txa_email_not_found =
    'p:has-text("Email not found. Please try again with a different email.")';

  //error messages
  email_not_found =
    'p:has-text("Email not found. Please try again with a different email.")';

  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }
}
