import { EventData } from 'data/observable';
import { Page } from 'ui/page';

import { WebView } from "ui/web-view";
import * as fs from "file-system";

export function onWebViewLoaded(args) {

    let path = fs.knownFolders.currentApp().path;
    console.log(path)

    let wv = <WebView>args.object;

    let YourTxext = "Some custom text content!";
    let head = "<head><style>@font-face {font-family: 'Nasalization';src: url('file://" + path + "/fonts/Nasalization.ttf');}body {font-family: 'Nasalization';}</style></head>";
    let htmlData = "<html>" + head + "<body>" + YourTxext + "</body></html>";

    wv.android.loadDataWithBaseURL(null, htmlData , "text/html", "utf-8", "about:blank");
}