"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var geolocation = require("nativescript-geolocation");
function navigatingTo(args) {
    var page = args.object;
    getDeviceLocation().then(function (location) {
        console.log(location);
    });
}
exports.navigatingTo = navigatingTo;
function getDeviceLocation() {
    return new Promise(function (resolve, reject) {
        geolocation.isEnabled().then(function () {
            geolocation.getCurrentLocation({ desiredAccuracy: 3, timeout: 3000 }).then(function (location) {
                resolve(location);
            }).catch(function (error) {
                console.dir(error);
            });
        }, function (error) {
            geolocation.enableLocationRequest().then(function () {
                geolocation.getCurrentLocation({ timeout: 3000 }).then(function (location) {
                    resolve(location);
                }).catch(function (error) {
                    reject(error);
                    console.dir(error);
                });
            }, function (error) {
                console.dir(error);
            });
        });
    });
}
exports.getDeviceLocation = getDeviceLocation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esc0RBQXdEO0FBRXhELHNCQUE2QixJQUFlO0lBQ3hDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFHN0IsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDekIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBUEQsb0NBT0M7QUFFRDtJQUVJLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQy9CLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDekIsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO2dCQUMvRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztnQkFFVixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUVKLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDckMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtvQkFDM0QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLO29CQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBR1AsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDO0FBNUJELDhDQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5cbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuXG5cbiAgICBnZXREZXZpY2VMb2NhdGlvbigpLnRoZW4obG9jYXRpb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGV2aWNlTG9jYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGdlb2xvY2F0aW9uLmlzRW5hYmxlZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZ2VvbG9jYXRpb24uZ2V0Q3VycmVudExvY2F0aW9uKHsgZGVzaXJlZEFjY3VyYWN5OiAzLCB0aW1lb3V0OiAzMDAwIH0pLnRoZW4obG9jYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobG9jYXRpb24pO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuXG4gICAgICAgICAgICBnZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBnZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oeyB0aW1lb3V0OiAzMDAwIH0pLnRoZW4obG9jYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cblxuICAgIH0pO1xuXG59Il19