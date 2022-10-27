import { test as baseTest } from "@playwright/test";
import { WaitListPage } from "./pageObjects/WaitListPagePO";
import { WebActions } from "./WebActions";
import { HomePagePO } from "./pageObjects/HomePagePO";
import { LoginPagePO } from "./pageObjects/LoginPagePO";
import { NavBarPO } from "./pageObjects/NavBarPO";
import { ContactPO } from "./pageObjects/ContactPO";
import { StudioPO } from "./pageObjects/StudioPO";
import { DashboardPO } from "./pageObjects/DashboardPO";
import { ReviewPO } from "./pageObjects/ReviewPO";
import { ReservationPO } from "./pageObjects/ReservationPO";

const test = baseTest.extend<{
  waitListPage: WaitListPage;
  navBar: NavBarPO;
  homePage: HomePagePO;
  loginPage: LoginPagePO;
  contactPage: ContactPO;
  studioPO: StudioPO;
  dashboardPO: DashboardPO;
  reviewPO: ReviewPO;
  reservationPO: ReservationPO;
  user: WebActions;
}>({
  waitListPage: async ({ page }, use) => {
    await use(new WaitListPage(page));
  },
  navBar: async ({ page }, use) => {
    await use(new NavBarPO(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePagePO(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPagePO(page));
  },
  user: async ({ page }, use) => {
    await use(new WebActions(page));
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPO(page));
  },
  studioPO: async ({ page }, use) => {
    await use(new StudioPO(page));
  },
  dashboardPO: async ({ page }, use) => {
    await use(new DashboardPO(page));
  },
  reviewPO: async ({ page }, user) => {
    await user(new ReviewPO(page));
  },
  reservationPO: async ({ page }, user) => {
    await user(new ReservationPO(page));
  },
});

export default test;
