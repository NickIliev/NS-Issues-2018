import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import * as app from "application";
import { Button } from "ui/button";

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
}

export function callReset(args: EventData) {

    setTimeout(() => {
        app._resetRootView("app-root");
    }, 3000);
}
