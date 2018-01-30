"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
function navigatingTo(args) {
    var page = args.object;
    var items = [{
            title: 'Some title of 0',
            'attr.name1': 10,
            'attr.name2': 20
        }, {}];
    var vm = new main_view_model_1.HelloWorldModel();
    vm.set("items", items);
    page.bindingContext = vm;
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EscURBQW9EO0FBRXBELHNCQUE2QixJQUFlO0lBRXhDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFN0IsSUFBSSxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssRUFBRSxpQkFBaUI7WUFDcEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsWUFBWSxFQUFFLEVBQUU7U0FDbkIsRUFBRSxFQUNOLENBQUMsQ0FBQTtJQUNGLElBQUksRUFBRSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0lBQy9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXZCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzdCLENBQUM7QUFkRCxvQ0FjQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IEhlbGxvV29ybGRNb2RlbCB9IGZyb20gJy4vbWFpbi12aWV3LW1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcblxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG5cbiAgICB2YXIgaXRlbXMgPSBbe1xuICAgICAgICB0aXRsZTogJ1NvbWUgdGl0bGUgb2YgMCcsXG4gICAgICAgICAgICAnYXR0ci5uYW1lMSc6IDEwLFxuICAgICAgICAgICAgJ2F0dHIubmFtZTInOiAyMFxuICAgICAgICB9LCB7XG4gICAgfV1cbiAgICBsZXQgdm0gPSBuZXcgSGVsbG9Xb3JsZE1vZGVsKCk7XG4gICAgdm0uc2V0KFwiaXRlbXNcIiwgaXRlbXMpO1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xufSJdfQ==