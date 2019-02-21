
const env = (!!process.argv.find((val) => val.includes("env")))
            ? process.argv.find((val) => val.includes("env")).split("=")[1]
            : "Integration";

import * as cfg from './config.json';
export const config = cfg[env];
