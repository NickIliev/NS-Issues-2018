import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    constructor(private itemService: ItemService) { }

    
    ngOnInit(): void {
        // using the debugger statement to force a breakpoint and from here using F10
        // however any changed during debug won't be transpiled to JavaScript so the app has to be rebuild
        // using debugger' along with "stopOnEntry": true in launch.json is resolving some of the issues

        // debugger; 
        console.log("ngOnInit");
        this.items = this.itemService.getItems();
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit");
    }

    ngAfterViewChecked() {
        console.log("ngAfterViewChecked");
    }
}