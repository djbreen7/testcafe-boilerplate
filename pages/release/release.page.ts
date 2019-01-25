import { Selector, t } from "testcafe";
import XPathSelector from '../../utils/xpath-selector';

export default class ReleasePage {
    path: string;
    newReleaseButton: Selector;

    constructor() {
        this.path = "/release";
        this.newReleaseButton = XPathSelector(`//button[contains(text(),'New Release')]`);
        // this.newReleaseButton = Selector('button').withText('New Release');
    }

    public async doStuff(searchStr: string) {
        // doStuff
    }
}
