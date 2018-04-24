import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { AnimationCurve } from "tns-core-modules/ui/enums";
import { Animation } from "tns-core-modules/ui/animation";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls:["style.css"]
})
export class ItemsComponent implements OnInit {
    items: Item[];
    myView: any;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    onLabelLoaded(args) {
        this.myView = args.object;
    }

    animate() {
        this.myView.animate({
            backgroundColor: "#414b7d",
            curve: AnimationCurve.easeOut,
            delay: 300,
            duration: 3000,
            iterations: 3,
            opacity: 0.8,
            rotate: 360,
            scale: { x: 2, y: 2 },
            translate: { x: 0, y: 200 }
        }).then(() => {
            console.log("Animation finished");
        }).catch((e) => {
            console.log(e.message);
        })
    }
}