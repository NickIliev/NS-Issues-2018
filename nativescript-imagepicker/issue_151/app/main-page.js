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
        });
        list.items = selection;
    }).catch(function (e) {
        // process error
    });
}
exports.addItems = addItems;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esc0RBQXdEO0FBQ3hELElBQUksSUFBYyxDQUFDO0FBQ25CLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDN0IsSUFBSSxFQUFFLFVBQVUsQ0FBQyx3Q0FBd0M7Q0FDNUQsQ0FBQyxDQUFDO0FBRUgsc0JBQTZCLElBQWU7SUFDeEMsSUFBSSxHQUFhLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDakMsQ0FBQztBQUZELG9DQUVDO0FBRUQ7SUFDSSxPQUFPO1NBQ0YsU0FBUyxFQUFFO1NBQ1gsSUFBSSxDQUFDO1FBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsVUFBQyxTQUFTO1FBQ1osU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7WUFDdkIsNkJBQTZCO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsQ0FBQztRQUNQLGdCQUFnQjtJQUNwQixDQUFDLENBQUMsQ0FBQztBQUNYLENBQUM7QUFkRCw0QkFjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3VpL2xpc3Qtdmlldyc7XG5pbXBvcnQgeyBIZWxsb1dvcmxkTW9kZWwgfSBmcm9tICcuL21haW4tdmlldy1tb2RlbCc7XG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XG5sZXQgbGlzdDogTGlzdFZpZXc7XG5sZXQgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XG4gICAgbW9kZTogXCJtdWx0aXBsZVwiIC8vIHVzZSBcIm11bHRpcGxlXCIgZm9yIG11bHRpcGxlIHNlbGVjdGlvblxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxpc3RMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgbGlzdCA9IDxMaXN0Vmlldz5hcmdzLm9iamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEl0ZW1zKCkge1xuICAgIGNvbnRleHRcbiAgICAgICAgLmF1dGhvcml6ZSgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHNlbGVjdGlvbikgPT4ge1xuICAgICAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goKHNlbGVjdGVkKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcHJvY2VzcyB0aGUgc2VsZWN0ZWQgaW1hZ2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGlzdC5pdGVtcyA9IHNlbGVjdGlvbjtcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIC8vIHByb2Nlc3MgZXJyb3JcbiAgICAgICAgfSk7XG59Il19