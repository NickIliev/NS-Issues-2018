import { EventData } from 'data/observable';
import { Page } from 'ui/page';

// import * as radioModule from 'nativescript-radio';

let page: Page;

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    page = <Page>args.object;
}

// export function onCheckedChanged(args: EventData) {
//     var group = args.object as radioModule.RadioGroup;
//     var checked = group.checkedButton;
//     var radioButton = group.android.findViewById(checked);
//     console.log("Checked changed");
// }

// export function onChangeChecked(args: EventData) {
//     var radio = page.getViewById("firstRadio") as radioModule.RadioButton;
//     radio.checked = true;
// }