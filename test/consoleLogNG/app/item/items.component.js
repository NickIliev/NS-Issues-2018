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
        // console.log("this.items");
        // console.log(this.items);
    };
    ItemsComponent.prototype.onStackLoaded = function (args) {
        console.log("onStackLoaded");
        console.log(args.object); // TypeError: Converting circular structure to JSON
        console.log("" + args.object); // OK prinst the object
        console.log(JSON.stringify(args)); // OK prinst the object
        console.log("" + JSON.stringify(args)); // OK prinst the object
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQU83QztJQUdJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pDLDZCQUE2QjtRQUM3QiwyQkFBMkI7SUFDL0IsQ0FBQztJQUVMLHNDQUFhLEdBQWIsVUFBYyxJQUFlO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxtREFBbUQ7UUFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsdUJBQXVCO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtRQUUvRCxtRkFBbUY7UUFDbkYsNERBQTREO0lBQ2hFLENBQUM7SUF0QlksY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FNbUMsMEJBQVc7T0FMbkMsY0FBYyxDQXVCMUI7SUFBRCxxQkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogSXRlbVtdO1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5pdGVtc1wiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pdGVtcyk7XG4gICAgfVxuXG5vblN0YWNrTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwib25TdGFja0xvYWRlZFwiKTtcbiAgICBjb25zb2xlLmxvZyhhcmdzLm9iamVjdCk7IC8vIFR5cGVFcnJvcjogQ29udmVydGluZyBjaXJjdWxhciBzdHJ1Y3R1cmUgdG8gSlNPTlxuICAgIGNvbnNvbGUubG9nKFwiXCIgKyBhcmdzLm9iamVjdCk7IC8vIE9LIHByaW5zdCB0aGUgb2JqZWN0XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoYXJncykpOyAvLyBPSyBwcmluc3QgdGhlIG9iamVjdFxuICAgIGNvbnNvbGUubG9nKFwiXCIgKyBKU09OLnN0cmluZ2lmeShhcmdzKSk7IC8vIE9LIHByaW5zdCB0aGUgb2JqZWN0XG5cbiAgICAvLyBjb25zb2xlLmxvZyhhcmdzLmV2ZW50TmFtZSk7IC8vIFR5cGVFcnJvcjogQ29udmVydGluZyBjaXJjdWxhciBzdHJ1Y3R1cmUgdG8gSlNPTlxuICAgIC8vIGNvbnNvbGUubG9nKFwiXCIgKyBhcmdzLmV2ZW50TmFtZSk7IC8vIE9LIHByaW5zdCB0aGUgb2JqZWN0XG59XG59Il19