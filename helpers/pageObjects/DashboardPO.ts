import { Page } from "@playwright/test";
import { WebActions } from "../WebActions";

export class DashboardPO extends WebActions {
  //page url
  page_url = "/dashboard";

  //buttons
  btn_findAHome = 'button:has-text("Find a home")';
  btn_uploadDocuments = 'button:has-text("Upload documents")';
  btn_actions = '[data-testid="icon-button-ghost"]';
  btn_cancel_and_refund = 'text="Cancel & refund"';
  btn_cancel_confirmation = 'button:has-text("Yes, cancel & refund")';
  btn_find_another_home = 'button:has-text("Find Another Home")';
  btn_back_to_dashboard = 'button:has-text("Back to Dashboard")';

  //message
  welcome_message = "text='Welcome Martin!'";

  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }
}
