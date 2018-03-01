
const frameModule = require("ui/frame");
const observableModule = require("data/observable");

var vm = new observableModule.Observable();

function onNavigatingTo(args) {

    var page = args.object;

    page.bindingContext = vm;

}
exports.onNavigatingTo = onNavigatingTo;

function callMeFunc(args) {
    var topmostView = frameModule.topmost();
    var firstCheckBox = topmostView.getViewById("firstCheckBox");
    var secondCheckBox = topmostView.getViewById("secondCheckBox");

    
    console.log("firstCheckBox: ", firstCheckBox.checked);
    console.log("secondCheckBox: ", secondCheckBox.checked);

    vm.set("firstValue", firstCheckBox.checked);
    vm.set("secondValue", secondCheckBox.checked);

}
exports.callMeFunc = callMeFunc;