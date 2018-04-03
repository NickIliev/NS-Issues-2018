
var createViewModel = require("./main-view-model").createViewModel;

var Https = require("nativescript-https");

function onNavigatingTo(args) {

    var page = args.object;

    Https.request({
        url: 'https://httpbin.org/get',
        method: 'GET'
    }).then((response) => {
        console.log('Https.request response', response)
    }).catch((error) => {
        console.error('Https.request error', error)
    })

    page.bindingContext = createViewModel();
}

exports.onNavigatingTo = onNavigatingTo;