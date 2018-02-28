"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
    }
    ItemsComponent.prototype.ngAfterViewInit = function () {
        console.log(JSON.stringify(this.labelsUiSelector2.length)); // 0
        console.log(this.labelsUiSelector2.first.nativeElement);
        console.log(this.labelsUiSelector2.last.nativeElement);
    };
    __decorate([
        core_1.ViewChildren("lbl"),
        __metadata("design:type", core_1.QueryList)
    ], ItemsComponent.prototype, "labelsUiSelector2", void 0);
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "YesNo",
            template: "\n    <FlexboxLayout>\n      <Label #lbl text=\"Yes\"></Label>\n      <CheckBox checked=\"true\"></CheckBox>\n    </FlexboxLayout>\n    <StackLayout>\n      <Label #lbl text=\"No\"></Label>\n      <CheckBox checked=\"false\"></CheckBox>\n    </StackLayout>"
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlHO0FBZXpHO0lBSUk7SUFBZ0IsQ0FBQztJQUVqQix3Q0FBZSxHQUFmO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUUsSUFBSTtRQUVqRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFWb0I7UUFBcEIsbUJBQVksQ0FBQyxLQUFLLENBQUM7a0NBQW9CLGdCQUFTOzZEQUFhO0lBRnJELGNBQWM7UUFaMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxrUUFRSztTQUNsQixDQUFDOztPQUNXLGNBQWMsQ0FhMUI7SUFBRCxxQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiWWVzTm9cIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxGbGV4Ym94TGF5b3V0PlxuICAgICAgPExhYmVsICNsYmwgdGV4dD1cIlllc1wiPjwvTGFiZWw+XG4gICAgICA8Q2hlY2tCb3ggY2hlY2tlZD1cInRydWVcIj48L0NoZWNrQm94PlxuICAgIDwvRmxleGJveExheW91dD5cbiAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICA8TGFiZWwgI2xibCB0ZXh0PVwiTm9cIj48L0xhYmVsPlxuICAgICAgPENoZWNrQm94IGNoZWNrZWQ9XCJmYWxzZVwiPjwvQ2hlY2tCb3g+XG4gICAgPC9TdGFja0xheW91dD5gXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBAVmlld0NoaWxkcmVuKFwibGJsXCIpIGxhYmVsc1VpU2VsZWN0b3IyOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMubGFiZWxzVWlTZWxlY3RvcjIubGVuZ3RoKSk7ICAvLyAwXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxhYmVsc1VpU2VsZWN0b3IyLmZpcnN0Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGFiZWxzVWlTZWxlY3RvcjIubGFzdC5uYXRpdmVFbGVtZW50KVxuICAgIH1cbn0iXX0=