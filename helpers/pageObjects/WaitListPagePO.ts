import { Page } from "@playwright/test";
import { WebActions } from "../WebActions";

export class WaitListPage extends WebActions {
  //page urls
  url = "/get-started";
  requestURL =
    "https://showroom-gateway.nabr.devhive.net/v1/survey/data/waitlist-V2";

  //buttons
  btn_house = '[value="single_family_home"]';
  btn_apartment = '[value="multifamily_home"]';
  btn_otherResidentType = '[value="other_resident_type"]';
  btn_rent = '[value="rent"]';
  btn_own = '[value="own"]';
  btn_other = '[value="other"]';
  btn_SiliconValley = '[value="silicon_value"]';
  btn_USother = '[value="us_other"]';
  btn_internationally = "text=Somewhere else internationally";
  btn_isRepresented = '[value="is_represented"]';
  btn_isNotRepresented = '[value="is_not_represented"]';
  btn_isBroker = '[value="is_broker"]';
  btn_submit = 'button:has-text("Submit")';

  //input fields
  txt_firstName = '[placeholder="Enter first name"]';
  txt_lastName = '[placeholder="Enter last name"]';
  txt_email = '[placeholder="e.g. john.doe@gmail.com"]';
  txt_zip = '[placeholder="Enter ZIP code"]';
  txt_city = "[placeholder='Enter city']";
  dd_choose_timeFrame = 'text="Choose timeframe"';
  dd_nextYear = "text='Next year'";
  btn_termsAndConditions = 'input[type="checkbox"] >> nth=1';

  //dropdowns + options
  dd_choose_area = "text=Select area";
  ddo_SanJose = 'span:has-text("San Jose")';
  dd_number_of_berdrooms = "text=Select";
  dd_howDidYouHear = 'text="Select"';
  ddo_Google = 'text="Google"';

  //error messages
  already_used_email = 'p:has-text("This email is already being used.")';

  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  /*async submitWaitListForm(firstName: string, lastName: string, email: string, zip:string, city: string) {
        await this.clickOn(this.btn_somewhereElse);
        await this.setText(this.txt_firstName, firstName);
        await this.setText(this.txt_lastName, lastName);
        await this.setText(this.txt_email, email);
        await this.setText(this.txt_zip, zip);
        await this.clickOn(this.btn_house); 
        await this.setText(this.txt_city, city);
        await this.selectOptionFromDropdown(this.dd_choose_timeFrame, this.dd_nextYear);
        await this.clickOn(this.btn_notABroker);
        await this.clickOn(this.btn_termsAndConditions);
        await this.clickAndVerifyRequestAndResponse('https://showroom-gateway.nabr.devhive.net/v1/survey/data/waitlist',
        'post', 200, this.btn_submit);   
    } */
}
