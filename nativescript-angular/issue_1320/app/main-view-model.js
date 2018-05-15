"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.source = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "source", {
        get: function () {
            return this._source;
        },
        set: function (value) {
            if (this._source !== value) {
                this._source = value;
                this.notifyPropertyChange('source', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
