import { EventData } from 'data/observable';
import { ListView } from 'ui/list-view';
import { HelloWorldModel } from './main-view-model';
import * as imagepicker from "nativescript-imagepicker";
let list: ListView;
let context = imagepicker.create({
    mode: "multiple" // use "multiple" for multiple selection
});

export function onListLoaded(args: EventData) {
    list = <ListView>args.object;
}

export function addItems() {
    context
        .authorize()
        .then(() => {
            return context.present();
        })
        .then((selection) => {
            selection.forEach((selected) => {
                // process the selected image
            });
            list.items = selection;
        }).catch((e) => {
            // process error
        });
}