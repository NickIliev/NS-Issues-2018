"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imagepicker = require("nativescript-imagepicker");
var list;
var context = imagepicker.create({
    mode: "multiple" // use "multiple" for multiple selection
});
function onListLoaded(args) {
    list = args.object;
}
exports.onListLoaded = onListLoaded;
function addItems() {
    context
        .authorize()
        .then(function () {
        return context.present();
    })
        .then(function (selection) {
        selection.forEach(function (selected) {
            // process the selected image
            console.log(selected.uri);
            console.log(selected.fileUri);
        });
        list.items = selection;
    }).catch(function (e) {
        // process error
    });
}
exports.addItems = addItems;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esc0RBQXdEO0FBQ3hELElBQUksSUFBYyxDQUFDO0FBQ25CLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDN0IsSUFBSSxFQUFFLFVBQVUsQ0FBQyx3Q0FBd0M7Q0FDNUQsQ0FBQyxDQUFDO0FBRUgsc0JBQTZCLElBQWU7SUFDeEMsSUFBSSxHQUFhLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDakMsQ0FBQztBQUZELG9DQUVDO0FBRUQ7SUFDSSxPQUFPO1NBQ0YsU0FBUyxFQUFFO1NBQ1gsSUFBSSxDQUFDO1FBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsVUFBQyxTQUFTO1FBQ1osU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7WUFDdkIsNkJBQTZCO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsQ0FBQztRQUNQLGdCQUFnQjtJQUNwQixDQUFDLENBQUMsQ0FBQztBQUNYLENBQUM7QUFoQkQsNEJBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSAndWkvbGlzdC12aWV3JztcbmltcG9ydCB7IEhlbGxvV29ybGRNb2RlbCB9IGZyb20gJy4vbWFpbi12aWV3LW1vZGVsJztcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcbmxldCBsaXN0OiBMaXN0VmlldztcbmxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcbiAgICBtb2RlOiBcIm11bHRpcGxlXCIgLy8gdXNlIFwibXVsdGlwbGVcIiBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTGlzdExvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsaXN0ID0gPExpc3RWaWV3PmFyZ3Mub2JqZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSXRlbXMoKSB7XG4gICAgY29udGV4dFxuICAgICAgICAuYXV0aG9yaXplKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoc2VsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzZWxlY3Rpb24uZm9yRWFjaCgoc2VsZWN0ZWQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBwcm9jZXNzIHRoZSBzZWxlY3RlZCBpbWFnZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkLnVyaSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWQuZmlsZVVyaSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGlzdC5pdGVtcyA9IHNlbGVjdGlvbjtcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIC8vIHByb2Nlc3MgZXJyb3JcbiAgICAgICAgfSk7XG59Il19