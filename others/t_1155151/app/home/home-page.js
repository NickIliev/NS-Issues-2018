var LocalNotifications = require("nativescript-local-notifications");
var WS = require('nativescript-websockets');
var mySocket;
WebSocketClick();
function WebSocketClick() {
    console.log("inside websocket.");

    mySocket = new WS("ws://echo.websocket.org", { protocols: [/* 'chat', 'video' */], timeout: 6000, allowCellular: true, headers: { 'Authorization': 'Basic ...' } });

    mySocket.on('open', function (socket) {
        console.log("Hey I'm open");
    });


    mySocket.on('message', function (socket, message) {
        console.log("mySocket.on('message'): " + message);

        LocalNotifications.hasPermission();
        LocalNotifications.schedule([{
            id: 1,
            title: message,
            body: 'Recurs every minute until cancelled',
            ticker: 'The ticker',
            ongoing: true
        }]).then(
            function () {
                console.log("Notification scheduled");
            },
            function (error) {
                console.log("scheduling error: " + error);
            }
        )
    });
    
    mySocket.on('close', function (socket, code, reason) { console.log("Socket was closed because: ", reason, " code: ", code); });
    mySocket.on('error', function (socket, error) { console.log("Socket had an error", error); });
    mySocket.open();
}
exports.schedule = function () {
    mySocket.send("hello");
}



function onNavigatingTo(args) {
    var page = args.object;

}

exports.onNavigatingTo = onNavigatingTo;