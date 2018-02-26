import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
let vm;

export function navigatingTo(args: EventData) {

    let page = <Page>args.object;
    vm = new HelloWorldModel();
    page.bindingContext = vm;
}

export function bindToNull() {
    vm.set("message", null);

    console.log("[bindToNull] message: " + vm.get("message"));
}

export function bindToEmptyString() {
    vm.set("message", "");

    console.log("[bindToEmptyString] message: " + vm.get("message"));
}