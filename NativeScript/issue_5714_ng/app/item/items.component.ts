import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { connectionType, getConnectionType } from "tns-core-modules/connectivity";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    connectionType: string = "";

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();

        let connectionType = getConnectionType();
        switch (connectionType) {
            case 0:
                this.connectionType = "None";
                break;
            case 1:
                this.connectionType = "Wi-Fi";
                break;
            case 2:
                this.connectionType = "Mobile";
                break;
            default:
                break;
        }
    }
}