import { Timeout } from '../../utils/timeout';
import {
    searchPage
} from '../../pages'

let searchStr: string;

fixture(`GOOGLE EXAMPLE`)
    .before(async ctx => {
        console.log('hello');
        searchStr = "Chicken Soup";
    })
    .beforeEach(async t => {
    })
    .after(async ctx => {
    })

test('Search Has Results', async t => {
    await t.navigateTo(searchPage.url);
    searchPage.search(searchStr);

    await t.expect(searchPage.searchInput.value).eql(searchStr, { timeout: Timeout.MediumWait });
})
