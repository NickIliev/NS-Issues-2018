import { CheckBox, CheckBoxInterface } from 'nativescript-checkbox';
import { EventData, Observable } from 'tns-core-modules/data/observable';
import { topmost } from 'tns-core-modules/ui/frame';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Page } from 'tns-core-modules/ui/page';

export function pageLoaded(args: EventData) {
    let page = <Page>args.object;

    let vm = new Observable();
    vm.set("checkProp", true)
    vm.set("myCheckText", "check me out");
    vm.set("myCheckColor", "red");

    page.bindingContext = vm;
}

export function onAdd() {
    let stack= <StackLayout>topmost().getViewById('stack');

    let newCheckBox = createNewCheckBox();

    stack.addChild(newCheckBox)
}

export function createNewCheckBox() {
    // <CheckBox:CheckBox checked="{{ checkProp }}" text="{{ myCheckText }}" fillColor="{{ myCheckColor }}" id="myCheckbox" />
    let checkBox : any = new CheckBox();
    checkBox.checked = true;
    checkBox.text = "New CheckBox";
    checkBox.fillColor = "orange";

    checkBox.on("checkedChange", (args) => {
        console.log("On checkedChange")
        console.log("checked: " + args.value);
    })

    return checkBox;
}

export function toggleCheck() {
    let checkBox = <CheckBox>topmost().getViewById('myCheckbox');
    checkBox.toggle();

    getCheckProp();
}

export function getCheckProp() {
    let checkBox = <CheckBox>topmost().getViewById('myCheckbox');
    console.log('checked prop value = ' + checkBox.checked);
}
