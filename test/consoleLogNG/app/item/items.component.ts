import { Component, OnInit } from "@angular/core";
import { EventData } from "data/observable";
import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        // console.log("this.items");
        // console.log(this.items);
    }

onStackLoaded(args: EventData) {
    console.log("onStackLoaded");
    console.log(args.object); // TypeError: Converting circular structure to JSON
    console.log("" + args.object); // OK prinst the object
    console.log(JSON.stringify(args)); // OK prinst the object
    console.log("" + JSON.stringify(args)); // OK prinst the object

    // console.log(args.eventName); // TypeError: Converting circular structure to JSON
    // console.log("" + args.eventName); // OK prinst the object
}
}