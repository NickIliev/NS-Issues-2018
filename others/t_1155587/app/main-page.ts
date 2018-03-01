import { EventData } from 'data/observable';
import { Page } from 'ui/page';

import { RadioButton, RadioGroup } from 'nativescript-radio';
import { StackLayout } from "ui/layouts/stack-layout";

import { Color } from "color";

let page: Page;
let stack: StackLayout;

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    page = <Page>args.object;
    stack = page.getViewById("container");
}

export function onCheckRadioButtons() {
    let firstRadio: RadioButton = page.getViewById("firstRadio");
    let secondRadio: RadioButton = page.getViewById("secondRadio");
    
    console.log("firstRadio: " + firstRadio.checked);
    console.log("secondRadio: " + secondRadio.checked);
}

export function onAddRadioGroup(args: EventData) {
    let newGroup = createRadioGroup();
    stack.addChild(newGroup);
}

export function createRadioGroup() {
    // cast the radioGroup to any so we could reuse the addChild from the extender StackLayout (RsdioGroupBase is extending StackLayout)
    let radioGroup: any = new RadioGroup(); 

    radioGroup.on("checkedChanged", (args) => {
        console.log("on checkedChanged");
    })

    let radioButton1 = new RadioButton();
    radioButton1.text = "California";
    radioButton1.color = new Color("red");
    radioButton1.tint = "green";
    radioButton1.fontSize = 28;

    let radioButton2 = new RadioButton();
    radioButton2.text = "Arisona";
    radioButton2.checked = true;
    radioButton1.color = new Color("blue");
    radioButton1.tint = "green";
    radioButton1.fontSize = 28;

    let radioButton3 = new RadioButton();
    radioButton3.text = "Ohio";

    radioGroup.addChild(radioButton1);
    radioGroup.addChild(radioButton2);
    radioGroup.addChild(radioButton3);

    return radioGroup;
}

// <ui:RadioGroup checkedChanged="onCheckedChanged" id="myRadioGroup">
//     <ui:RadioButton id="firstRadio" text="California" color="#000000" tint="#607d8b" backgroundColor="green" fontSize="20"/>
//     <ui:RadioButton id="secondRadio" checked="true" text="California2" color="#0000FF" tint="#607d8b" backgroundColor="green" fontSize="20" marginTop="20"/>
//     <ui:RadioButton id="thridRadio"  text="California3" color="#0000FF" tint="#607d8b" backgroundColor="green" fontSize="20" marginTop="20"/>
// </ui:RadioGroup>