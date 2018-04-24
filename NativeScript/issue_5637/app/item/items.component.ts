import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { Item } from "./item";
import { ItemService } from "./item.service";
import { topmost } from "ui/frame";


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService, private _page: Page) { 
        // this._page.on(Page.navigatedToEvent, this.c);
    }

    ngOnInit(): void {
        console.log("ngOnInit");
        this.items = this.itemService.getItems();
    }

ngAfterViewInit() {
    this.c(this._page);
}

    private c(page) {

        console.log(page);
        if (page.ios) {
          console.log("Code Running")
          page.actionBarHidden = false;
          page.statusBarStyle = "dark";
    
          var navigationBar = page.ios.navigationController.navigationBar;
          console.log(navigationBar);
          navigationBar.barTintColor = UIColor.colorWithRedGreenBlueAlpha(
            0.011,
            0.278,
            0.576,
            1
          );
        //   navigationBar.titleTextAttributes = new NSDictionary(
        //     [UIColor.whiteColor],
        //     [NSForegroundColorAttributeName]
        //   );
          navigationBar.barStyle = 1;
          navigationBar.tintColor = UIColor.whiteColor;
          navigationBar.setBackgroundImageForBarMetrics(
            UIImage.new(),
            UIBarMetrics.Default
          );
          navigationBar.shadowImage = UIImage.new();
          navigationBar.translucent = false;
          console.log("Code Ran")
        }
    }
}