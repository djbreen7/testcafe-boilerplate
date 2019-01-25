const createTestCafe = require("testcafe");
const path = require('path');
const headless = process.argv.includes('--headless');

let testcafe = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();

        return runner
            .screenshots('screenshots/testsuite', true)
            .src([
                path.resolve(__dirname, 'example.tests.ts')
            ])
            .browsers([headless ? 'chrome:headless' : 'chrome'])
            .run();
    })
    .then(async failedCount => {
        console.log(` ${failedCount} failures`);
        testcafe.close();
        process.exit();
    })
    .catch(async err => {
        console.log(err);
        testcafe.close();
        process.exit(1);
    })