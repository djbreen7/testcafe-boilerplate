import { Role, Selector } from 'testcafe';
import { config } from '../config/config';

export const orgAdmin: Role = Role(config.baseUrl, async t => {
    await t
        .typeText('#UserName', config.orgAdminUser)
        .typeText('#Password', config.orgAdminPass)
        .click(Selector('button').withText('Log in'));
});

export const userRole: Role = Role(config.baseUrl, async t => {
    await t
        .typeText('#UserName', config.user)
        .typeText('#Password', config.userPass)
        .click(Selector('button').withText('Log in'));
});
