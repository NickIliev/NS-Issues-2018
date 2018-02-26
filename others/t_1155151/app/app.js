/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

require("./bundle-config");
var application = require("application");
// global.myWS = {};
// application.on(application.launchEvent, function (args) {
//     if (args.android) {
//         // For Android applications, args.android is an android.content.Intent class.
//         global.myWs = new WS("ws://10.11.13.171/HRApp/api/Websocket/Get?username=boobal",{protocols: [/* 'chat', 'video' */], timeout: 6000, allowCellular: true, headers: { 'Authorization': 'Basic ...' }});
//         console.log("Launched Android application with the following intent: " + args.android + ".");
//     } else if (args.ios !== undefined) {
//         // For iOS applications, args.ios is NSDictionary (launchOptions).
//         console.log("Launched iOS application with options: " + args.ios);
//     }
// });
application.start({ moduleName: "home/home-page" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
