"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
function navigatingTo(args) {
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
    var input;
    // var device = AVCaptureDevice.new();
    // try {
    //     input = AVCaptureDeviceInput.deviceInputWithDeviceError(device);
    // } catch (error) {
    //     console.log(error);
    // }
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscURBQW9EO0FBRXBELHNCQUE2QixJQUFlO0lBQ3hDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztJQUU1QyxJQUFJLEtBQUssQ0FBQTtJQUNULHNDQUFzQztJQUN0QyxRQUFRO0lBQ1IsdUVBQXVFO0lBQ3ZFLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsSUFBSTtBQUNSLENBQUM7QUFYRCxvQ0FXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBIZWxsb1dvcmxkTW9kZWwgfSBmcm9tICcuL21haW4tdmlldy1tb2RlbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEhlbGxvV29ybGRNb2RlbCgpO1xuXG4gICAgdmFyIGlucHV0XG4gICAgLy8gdmFyIGRldmljZSA9IEFWQ2FwdHVyZURldmljZS5uZXcoKTtcbiAgICAvLyB0cnkge1xuICAgIC8vICAgICBpbnB1dCA9IEFWQ2FwdHVyZURldmljZUlucHV0LmRldmljZUlucHV0V2l0aERldmljZUVycm9yKGRldmljZSk7XG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vIH1cbn0iXX0=