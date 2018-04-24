"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var frame_1 = require("ui/frame");
var enums_1 = require("ui/enums");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.navigatingTo = navigatingTo;
function navigateWithSlideRight() {
    var navigationEntry = {
        moduleName: "main-page",
        animated: true,
        // Set up a transition property on page navigation.
        transition: {
            name: "slideRight",
            duration: 380,
            curve: enums_1.AnimationCurve.easeIn
        }
    };
    var frame = frame_1.topmost();
    frame.navigate(navigationEntry);
}
exports.navigateWithSlideRight = navigateWithSlideRight;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUlGLHFEQUFvRDtBQUVwRCxrQ0FBa0M7QUFDbEMsa0NBQTBDO0FBRTFDLHdFQUF3RTtBQUN4RSxzQkFBNkIsSUFBZTtJQUV4QyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTdCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFDaEQsQ0FBQztBQUxELG9DQUtDO0FBRUQ7SUFDSSxJQUFNLGVBQWUsR0FBRztRQUNwQixVQUFVLEVBQUUsV0FBVztRQUN2QixRQUFRLEVBQUUsSUFBSTtRQUNkLG1EQUFtRDtRQUNuRCxVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsWUFBWTtZQUNsQixRQUFRLEVBQUUsR0FBRztZQUNiLEtBQUssRUFBRSxzQkFBYyxDQUFDLE1BQU07U0FDL0I7S0FDSixDQUFDO0lBQ0YsSUFBTSxLQUFLLEdBQUcsZUFBTyxFQUFFLENBQUM7SUFDeEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBYkQsd0RBYUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW4gTmF0aXZlU2NyaXB0LCBhIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIGFuIFhNTCBmaWxlIGlzIGtub3duIGFzXG5hIGNvZGUtYmVoaW5kIGZpbGUuIFRoZSBjb2RlLWJlaGluZCBpcyBhIGdyZWF0IHBsYWNlIHRvIHBsYWNlIHlvdXIgdmlld1xubG9naWMsIGFuZCB0byBzZXQgdXAgeW91ciBwYWdl4oCZcyBkYXRhIGJpbmRpbmcuXG4qL1xuXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgSGVsbG9Xb3JsZE1vZGVsIH0gZnJvbSAnLi9tYWluLXZpZXctbW9kZWwnO1xuXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCJcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInVpL2VudW1zXCI7XG5cbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFBhZ2UgXCJuYXZpZ2F0aW5nVG9cIiBldmVudCBhdHRhY2hlZCBpbiBtYWluLXBhZ2UueG1sXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgSGVsbG9Xb3JsZE1vZGVsKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZVdpdGhTbGlkZVJpZ2h0KCkge1xuICAgIGNvbnN0IG5hdmlnYXRpb25FbnRyeSA9IHtcbiAgICAgICAgbW9kdWxlTmFtZTogXCJtYWluLXBhZ2VcIixcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIC8vIFNldCB1cCBhIHRyYW5zaXRpb24gcHJvcGVydHkgb24gcGFnZSBuYXZpZ2F0aW9uLlxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBuYW1lOiBcInNsaWRlUmlnaHRcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluXG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGZyYW1lID0gdG9wbW9zdCgpO1xuICAgIGZyYW1lLm5hdmlnYXRlKG5hdmlnYXRpb25FbnRyeSk7XG59Il19