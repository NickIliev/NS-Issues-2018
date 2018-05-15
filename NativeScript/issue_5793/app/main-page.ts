
import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { View } from 'tns-core-modules/ui/core/view';

let view: View;

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    view = <View>args.object;
}

export function openFirstModal() {
    view.showModal("modals/first-modal", "first context", closeCallback);
}

function closeCallback(context) {
    console.log("close callback");
    console.log("main-page Received context: ", context);
}