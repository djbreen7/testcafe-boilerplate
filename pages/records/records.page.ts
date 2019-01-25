import { Selector, t } from "testcafe";
import XPathSelector from '../../utils/xpath-selector';

export default class RecordsPage {
    path: string;
    requestRecordsButton: Selector;

    constructor() {
        this.path = "/records/request";
        this.requestRecordsButton = XPathSelector(`//button[contains(text(),'Request Records')]`);
        // this.newReleaseButton = Selector('button').withText('New Release');
    }

}
