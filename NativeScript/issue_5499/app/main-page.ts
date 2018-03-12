import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { ActionOptions, CancelableOptions, action } from "tns-core-modules/ui/dialogs";

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;

    openDialog();
}

export function openDialog() {
    let options: ActionOptions = {
        title: "some title",
        message: "some message",
        cancelButtonText: "Close",
        actions: ["yes", "no"],
        cancelable: false
    }
    
    action(options).then(res => {
        console.log(res);
    })
}