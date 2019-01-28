
const env = (!!process.argv.find((val) => val.includes("env")))
            ? process.argv.find((val) => val.includes("env")).split("=")[1]
            : "Integration";

export const config = require('./config.json')[env];
