import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { ListView, ItemEventData } from "ui/list-view";
import { Label } from "ui/label";
import { TouchGestureEventData } from "ui/gestures";

declare let UITableViewCellSelectionStyle: any;
let listview: ListView;


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    private items: Array<any>;

    constructor(private _page:Page) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.items = [
            {id: 1, Description: "Item 1"},
            {id: 2, Description: "Item 2"},
            {id: 3, Description: "Item 3"},
            {id: 4, Description: "Item 4"},
            {id: 5, Description: "Item 5"},
            {id: 6, Description: "Item 6"},
            {id: 7, Description: "Item 7"},
            {id: 8, Description: "Item 8"},
            {id: 9, Description: "Item 9"}
        ];
    }

    onItemTap(args: ItemEventData) {
        console.log("args.view: ", args.view);
        console.log("args.view.id: ", args.view.id);
        let lb = <Label>this._page.getViewById(args.view.id);
        console.log("lb: ", lb);

        lb.className = "item-selected";

        // the bugis that we have to manually refresh the scrollview on iOS
        let listview = args.object as ListView;
        listview.refresh();
    }
}
