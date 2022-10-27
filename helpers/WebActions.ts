import { Page, expect } from "@playwright/test";

export class WebActions {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   *
   * @param url URL to navigate page to.
   */
  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  /**
   * This method waits for actionability checks, focuses the element, fills it and triggers an input event after filling.
   * @param locator The locator if the input field
   * @param text The text you want to set
   */

  async setText(locator: string, text: string): Promise<void> {
    await this.page.fill(locator, text);
  }

  /**
   * This method waits for actionability checks, focuses the element that is in frame, fills it and triggers an input event after filling.
   * @param locator_frame Тhe locator of the frame in which the element is located
   * @param locator_element The locator of the element you want to interact with
   * @param text The text you want to set
   */
  async setTextInFrame(
    locator_frame: string,
    locator_element: string,
    text: string
  ): Promise<void> {
    await this.page
      .frameLocator(locator_frame)
      .locator(locator_element)
      .fill(text);
  }

  /**
   * This method clicks an element matching the locator
   * @param locator The locator of the element that you want to click on
   */
  async clickOn(locator: string): Promise<void> {
    await this.page.click(locator);
  }

  /**
   *@param requestUrl Request URL as a string, you can find it in the Network tab of your browser
   *@param requestMethod For example POST, GET etc.
   *@param responseStatus For example 200, 201 etc.
   *@param locator The locator of the button that is going to trigger the request
   */
  async clickAndVerifyRequestAndResponse(
    requestUrl: string,
    requestMethod: string,
    responseStatus: number,
    locator: string
  ) {
    const [request, response] = await Promise.all([
      this.page.waitForRequest(
        (request) =>
          request.url() === requestUrl &&
          request.method() === requestMethod.toUpperCase()
      ),
      this.page.waitForResponse(
        (response) =>
          response.url() === requestUrl && response.status() === responseStatus
      ),
      this.page.click(locator),
    ]);
  }

  /**
   * Use this method if you have input field and you want to compare the actual value in it to expected value
   * @param locator The locator of the input field
   * @param text The expected value
   */
  async verifyElementText(locator: string, text: string): Promise<void> {
    const actualText = await this.page.locator(locator).page();
    expect.soft(actualText).toEqual(text);
  }

  /**
   * Use this method if you want to select an option from a dropdown
   * @param dropdown The locator of the dropdown
   * @param option The locator of the option that you want to select
   */
  async selectOptionFromDropdown(dropdown: string, option: string) {
    await this.page.click(dropdown);
    await this.page.click(option);
  }

  /**
   * Use this method if you want to delay the execution for some reason
   * @param time Should be set in milliseconds
   * @returns
   */
  async delay(time: number): Promise<void> {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  }

  /**
   * Use this method if you want to verify if an element is visible
   * @param locator The locator of the element that is expected to be visible
   */
  async verifyElementIsDisplayed(locator: string): Promise<void> {
    await this.page.waitForSelector(locator, { state: `visible` });
  }

  async waitForPopUpToLoad(): Promise<Page> {
    return this.page.waitForEvent("popup");
  }

  async logInWithMagicLink() {
    await this.navigateTo(
      "/login/02c128b2cba271cc934a560d8ee09ff0c738c642d7b789591faf21278f65e1cf"
    );
  }

  async scrollToTheBottomOfThePage() {
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight)
    );
  }

  async check(locator: string) {
    await this.page.locator(locator).check();
  }

  async pressKeyboardKey(key: string) {
    await this.page.keyboard.press(key);
  }

  async getElementByText(text: string) {
    this.page.getByText(text);
  }
}
