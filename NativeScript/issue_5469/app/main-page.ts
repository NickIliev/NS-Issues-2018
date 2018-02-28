import { EventData, Observable } from 'data/observable';
import { Page } from 'ui/page';
let vm;

declare let java: any;

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    vm = new Observable();

    let javaDate = new java.util.Date();
    console.log("javaDate: " + javaDate)

    vm.set("date", new Date());

    page.bindingContext = vm;
}

export function showDate() {
    vm.set("date", new Date());

    let javaDate = new java.util.Date();
    console.log("javaDate: " + javaDate)
}