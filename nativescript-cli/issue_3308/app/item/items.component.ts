import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { WebView } from "ui/web-view";
import { isIOS } from "platform";



@Component({
    selector: "ns-items",
    moduleId: __filename,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    onWebViewLoaded(args) {
        let wv = <WebView>args.object;
        let iosUiWebView = <UIWebView>wv.ios;

        // if (isIOS) {
        //     let cachePolicy = NSURLCache.alloc().initWithMemoryCapacityDiskCapacityDiskPath(0, 0, "nsurlcache")
        //     NSURLCache.sharedURLCache = cachePolicy;

        //     NSURLCache.sharedURLCache.removeAllCachedResponses();
        // }
    }
}