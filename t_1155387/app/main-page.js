var camera = require("nativescript-camera");
var imageModule = require("tns-core-modules/ui/image");
var imageSource = require("tns-core-modules/image-source");

var bghttp = require("nativescript-background-http");
var session = bghttp.session("image-upload");
var serverUrl = "http://httpbin.org/post";

exports.takePicture = function () {
    var isAvailable = camera.isAvailable();
    if (isAvailable === true) {
        camera.requestPermissions();
        var options = { keepAspectRatio: false, saveToGallery: false };
        camera.takePicture(options)
            .then(function (imageAsset) {
                console.log("Result is an image asset instance");
                //this is my imageAsset
                //"/storage/emulated/0/Android/data/org.nativescript.CameraSample/files/NSIMG_20180227_121519.jpg"
                uploadImageToServer(imageAsset._android);
            }).catch(function (err) {
                console.log("Error -> " + err.message);
            });
    } else {
        alert("Your mobile phone doesnot have camera option.!");
    }

}

function uploadImageToServer(fileUri) {
    var filename = 'img_' + new Date().getTime() + '.jpg';
    var request = {
        url: serverUrl, // tested with "http://httpbin.org/post"
        method: "POST",
        headers: {
            "Content-Type": "application/octet-stream",
            "File-Name": filename
        },
        description: "{ 'uploading': '" + filename + "' }"
    };

    var task = session.uploadFile(fileUri, request);

    task.on("progress", logEvent);
    task.on("error", logEvent);
    task.on("complete", logEvent);

    function logEvent(e) {
        console.log(e.eventName);
    }
}


