"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var camera = require("nativescript-camera");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        camera.requestPermissions();
        return _this;
    }
    HelloWorldModel.prototype.onTap = function () {
        console.log("taking picture!");
        camera.takePicture({
            saveToGallery: false
        }).then(function (imageAsset) {
            console.log("Result is an image asset instance");
        });
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLDRDQUE4QztBQUU5QztJQUFxQyxtQ0FBVTtJQUMzQztRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQURHLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDOztJQUNoQyxDQUFDO0lBRU0sK0JBQUssR0FBWjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsV0FBVyxDQUF1QjtZQUNyQyxhQUFhLEVBQUUsS0FBSztTQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsVUFBVTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUMsQUFoQkQsQ0FBcUMsdUJBQVUsR0FnQjlDO0FBaEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25UYXAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFraW5nIHBpY3R1cmUhXCIpO1xuICAgICAgICBjYW1lcmEudGFrZVBpY3R1cmUoPGNhbWVyYS5DYW1lcmFPcHRpb25zPntcbiAgICAgICAgICAgIHNhdmVUb0dhbGxlcnk6IGZhbHNlXG4gICAgICAgIH0pLnRoZW4oKGltYWdlQXNzZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0IGlzIGFuIGltYWdlIGFzc2V0IGluc3RhbmNlXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==