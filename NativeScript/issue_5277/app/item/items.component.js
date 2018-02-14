"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var timer = require("timer");
var ItemsComponent = (function () {
    function ItemsComponent() {
        this.smsText = "Get Code";
        this.smsButtonEnabled = true;
    }
    ItemsComponent.prototype.ngAfterViewInit = function () {
        this.button = this.smsButton.nativeElement; // Button ()NativeScript)
        this.iosButton = this.button.nativeView;
        console.log(this.iosButton); // UIButton
        var newIosButton = UIButton.buttonWithType(0 /* Custom */);
        this.button.nativeView = newIosButton;
        console.log(this.button.nativeView.buttonType); // UIButtonType
    };
    ItemsComponent.prototype.onSMSTapped = function () {
        var _this = this;
        console.log("onSMSTapped");
        var count = 60;
        this.smsButtonEnabled = false;
        var id = timer.setInterval(function () {
            _this.smsButton.nativeElement.text = "Resend(" + count-- + ")"; // After this line, the text in button above flashed (fade in and out), and text changed.
            if (count <= 1) {
                _this.smsButton.nativeElement.text = "Resend";
                _this.smsButtonEnabled = true;
                timer.clearInterval(id);
            }
        }, 1000);
    };
    __decorate([
        core_1.ViewChild("smsButton"),
        __metadata("design:type", core_1.ElementRef)
    ], ItemsComponent.prototype, "smsButton", void 0);
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDZCQUErQjtBQVMvQjtJQVdJO1FBVFEsWUFBTyxHQUFXLFVBQVUsQ0FBQztRQUM3QixxQkFBZ0IsR0FBWSxJQUFJLENBQUM7SUFRekIsQ0FBQztJQUVqQix3Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLHlCQUF5QjtRQUNyRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVztRQUl4QyxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxnQkFBcUIsQ0FBQztRQUNoRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGVBQWU7SUFDbkUsQ0FBQztJQUdELG9DQUFXLEdBQVg7UUFBQSxpQkFZQztRQVhHLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDMUIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxZQUFVLEtBQUssRUFBRSxNQUFHLENBQUMsQ0FBQyx5RkFBeUY7WUFDbkosRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztnQkFDN0MsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDN0IsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QixDQUFDO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQWpDdUI7UUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7a0NBQVksaUJBQVU7cURBQUM7SUFMckMsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzs7T0FDVyxjQUFjLENBdUMxQjtJQUFELHFCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7QUF2Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIHRpbWVyIGZyb20gXCJ0aW1lclwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInVpL2J1dHRvblwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgc21zVGV4dDogc3RyaW5nID0gXCJHZXQgQ29kZVwiO1xuICAgIHByaXZhdGUgc21zQnV0dG9uRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBAVmlld0NoaWxkKFwic21zQnV0dG9uXCIpIHNtc0J1dHRvbjogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIGJ1dHRvbiA6IEJ1dHRvbjtcblxuICAgIHByaXZhdGUgaW9zQnV0dG9uOiBVSUJ1dHRvbjtcbiAgICBwcml2YXRlIGlvc0J1dHRvblR5cGU6IFVJQnV0dG9uVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gdGhpcy5zbXNCdXR0b24ubmF0aXZlRWxlbWVudDsgLy8gQnV0dG9uICgpTmF0aXZlU2NyaXB0KVxuICAgICAgICB0aGlzLmlvc0J1dHRvbiA9IHRoaXMuYnV0dG9uLm5hdGl2ZVZpZXc7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW9zQnV0dG9uKTsgLy8gVUlCdXR0b25cblxuXG5cbiAgICAgICAgbGV0IG5ld0lvc0J1dHRvbiA9IFVJQnV0dG9uLmJ1dHRvbldpdGhUeXBlKFVJQnV0dG9uVHlwZS5DdXN0b20pO1xuICAgICAgICB0aGlzLmJ1dHRvbi5uYXRpdmVWaWV3ID0gbmV3SW9zQnV0dG9uO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJ1dHRvbi5uYXRpdmVWaWV3LmJ1dHRvblR5cGUpOyAvLyBVSUJ1dHRvblR5cGVcbiAgICB9XG4gICAgXG5cbiAgICBvblNNU1RhcHBlZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvblNNU1RhcHBlZFwiKVxuICAgICAgICBsZXQgY291bnQgPSA2MDtcbiAgICAgICAgdGhpcy5zbXNCdXR0b25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgIGxldCBpZCA9IHRpbWVyLnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc21zQnV0dG9uLm5hdGl2ZUVsZW1lbnQudGV4dCA9IGBSZXNlbmQoJHtjb3VudC0tfSlgOyAvLyBBZnRlciB0aGlzIGxpbmUsIHRoZSB0ZXh0IGluIGJ1dHRvbiBhYm92ZSBmbGFzaGVkIChmYWRlIGluIGFuZCBvdXQpLCBhbmQgdGV4dCBjaGFuZ2VkLlxuICAgICAgICAgICAgaWYgKGNvdW50IDw9IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNtc0J1dHRvbi5uYXRpdmVFbGVtZW50LnRleHQgPSBgUmVzZW5kYDtcbiAgICAgICAgICAgICAgICB0aGlzLnNtc0J1dHRvbkVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRpbWVyLmNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG59Il19