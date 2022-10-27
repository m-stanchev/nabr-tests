import { Page } from "@playwright/test";
import { WebActions } from "../WebActions";

export class StudioPO extends WebActions {
  //page url
  url = "/studio";

  //buttons
  btn_skipIntro = 'button:has-text("Skip")';
  btn_skipToHomes = 'button:has-text("Skip to Homes")';
  btn_reviewAndReserve = 'button:has-text("Review & Reserve")';
  btn_join_priority_waitlist = 'button:has-text("Join Priority Waitlist")';

  //units
  unit_bestMatch = "[data-testid='paper']";

  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }
}
