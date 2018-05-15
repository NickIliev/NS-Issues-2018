import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { Label } from "ui/label";
import { ListView, ItemEventData } from "ui/list-view";
import { HelloWorldModel } from './main-view-model';
import { isIOS } from "platform";


// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    let page = <Page>args.object;

    page.bindingContext = new HelloWorldModel();
}

export function onItemTap(args: ItemEventData) {
    console.log("onItemTap");

    let lb = args.view as Label;
    lb.className += " my-item-selected";

    let listview = <ListView>args.object;
    listview.refresh();
}

