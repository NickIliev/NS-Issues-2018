import { Component, OnInit } from "@angular/core";
import { TestPlugin } from "nativescript-test-plugin";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {

    testPlugin = new TestPlugin();
    message: string;

    constructor() {
       this.message = this.testPlugin.message;
     }
}