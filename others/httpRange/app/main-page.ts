import { EventData } from 'data/observable';
import { Page } from 'ui/page';

import { request, HttpResponse } from "http";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
}

export function makeRangeRequest() {
    console.log("makeRangeRequest")

    let result;

    request({
        url: "https://httpbin.org/range/4096",
        method: "GET",
        headers: { "Range": "bytes=500-1024", "Accept-Ranges": "bytes", "Content-Type": "application/octet-stream"}
    }).then((response) => {

        console.log(response.statusCode);
        console.dir(response.headers);
    
        let result = response.content.raw;
        console.log("RESULT: " + result);
    }, (err) => {
        console.log("Error occurred " + err);
    });
}