 
var application = require("application");

function onNavigatingTo(args) {
    console.log("============= onNavigatingTo =============");
    console.log("foregroundActivity: " + application.android.foregroundActivity);
    console.log("startActivity: " + application.android.startActivity);
}
exports.onNavigatingTo = onNavigatingTo;

function onLoaded(args) {
    console.log("============= onLoaded =============");
    console.log("foregroundActivity: " + application.android.foregroundActivity);
    console.log("startActivity: " + application.android.startActivity);
}
exports.onLoaded = onLoaded;

function onNavigatedTo(args) {
    console.log("============= onNavigatedTo =============");
    console.log("foregroundActivity: " + application.android.foregroundActivity);
    console.log("startActivity: " + application.android.startActivity);
}
exports.onNavigatedTo = onNavigatedTo;