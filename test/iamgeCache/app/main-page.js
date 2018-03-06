"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var image_source_1 = require("image-source");
var image_cache_1 = require("ui/image-cache");
var vm = new observable_1.Observable();
function navigatingTo(args) {
    var page = args.object;
    vm.set("imageSource", getCachedImageSource());
    page.bindingContext = vm;
}
exports.navigatingTo = navigatingTo;
function getCachedImageSource() {
    var cache = new image_cache_1.Cache();
    cache.placeholder = image_source_1.fromFile("~/images/icon.png");
    cache.maxRequests = 5;
    // Enable download while not scrolling
    cache.enableDownload();
    var imageSource;
    var URL = "https://github.com/NativeScript.png";
    // Try to read the image from the cache
    var image = cache.get(URL);
    if (image) {
        // If present -- use it.
        imageSource = image_source_1.fromNativeSource(image);
    }
    else {
        // If not present -- request its download.
        cache.push({
            key: URL,
            url: URL,
            completed: function (image, key) {
                if (URL === key) {
                    imageSource = image_source_1.fromNativeSource(image);
                    vm.set("imageSource", imageSource);
                    console.log("Download completed!");
                }
            }
        });
    }
    return cache.placeholder;
}
exports.getCachedImageSource = getCachedImageSource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQXdEO0FBRXhELDZDQUF1RTtBQUN2RSw4Q0FBdUM7QUFHdkMsSUFBTSxFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFFNUIsc0JBQTZCLElBQWU7SUFDeEMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUU3QixFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFFOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDN0IsQ0FBQztBQU5ELG9DQU1DO0FBRUQ7SUFDSSxJQUFNLEtBQUssR0FBRyxJQUFJLG1CQUFLLEVBQUUsQ0FBQztJQUMxQixLQUFLLENBQUMsV0FBVyxHQUFHLHVCQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNsRCxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUV0QixzQ0FBc0M7SUFDdEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRXZCLElBQUksV0FBd0IsQ0FBQztJQUM3QixJQUFNLEdBQUcsR0FBRyxxQ0FBcUMsQ0FBQztJQUNsRCx1Q0FBdUM7SUFDdkMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ1Isd0JBQXdCO1FBQ3hCLFdBQVcsR0FBRywrQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsSUFBSSxDQUFDLENBQUM7UUFDRiwwQ0FBMEM7UUFDMUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNQLEdBQUcsRUFBRSxHQUFHO1lBQ1IsR0FBRyxFQUFFLEdBQUc7WUFDUixTQUFTLEVBQUUsVUFBQyxLQUFVLEVBQUUsR0FBVztnQkFDL0IsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2QsV0FBVyxHQUFHLCtCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN0QyxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQTtvQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO1lBQ0wsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztBQUM3QixDQUFDO0FBakNELG9EQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZSwgZnJvbUZpbGUsIGZyb21OYXRpdmVTb3VyY2UgfSBmcm9tIFwiaW1hZ2Utc291cmNlXCI7XG5pbXBvcnQgeyBDYWNoZSB9IGZyb20gXCJ1aS9pbWFnZS1jYWNoZVwiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZpbGUtc3lzdGVtXCI7XG5cbmNvbnN0IHZtID0gbmV3IE9ic2VydmFibGUoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuXG4gICAgdm0uc2V0KFwiaW1hZ2VTb3VyY2VcIiwgZ2V0Q2FjaGVkSW1hZ2VTb3VyY2UoKSk7XG5cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYWNoZWRJbWFnZVNvdXJjZSgpIHtcbiAgICBjb25zdCBjYWNoZSA9IG5ldyBDYWNoZSgpO1xuICAgIGNhY2hlLnBsYWNlaG9sZGVyID0gZnJvbUZpbGUoXCJ+L2ltYWdlcy9pY29uLnBuZ1wiKTtcbiAgICBjYWNoZS5tYXhSZXF1ZXN0cyA9IDU7XG5cbiAgICAvLyBFbmFibGUgZG93bmxvYWQgd2hpbGUgbm90IHNjcm9sbGluZ1xuICAgIGNhY2hlLmVuYWJsZURvd25sb2FkKCk7XG5cbiAgICBsZXQgaW1hZ2VTb3VyY2U6IEltYWdlU291cmNlO1xuICAgIGNvbnN0IFVSTCA9IFwiaHR0cHM6Ly9naXRodWIuY29tL05hdGl2ZVNjcmlwdC5wbmdcIjtcbiAgICAvLyBUcnkgdG8gcmVhZCB0aGUgaW1hZ2UgZnJvbSB0aGUgY2FjaGVcbiAgICB2YXIgaW1hZ2UgPSBjYWNoZS5nZXQoVVJMKTtcbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgLy8gSWYgcHJlc2VudCAtLSB1c2UgaXQuXG4gICAgICAgIGltYWdlU291cmNlID0gZnJvbU5hdGl2ZVNvdXJjZShpbWFnZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBJZiBub3QgcHJlc2VudCAtLSByZXF1ZXN0IGl0cyBkb3dubG9hZC5cbiAgICAgICAgY2FjaGUucHVzaCh7XG4gICAgICAgICAgICBrZXk6IFVSTCxcbiAgICAgICAgICAgIHVybDogVVJMLFxuICAgICAgICAgICAgY29tcGxldGVkOiAoaW1hZ2U6IGFueSwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoVVJMID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSBmcm9tTmF0aXZlU291cmNlKGltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgdm0uc2V0KFwiaW1hZ2VTb3VyY2VcIiwgaW1hZ2VTb3VyY2UpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG93bmxvYWQgY29tcGxldGVkIVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIGNhY2hlLnBsYWNlaG9sZGVyO1xufSJdfQ==