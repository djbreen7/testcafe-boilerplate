import { Selector, t } from "testcafe";
import XPathSelector from '../../utils/xpath-selector';

export default class SearchPage {
    url: string;
    searchInput: Selector;
    searchButton: Selector;

    constructor() {
        this.url = "https://www.google.com/";
        this.searchInput = XPathSelector(`//input[@title='Search']`);
        this.searchButton = XPathSelector(`//input[@value='Google Search']`);
    }

    public async search(searchStr: string) {
        await t
            .typeText(this.searchInput, searchStr)
            .click(this.searchButton)
    }
}
