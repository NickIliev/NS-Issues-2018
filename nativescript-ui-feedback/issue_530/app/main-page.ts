import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

import { ListViewEventData } from "nativescript-pro-ui/listview";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {

    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function onItemSelected(args: ListViewEventData) {
    console.log("onItemSelected");
    console.log(args.index);
}