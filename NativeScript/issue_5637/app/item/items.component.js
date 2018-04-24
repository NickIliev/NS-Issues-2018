"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var item_service_1 = require("./item.service");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService, _page) {
        this.itemService = itemService;
        this._page = _page;
        // this._page.on(Page.navigatedToEvent, this.c);
    }
    ItemsComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.ngAfterViewInit = function () {
        this.c(this._page);
    };
    ItemsComponent.prototype.c = function (page) {
        console.log(page);
        if (page.ios) {
            console.log("Code Running");
            page.actionBarHidden = false;
            page.statusBarStyle = "dark";
            var navigationBar = page.ios.navigationController.navigationBar;
            console.log(navigationBar);
            navigationBar.barTintColor = UIColor.colorWithRedGreenBlueAlpha(0.011, 0.278, 0.576, 1);
            //   navigationBar.titleTextAttributes = new NSDictionary(
            //     [UIColor.whiteColor],
            //     [NSForegroundColorAttributeName]
            //   );
            navigationBar.barStyle = 1;
            navigationBar.tintColor = UIColor.whiteColor;
            navigationBar.setBackgroundImageForBarMetrics(UIImage.new(), 0 /* Default */);
            navigationBar.shadowImage = UIImage.new();
            navigationBar.translucent = false;
            console.log("Code Ran");
        }
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService, page_1.Page])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGlEQUFnRDtBQUVoRCwrQ0FBNkM7QUFTN0M7SUFHSSw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QixFQUFVLEtBQVc7UUFBN0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQzdELGdEQUFnRDtJQUNwRCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFTCx3Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVXLDBCQUFDLEdBQVQsVUFBVSxJQUFJO1FBRVYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7WUFFN0IsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7WUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzQixhQUFhLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FDN0QsS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0wsQ0FBQyxDQUNGLENBQUM7WUFDSiwwREFBMEQ7WUFDMUQsNEJBQTRCO1lBQzVCLHVDQUF1QztZQUN2QyxPQUFPO1lBQ0wsYUFBYSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDM0IsYUFBYSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQzdDLGFBQWEsQ0FBQywrQkFBK0IsQ0FDM0MsT0FBTyxDQUFDLEdBQUcsRUFBRSxrQkFFZCxDQUFDO1lBQ0YsYUFBYSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDMUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN6QixDQUFDO0lBQ0wsQ0FBQztJQWhEUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQU1tQywwQkFBVyxFQUFpQixXQUFJO09BTHhELGNBQWMsQ0FpRDFCO0lBQUQscUJBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IEl0ZW1bXTtcblxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLCBwcml2YXRlIF9wYWdlOiBQYWdlKSB7IFxuICAgICAgICAvLyB0aGlzLl9wYWdlLm9uKFBhZ2UubmF2aWdhdGVkVG9FdmVudCwgdGhpcy5jKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJuZ09uSW5pdFwiKTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbm5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmModGhpcy5fcGFnZSk7XG59XG5cbiAgICBwcml2YXRlIGMocGFnZSkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xuICAgICAgICBpZiAocGFnZS5pb3MpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvZGUgUnVubmluZ1wiKVxuICAgICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgcGFnZS5zdGF0dXNCYXJTdHlsZSA9IFwiZGFya1wiO1xuICAgIFxuICAgICAgICAgIHZhciBuYXZpZ2F0aW9uQmFyID0gcGFnZS5pb3MubmF2aWdhdGlvbkNvbnRyb2xsZXIubmF2aWdhdGlvbkJhcjtcbiAgICAgICAgICBjb25zb2xlLmxvZyhuYXZpZ2F0aW9uQmFyKTtcbiAgICAgICAgICBuYXZpZ2F0aW9uQmFyLmJhclRpbnRDb2xvciA9IFVJQ29sb3IuY29sb3JXaXRoUmVkR3JlZW5CbHVlQWxwaGEoXG4gICAgICAgICAgICAwLjAxMSxcbiAgICAgICAgICAgIDAuMjc4LFxuICAgICAgICAgICAgMC41NzYsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKTtcbiAgICAgICAgLy8gICBuYXZpZ2F0aW9uQmFyLnRpdGxlVGV4dEF0dHJpYnV0ZXMgPSBuZXcgTlNEaWN0aW9uYXJ5KFxuICAgICAgICAvLyAgICAgW1VJQ29sb3Iud2hpdGVDb2xvcl0sXG4gICAgICAgIC8vICAgICBbTlNGb3JlZ3JvdW5kQ29sb3JBdHRyaWJ1dGVOYW1lXVxuICAgICAgICAvLyAgICk7XG4gICAgICAgICAgbmF2aWdhdGlvbkJhci5iYXJTdHlsZSA9IDE7XG4gICAgICAgICAgbmF2aWdhdGlvbkJhci50aW50Q29sb3IgPSBVSUNvbG9yLndoaXRlQ29sb3I7XG4gICAgICAgICAgbmF2aWdhdGlvbkJhci5zZXRCYWNrZ3JvdW5kSW1hZ2VGb3JCYXJNZXRyaWNzKFxuICAgICAgICAgICAgVUlJbWFnZS5uZXcoKSxcbiAgICAgICAgICAgIFVJQmFyTWV0cmljcy5EZWZhdWx0XG4gICAgICAgICAgKTtcbiAgICAgICAgICBuYXZpZ2F0aW9uQmFyLnNoYWRvd0ltYWdlID0gVUlJbWFnZS5uZXcoKTtcbiAgICAgICAgICBuYXZpZ2F0aW9uQmFyLnRyYW5zbHVjZW50ID0gZmFsc2U7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJDb2RlIFJhblwiKVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==