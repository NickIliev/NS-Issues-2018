"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var ItemsComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.onWebViewLoaded = function (args) {
        var wv = args.object;
        var iosUiWebView = wv.ios;
        // if (isIOS) {
        //     let cachePolicy = NSURLCache.alloc().initWithMemoryCapacityDiskCapacityDiskPath(0, 0, "nsurlcache")
        //     NSURLCache.sharedURLCache = cachePolicy;
        //     NSURLCache.sharedURLCache.removeAllCachedResponses();
        // }
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: __filename,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQVk3QztJQUdJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCx3Q0FBZSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsSUFBSSxFQUFFLEdBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLFlBQVksR0FBYyxFQUFFLENBQUMsR0FBRyxDQUFDO1FBRXJDLGVBQWU7UUFDZiwwR0FBMEc7UUFDMUcsK0NBQStDO1FBRS9DLDREQUE0RDtRQUM1RCxJQUFJO0lBQ1IsQ0FBQztJQXJCUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBTW1DLDBCQUFXO09BTG5DLGNBQWMsQ0FzQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IFdlYlZpZXcgfSBmcm9tIFwidWkvd2ViLXZpZXdcIjtcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBfX2ZpbGVuYW1lLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBJdGVtW107XG5cbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBvbldlYlZpZXdMb2FkZWQoYXJncykge1xuICAgICAgICBsZXQgd3YgPSA8V2ViVmlldz5hcmdzLm9iamVjdDtcbiAgICAgICAgbGV0IGlvc1VpV2ViVmlldyA9IDxVSVdlYlZpZXc+d3YuaW9zO1xuXG4gICAgICAgIC8vIGlmIChpc0lPUykge1xuICAgICAgICAvLyAgICAgbGV0IGNhY2hlUG9saWN5ID0gTlNVUkxDYWNoZS5hbGxvYygpLmluaXRXaXRoTWVtb3J5Q2FwYWNpdHlEaXNrQ2FwYWNpdHlEaXNrUGF0aCgwLCAwLCBcIm5zdXJsY2FjaGVcIilcbiAgICAgICAgLy8gICAgIE5TVVJMQ2FjaGUuc2hhcmVkVVJMQ2FjaGUgPSBjYWNoZVBvbGljeTtcblxuICAgICAgICAvLyAgICAgTlNVUkxDYWNoZS5zaGFyZWRVUkxDYWNoZS5yZW1vdmVBbGxDYWNoZWRSZXNwb25zZXMoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cbn0iXX0=