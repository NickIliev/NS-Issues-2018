"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.clr = "red";
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "clr", {
        get: function () {
            return this._clr;
        },
        set: function (value) {
            if (this._clr !== value) {
                this._clr = value;
                this.notifyPropertyChange('clr', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDO0lBQXFDLG1DQUFVO0lBSzNDO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBREcsS0FBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7O0lBQ3JCLENBQUM7SUFFRCxzQkFBSSxnQ0FBRzthQUFQO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzthQUVELFVBQVEsS0FBYTtZQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQzNDLENBQUM7UUFDTCxDQUFDOzs7T0FQQTtJQVNMLHNCQUFDO0FBQUQsQ0FBQyxBQXRCRCxDQUFxQyx1QkFBVSxHQXNCOUM7QUF0QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG5cbiAgICBwcml2YXRlIF9jbHI6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY2xyID0gXCJyZWRcIjtcbiAgICB9XG5cbiAgICBnZXQgY2xyKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbHI7XG4gICAgfVxuICAgIFxuICAgIHNldCBjbHIodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fY2xyICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY2xyID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjbHInLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19