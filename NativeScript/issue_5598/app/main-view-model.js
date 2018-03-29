"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.date = new Date();
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            if (this._date !== value) {
                this._date = value;
                this.notifyPropertyChange('date', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldModel.prototype.onDatePickerLoaded = function (args) {
        console.log("onDatePickerLoaded");
        var datePicker = args.object;
        datePicker.on(observable_1.Observable.propertyChangeEvent, function (args) {
            console.log("Date Changed");
        });
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRzdDO0lBQXFDLG1DQUFVO0lBSTNDO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBREcsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOztJQUMzQixDQUFDO0lBRUQsc0JBQUksaUNBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFTLEtBQVc7WUFDaEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQTtZQUM1QyxDQUFDO1FBQ0wsQ0FBQzs7O09BUEE7SUFTRCw0Q0FBa0IsR0FBbEIsVUFBbUIsSUFBSTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDakMsSUFBTSxVQUFVLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUUzQyxVQUFVLENBQUMsRUFBRSxDQUFDLHVCQUFVLENBQUMsbUJBQW1CLEVBQUUsVUFBQyxJQUFJO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQUFDLEFBOUJELENBQXFDLHVCQUFVLEdBOEI5QztBQTlCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ3VpL2RhdGUtcGlja2VyJztcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHJpdmF0ZSBfZGF0ZTogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGUoKTogRGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlO1xuICAgIH1cbiAgICBcbiAgICBzZXQgZGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5fZGF0ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RhdGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2RhdGUnLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGF0ZVBpY2tlckxvYWRlZChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25EYXRlUGlja2VyTG9hZGVkXCIpXG4gICAgICAgIGNvbnN0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdDtcblxuICAgICAgICBkYXRlUGlja2VyLm9uKE9ic2VydmFibGUucHJvcGVydHlDaGFuZ2VFdmVudCwgKGFyZ3MpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0ZSBDaGFuZ2VkXCIpO1xuICAgICAgICB9KVxuICAgIH1cblxufVxuIl19