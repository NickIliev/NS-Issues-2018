import { EventData } from 'data/observable';
import { Label } from 'ui/label';
import { Page } from 'ui/page';
import { Size, Point } from "ui/core/view";
import { StackLayout } from 'ui/layouts/stack-layout';
import { HelloWorldModel } from './main-view-model';

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function onNavigatedTo(args: EventData) {
    let page = <Page>args.object;
    let stack = <StackLayout>page.getViewById("myStack");
    let label = <Label>stack.getViewById("myLabel");

    console.log(stack.nativeView)

    console.log(stack); // StackLayout<myStack>@file:///app/main-page.xml:2:5;
    console.log(label); // Label<myLabel>@file:///app/main-page.xml:5:9;

    let stackSize: Size = stack.getActualSize();
    let stackWidth = stackSize.width; // e.g. 411.42857142857144 DP
    let stackHeight = stackSize.height; // e.g. 603.4285714285714 DP
    console.log("Actual stack size in device independent pixels: height: " + stackHeight + " width:" + stackWidth);

    let locationInWindow: Point = stack.getLocationInWindow();
    let locWindowX = locationInWindow.x;
    let locWindowY = locationInWindow.y;
    console.log("locWindowX: " + locWindowX);
    console.log("locWindowY: " + locWindowY);

    let locationOnScreen : Point = stack.getLocationOnScreen();
    let locScreenX = locationOnScreen.x;
    let locScreenY = locationOnScreen.y;

    console.log(locationOnScreen.x);
    console.log(locationOnScreen.y);

    let labelLocationRelativeToStack: Point = label.getLocationRelativeTo(stack);
    let labelRelativeX = labelLocationRelativeToStack.x;
    let labelRelativeY = labelLocationRelativeToStack.y;
    console.log(labelLocationRelativeToStack.x);
    console.log(labelLocationRelativeToStack.y);

    
    let stackRawHeight = stack.getMeasuredHeight();
    let stackRawWidth = stack.getMeasuredWidth();
}

export function onStackLoaded(args: EventData) {
    // let stack = <StackLayout>args.object;
    // let label = <Label>stack.getViewById("myLabel");

    // console.log(stack);

    // setTimeout(() => {
    //     let stackSizeDP = stack.getActualSize();
    //     console.log("Actual stack size in device independent pixels: height: " + stackSizeDP.height + " width:" + stackSizeDP.width);

    //     console.log(label.getLocationRelativeTo(stack).x);
    //     console.log(label.getLocationRelativeTo(stack).y);

    //     console.log(stack.getMeasuredHeight());
    //     console.log(stack.getMeasuredState());
    //     console.log(stack.getMeasuredWidth());
    // }, 100);

    // console.log(stack.getLocationInWindow().x);
    // console.log(stack.getLocationInWindow().y);

    // console.log(stack.getLocationOnScreen().x);
    // console.log(stack.getLocationOnScreen().y);

    // console.log(label.getLocationRelativeTo(stack).x);
    // console.log(label.getLocationRelativeTo(stack).y);

    
}