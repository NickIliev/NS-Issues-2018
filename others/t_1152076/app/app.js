/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

var firebase = require("nativescript-plugin-firebase");
require("./bundle-config");
var application = require("application");

// caling firebase.init atter applicaiton has stated (in main-page.js)
exports.doInit = function () {
  firebase.init({
    onMessageReceivedCallback: function (message) {
      console.log("Title: " + message.title);
      console.log("Body: " + message.body);
 
      alert("message.body" + message.body);
    }
  }).then(
    function (instance) {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
  );
}

application.start({ moduleName: "main-page" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
