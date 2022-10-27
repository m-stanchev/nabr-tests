import { Page } from "@playwright/test";
import { WebActions } from "../WebActions";

export class NavBarPO extends WebActions {
  //buttons
  lnk_howItWorks = "text=How it Works"; //redirects to /howitworks
  lnk_SiliconValley = "text=Nabr Silicon Valley"; //redirects to /locations/siliconvalley
  lnk_ourMission = "text=Our Mission"; //redirects to /aboutus
  lnk_nabrNews = "text=Nabr News"; //redirects to /news
  btn_take3Dtour = 'a[role="button"]:has-text("Take a 3D Tour")'; //redirects to /tour
  btn_getStarted = 'button:has-text("Get Started")'; //redirects to /waitlist
  btn_userName = 'a[href="/contactus"] + div';
  btn_profile_dropdown = '[class="down"]';
  btn_logIn = "text=Log In";
  btn_logOut = "text=Log Out";

  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }
}
