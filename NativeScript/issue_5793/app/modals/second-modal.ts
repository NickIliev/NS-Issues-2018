import { View, ShownModallyData } from 'tns-core-modules/ui/core/view';

let view: View;
let closeCallback: Function;
let firstContext: any;

export function onShowingModally(args: ShownModallyData) {
    closeCallback = args.closeCallback;
    firstContext = args.context;

    console.log("SECOND modal-layout showingModally");
}

export function onLoaded() {
    console.log("SECOND modal-layout loaded");
}

export function onNavigatingTo() {
    console.log("SECOND modal-layout onNavigatingTo");
}

export function onNavigatingFrom() {
    console.log("SECOND modal-layout onNavigatingFrom");
}

export function onNavigatedTo() {
    console.log("SECOND modal-layout onNavigatedTo");
}

export function onNavigatedFrom() {
    console.log("SECOND modal-layout onNavigatedFrom");
}

export function onCloseModal(args) {
    closeCallback("Second context");

    (args.object as View).closeModal();
}