"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloWorldModel = /** @class */ (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.longtext = "very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long text!";
        _this.message = "some message";
        _this.bullet = String.fromCharCode(0xf111);
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            if (this._message !== value) {
                this._message = value;
                this.notifyPropertyChange('message', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDO0lBQXFDLG1DQUFVO0lBTzNDO1FBQUEsWUFDSSxpQkFBTyxTQUtWO1FBSEcsS0FBSSxDQUFDLFFBQVEsR0FBRyxpTEFBaUwsQ0FBQztRQUNsTSxLQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztRQUM5QixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBQzlDLENBQUM7SUFFRCxzQkFBSSxvQ0FBTzthQUFYO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUVELFVBQVksS0FBYTtZQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQy9DLENBQUM7UUFDTCxDQUFDOzs7T0FQQTtJQVFMLHNCQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUFxQyx1QkFBVSxHQXlCOUM7QUF6QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgYnVsbGV0OiBzdHJpbmc7XG4gICAgbG9uZ3RleHQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9tZXNzYWdlOiBzdHJpbmc7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMubG9uZ3RleHQgPSBcInZlcnkgdmVyeSB2ZXJ5IHZlcnkgdmVyeSB2ZXJ5IHZlcnkgdmVyeSB2ZXJ5IHZlcnkgdmVyeSB2ZXJ5IHZlcnkgdmVyeSB2ZXJ5IHZlcnkgdmVyeSB2ZXJ5IHZlcnkgdmVyeSB2ZXJ5IHZlcnkgdmVyeSB2ZXJ5IHZlcnkgdmVyeSB2ZXJ5IHZlcnkgdmVyeSB2ZXJ5IHZlcnkgdmVyeSB2ZXJ5IGxvbmcgdGV4dCFcIjtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJzb21lIG1lc3NhZ2VcIjtcbiAgICAgICAgdGhpcy5idWxsZXQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjExMSk7XG4gICAgfVxuXG4gICAgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lc3NhZ2U7XG4gICAgfVxuICAgIFxuICAgIHNldCBtZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX21lc3NhZ2UgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9tZXNzYWdlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdtZXNzYWdlJywgdmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=