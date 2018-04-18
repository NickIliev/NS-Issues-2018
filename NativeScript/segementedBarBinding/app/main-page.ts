import { EventData, Observable } from 'data/observable';
import { Page } from 'ui/page';
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";

const vm = new Observable();

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {

    let page = <Page>args.object;

    vm.set("segmentedBarItems", createBarItems());
    vm.set("isItemVisible", true);

    page.bindingContext = vm;
}

export function onSegmentedBarLoaded(args) {
    const segmetedBar = <SegmentedBar>args.object;

    segmetedBar.on("selectedIndexChange", (args: any) => {
            
        switch (segmetedBar.selectedIndex) {
            case 0:
                console.log("segmetedBar.selectedIndex: ", segmetedBar.selectedIndex);
                vm.set("isItemVisible", true);
                break;
            case 1:
                console.log("segmetedBar.selectedIndex: ", segmetedBar.selectedIndex);
                vm.set("isItemVisible", false);
                break;
            default:
                console.log("DEFFFF")
                break;
        }
    })
} 

export function toggle() {
    vm.set("isItemVisible", !vm.get("isItemVisible"));
}

function createBarItems() {
    let segmentedBarItems = [];
    let tab1 = <SegmentedBarItem>new SegmentedBarItem();
    tab1.title = "Bar 1";

    let tab2 = <SegmentedBarItem>new SegmentedBarItem();
    tab2.title = "Bar >>> 2 <<<";

    segmentedBarItems.push(tab1);
    segmentedBarItems.push(tab2);

    return segmentedBarItems;
}