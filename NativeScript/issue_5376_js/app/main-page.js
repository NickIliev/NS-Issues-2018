
var createViewModel = require("./main-view-model").createViewModel;

function onNavigatingTo(args) {

    var page = args.object;
    page.bindingContext = createViewModel();
}
exports.onNavigatingTo = onNavigatingTo;

function onSubmit(args) {
    var searchbar = args.object;
    console.log("Search submit result: " + searchbar.text);
}
exports.onSubmit = onSubmit;
function onClear(args) {
    console.log("clear search-bar text");
}
exports.onClear = onClear;