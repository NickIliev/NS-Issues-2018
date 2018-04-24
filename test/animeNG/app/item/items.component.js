"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var enums_1 = require("tns-core-modules/ui/enums");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.onLabelLoaded = function (args) {
        this.myView = args.object;
    };
    ItemsComponent.prototype.animate = function () {
        this.myView.animate({
            backgroundColor: "#414b7d",
            curve: enums_1.AnimationCurve.easeOut,
            delay: 300,
            duration: 3000,
            iterations: 3,
            opacity: 0.8,
            rotate: 360,
            scale: { x: 2, y: 2 },
            translate: { x: 0, y: 200 }
        }).then(function () {
            console.log("Animation finished");
        }).catch(function (e) {
            console.log(e.message);
        });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
            styleUrls: ["style.css"]
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUU3QyxtREFBMkQ7QUFTM0Q7SUFJSSw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFFakQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLElBQUk7UUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUVELGdDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNoQixlQUFlLEVBQUUsU0FBUztZQUMxQixLQUFLLEVBQUUsc0JBQWMsQ0FBQyxPQUFPO1lBQzdCLEtBQUssRUFBRSxHQUFHO1lBQ1YsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUUsQ0FBQztZQUNiLE9BQU8sRUFBRSxHQUFHO1lBQ1osTUFBTSxFQUFFLEdBQUc7WUFDWCxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDckIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO1NBQzlCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsQ0FBQztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQWhDUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUMsQ0FBQyxXQUFXLENBQUM7U0FDMUIsQ0FBQzt5Q0FPbUMsMEJBQVc7T0FObkMsY0FBYyxDQWlDMUI7SUFBRCxxQkFBQztDQUFBLEFBakNELElBaUNDO0FBakNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYW5pbWF0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOltcInN0eWxlLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IEl0ZW1bXTtcbiAgICBteVZpZXc6IGFueTtcblxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuICAgIH1cblxuICAgIG9uTGFiZWxMb2FkZWQoYXJncykge1xuICAgICAgICB0aGlzLm15VmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMubXlWaWV3LmFuaW1hdGUoe1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM0MTRiN2RcIixcbiAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0LFxuICAgICAgICAgICAgZGVsYXk6IDMwMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICAgICAgaXRlcmF0aW9uczogMyxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOCxcbiAgICAgICAgICAgIHJvdGF0ZTogMzYwLFxuICAgICAgICAgICAgc2NhbGU6IHsgeDogMiwgeTogMiB9LFxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDIwMCB9XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbmltYXRpb24gZmluaXNoZWRcIik7XG4gICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xuICAgICAgICB9KVxuICAgIH1cbn0iXX0=