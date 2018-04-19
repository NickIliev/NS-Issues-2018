import { Component, OnInit } from "@angular/core";
import { SegmentedBar, SegmentedBarItem, SelectedIndexChangedEventData } from "ui/segmented-bar";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    selectedIndex: number;
    items: Array<any>;
    isItemVisible: boolean;

    constructor() { }

    ngOnInit(): void {
        this.items = this.createSegmentedBarItems();
        this.isItemVisible = true;
    }

    // THIS does not work (the same code with the toogle function below is working)
    onBarLoaded(args) {
        const segmentedBar = <SegmentedBar>args.object;

        // Chainging the isItemVisible binding is working BUT not updating the UI
        segmentedBar.on("selectedIndexChange", (args: SelectedIndexChangedEventData) => {

            console.log("segmetedBar.selectedIndex: ", segmentedBar.selectedIndex); // works as expected
            console.log("args.oldIndex: ", args.oldIndex); // undefined
            console.log("args.newIndex: ", args.newIndex); // undefined
            // Not working
            this.isItemVisible = !this.isItemVisible;

            // switch (segmentedBar.selectedIndex) {
            //     case 0:
            //         this.isItemVisible = true;
            //         // console.log(this.isItemVisible); //the value is changed but the UI is not updated
            //         break;
            //     case 1:
            //         this.isItemVisible = false;
            //         // console.log(this.isItemVisible); //the value is changed but the UI is not updated
            //         break;
            //     default:
            //         console.log("DEFFFF")
            //         break;
            // }
        })
    }

    // THIS works
    toggle() {
        console.log("toggle");
        this.isItemVisible = !this.isItemVisible;
    }

    private createSegmentedBarItems() {
        let segmentedBarItems = [];
        let tab1 = <SegmentedBarItem>new SegmentedBarItem();
        tab1.title = "Bar 1";
    
        let tab2 = <SegmentedBarItem>new SegmentedBarItem();
        tab2.title = "Bar >>> 2 <<<";
    
        segmentedBarItems.push(tab1);
        segmentedBarItems.push(tab2);
    
        return segmentedBarItems;
    }
}