"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var Observable_1 = require("rxjs/Observable");
var car_model_1 = require("./car.model");
var editableProperties = [
    "doors",
    "imageUrl",
    "luggage",
    "name",
    "price",
    "seats",
    "transmission",
    "class"
];
/* ***********************************************************
* This is the master detail data service. It handles all the data operations
* of retrieving and updating the data. In this case, it is connected to Firebase and
* is using the {N} Firebase plugin. Learn more about it here:
* https://github.com/EddyVerbruggen/nativescript-plugin-firebase
* The {N} Firebase plugin needs some initialization steps before the app starts.
* Check out how it is imported in the main.ts file and the actual script in /shared/firebase.common.ts file.
*************************************************************/
var CarService = /** @class */ (function () {
    function CarService(_ngZone) {
        this._ngZone = _ngZone;
        this._cars = [];
    }
    CarService_1 = CarService;
    CarService.cloneUpdateModel = function (car) {
        return editableProperties.reduce(function (a, e) { return (a[e] = car[e], a); }, {}); // tslint:disable-line:ban-comma-operator
    };
    CarService.prototype.getCarById = function (id) {
        if (!id) {
            return;
        }
        return this._cars.filter(function (car) {
            return car.id === id;
        })[0];
    };
    CarService.prototype.load = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = "cars";
            var onValueEvent = function (snapshot) {
                _this._ngZone.run(function () {
                    var results = _this.handleSnapshot(snapshot.value);
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).catch(this.handleErrors);
    };
    CarService.prototype.update = function (carModel) {
        var updateModel = CarService_1.cloneUpdateModel(carModel);
        return firebase.update("/cars/" + carModel.id, updateModel);
    };
    CarService.prototype.uploadImage = function (remoteFullPath, localFullPath) {
        return firebase.uploadFile({
            localFullPath: localFullPath,
            remoteFullPath: remoteFullPath,
            onProgress: null
        });
    };
    CarService.prototype.handleSnapshot = function (data) {
        this._cars = [];
        if (data) {
            for (var id in data) {
                if (data.hasOwnProperty(id)) {
                    this._cars.push(new car_model_1.Car(data[id]));
                }
            }
        }
        return this._cars;
    };
    CarService.prototype.handleErrors = function (error) {
        return Observable_1.Observable.throw(error);
    };
    CarService = CarService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], CarService);
    return CarService;
    var CarService_1;
}());
exports.CarService = CarService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRDtBQUVuRCx1REFBMEQ7QUFDMUQsOENBQTZDO0FBRzdDLHlDQUFrQztBQUVsQyxJQUFNLGtCQUFrQixHQUFHO0lBQ3ZCLE9BQU87SUFDUCxVQUFVO0lBQ1YsU0FBUztJQUNULE1BQU07SUFDTixPQUFPO0lBQ1AsT0FBTztJQUNQLGNBQWM7SUFDZCxPQUFPO0NBQ1YsQ0FBQztBQUVGOzs7Ozs7OzhEQU84RDtBQUU5RDtJQU9JLG9CQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUYzQixVQUFLLEdBQWUsRUFBRSxDQUFDO0lBRVEsQ0FBQzttQkFQL0IsVUFBVTtJQUNKLDJCQUFnQixHQUEvQixVQUFnQyxHQUFRO1FBQ3BDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFsQixDQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMseUNBQXlDO0lBQ2pILENBQUM7SUFNRCwrQkFBVSxHQUFWLFVBQVcsRUFBVTtRQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDTixNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRztZQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQseUJBQUksR0FBSjtRQUFBLGlCQVlDO1FBWEcsTUFBTSxDQUFDLElBQUksdUJBQVUsQ0FBQyxVQUFDLFFBQWE7WUFDaEMsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO1lBRXBCLElBQU0sWUFBWSxHQUFHLFVBQUMsUUFBYTtnQkFDL0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7b0JBQ2IsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3BELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO1lBQ0YsUUFBUSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxNQUFJLElBQU0sQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxRQUFhO1FBQ2hCLElBQU0sV0FBVyxHQUFHLFlBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxRCxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLGNBQXNCLEVBQUUsYUFBcUI7UUFDckQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDdkIsYUFBYSxlQUFBO1lBQ2IsY0FBYyxnQkFBQTtZQUNkLFVBQVUsRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxtQ0FBYyxHQUF0QixVQUF1QixJQUFTO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWhCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDUCxHQUFHLENBQUMsQ0FBQyxJQUFNLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVPLGlDQUFZLEdBQXBCLFVBQXFCLEtBQWU7UUFDaEMsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUEvRFEsVUFBVTtRQUR0QixpQkFBVSxFQUFFO3lDQVFvQixhQUFNO09BUDFCLFVBQVUsQ0FnRXRCO0lBQUQsaUJBQUM7O0NBQUEsQUFoRUQsSUFnRUM7QUFoRVksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29uZmlnXCI7XG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi9jYXIubW9kZWxcIjtcblxuY29uc3QgZWRpdGFibGVQcm9wZXJ0aWVzID0gW1xuICAgIFwiZG9vcnNcIixcbiAgICBcImltYWdlVXJsXCIsXG4gICAgXCJsdWdnYWdlXCIsXG4gICAgXCJuYW1lXCIsXG4gICAgXCJwcmljZVwiLFxuICAgIFwic2VhdHNcIixcbiAgICBcInRyYW5zbWlzc2lvblwiLFxuICAgIFwiY2xhc3NcIlxuXTtcblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogVGhpcyBpcyB0aGUgbWFzdGVyIGRldGFpbCBkYXRhIHNlcnZpY2UuIEl0IGhhbmRsZXMgYWxsIHRoZSBkYXRhIG9wZXJhdGlvbnNcbiogb2YgcmV0cmlldmluZyBhbmQgdXBkYXRpbmcgdGhlIGRhdGEuIEluIHRoaXMgY2FzZSwgaXQgaXMgY29ubmVjdGVkIHRvIEZpcmViYXNlIGFuZFxuKiBpcyB1c2luZyB0aGUge059IEZpcmViYXNlIHBsdWdpbi4gTGVhcm4gbW9yZSBhYm91dCBpdCBoZXJlOlxuKiBodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVxuKiBUaGUge059IEZpcmViYXNlIHBsdWdpbiBuZWVkcyBzb21lIGluaXRpYWxpemF0aW9uIHN0ZXBzIGJlZm9yZSB0aGUgYXBwIHN0YXJ0cy5cbiogQ2hlY2sgb3V0IGhvdyBpdCBpcyBpbXBvcnRlZCBpbiB0aGUgbWFpbi50cyBmaWxlIGFuZCB0aGUgYWN0dWFsIHNjcmlwdCBpbiAvc2hhcmVkL2ZpcmViYXNlLmNvbW1vbi50cyBmaWxlLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBjbG9uZVVwZGF0ZU1vZGVsKGNhcjogQ2FyKTogb2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIGVkaXRhYmxlUHJvcGVydGllcy5yZWR1Y2UoKGEsIGUpID0+IChhW2VdID0gY2FyW2VdLCBhKSwge30pOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOmJhbi1jb21tYS1vcGVyYXRvclxuICAgIH1cblxuICAgIHByaXZhdGUgX2NhcnM6IEFycmF5PENhcj4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7IH1cblxuICAgIGdldENhckJ5SWQoaWQ6IHN0cmluZyk6IENhciB7XG4gICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJzLmZpbHRlcigoY2FyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2FyLmlkID09PSBpZDtcbiAgICAgICAgfSlbMF07XG4gICAgfVxuXG4gICAgbG9hZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBcImNhcnNcIjtcblxuICAgICAgICAgICAgY29uc3Qgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IHRoaXMuaGFuZGxlU25hcHNob3Qoc25hcHNob3QudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApO1xuICAgICAgICB9KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGNhck1vZGVsOiBDYXIpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVNb2RlbCA9IENhclNlcnZpY2UuY2xvbmVVcGRhdGVNb2RlbChjYXJNb2RlbCk7XG5cbiAgICAgICAgcmV0dXJuIGZpcmViYXNlLnVwZGF0ZShcIi9jYXJzL1wiICsgY2FyTW9kZWwuaWQsIHVwZGF0ZU1vZGVsKTtcbiAgICB9XG5cbiAgICB1cGxvYWRJbWFnZShyZW1vdGVGdWxsUGF0aDogc3RyaW5nLCBsb2NhbEZ1bGxQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gZmlyZWJhc2UudXBsb2FkRmlsZSh7XG4gICAgICAgICAgICBsb2NhbEZ1bGxQYXRoLFxuICAgICAgICAgICAgcmVtb3RlRnVsbFBhdGgsXG4gICAgICAgICAgICBvblByb2dyZXNzOiBudWxsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlU25hcHNob3QoZGF0YTogYW55KTogQXJyYXk8Q2FyPiB7XG4gICAgICAgIHRoaXMuX2NhcnMgPSBbXTtcblxuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpZCBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhcnMucHVzaChuZXcgQ2FyKGRhdGFbaWRdKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcnM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cbn1cbiJdfQ==