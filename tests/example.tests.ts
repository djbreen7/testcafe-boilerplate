import { orgAdmin } from '../roles/roles';
import { config } from '../config/config';
import { Timeout } from '../utils/timeout';
import {
    recordsPage,
    releasePage
} from '../pages'

let searchStr: string;

fixture(`EXAMPLE`)
    .before(async ctx => {
    })
    .beforeEach(async t => {
        await t.useRole(orgAdmin);
    })
    .after(async ctx => {
    })

test('Is Release Page', async t => {
    // await t.navigateTo(releasePage.path);
    await t.navigateTo(`${config.baseUrl}/#/release`);
    
    await t.expect(releasePage.newReleaseButton.exists).ok();
})

test('Is Records Page', async t => {
    // await t.navigateTo(recordsPage.path);
    await t.navigateTo(`${config.baseUrl}/#/records/request`);

    await t.expect(recordsPage.requestRecordsButton.exists).ok();
})
