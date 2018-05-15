"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.navigatingTo = navigatingTo;
function onItemTap(args) {
    console.log("onItemTap");
    var lb = args.view;
    lb.className += " my-item-selected";
    var listview = args.object;
    listview.refresh();
}
exports.onItemTap = onItemTap;
