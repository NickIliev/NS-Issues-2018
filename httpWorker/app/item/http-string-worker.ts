require("globals");

import * as http from "tns-core-modules/http";

declare let postMessage: any;

http.getString("https://httpbin.org/get").then((r) => {
    postMessage(r);
}, (e) => {
    throw e;
});