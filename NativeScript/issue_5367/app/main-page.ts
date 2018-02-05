import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

import { isAndroid, isIOS } from "platform";
if (isAndroid) {
    // Android code here
} else if (isIOS) {
    // iOS code here
}

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}