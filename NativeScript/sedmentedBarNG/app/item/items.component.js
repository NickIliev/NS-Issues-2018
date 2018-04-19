"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var segmented_bar_1 = require("ui/segmented-bar");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.createSegmentedBarItems();
        this.isItemVisible = true;
    };
    // THIS does not work (the same code with the toogle function below is working)
    ItemsComponent.prototype.onBarLoaded = function (args) {
        var _this = this;
        var segmentedBar = args.object;
        // Chainging the isItemVisible binding is working BUT not updating the UI
        segmentedBar.on("selectedIndexChange", function (args) {
            console.log("segmetedBar.selectedIndex: ", segmentedBar.selectedIndex); // works as expected
            console.log("args.oldIndex: ", args.oldIndex); // undefined
            console.log("args.newIndex: ", args.newIndex); // undefined
            // Not working
            _this.isItemVisible = !_this.isItemVisible;
            // switch (segmentedBar.selectedIndex) {
            //     case 0:
            //         this.isItemVisible = true;
            //         // console.log(this.isItemVisible); //the value is changed but the UI is not updated
            //         break;
            //     case 1:
            //         this.isItemVisible = false;
            //         // console.log(this.isItemVisible); //the value is changed but the UI is not updated
            //         break;
            //     default:
            //         console.log("DEFFFF")
            //         break;
            // }
        });
    };
    // THIS works
    ItemsComponent.prototype.toggle = function () {
        this.isItemVisible = !this.isItemVisible;
    };
    ItemsComponent.prototype.createSegmentedBarItems = function () {
        var segmentedBarItems = [];
        var tab1 = new segmented_bar_1.SegmentedBarItem();
        tab1.title = "Bar 1";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGtEQUFpRztBQU9qRztJQUtJO0lBQWdCLENBQUM7SUFFakIsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVELCtFQUErRTtJQUMvRSxvQ0FBVyxHQUFYLFVBQVksSUFBSTtRQUFoQixpQkEwQkM7UUF6QkcsSUFBTSxZQUFZLEdBQWlCLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFL0MseUVBQXlFO1FBQ3pFLFlBQVksQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsVUFBQyxJQUFtQztZQUV2RSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtZQUM1RixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFlBQVk7WUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZO1lBQzNELGNBQWM7WUFDZCxLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQztZQUV6Qyx3Q0FBd0M7WUFDeEMsY0FBYztZQUNkLHFDQUFxQztZQUNyQywrRkFBK0Y7WUFDL0YsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxzQ0FBc0M7WUFDdEMsK0ZBQStGO1lBQy9GLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2YsZ0NBQWdDO1lBQ2hDLGlCQUFpQjtZQUNqQixJQUFJO1FBQ1IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsYUFBYTtJQUNiLCtCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM3QyxDQUFDO0lBRU8sZ0RBQXVCLEdBQS9CO1FBQ0ksSUFBSSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxJQUFJLEdBQXFCLElBQUksZ0NBQWdCLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUVyQixJQUFJLElBQUksR0FBcUIsSUFBSSxnQ0FBZ0IsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO1FBRTdCLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0IsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0lBQzdCLENBQUM7SUExRFEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzs7T0FDVyxjQUFjLENBMkQxQjtJQUFELHFCQUFDO0NBQUEsQUEzREQsSUEyREM7QUEzRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTZWdtZW50ZWRCYXIsIFNlZ21lbnRlZEJhckl0ZW0sIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcInVpL3NlZ21lbnRlZC1iYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHNlbGVjdGVkSW5kZXg6IG51bWJlcjtcbiAgICBpdGVtczogQXJyYXk8YW55PjtcbiAgICBpc0l0ZW1WaXNpYmxlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5jcmVhdGVTZWdtZW50ZWRCYXJJdGVtcygpO1xuICAgICAgICB0aGlzLmlzSXRlbVZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIFRISVMgZG9lcyBub3Qgd29yayAodGhlIHNhbWUgY29kZSB3aXRoIHRoZSB0b29nbGUgZnVuY3Rpb24gYmVsb3cgaXMgd29ya2luZylcbiAgICBvbkJhckxvYWRlZChhcmdzKSB7XG4gICAgICAgIGNvbnN0IHNlZ21lbnRlZEJhciA9IDxTZWdtZW50ZWRCYXI+YXJncy5vYmplY3Q7XG5cbiAgICAgICAgLy8gQ2hhaW5naW5nIHRoZSBpc0l0ZW1WaXNpYmxlIGJpbmRpbmcgaXMgd29ya2luZyBCVVQgbm90IHVwZGF0aW5nIHRoZSBVSVxuICAgICAgICBzZWdtZW50ZWRCYXIub24oXCJzZWxlY3RlZEluZGV4Q2hhbmdlXCIsIChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkgPT4ge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlZ21ldGVkQmFyLnNlbGVjdGVkSW5kZXg6IFwiLCBzZWdtZW50ZWRCYXIuc2VsZWN0ZWRJbmRleCk7IC8vIHdvcmtzIGFzIGV4cGVjdGVkXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFyZ3Mub2xkSW5kZXg6IFwiLCBhcmdzLm9sZEluZGV4KTsgLy8gdW5kZWZpbmVkXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFyZ3MubmV3SW5kZXg6IFwiLCBhcmdzLm5ld0luZGV4KTsgLy8gdW5kZWZpbmVkXG4gICAgICAgICAgICAvLyBOb3Qgd29ya2luZ1xuICAgICAgICAgICAgdGhpcy5pc0l0ZW1WaXNpYmxlID0gIXRoaXMuaXNJdGVtVmlzaWJsZTtcblxuICAgICAgICAgICAgLy8gc3dpdGNoIChzZWdtZW50ZWRCYXIuc2VsZWN0ZWRJbmRleCkge1xuICAgICAgICAgICAgLy8gICAgIGNhc2UgMDpcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5pc0l0ZW1WaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pc0l0ZW1WaXNpYmxlKTsgLy90aGUgdmFsdWUgaXMgY2hhbmdlZCBidXQgdGhlIFVJIGlzIG5vdCB1cGRhdGVkXG4gICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICAgIGNhc2UgMTpcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5pc0l0ZW1WaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaXNJdGVtVmlzaWJsZSk7IC8vdGhlIHZhbHVlIGlzIGNoYW5nZWQgYnV0IHRoZSBVSSBpcyBub3QgdXBkYXRlZFxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkRFRkZGRlwiKVxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBUSElTIHdvcmtzXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLmlzSXRlbVZpc2libGUgPSAhdGhpcy5pc0l0ZW1WaXNpYmxlO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlU2VnbWVudGVkQmFySXRlbXMoKSB7XG4gICAgICAgIGxldCBzZWdtZW50ZWRCYXJJdGVtcyA9IFtdO1xuICAgICAgICBsZXQgdGFiMSA9IDxTZWdtZW50ZWRCYXJJdGVtPm5ldyBTZWdtZW50ZWRCYXJJdGVtKCk7XG4gICAgICAgIHRhYjEudGl0bGUgPSBcIkJhciAxXCI7XG4gICAgXG4gICAgICAgIGxldCB0YWIyID0gPFNlZ21lbnRlZEJhckl0ZW0+bmV3IFNlZ21lbnRlZEJhckl0ZW0oKTtcbiAgICAgICAgdGFiMi50aXRsZSA9IFwiQmFyID4+PiAyIDw8PFwiO1xuICAgIFxuICAgICAgICBzZWdtZW50ZWRCYXJJdGVtcy5wdXNoKHRhYjEpO1xuICAgICAgICBzZWdtZW50ZWRCYXJJdGVtcy5wdXNoKHRhYjIpO1xuICAgIFxuICAgICAgICByZXR1cm4gc2VnbWVudGVkQmFySXRlbXM7XG4gICAgfVxufSJdfQ==