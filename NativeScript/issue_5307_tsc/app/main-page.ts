/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import * as application from "application";

export function onNavigatingTo(args) {
    console.log("============= onNavigatingTo =============");
    console.log("foregroundActivity: " + application.android.foregroundActivity); // undefined
    console.log("startActivity: " + application.android.startActivity); // com.tns.NativeScriptActivity@dbcd659
}


export function onLoaded(args) {
    console.log("============= onLoaded =============");
    console.log("foregroundActivity: " + application.android.foregroundActivity); // undefined
    console.log("startActivity: " + application.android.startActivity); // com.tns.NativeScriptActivity@dbcd659
}


export function onNavigatedTo(args) {
    console.log("============= onNavigatedTo =============");
    console.log("foregroundActivity: " + application.android.foregroundActivity); // com.tns.NativeScriptActivity@dbcd659
    console.log("startActivity: " + application.android.startActivity); // com.tns.NativeScriptActivity@dbcd659
}