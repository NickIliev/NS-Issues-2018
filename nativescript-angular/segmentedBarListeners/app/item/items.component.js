"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var segmented_bar_1 = require("ui/segmented-bar");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent() {
        this.isItemVisible = false;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.createSegmentedBarItems();
    };
    ItemsComponent.prototype.onSelectedIndexChange = function (args) {
        var bar = args.object;
        console.log("bar.selectedIndex", bar.selectedIndex);
        this.isItemVisible = !this.isItemVisible;
    };
    ItemsComponent.prototype.onLoaded = function (args) {
        console.log("tab onLoaded");
    };
    ItemsComponent.prototype.onUnloaded = function (args) {
        console.log("tab onUnloaded");
    };
    ItemsComponent.prototype.toggle = function () {
        this.isItemVisible = !this.isItemVisible;
        console.log(this.isItemVisible);
    };
    ItemsComponent.prototype.onBarLoaded = function (args) {
        console.log("SegmentedBar loaded");
    };
    ItemsComponent.prototype.onBarUnloaded = function (args) {
        console.log("SegmentedBar unloaded");
    };
    ItemsComponent.prototype.createSegmentedBarItems = function () {
        var segmentedBarItems = [];
        var tab1 = new segmented_bar_1.SegmentedBarItem();
        tab1.title = "Bar >>> 1 <<<";
        var tab2 = new segmented_bar_1.SegmentedBarItem();
        tab2.title = "Bar >>> 2 <<<";
        segmentedBarItems.push(tab1);
        segmentedBarItems.push(tab2);
        return segmentedBarItems;
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELGtEQUFpRztBQU9qRztJQUlJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakg7UUFKQSxrQkFBYSxHQUFZLEtBQUssQ0FBQztJQUlmLENBQUM7SUFFakIsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELDhDQUFxQixHQUFyQixVQUFzQixJQUFtQztRQUNyRCxJQUFNLEdBQUcsR0FBaUIsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV0QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM3QyxDQUFDO0lBRUQsaUNBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksSUFBSTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLElBQUk7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLGdEQUF1QixHQUEvQjtRQUNJLElBQUksaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxHQUFxQixJQUFJLGdDQUFnQixFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7UUFFN0IsSUFBSSxJQUFJLEdBQXFCLElBQUksZ0NBQWdCLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQztRQUU3QixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDO0lBckRRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7O09BQ1csY0FBYyxDQXNEMUI7SUFBRCxxQkFBQztDQUFBLEFBdERELElBc0RDO0FBdERZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBTZWdtZW50ZWRCYXIsIFNlZ21lbnRlZEJhckl0ZW0sIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBBcnJheTxhbnk+O1xuICAgIGlzSXRlbVZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuY3JlYXRlU2VnbWVudGVkQmFySXRlbXMoKTtcbiAgICB9XG5cbiAgICBvblNlbGVjdGVkSW5kZXhDaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3QgYmFyID0gPFNlZ21lbnRlZEJhcj5hcmdzLm9iamVjdDtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImJhci5zZWxlY3RlZEluZGV4XCIsIGJhci5zZWxlY3RlZEluZGV4KTtcblxuICAgICAgICB0aGlzLmlzSXRlbVZpc2libGUgPSAhdGhpcy5pc0l0ZW1WaXNpYmxlO1xuICAgIH1cblxuICAgIG9uTG9hZGVkKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YWIgb25Mb2FkZWRcIik7XG4gICAgfVxuXG4gICAgb25VbmxvYWRlZChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFiIG9uVW5sb2FkZWRcIik7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLmlzSXRlbVZpc2libGUgPSAhdGhpcy5pc0l0ZW1WaXNpYmxlO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzSXRlbVZpc2libGUpO1xuICAgIH1cblxuICAgIG9uQmFyTG9hZGVkKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWdtZW50ZWRCYXIgbG9hZGVkXCIpO1xuICAgIH1cblxuICAgIG9uQmFyVW5sb2FkZWQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNlZ21lbnRlZEJhciB1bmxvYWRlZFwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVNlZ21lbnRlZEJhckl0ZW1zKCkge1xuICAgICAgICBsZXQgc2VnbWVudGVkQmFySXRlbXMgPSBbXTtcbiAgICAgICAgbGV0IHRhYjEgPSA8U2VnbWVudGVkQmFySXRlbT5uZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgICAgICB0YWIxLnRpdGxlID0gXCJCYXIgPj4+IDEgPDw8XCI7XG4gICAgXG4gICAgICAgIGxldCB0YWIyID0gPFNlZ21lbnRlZEJhckl0ZW0+bmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICAgICAgdGFiMi50aXRsZSA9IFwiQmFyID4+PiAyIDw8PFwiO1xuICAgIFxuICAgICAgICBzZWdtZW50ZWRCYXJJdGVtcy5wdXNoKHRhYjEpO1xuICAgICAgICBzZWdtZW50ZWRCYXJJdGVtcy5wdXNoKHRhYjIpO1xuICAgIFxuICAgICAgICByZXR1cm4gc2VnbWVudGVkQmFySXRlbXM7XG4gICAgfVxufSJdfQ==