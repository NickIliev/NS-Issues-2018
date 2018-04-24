
import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

import { WebViewInterface } from "nativescript-webview-interface";

export function navigatingTo(args: EventData) {

    let page = <Page>args.object;

    setupWebViewInterface(page);

    page.bindingContext = new HelloWorldModel();
}

function setupWebViewInterface(page){
    const webView = page.getViewById('webView');
    let oWebViewInterface = new WebViewInterface(webView, 'https://www.google.com');
}