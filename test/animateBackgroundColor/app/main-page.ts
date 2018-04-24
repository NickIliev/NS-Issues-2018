import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

import { AnimationCurve } from "tns-core-modules/ui/enums";
import { Animation } from "tns-core-modules/ui/animation";

let myView;

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();

    myView = page.getViewById("myView");
}

export function anime() {
    myView.animate({
        backgroundColor: "#414b7d",
        curve: AnimationCurve.easeOut,
        delay: 300,
        duration: 3000,
        iterations: 3,
        opacity: 0.8,
        rotate: 360,
        scale: { x: 2, y: 2 },
        translate: { x: 0, y: 200 }
    }).then(() => {
        console.log("Animation finished");
    }).catch((e) => {
        console.log(e.message);
    })
}