import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

let vm;

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    vm = new HelloWorldModel();
    page.bindingContext = vm;
}

export function onFocus(args) {
    console.log("onFocus")


    if (vm.get("clr") === "red") {
        vm.set("clr", "blue");
    } else {
        vm.set("clr", "red");
    }
}

export function onBlur(args) {
    console.log("onBlur")

    if (vm.get("clr") === "red") {
        vm.set("clr", "blue");
    } else {
        vm.set("clr", "red");
    }
}