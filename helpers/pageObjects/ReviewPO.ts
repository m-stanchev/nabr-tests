import { Page } from "@playwright/test";
import { WebActions } from "../WebActions";

export class ReviewPO extends WebActions {

    //page url
    url = '/view';
    request_url_user_unit_config = 'https://showroom-gateway.nabr.devhive.net/v1/user-unit-config'

    //buttons
    btn_payNow = 'button:has-text("Pay Now")';

    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }
}