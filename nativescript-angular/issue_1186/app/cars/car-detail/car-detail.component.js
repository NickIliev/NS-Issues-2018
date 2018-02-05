"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var car_service_1 = require("../shared/car.service");
/* ***********************************************************
* This is the item details component in the master-detail structure.
* This component retrieves the passed parameter from the master list component,
* finds the data item by this parameter and displays the detailed data item information.
*************************************************************/
var CarDetailComponent = /** @class */ (function () {
    function CarDetailComponent(_carService, _pageRoute, _routerExtensions) {
        this._carService = _carService;
        this._pageRoute = _pageRoute;
        this._routerExtensions = _routerExtensions;
    }
    /* ***********************************************************
    * Use the "ngOnInit" handler to get the data item id parameter passed through navigation.
    * Get the data item details from the data service using this id and assign it to the
    * private property that holds it inside the component.
    *************************************************************/
    CarDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* ***********************************************************
        * Learn more about how to get navigation parameters in this documentation article:
        * http://docs.nativescript.org/angular/core-concepts/angular-navigation.html#passing-parameter
        *************************************************************/
        this._pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            var carId = params.id;
            _this._car = _this._carService.getCarById(carId);
        });
    };
    Object.defineProperty(CarDetailComponent.prototype, "car", {
        get: function () {
            return this._car;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * The back button is essential for a master-detail feature.
    *************************************************************/
    CarDetailComponent.prototype.onBackButtonTap = function () {
        this._routerExtensions.backToPreviousPage();
    };
    /* ***********************************************************
    * The master-detail template comes with an example of an item edit page.
    * Check out the edit page in the /cars/car-detail-edit folder.
    *************************************************************/
    CarDetailComponent.prototype.onEditButtonTap = function () {
        this._routerExtensions.navigate(["/cars/car-detail-edit", this._car.id], {
            animated: true,
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "ease"
            }
        });
    };
    CarDetailComponent = __decorate([
        core_1.Component({
            selector: "CarDetail",
            moduleId: module.id,
            templateUrl: "./car-detail.component.html"
        }),
        __metadata("design:paramtypes", [car_service_1.CarService,
            router_1.PageRoute,
            router_1.RouterExtensions])
    ], CarDetailComponent);
    return CarDetailComponent;
}());
exports.CarDetailComponent = CarDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXItZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBMEU7QUFHMUUscURBQW1EO0FBRW5EOzs7OzhEQUk4RDtBQU05RDtJQUdJLDRCQUNZLFdBQXVCLEVBQ3ZCLFVBQXFCLEVBQ3JCLGlCQUFtQztRQUZuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3JCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFDM0MsQ0FBQztJQUVMOzs7O2tFQUk4RDtJQUM5RCxxQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYRzs7O3NFQUc4RDtRQUM5RCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWM7YUFDekIsU0FBUyxDQUFDLFVBQUMsY0FBYyxJQUFLLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQzthQUNwRCxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ1osSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUV4QixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHNCQUFJLG1DQUFHO2FBQVA7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVEOztrRUFFOEQ7SUFDOUQsNENBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRDs7O2tFQUc4RDtJQUM5RCw0Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQ25FO1lBQ0ksUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxNQUFNO2FBQ2hCO1NBQ0osQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXJEUSxrQkFBa0I7UUFMOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1NBQzdDLENBQUM7eUNBSzJCLHdCQUFVO1lBQ1gsa0JBQVM7WUFDRix5QkFBZ0I7T0FOdEMsa0JBQWtCLENBc0Q5QjtJQUFELHlCQUFDO0NBQUEsQUF0REQsSUFzREM7QUF0RFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZVJvdXRlLCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi4vc2hhcmVkL2Nhci5tb2RlbFwiO1xuaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvY2FyLnNlcnZpY2VcIjtcblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogVGhpcyBpcyB0aGUgaXRlbSBkZXRhaWxzIGNvbXBvbmVudCBpbiB0aGUgbWFzdGVyLWRldGFpbCBzdHJ1Y3R1cmUuXG4qIFRoaXMgY29tcG9uZW50IHJldHJpZXZlcyB0aGUgcGFzc2VkIHBhcmFtZXRlciBmcm9tIHRoZSBtYXN0ZXIgbGlzdCBjb21wb25lbnQsXG4qIGZpbmRzIHRoZSBkYXRhIGl0ZW0gYnkgdGhpcyBwYXJhbWV0ZXIgYW5kIGRpc3BsYXlzIHRoZSBkZXRhaWxlZCBkYXRhIGl0ZW0gaW5mb3JtYXRpb24uXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQ2FyRGV0YWlsXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Nhci1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBDYXJEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2NhcjogQ2FyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2NhclNlcnZpY2U6IENhclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3BhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7IH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGdldCB0aGUgZGF0YSBpdGVtIGlkIHBhcmFtZXRlciBwYXNzZWQgdGhyb3VnaCBuYXZpZ2F0aW9uLlxuICAgICogR2V0IHRoZSBkYXRhIGl0ZW0gZGV0YWlscyBmcm9tIHRoZSBkYXRhIHNlcnZpY2UgdXNpbmcgdGhpcyBpZCBhbmQgYXNzaWduIGl0IHRvIHRoZVxuICAgICogcHJpdmF0ZSBwcm9wZXJ0eSB0aGF0IGhvbGRzIGl0IGluc2lkZSB0aGUgY29tcG9uZW50LlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogTGVhcm4gbW9yZSBhYm91dCBob3cgdG8gZ2V0IG5hdmlnYXRpb24gcGFyYW1ldGVycyBpbiB0aGlzIGRvY3VtZW50YXRpb24gYXJ0aWNsZTpcbiAgICAgICAgKiBodHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvY29yZS1jb25jZXB0cy9hbmd1bGFyLW5hdmlnYXRpb24uaHRtbCNwYXNzaW5nLXBhcmFtZXRlclxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICB0aGlzLl9wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcbiAgICAgICAgICAgIC5zd2l0Y2hNYXAoKGFjdGl2YXRlZFJvdXRlKSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXG4gICAgICAgICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FySWQgPSBwYXJhbXMuaWQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9jYXIgPSB0aGlzLl9jYXJTZXJ2aWNlLmdldENhckJ5SWQoY2FySWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IGNhcigpOiBDYXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FyO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBUaGUgYmFjayBidXR0b24gaXMgZXNzZW50aWFsIGZvciBhIG1hc3Rlci1kZXRhaWwgZmVhdHVyZS5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG9uQmFja0J1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVGhlIG1hc3Rlci1kZXRhaWwgdGVtcGxhdGUgY29tZXMgd2l0aCBhbiBleGFtcGxlIG9mIGFuIGl0ZW0gZWRpdCBwYWdlLlxuICAgICogQ2hlY2sgb3V0IHRoZSBlZGl0IHBhZ2UgaW4gdGhlIC9jYXJzL2Nhci1kZXRhaWwtZWRpdCBmb2xkZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvbkVkaXRCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NhcnMvY2FyLWRldGFpbC1lZGl0XCIsIHRoaXMuX2Nhci5pZF0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlVG9wXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==