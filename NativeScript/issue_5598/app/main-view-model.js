"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.date = new Date("October 11, 1999");
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
        this.datePicker = args.object;
        this.datePicker.on("dateChange", function (args) {
            console.log("Date Changed");
            console.log(args.value);
        });
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRzdDO0lBQXFDLG1DQUFVO0lBSzNDO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBREcsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOztJQUM3QyxDQUFDO0lBRUQsc0JBQUksaUNBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFTLEtBQVc7WUFDaEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQTtZQUM1QyxDQUFDO1FBQ0wsQ0FBQzs7O09BUEE7SUFTRCw0Q0FBa0IsR0FBbEIsVUFBbUIsSUFBSTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFDLElBQVM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUEvQkQsQ0FBcUMsdUJBQVUsR0ErQjlDO0FBL0JZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAndWkvZGF0ZS1waWNrZXInO1xuXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZE1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG5cbiAgICBwcml2YXRlIF9kYXRlOiBEYXRlO1xuICAgIGRhdGVQaWNrZXI6IERhdGVQaWNrZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShcIk9jdG9iZXIgMTEsIDE5OTlcIik7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGUoKTogRGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlO1xuICAgIH1cblxuICAgIHNldCBkYXRlKHZhbHVlOiBEYXRlKSB7XG4gICAgICAgIGlmICh0aGlzLl9kYXRlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZGF0ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnZGF0ZScsIHZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EYXRlUGlja2VyTG9hZGVkKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkRhdGVQaWNrZXJMb2FkZWRcIilcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyID0gPERhdGVQaWNrZXI+YXJncy5vYmplY3Q7XG4gICAgXG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlci5vbihcImRhdGVDaGFuZ2VcIiwgKGFyZ3M6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRlIENoYW5nZWRcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzLnZhbHVlKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=