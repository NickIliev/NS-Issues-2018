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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELGtEQUFpRztBQU9qRztJQUlJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakg7UUFKQSxrQkFBYSxHQUFZLEtBQUssQ0FBQztJQUlmLENBQUM7SUFFakIsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELDhDQUFxQixHQUFyQixVQUFzQixJQUFtQztRQUNyRCxJQUFNLEdBQUcsR0FBaUIsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV0QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM3QyxDQUFDO0lBRUQsaUNBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyxnREFBdUIsR0FBL0I7UUFDSSxJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLElBQUksR0FBcUIsSUFBSSxnQ0FBZ0IsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO1FBRTdCLElBQUksSUFBSSxHQUFxQixJQUFJLGdDQUFnQixFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7UUFFN0IsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QixNQUFNLENBQUMsaUJBQWlCLENBQUM7SUFDN0IsQ0FBQztJQTdDUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDOztPQUNXLGNBQWMsQ0E4QzFCO0lBQUQscUJBQUM7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgU2VnbWVudGVkQmFyLCBTZWdtZW50ZWRCYXJJdGVtLCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS9zZWdtZW50ZWQtYmFyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogQXJyYXk8YW55PjtcbiAgICBpc0l0ZW1WaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmNyZWF0ZVNlZ21lbnRlZEJhckl0ZW1zKCk7XG4gICAgfVxuXG4gICAgb25TZWxlY3RlZEluZGV4Q2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IGJhciA9IDxTZWdtZW50ZWRCYXI+YXJncy5vYmplY3Q7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJiYXIuc2VsZWN0ZWRJbmRleFwiLCBiYXIuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICAgICAgdGhpcy5pc0l0ZW1WaXNpYmxlID0gIXRoaXMuaXNJdGVtVmlzaWJsZTtcbiAgICB9XG5cbiAgICBvbkxvYWRlZChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFiIG9uTG9hZGVkXCIpO1xuICAgIH1cblxuICAgIG9uVW5sb2FkZWQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRhYiBvblVubG9hZGVkXCIpO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5pc0l0ZW1WaXNpYmxlID0gIXRoaXMuaXNJdGVtVmlzaWJsZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc0l0ZW1WaXNpYmxlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVNlZ21lbnRlZEJhckl0ZW1zKCkge1xuICAgICAgICBsZXQgc2VnbWVudGVkQmFySXRlbXMgPSBbXTtcbiAgICAgICAgbGV0IHRhYjEgPSA8U2VnbWVudGVkQmFySXRlbT5uZXcgU2VnbWVudGVkQmFySXRlbSgpO1xuICAgICAgICB0YWIxLnRpdGxlID0gXCJCYXIgPj4+IDEgPDw8XCI7XG4gICAgXG4gICAgICAgIGxldCB0YWIyID0gPFNlZ21lbnRlZEJhckl0ZW0+bmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICAgICAgdGFiMi50aXRsZSA9IFwiQmFyID4+PiAyIDw8PFwiO1xuICAgIFxuICAgICAgICBzZWdtZW50ZWRCYXJJdGVtcy5wdXNoKHRhYjEpO1xuICAgICAgICBzZWdtZW50ZWRCYXJJdGVtcy5wdXNoKHRhYjIpO1xuICAgIFxuICAgICAgICByZXR1cm4gc2VnbWVudGVkQmFySXRlbXM7XG4gICAgfVxufSJdfQ==