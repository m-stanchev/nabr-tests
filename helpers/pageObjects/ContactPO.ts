import { Page } from "@playwright/test";
import { WebActions } from "../WebActions";

export class ContactPO extends WebActions {

    //page url
    page_url = '/contact';
    request_url = 'https://showroom-backend.nabr.devhive.net/api/v1/contact';

    //buttons
    btn_customer = "button[value='customer']";
    btn_partner = "button[value='partner']";
    btn_press = "button[value='press']";
    btn_submit = 'button:has-text("Submit")';
    btn_explore_our_blog = 'button:has-text("Explore our blog")';
    btn_write_another_message = 'button:has-text("Write another message")';

    //input fields
    txt_customer_name = '[name="nameCustomer"]';
    txt_customer_email = '[name="emailCustomer"]';
    txt_customer_phone = '[name="phoneCustomer"]';
    txt_customer_message = '[name="messageCustomer"]';
    txt_partner_company_name = '[name="companyNamePartner"]';
    txt_partner_name = '[name="namePartner"]';
    txt_partner_title = '[name="titlePartner"]';
    txt_partner_email = '[name="emailPartner"]';
    txt_partner_phone = '[name="phonePartner"]';
    txt_partner_message = '[name="messagePartner"]';
    txt_press_company_name = '[name="companyNamePress"]';
    txt_press_name = '[name="namePress"]';
    txt_press_title = '[name="titlePress"]';
    txt_press_email = '[name="emailPress"]';
    txt_press_phone = '[name="phonePress"]';
    txt_press_message = '[name="messagePress"]';
    
    //dropdown + options
    dd_partners_types = "[aria-label='Partner type']";
    ddo_architect = 'li:has-text("Architect")';

    //messages
    txa_message_is_required_field = 'p:has-text("Message is a required field")';

    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }
}