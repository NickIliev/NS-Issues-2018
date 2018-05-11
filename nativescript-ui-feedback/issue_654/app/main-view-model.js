"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloWorldModel = /** @class */ (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.dataItems = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        set: function (value) {
            if (this._dataItems !== value) {
                this._dataItems = value;
                this.notifyPropertyChange('dataItems', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDO0lBQXFDLG1DQUFVO0lBSzNDO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBREcsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztJQUN2RCxDQUFDO0lBRUQsc0JBQUksc0NBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFjLEtBQW9CO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDakQsQ0FBQztRQUNMLENBQUM7OztPQVBBO0lBU0wsc0JBQUM7QUFBRCxDQUFDLEFBdEJELENBQXFDLHVCQUFVLEdBc0I5QztBQXRCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZE1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG5cblxuICAgIHByaXZhdGUgX2RhdGFJdGVtczogQXJyYXk8bnVtYmVyPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZGF0YUl0ZW1zID0gWzAsIDEsIDEsIDIsIDMsIDUsIDgsIDEzLCAyMSwgMzRdO1xuICAgIH1cblxuICAgIGdldCBkYXRhSXRlbXMoKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuXG4gICAgc2V0IGRhdGFJdGVtcyh2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xuICAgICAgICBpZiAodGhpcy5fZGF0YUl0ZW1zICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdkYXRhSXRlbXMnLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19