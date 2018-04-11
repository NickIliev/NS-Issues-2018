"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var nativescript_sse_1 = require("nativescript-sse");
var HelloWorldModel = /** @class */ (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.list = new observable_array_1.ObservableArray();
        _this.sse = new nativescript_sse_1.SSE('http://localhost:8000', { 'X-Token': 'Test1234' });
        console.log("Observable this.sse", _this.sse);
        _this.sse.events.on('onConnect', function (data) {
            console.log("onConnect");
            console.log(data.object.connected);
        });
        _this.sse.events.on('onMessage', function (data) {
            console.log("onMessage");
            _this.list.push(JSON.parse(data.object.message.data));
            console.log(JSON.parse(data.object.message.data));
        });
        _this.sse.events.on('onError', function (data) {
            console.log("onError");
            console.log(data.object.error);
        });
        return _this;
    }
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBQzlELDJFQUF5RTtBQUN6RSxxREFBdUM7QUFFdkM7SUFBcUMsbUNBQVU7SUFJM0M7UUFBQSxZQUNJLGlCQUFPLFNBc0JWO1FBckJHLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7UUFDbEMsS0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLHNCQUFHLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU3QyxLQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUEsSUFBSTtZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQSxJQUFJO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFekIsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFBLElBQUk7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7O0lBQ1AsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUFxQyx1QkFBVSxHQTRCOUM7QUE1QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0IHsgU1NFIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXNzZSc7XG5kZWNsYXJlIGNvbnN0IEV2ZW50U291cmNlO1xuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIGxpc3Q6IE9ic2VydmFibGVBcnJheTxhbnk+O1xuICAgIHNzZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGlzdCA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5zc2UgPSBuZXcgU1NFKCdodHRwOi8vbG9jYWxob3N0OjgwMDAnLCB7ICdYLVRva2VuJzogJ1Rlc3QxMjM0JyB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJPYnNlcnZhYmxlIHRoaXMuc3NlXCIsIHRoaXMuc3NlKTtcblxuICAgICAgICB0aGlzLnNzZS5ldmVudHMub24oJ29uQ29ubmVjdCcsIGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbkNvbm5lY3RcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLm9iamVjdC5jb25uZWN0ZWQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNzZS5ldmVudHMub24oJ29uTWVzc2FnZScsIGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbk1lc3NhZ2VcIik7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKEpTT04ucGFyc2UoZGF0YS5vYmplY3QubWVzc2FnZS5kYXRhKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGRhdGEub2JqZWN0Lm1lc3NhZ2UuZGF0YSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNzZS5ldmVudHMub24oJ29uRXJyb3InLCBkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25FcnJvclwiKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5vYmplY3QuZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19