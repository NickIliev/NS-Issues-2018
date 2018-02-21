let page;
let navFrame, secondNavFrame;
import { EventData, Observable } from "data/observable";
import * as frame from "ui/frame";
import { GridLayout } from "ui/layouts/grid-layout";

export function onLoaded(args) {
    let contanier = <GridLayout>args.object;

    navFrame = contanier.getViewById("navFrame");
    secondNavFrame = contanier.getViewById("secondNavFrame");
    navFrame.navigate("./firstFramePages/first")
    secondNavFrame.navigate("./secondFramePages/first")
};

export function navToFirst() {
    navFrame.navigate("./firstFramePages/first")
}

export function navToSecond() {
    navFrame.navigate("./firstFramePages/second")
}

export function navOnSecondFrameToFirst() {
    secondNavFrame.navigate("./secondFramePages/first")
}

export function navOnSecondFramToSecond() {
    secondNavFrame.navigate("./secondFramePages/second")
}
