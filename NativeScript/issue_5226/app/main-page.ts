import { EventData } from 'data/observable';
import * as application from "application";

export function navigatingTo(args: EventData) {

    let appContext = <android.content.Context>application.android.context;
    let windowManager = appContext.getSystemService(android.content.Context.WINDOW_SERVICE);
    let rotation = windowManager.getDefaultDisplay().getRotation();

    console.log(rotation);

    application.on(application.orientationChangedEvent, (args) => {
        console.log("orientationChangedEvent");
        console.log(args.newValue);
    });
}