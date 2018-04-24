/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

import { topmost } from "ui/frame"
import { AnimationCurve } from "ui/enums";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {

    let page = <Page>args.object;

    page.bindingContext = new HelloWorldModel();
}

export function navigateWithSlideRight() {
    const navigationEntry = {
        moduleName: "main-page",
        animated: true,
        // Set up a transition property on page navigation.
        transition: {
            name: "slideRight",
            duration: 380,
            curve: AnimationCurve.easeIn
        }
    };
    const frame = topmost();
    frame.navigate(navigationEntry);
}