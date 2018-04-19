"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        // using the debugger statement to force a breakpoint and from here using F10
        // however any changed during debug won't be transpiled to JavaScript so the app has to be rebuild
        debugger;
        console.log("ngOnInit");
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
    };
    ItemsComponent.prototype.ngAfterViewChecked = function () {
        console.log("ngAfterViewChecked");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQU83QztJQUVJLHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFHakQsaUNBQVEsR0FBUjtRQUNJLDZFQUE2RTtRQUM3RSxrR0FBa0c7UUFFbEcsUUFBUSxDQUFDO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDJDQUFrQixHQUFsQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBcEJRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBR21DLDBCQUFXO09BRm5DLGNBQWMsQ0FxQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogSXRlbVtdO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlKSB7IH1cblxuICAgIFxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyB1c2luZyB0aGUgZGVidWdnZXIgc3RhdGVtZW50IHRvIGZvcmNlIGEgYnJlYWtwb2ludCBhbmQgZnJvbSBoZXJlIHVzaW5nIEYxMFxuICAgICAgICAvLyBob3dldmVyIGFueSBjaGFuZ2VkIGR1cmluZyBkZWJ1ZyB3b24ndCBiZSB0cmFuc3BpbGVkIHRvIEphdmFTY3JpcHQgc28gdGhlIGFwcCBoYXMgdG8gYmUgcmVidWlsZFxuXG4gICAgICAgIGRlYnVnZ2VyOyBcbiAgICAgICAgY29uc29sZS5sb2coXCJuZ09uSW5pdFwiKTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmdBZnRlclZpZXdJbml0XCIpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJuZ0FmdGVyVmlld0NoZWNrZWRcIik7XG4gICAgfVxufSJdfQ==