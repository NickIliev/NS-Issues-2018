"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var dialogs_1 = require("ui/dialogs");
var car_edit_service_1 = require("../shared/car-edit.service");
var car_service_1 = require("../shared/car.service");
var constants_1 = require("./constants");
/* ***********************************************************
* This is the item detail edit component.
* This component gets the selected data item, provides options to edit the item and saves the changes.
*************************************************************/
var CarDetailEditComponent = /** @class */ (function () {
    function CarDetailEditComponent(_carService, _carEditService, _pageRoute, _routerExtensions) {
        this._carService = _carService;
        this._carEditService = _carEditService;
        this._pageRoute = _pageRoute;
        this._routerExtensions = _routerExtensions;
        this._carClassOptions = [];
        this._carDoorOptions = [];
        this._carSeatOptions = [];
        this._carTransmissionOptions = [];
        this._isCarImageDirty = false;
        this._isUpdating = false;
    }
    /* ***********************************************************
    * Use the "ngOnInit" handler to get the data item id parameter passed through navigation.
    * Get the data item details from the data service using this id and assign it to the
    * private property that holds it inside the component.
    *************************************************************/
    CarDetailEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeEditOptions();
        /* ***********************************************************
        * Learn more about how to get navigation parameters in this documentation article:
        * http://docs.nativescript.org/angular/core-concepts/angular-navigation.html#passing-parameter
        *************************************************************/
        this._pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            var carId = params.id;
            _this._car = _this._carEditService.startEdit(carId);
        });
    };
    Object.defineProperty(CarDetailEditComponent.prototype, "isUpdating", {
        get: function () {
            return this._isUpdating;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "car", {
        get: function () {
            return this._car;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "pricePerDay", {
        get: function () {
            return this._car.price;
        },
        set: function (value) {
            // force iOS UISlider to work with discrete steps
            this._car.price = Math.round(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "luggageValue", {
        get: function () {
            return this._car.luggage;
        },
        set: function (value) {
            // force iOS UISlider to work with discrete steps
            this._car.luggage = Math.round(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carClassOptions", {
        get: function () {
            return this._carClassOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carDoorOptions", {
        get: function () {
            return this._carDoorOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carSeatOptions", {
        get: function () {
            return this._carSeatOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carTransmissionOptions", {
        get: function () {
            return this._carTransmissionOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carImageUrl", {
        get: function () {
            return this._car.imageUrl;
        },
        set: function (value) {
            this._car.imageUrl = value;
            this._isCarImageDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * The edit cancel button navigates back to the item details page.
    *************************************************************/
    CarDetailEditComponent.prototype.onCancelButtonTap = function () {
        this._routerExtensions.backToPreviousPage();
    };
    /* ***********************************************************
    * The edit done button uses the data service to save the updated values of the data item details.
    * Check out the data service as cars/shared/car.service.ts
    *************************************************************/
    CarDetailEditComponent.prototype.onDoneButtonTap = function () {
        /* ***********************************************************
        * By design this app is set up to work with read-only sample data.
        * Follow the steps in the "Firebase database setup" section in app/readme.md file
        * and uncomment the code block below to make it editable.
        *************************************************************/
        var _this = this;
        /* ***********************************************************
        let queue = Promise.resolve();

        this._isUpdating = true;

        if (this._isCarImageDirty && this._car.imageUrl) {
            queue = queue
                .then(() => this._carService.uploadImage(this._car.imageStoragePath, this._car.imageUrl))
                .then((uploadedFile: any) => {
                    this._car.imageUrl = uploadedFile.url;
                });
        }

        queue.then(() => this._carService.update(this._car))
            .then(() => {
                this._isUpdating = false;
                this._routerExtensions.navigate(["/cars"], {
                    clearHistory: true,
                    animated: true,
                    transition: {
                        name: "slideBottom",
                        duration: 200,
                        curve: "ease"
                    }
                });
            })
            .catch((errorMessage: any) => {
                this._isUpdating = false;
                alert({ title: "Oops!", message: "Something went wrong. Please try again.", okButtonText: "Ok" });
            });
        *************************************************************/
        /* ***********************************************************
        * Comment out the code block below if you made the app editable.
        *************************************************************/
        var readOnlyMessage = "Check out the \"Firebase database setup\" section in the readme file to make it editable."; // tslint:disable-line:max-line-length
        var queue = Promise.resolve();
        queue.then(function () { return dialogs_1.alert({ title: "Read-Only Template!", message: readOnlyMessage, okButtonText: "Ok" }); })
            .then(function () { return _this._routerExtensions.navigate(["/cars"], {
            clearHistory: true,
            animated: true,
            transition: {
                name: "slideBottom",
                duration: 200,
                curve: "ease"
            }
        }); });
    };
    CarDetailEditComponent.prototype.initializeEditOptions = function () {
        for (var _i = 0, carClassList_1 = constants_1.carClassList; _i < carClassList_1.length; _i++) {
            var classItem = carClassList_1[_i];
            this._carClassOptions.push(classItem);
        }
        for (var _a = 0, carDoorList_1 = constants_1.carDoorList; _a < carDoorList_1.length; _a++) {
            var doorItem = carDoorList_1[_a];
            this._carDoorOptions.push(doorItem);
        }
        for (var _b = 0, carSeatList_1 = constants_1.carSeatList; _b < carSeatList_1.length; _b++) {
            var seatItem = carSeatList_1[_b];
            this._carSeatOptions.push(seatItem);
        }
        for (var _c = 0, carTransmissionList_1 = constants_1.carTransmissionList; _c < carTransmissionList_1.length; _c++) {
            var transmissionItem = carTransmissionList_1[_c];
            this._carTransmissionOptions.push(transmissionItem);
        }
    };
    CarDetailEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "CarDetailEdit",
            templateUrl: "./car-detail-edit.component.html",
            styleUrls: ["./car-detail-edit.component.scss"]
        }),
        __metadata("design:paramtypes", [car_service_1.CarService,
            car_edit_service_1.CarEditService,
            router_1.PageRoute,
            router_1.RouterExtensions])
    ], CarDetailEditComponent);
    return CarDetailEditComponent;
}());
exports.CarDetailEditComponent = CarDetailEditComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLWRldGFpbC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhci1kZXRhaWwtZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQTBFO0FBQzFFLHNDQUFtQztBQUVuQywrREFBNEQ7QUFFNUQscURBQW1EO0FBQ25ELHlDQUEwRjtBQUUxRjs7OzhEQUc4RDtBQU85RDtJQVNJLGdDQUNZLFdBQXVCLEVBQ3ZCLGVBQStCLEVBQy9CLFVBQXFCLEVBQ3JCLGlCQUFtQztRQUhuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNyQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBWHZDLHFCQUFnQixHQUFrQixFQUFFLENBQUM7UUFDckMsb0JBQWUsR0FBa0IsRUFBRSxDQUFDO1FBQ3BDLG9CQUFlLEdBQWtCLEVBQUUsQ0FBQztRQUNwQyw0QkFBdUIsR0FBa0IsRUFBRSxDQUFDO1FBQzVDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztJQU9qQyxDQUFDO0lBRUw7Ozs7a0VBSThEO0lBQzlELHlDQUFRLEdBQVI7UUFBQSxpQkFjQztRQWJHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRTdCOzs7c0VBRzhEO1FBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYzthQUN6QixTQUFTLENBQUMsVUFBQyxjQUFjLElBQUssT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDO2FBQ3BELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBRXhCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsc0JBQUksOENBQVU7YUFBZDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQUc7YUFBUDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0NBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBZ0IsS0FBYTtZQUN6QixpREFBaUQ7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDOzs7T0FMQTtJQU9ELHNCQUFJLGdEQUFZO2FBQWhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLENBQUM7YUFFRCxVQUFpQixLQUFhO1lBQzFCLGlEQUFpRDtZQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLENBQUM7OztPQUxBO0lBT0Qsc0JBQUksbURBQWU7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0RBQWM7YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtEQUFjO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwREFBc0I7YUFBMUI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0NBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixDQUFDO2FBRUQsVUFBZ0IsS0FBYTtZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUNqQyxDQUFDOzs7T0FMQTtJQU9EOztrRUFFOEQ7SUFDOUQsa0RBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7a0VBRzhEO0lBQzlELGdEQUFlLEdBQWY7UUFDSTs7OztzRUFJOEQ7UUFMbEUsaUJBc0RDO1FBL0NHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0VBOEI4RDtRQUU5RDs7c0VBRThEO1FBQzlELElBQU0sZUFBZSxHQUFHLDJGQUEyRixDQUFDLENBQUMsc0NBQXNDO1FBQzNKLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxlQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBckYsQ0FBcUYsQ0FBQzthQUNsRyxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuRCxZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLE1BQU07YUFDaEI7U0FDSixDQUFDLEVBUlUsQ0FRVixDQUFDLENBQUM7SUFDWixDQUFDO0lBRU8sc0RBQXFCLEdBQTdCO1FBQ0ksR0FBRyxDQUFDLENBQW9CLFVBQVksRUFBWixpQkFBQSx3QkFBWSxFQUFaLDBCQUFZLEVBQVosSUFBWTtZQUEvQixJQUFNLFNBQVMscUJBQUE7WUFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6QztRQUVELEdBQUcsQ0FBQyxDQUFtQixVQUFXLEVBQVgsZ0JBQUEsdUJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVc7WUFBN0IsSUFBTSxRQUFRLG9CQUFBO1lBQ2YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkM7UUFFRCxHQUFHLENBQUMsQ0FBbUIsVUFBVyxFQUFYLGdCQUFBLHVCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXO1lBQTdCLElBQU0sUUFBUSxvQkFBQTtZQUNmLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsR0FBRyxDQUFDLENBQTJCLFVBQW1CLEVBQW5CLHdCQUFBLCtCQUFtQixFQUFuQixpQ0FBbUIsRUFBbkIsSUFBbUI7WUFBN0MsSUFBTSxnQkFBZ0IsNEJBQUE7WUFDdkIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0wsQ0FBQztJQTNLUSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1NBQ2xELENBQUM7eUNBVzJCLHdCQUFVO1lBQ04saUNBQWM7WUFDbkIsa0JBQVM7WUFDRix5QkFBZ0I7T0FidEMsc0JBQXNCLENBNEtsQztJQUFELDZCQUFDO0NBQUEsQUE1S0QsSUE0S0M7QUE1S1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuXHJcbmltcG9ydCB7IENhckVkaXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9jYXItZWRpdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENhciB9IGZyb20gXCIuLi9zaGFyZWQvY2FyLm1vZGVsXCI7XHJcbmltcG9ydCB7IENhclNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2Nhci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGNhckNsYXNzTGlzdCwgY2FyRG9vckxpc3QsIGNhclNlYXRMaXN0LCBjYXJUcmFuc21pc3Npb25MaXN0IH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qIFRoaXMgaXMgdGhlIGl0ZW0gZGV0YWlsIGVkaXQgY29tcG9uZW50LlxyXG4qIFRoaXMgY29tcG9uZW50IGdldHMgdGhlIHNlbGVjdGVkIGRhdGEgaXRlbSwgcHJvdmlkZXMgb3B0aW9ucyB0byBlZGl0IHRoZSBpdGVtIGFuZCBzYXZlcyB0aGUgY2hhbmdlcy5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwiQ2FyRGV0YWlsRWRpdFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYXItZGV0YWlsLWVkaXQuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9jYXItZGV0YWlsLWVkaXQuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhckRldGFpbEVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBfY2FyOiBDYXI7XHJcbiAgICBwcml2YXRlIF9jYXJDbGFzc09wdGlvbnM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIHByaXZhdGUgX2NhckRvb3JPcHRpb25zOiBBcnJheTxudW1iZXI+ID0gW107XHJcbiAgICBwcml2YXRlIF9jYXJTZWF0T3B0aW9uczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfY2FyVHJhbnNtaXNzaW9uT3B0aW9uczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfaXNDYXJJbWFnZURpcnR5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9pc1VwZGF0aW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfY2FyU2VydmljZTogQ2FyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9jYXJFZGl0U2VydmljZTogQ2FyRWRpdFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfcGFnZVJvdXRlOiBQYWdlUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG4gICAgKSB7IH1cclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGdldCB0aGUgZGF0YSBpdGVtIGlkIHBhcmFtZXRlciBwYXNzZWQgdGhyb3VnaCBuYXZpZ2F0aW9uLlxyXG4gICAgKiBHZXQgdGhlIGRhdGEgaXRlbSBkZXRhaWxzIGZyb20gdGhlIGRhdGEgc2VydmljZSB1c2luZyB0aGlzIGlkIGFuZCBhc3NpZ24gaXQgdG8gdGhlXHJcbiAgICAqIHByaXZhdGUgcHJvcGVydHkgdGhhdCBob2xkcyBpdCBpbnNpZGUgdGhlIGNvbXBvbmVudC5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVFZGl0T3B0aW9ucygpO1xyXG5cclxuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICogTGVhcm4gbW9yZSBhYm91dCBob3cgdG8gZ2V0IG5hdmlnYXRpb24gcGFyYW1ldGVycyBpbiB0aGlzIGRvY3VtZW50YXRpb24gYXJ0aWNsZTpcclxuICAgICAgICAqIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci9jb3JlLWNvbmNlcHRzL2FuZ3VsYXItbmF2aWdhdGlvbi5odG1sI3Bhc3NpbmctcGFyYW1ldGVyXHJcbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgICAgICB0aGlzLl9wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcclxuICAgICAgICAgICAgLnN3aXRjaE1hcCgoYWN0aXZhdGVkUm91dGUpID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcclxuICAgICAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FySWQgPSBwYXJhbXMuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FyID0gdGhpcy5fY2FyRWRpdFNlcnZpY2Uuc3RhcnRFZGl0KGNhcklkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzVXBkYXRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVXBkYXRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhcigpOiBDYXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByaWNlUGVyRGF5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nhci5wcmljZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcHJpY2VQZXJEYXkodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGZvcmNlIGlPUyBVSVNsaWRlciB0byB3b3JrIHdpdGggZGlzY3JldGUgc3RlcHNcclxuICAgICAgICB0aGlzLl9jYXIucHJpY2UgPSBNYXRoLnJvdW5kKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbHVnZ2FnZVZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nhci5sdWdnYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBsdWdnYWdlVmFsdWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGZvcmNlIGlPUyBVSVNsaWRlciB0byB3b3JrIHdpdGggZGlzY3JldGUgc3RlcHNcclxuICAgICAgICB0aGlzLl9jYXIubHVnZ2FnZSA9IE1hdGgucm91bmQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYXJDbGFzc09wdGlvbnMoKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhckNsYXNzT3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2FyRG9vck9wdGlvbnMoKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhckRvb3JPcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYXJTZWF0T3B0aW9ucygpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FyU2VhdE9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhclRyYW5zbWlzc2lvbk9wdGlvbnMoKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhclRyYW5zbWlzc2lvbk9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhckltYWdlVXJsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nhci5pbWFnZVVybDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY2FySW1hZ2VVcmwodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2Nhci5pbWFnZVVybCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX2lzQ2FySW1hZ2VEaXJ0eSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVGhlIGVkaXQgY2FuY2VsIGJ1dHRvbiBuYXZpZ2F0ZXMgYmFjayB0byB0aGUgaXRlbSBkZXRhaWxzIHBhZ2UuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgb25DYW5jZWxCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBUaGUgZWRpdCBkb25lIGJ1dHRvbiB1c2VzIHRoZSBkYXRhIHNlcnZpY2UgdG8gc2F2ZSB0aGUgdXBkYXRlZCB2YWx1ZXMgb2YgdGhlIGRhdGEgaXRlbSBkZXRhaWxzLlxyXG4gICAgKiBDaGVjayBvdXQgdGhlIGRhdGEgc2VydmljZSBhcyBjYXJzL3NoYXJlZC9jYXIuc2VydmljZS50c1xyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIG9uRG9uZUJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICogQnkgZGVzaWduIHRoaXMgYXBwIGlzIHNldCB1cCB0byB3b3JrIHdpdGggcmVhZC1vbmx5IHNhbXBsZSBkYXRhLlxyXG4gICAgICAgICogRm9sbG93IHRoZSBzdGVwcyBpbiB0aGUgXCJGaXJlYmFzZSBkYXRhYmFzZSBzZXR1cFwiIHNlY3Rpb24gaW4gYXBwL3JlYWRtZS5tZCBmaWxlXHJcbiAgICAgICAgKiBhbmQgdW5jb21tZW50IHRoZSBjb2RlIGJsb2NrIGJlbG93IHRvIG1ha2UgaXQgZWRpdGFibGUuXHJcbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAgICBsZXQgcXVldWUgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5faXNVcGRhdGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pc0NhckltYWdlRGlydHkgJiYgdGhpcy5fY2FyLmltYWdlVXJsKSB7XHJcbiAgICAgICAgICAgIHF1ZXVlID0gcXVldWVcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuX2NhclNlcnZpY2UudXBsb2FkSW1hZ2UodGhpcy5fY2FyLmltYWdlU3RvcmFnZVBhdGgsIHRoaXMuX2Nhci5pbWFnZVVybCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigodXBsb2FkZWRGaWxlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXIuaW1hZ2VVcmwgPSB1cGxvYWRlZEZpbGUudXJsO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBxdWV1ZS50aGVuKCgpID0+IHRoaXMuX2NhclNlcnZpY2UudXBkYXRlKHRoaXMuX2NhcikpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzVXBkYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NhcnNcIl0sIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlQm90dG9tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yTWVzc2FnZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1VwZGF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBhbGVydCh7IHRpdGxlOiBcIk9vcHMhXCIsIG1lc3NhZ2U6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uXCIsIG9rQnV0dG9uVGV4dDogXCJPa1wiIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICogQ29tbWVudCBvdXQgdGhlIGNvZGUgYmxvY2sgYmVsb3cgaWYgeW91IG1hZGUgdGhlIGFwcCBlZGl0YWJsZS5cclxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgICAgIGNvbnN0IHJlYWRPbmx5TWVzc2FnZSA9IFwiQ2hlY2sgb3V0IHRoZSBcXFwiRmlyZWJhc2UgZGF0YWJhc2Ugc2V0dXBcXFwiIHNlY3Rpb24gaW4gdGhlIHJlYWRtZSBmaWxlIHRvIG1ha2UgaXQgZWRpdGFibGUuXCI7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgY29uc3QgcXVldWUgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICBxdWV1ZS50aGVuKCgpID0+IGFsZXJ0KHsgdGl0bGU6IFwiUmVhZC1Pbmx5IFRlbXBsYXRlIVwiLCBtZXNzYWdlOiByZWFkT25seU1lc3NhZ2UsIG9rQnV0dG9uVGV4dDogXCJPa1wiIH0pKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jYXJzXCJdLCB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlQm90dG9tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZUVkaXRPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgY2xhc3NJdGVtIG9mIGNhckNsYXNzTGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYXJDbGFzc09wdGlvbnMucHVzaChjbGFzc0l0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBkb29ySXRlbSBvZiBjYXJEb29yTGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYXJEb29yT3B0aW9ucy5wdXNoKGRvb3JJdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qgc2VhdEl0ZW0gb2YgY2FyU2VhdExpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FyU2VhdE9wdGlvbnMucHVzaChzZWF0SXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHRyYW5zbWlzc2lvbkl0ZW0gb2YgY2FyVHJhbnNtaXNzaW9uTGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYXJUcmFuc21pc3Npb25PcHRpb25zLnB1c2godHJhbnNtaXNzaW9uSXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==