"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        // Initialize default values.
        _this.htmlString = "<table style='width:100%'><tr><th>Firstname</th><th>Lastname</th> <th>Age</th></tr><tr><td>Jill</td><td>Smith</td> <td>50</td></tr><tr><td>Eve</td><td>Jackson</td><td>94</td></tr></table>";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDO0lBQXFDLG1DQUFVO0lBSTNDO1FBQUEsWUFDSSxpQkFBTyxTQUlWO1FBRkcsNkJBQTZCO1FBQzdCLEtBQUksQ0FBQyxVQUFVLEdBQUcsNkxBQTZMLENBQUM7O0lBQ3BOLENBQUM7SUFFRCxzQkFBSSx1Q0FBVTthQUFkO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUVELFVBQWUsS0FBYTtZQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ2xELENBQUM7UUFDTCxDQUFDOzs7T0FQQTtJQVFMLHNCQUFDO0FBQUQsQ0FBQyxBQXJCRCxDQUFxQyx1QkFBVSxHQXFCOUM7QUFyQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHJpdmF0ZSBfaHRtbFN0cmluZzogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlcy5cbiAgICAgICAgdGhpcy5odG1sU3RyaW5nID0gXCI8dGFibGUgc3R5bGU9J3dpZHRoOjEwMCUnPjx0cj48dGg+Rmlyc3RuYW1lPC90aD48dGg+TGFzdG5hbWU8L3RoPiA8dGg+QWdlPC90aD48L3RyPjx0cj48dGQ+SmlsbDwvdGQ+PHRkPlNtaXRoPC90ZD4gPHRkPjUwPC90ZD48L3RyPjx0cj48dGQ+RXZlPC90ZD48dGQ+SmFja3NvbjwvdGQ+PHRkPjk0PC90ZD48L3RyPjwvdGFibGU+XCI7XG4gICAgfVxuXG4gICAgZ2V0IGh0bWxTdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0bWxTdHJpbmc7XG4gICAgfVxuICAgIFxuICAgIHNldCBodG1sU3RyaW5nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX2h0bWxTdHJpbmcgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9odG1sU3RyaW5nID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdodG1sU3RyaW5nJywgdmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=