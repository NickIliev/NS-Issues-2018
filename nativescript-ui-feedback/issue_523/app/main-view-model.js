"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.dataItems = [1, 2, 3];
        _this.counter = 0;
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
    HelloWorldModel.prototype.onStackLoaded = function () {
        console.log("onStackLoaded");
    };
    HelloWorldModel.prototype.onItemLoading = function (args) {
        console.log("onItemLoadinfg");
        console.log("Item INDEX: " + args.index);
        console.log("item loading fired " + (++this.counter) + " times!");
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
