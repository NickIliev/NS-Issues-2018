import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import * as application from "tns-core-modules/application";
    
export function onNavigatingTo(args: EventData) {
    let page = <Page>args.object;

    console.log("onNavigatingTo > application.android.startActivity: " + application.android.startActivity); // the start activity
    console.log("onNavigatingTo > application.android.foregroundActivity: " + application.android.foregroundActivity); // undefined
}

export function onLoaded(args: EventData) {
    application.on(application.resumeEvent, (args: application.ApplicationEventData) => {
        if (args.android) {
            // For Android applications, args.android is an android activity class.
            console.log("application.resumeEvent >>> Activity: " + args.android);
        } else if (args.ios) {
            // For iOS applications, args.ios is UIApplication.
            console.log("UIApplication: " + args.ios);
        }
    });

    console.log("onLoaded >>> application.android.startActivity: " + application.android.startActivity);  // the start activity
    console.log("onLoaded >>> application.android.foregroundActivity: " + application.android.foregroundActivity); // undefined
}

export function onNavigatedTo(args: EventData) {
    console.log("onNavigatedTo >>>>> application.android.startActivity: " + application.android.startActivity); // the start activity
    console.log("onNavigatedTo >>>>> application.android.foregroundActivity: " + application.android.foregroundActivity);  // the foreground activity
}