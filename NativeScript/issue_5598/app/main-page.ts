import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import { DatePicker } from 'ui/date-picker';

let vm = new HelloWorldModel();
let datePicker;

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = vm;
}

export function setToday() {
    console.log("setToday");
    vm.set("date", new Date());
}