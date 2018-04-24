"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var enums_1 = require("tns-core-modules/ui/enums");
var myView;
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
    myView = page.getViewById("myView");
}
exports.navigatingTo = navigatingTo;
function anime() {
    myView.animate({
        backgroundColor: "#414b7d",
        curve: enums_1.AnimationCurve.easeOut,
        delay: 300,
        duration: 3000,
        iterations: 3,
        opacity: 0.8,
        rotate: 360,
        scale: { x: 2, y: 2 },
        translate: { x: 0, y: 200 }
    }).then(function () {
        console.log("Animation finished");
    }).catch(function (e) {
        console.log(e.message);
    });
}
exports.anime = anime;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscURBQW9EO0FBRXBELG1EQUEyRDtBQUczRCxJQUFJLE1BQU0sQ0FBQztBQUVYLHdFQUF3RTtBQUN4RSxzQkFBNkIsSUFBZTtJQUN4QyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7SUFFNUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUxELG9DQUtDO0FBRUQ7SUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ1gsZUFBZSxFQUFFLFNBQVM7UUFDMUIsS0FBSyxFQUFFLHNCQUFjLENBQUMsT0FBTztRQUM3QixLQUFLLEVBQUUsR0FBRztRQUNWLFFBQVEsRUFBRSxJQUFJO1FBQ2QsVUFBVSxFQUFFLENBQUM7UUFDYixPQUFPLEVBQUUsR0FBRztRQUNaLE1BQU0sRUFBRSxHQUFHO1FBQ1gsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ3JCLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtLQUM5QixDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUM7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFoQkQsc0JBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IEhlbGxvV29ybGRNb2RlbCB9IGZyb20gJy4vbWFpbi12aWV3LW1vZGVsJztcblxuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYW5pbWF0aW9uXCI7XG5cbmxldCBteVZpZXc7XG5cbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFBhZ2UgXCJuYXZpZ2F0aW5nVG9cIiBldmVudCBhdHRhY2hlZCBpbiBtYWluLXBhZ2UueG1sXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBIZWxsb1dvcmxkTW9kZWwoKTtcblxuICAgIG15VmlldyA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJteVZpZXdcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbmltZSgpIHtcbiAgICBteVZpZXcuYW5pbWF0ZSh7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDE0YjdkXCIsXG4gICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0LFxuICAgICAgICBkZWxheTogMzAwLFxuICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgaXRlcmF0aW9uczogMyxcbiAgICAgICAgb3BhY2l0eTogMC44LFxuICAgICAgICByb3RhdGU6IDM2MCxcbiAgICAgICAgc2NhbGU6IHsgeDogMiwgeTogMiB9LFxuICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMjAwIH1cbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBbmltYXRpb24gZmluaXNoZWRcIik7XG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICB9KVxufSJdfQ==