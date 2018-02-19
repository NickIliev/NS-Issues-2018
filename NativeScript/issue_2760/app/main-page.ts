/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import * as drawingPad from "nativescript-drawingpad";

let page;
// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();

    getMyDrawing();

}


export function getMyDrawing() {      
    let drawingPad = page.getViewById('drawingPad');      
    drawingPad.getDrawing().then((res) => {        
        console.log(res);    
    });  
}


// If you want to clear the signature/drawing...
export function  clearMyDrawing() {
    let drawingPad = page.getViewById('drawingPad');      
    drawingPad.clearDrawing();
}