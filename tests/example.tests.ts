import { orgAdmin } from '../roles/roles';
import { config } from '../config/config';
import { Timeout } from '../utils/timeout';
import {
    recordsPage,
    releasePage
} from '../pages'
import { t } from 'testcafe';

fixture(`EXAMPLE`)
    .before(async ctx => {
    })
    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .useRole(orgAdmin)
            .navigateTo(config.baseUrl); // Temporary workaround - see https://github.com/DevExpress/testcafe/issues/2195
    })
    .after(async ctx => {
    })

test('Is Release Page', async t => {
    await t.navigateTo(releasePage.path);
    
    await t.expect(releasePage.newReleaseButton.exists).ok();
})

test('Is Records Page', async t => {
    await t.navigateTo(recordsPage.path);

    await t.expect(recordsPage.requestRecordsButton.exists).ok();
})
