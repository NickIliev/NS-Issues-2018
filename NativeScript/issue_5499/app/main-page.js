"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs_1 = require("tns-core-modules/ui/dialogs");
function navigatingTo(args) {
    var page = args.object;
    openDialog();
}
exports.navigatingTo = navigatingTo;
function openDialog() {
    var options = {
        title: "some title",
        message: "some message",
        cancelButtonText: "Close",
        actions: ["yes", "no"],
        cancelable: false
    };
    dialogs_1.action(options).then(function (res) {
        console.log(res);
    });
}
exports.openDialog = openDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsdURBQXVGO0FBRXZGLHNCQUE2QixJQUFlO0lBQ3hDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFN0IsVUFBVSxFQUFFLENBQUM7QUFDakIsQ0FBQztBQUpELG9DQUlDO0FBRUQ7SUFDSSxJQUFJLE9BQU8sR0FBa0I7UUFDekIsS0FBSyxFQUFFLFlBQVk7UUFDbkIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsZ0JBQWdCLEVBQUUsT0FBTztRQUN6QixPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1FBQ3RCLFVBQVUsRUFBRSxLQUFLO0tBQ3BCLENBQUE7SUFFRCxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFaRCxnQ0FZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuaW1wb3J0IHsgQWN0aW9uT3B0aW9ucywgQ2FuY2VsYWJsZU9wdGlvbnMsIGFjdGlvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuXG4gICAgb3BlbkRpYWxvZygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlbkRpYWxvZygpIHtcbiAgICBsZXQgb3B0aW9uczogQWN0aW9uT3B0aW9ucyA9IHtcbiAgICAgICAgdGl0bGU6IFwic29tZSB0aXRsZVwiLFxuICAgICAgICBtZXNzYWdlOiBcInNvbWUgbWVzc2FnZVwiLFxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNsb3NlXCIsXG4gICAgICAgIGFjdGlvbnM6IFtcInllc1wiLCBcIm5vXCJdLFxuICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZVxuICAgIH1cbiAgICBcbiAgICBhY3Rpb24ob3B0aW9ucykudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIH0pXG59Il19