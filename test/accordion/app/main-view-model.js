"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.items = [
            {
                title: "1", footer: "10", headerText: "First", footerText: "4",
                items: [
                    { text: "Stop", image: "https://d2odgkulk9w7if.cloudfront.net/images/default-source/default-album/logo.png?sfvrsn=a9520ffe_0" },
                    { text: "Drop", image: "https://mobidev.biz/content/blog/AngularNative/NA-NS3.png" }
                ]
            }
        ];
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            if (this._items !== value) {
                this._items = value;
                this.notifyPropertyChange('items', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDO0lBQXFDLG1DQUFVO0lBSzNDO1FBQUEsWUFDSSxpQkFBTyxTQVdWO1FBVEcsS0FBSSxDQUFDLEtBQUssR0FBRztZQUNUO2dCQUNJLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHO2dCQUM5RCxLQUFLLEVBQUU7b0JBQ0gsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxzR0FBc0csRUFBQztvQkFDOUgsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSwyREFBMkQsRUFBRTtpQkFDdkY7YUFDSjtTQUNKLENBQUE7O0lBQ0wsQ0FBQztJQUVELHNCQUFJLGtDQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxLQUFpQjtZQUN2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQzdDLENBQUM7UUFDTCxDQUFDOzs7T0FQQTtJQVFMLHNCQUFDO0FBQUQsQ0FBQyxBQTdCRCxDQUFxQyx1QkFBVSxHQTZCOUM7QUE3QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG5cbiAgICBwcml2YXRlIF9pdGVtczogQXJyYXk8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiMVwiLCBmb290ZXI6IFwiMTBcIiwgaGVhZGVyVGV4dDogXCJGaXJzdFwiLCBmb290ZXJUZXh0OiBcIjRcIixcbiAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6IFwiU3RvcFwiLCBpbWFnZTogXCJodHRwczovL2Qyb2Rna3Vsazl3N2lmLmNsb3VkZnJvbnQubmV0L2ltYWdlcy9kZWZhdWx0LXNvdXJjZS9kZWZhdWx0LWFsYnVtL2xvZ28ucG5nP3NmdnJzbj1hOTUyMGZmZV8wXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6IFwiRHJvcFwiLCBpbWFnZTogXCJodHRwczovL21vYmlkZXYuYml6L2NvbnRlbnQvYmxvZy9Bbmd1bGFyTmF0aXZlL05BLU5TMy5wbmdcIiB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgZ2V0IGl0ZW1zKCk6IEFycmF5PGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gICAgfVxuXG4gICAgc2V0IGl0ZW1zKHZhbHVlOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIGlmICh0aGlzLl9pdGVtcyAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpdGVtcycsIHZhbHVlKVxuICAgICAgICB9XG4gICAgfVxufVxuIl19