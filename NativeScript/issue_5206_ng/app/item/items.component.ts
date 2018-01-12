import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { ImageSource, fromFile } from "image-source";

@Component({
    selector: "ns-items",
    moduleId: __filename,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    imageSource : ImageSource;

    constructor(private itemService: ItemService) { 
        this.imageSource = fromFile("~/assets/icon.png");
        console.log("height: " + this.imageSource.height + "; width: " + this.imageSource.width);
    }

    ngOnInit(): void {
        this.items = this.itemService.getItems();

    }
}