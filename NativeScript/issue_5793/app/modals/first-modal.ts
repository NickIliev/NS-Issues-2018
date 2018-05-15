import { View, ShownModallyData } from 'tns-core-modules/ui/core/view';

let view: View;
let closeCallback: Function;
let context: any;


export function onShowingModally(args: ShownModallyData) {
    closeCallback = args.closeCallback;
    context = args.context;

    console.log("modal-layout showingModally");
}

export function onLoaded(args) {
    view = args.object;

    console.log("modal-layout loaded");
}

export function onNavigatingTo() {
    console.log("modal-layout onNavigatingTo");
}

export function onNavigatingFrom() {
    console.log("modal-layout onNavigatingFrom");
}

export function onNavigatedTo() {
    console.log("modal-layout onNavigatedTo");
}

export function onNavigatedFrom() {
    console.log("modal-layout onNavigatedFrom");
}

export function onCloseModal(args) {
    closeCallback(context);

    (args.object as View).closeModal();
}

export function openSecondModal() {
    view.showModal("modals/second-modal", context, closeCallback);
}