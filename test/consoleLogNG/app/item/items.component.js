"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
        console.log(this.items);
        // console.log("this.items");
        // console.log(this.items);
    };
    ItemsComponent.prototype.onStackLoaded = function (args) {
        console.log("onStackLoaded");
        console.log(args.object); // TypeError: Converting circular structure to JSON
        // console.log("" + args.object); // OK prinst the object
        console.log(args.eventName);
        // console.log(JSON.stringify(args)); // OK prinst the object
        // console.log("" + JSON.stringify(args)); // OK prinst the object
        // console.log(args.eventName); // TypeError: Converting circular structure to JSON
        // console.log("" + args.eventName); // OK prinst the object
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQVM3QztJQUdJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLDZCQUE2QjtRQUM3QiwyQkFBMkI7SUFDL0IsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxJQUFlO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxtREFBbUQ7UUFDN0UseURBQXlEO1FBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLDZEQUE2RDtRQUM3RCxrRUFBa0U7UUFFbEUsbUZBQW1GO1FBQ25GLDREQUE0RDtJQUNoRSxDQUFDO0lBeEJRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBTW1DLDBCQUFXO09BTG5DLGNBQWMsQ0F5QjFCO0lBQUQscUJBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuXG5kZWNsYXJlIGxldCBhbmRyb2lkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogSXRlbVtdO1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXRlbXMpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuaXRlbXNcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaXRlbXMpO1xuICAgIH1cblxuICAgIG9uU3RhY2tMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25TdGFja0xvYWRlZFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coYXJncy5vYmplY3QpOyAvLyBUeXBlRXJyb3I6IENvbnZlcnRpbmcgY2lyY3VsYXIgc3RydWN0dXJlIHRvIEpTT05cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJcIiArIGFyZ3Mub2JqZWN0KTsgLy8gT0sgcHJpbnN0IHRoZSBvYmplY3RcbiAgICAgICAgY29uc29sZS5sb2coYXJncy5ldmVudE5hbWUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShhcmdzKSk7IC8vIE9LIHByaW5zdCB0aGUgb2JqZWN0XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiXCIgKyBKU09OLnN0cmluZ2lmeShhcmdzKSk7IC8vIE9LIHByaW5zdCB0aGUgb2JqZWN0XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coYXJncy5ldmVudE5hbWUpOyAvLyBUeXBlRXJyb3I6IENvbnZlcnRpbmcgY2lyY3VsYXIgc3RydWN0dXJlIHRvIEpTT05cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJcIiArIGFyZ3MuZXZlbnROYW1lKTsgLy8gT0sgcHJpbnN0IHRoZSBvYmplY3RcbiAgICB9XG59Il19