import { Component, OnInit } from "@angular/core";

import { SegmentedBar, SegmentedBarItem, SelectedIndexChangedEventData } from "ui/segmented-bar";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Array<any>;
    isItemVisible: boolean = false;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor() { }

    ngOnInit(): void {
        this.items = this.createSegmentedBarItems();
    }

    onSelectedIndexChange(args: SelectedIndexChangedEventData) {
        const bar = <SegmentedBar>args.object;

        console.log("bar.selectedIndex", bar.selectedIndex);

        this.isItemVisible = !this.isItemVisible;
    }

    onLoaded(args) {
        console.log("tab onLoaded");
    }

    onUnloaded(args) {
        console.log("tab onUnloaded");
    }

    toggle() {
        this.isItemVisible = !this.isItemVisible;
        console.log(this.isItemVisible);
    }

    private createSegmentedBarItems() {
        let segmentedBarItems = [];
        let tab1 = <SegmentedBarItem>new SegmentedBarItem();
        tab1.title = "Bar >>> 1 <<<";
    
        let tab2 = <SegmentedBarItem>new SegmentedBarItem();
        tab2.title = "Bar >>> 2 <<<";
    
        segmentedBarItems.push(tab1);
        segmentedBarItems.push(tab2);
    
        return segmentedBarItems;
    }
}