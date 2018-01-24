import { EventData } from 'data/observable';
import { Page } from 'ui/page';

import { fromFile } from "tns-core-modules/image-source";
import * as fs from "file-system";

import * as bghttp from "nativescript-background-http";
let session = bghttp.session("image-upload");

export function navigatingTo(args: EventData) {
    console.log("navigatingTo'")
    let page = <Page>args.object;
}

export function upload() {
    
    let imageSource = fromFile("~/images/icon.png");
    console.log(imageSource)

    let folder = fs.knownFolders.documents();
    let filePath = fs.path.join(folder.path, "Test.png");
    let saved = imageSource.saveToFile(filePath, "png");

    let request = {
            url: "https://httpbin.org/post",
            method: "POST",
            headers: {
                "Content-Type": "application/octet-stream",
                "File-Name": "someName"
            },
            description: "{ 'uploading': someFile }" 
        };
    
    let task: bghttp.Task;
    task = session.uploadFile(filePath, request);

    task.on("progress", logEvent);
    task.on("error", logEvent);
    task.on("complete", logEvent);

    function logEvent(e) {
        console.log("currentBytes: " + e.currentBytes);
        console.log("totalBytes: " + e.totalBytes);
        console.log("eventName: " + e.eventName);
    }
}

