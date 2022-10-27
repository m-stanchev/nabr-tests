import { Page } from "@playwright/test";
import { WebActions } from "../WebActions";

export class HomePagePO extends WebActions{

    //buttons
    btn_submit = 'button:has-text("Submit")';
    btn_ourHomes = 'a[href="/our-homes"]';

    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }
}