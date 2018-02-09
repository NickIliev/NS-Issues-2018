import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { TextField } from 'tns-core-modules/ui/text-field';
import { HelloWorldModel } from './main-view-model';

let tf1, tf2, tf3, tf4: TextField;

export function navigatingTo(args: EventData) {

    let page = <Page>args.object;

    tf1 = page.getViewById("tf1");
    tf2 = page.getViewById("tf2");
    tf3 = page.getViewById("tf3");
    tf4 = page.getViewById("tf4");

    page.bindingContext = new HelloWorldModel();
}

export function focusSecond(args) {
    tf2.focus();
}
export function focusThird(args) {
    tf3.focus();
}
export function focusLast(args) {
    tf4.focus();
}