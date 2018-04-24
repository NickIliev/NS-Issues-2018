"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloWorldModel = /** @class */ (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        return _super.call(this) || this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "searchbarVisible", {
        get: function () {
            return this._searchbarVisible;
        },
        set: function (value) {
            if (this._searchbarVisible !== value) {
                this._searchbarVisible = value;
                this.notifyPropertyChange('searchbarVisible', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDO0lBQXFDLG1DQUFVO0lBSTNDO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBRUQsc0JBQUksNkNBQWdCO2FBQXBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxDQUFDO2FBRUQsVUFBcUIsS0FBYztZQUMvQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztnQkFDL0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ3hELENBQUM7UUFDTCxDQUFDOzs7T0FQQTtJQVFMLHNCQUFDO0FBQUQsQ0FBQyxBQWxCRCxDQUFxQyx1QkFBVSxHQWtCOUM7QUFsQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHJpdmF0ZSBfc2VhcmNoYmFyVmlzaWJsZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCBzZWFyY2hiYXJWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VhcmNoYmFyVmlzaWJsZTtcbiAgICB9XG4gICAgXG4gICAgc2V0IHNlYXJjaGJhclZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlYXJjaGJhclZpc2libGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWFyY2hiYXJWaXNpYmxlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWFyY2hiYXJWaXNpYmxlJywgdmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=