"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        // Initialize default values.
        _this.htmlString = "<table style='width:100%; font-size:26px'><tr><th>Firstname</th><th>Lastname</th> <th>Age</th></tr><tr><td>Jill</td><td>Smith</td> <td>50</td></tr><tr><td>Eve</td><td>Jackson</td><td>94</td></tr></table>";
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "htmlString", {
        get: function () {
            return this._htmlString;
        },
        set: function (value) {
            if (this._htmlString !== value) {
                this._htmlString = value;
                this.notifyPropertyChange('htmlString', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDO0lBQXFDLG1DQUFVO0lBSTNDO1FBQUEsWUFDSSxpQkFBTyxTQUlWO1FBRkcsNkJBQTZCO1FBQzdCLEtBQUksQ0FBQyxVQUFVLEdBQUcsNk1BQTZNLENBQUM7O0lBQ3BPLENBQUM7SUFFRCxzQkFBSSx1Q0FBVTthQUFkO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUVELFVBQWUsS0FBYTtZQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ2xELENBQUM7UUFDTCxDQUFDOzs7T0FQQTtJQVFMLHNCQUFDO0FBQUQsQ0FBQyxBQXJCRCxDQUFxQyx1QkFBVSxHQXFCOUM7QUFyQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHJpdmF0ZSBfaHRtbFN0cmluZzogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlcy5cbiAgICAgICAgdGhpcy5odG1sU3RyaW5nID0gXCI8dGFibGUgc3R5bGU9J3dpZHRoOjEwMCU7IGZvbnQtc2l6ZToyNnB4Jz48dHI+PHRoPkZpcnN0bmFtZTwvdGg+PHRoPkxhc3RuYW1lPC90aD4gPHRoPkFnZTwvdGg+PC90cj48dHI+PHRkPkppbGw8L3RkPjx0ZD5TbWl0aDwvdGQ+IDx0ZD41MDwvdGQ+PC90cj48dHI+PHRkPkV2ZTwvdGQ+PHRkPkphY2tzb248L3RkPjx0ZD45NDwvdGQ+PC90cj48L3RhYmxlPlwiO1xuICAgIH1cblxuICAgIGdldCBodG1sU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odG1sU3RyaW5nO1xuICAgIH1cbiAgICBcbiAgICBzZXQgaHRtbFN0cmluZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9odG1sU3RyaW5nICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faHRtbFN0cmluZyA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaHRtbFN0cmluZycsIHZhbHVlKVxuICAgICAgICB9XG4gICAgfVxufVxuIl19