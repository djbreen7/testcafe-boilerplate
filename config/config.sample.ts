const env: string = (!!process.argv.find((val) => val.includes("env")))
            ? process.argv.find((val) => val.includes("env")).split("=")[1]
            : "Integration";

const environments = {
    Integration: {
        appId: "",
        domain: "example.com",
        baseUrl: "https://example.com",
        registerUrl: "https://register.kno2fy-integration.com",
        directDomain: "",
        organizationId: "",
        sysAdmin: "",
        sysAdminPass: "",
        orgAdminUser: "",
        orgAdminPass: "",
        user: "",
        userPass: "",
    }
}

export const config = environments[env];

// Duplicate this file and rename to config.ts within the same folder
// Fill in the empty strings (not all need to be filled out)