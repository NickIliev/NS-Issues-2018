"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.counter = 0;
    }
    AppComponent.prototype.onLoaded = function (event) {
        console.log("Label loaded " + (++this.counter) + " times");
    };
    AppComponent.prototype.ngOnInit = function () {
        this.entries = this.getEntries();
    };
    AppComponent.prototype.getEntries = function () {
        return [1, 2, 3, 4, 5];
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <ListView [items]=\"entries\">\n      <ng-template let-item=\"item\" >\n          <StackLayout>\n              <Label (loaded)=\"onLoaded()\" [text]=\"'test item ' + item\"></Label>\n          </StackLayout>\n      </ng-template>\n    </ListView>\n    "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUU7QUFjbkU7SUFaQTtRQWNJLFlBQU8sR0FBVyxDQUFDLENBQUM7SUFjeEIsQ0FBQztJQVhHLCtCQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBVSxHQUFWO1FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFmUSxZQUFZO1FBWnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsb1FBUVQ7U0FDSixDQUFDO09BQ1csWUFBWSxDQWdCeEI7SUFBRCxtQkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPExpc3RWaWV3IFtpdGVtc109XCJlbnRyaWVzXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XCJpdGVtXCIgPlxuICAgICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgICAgPExhYmVsIChsb2FkZWQpPVwib25Mb2FkZWQoKVwiIFt0ZXh0XT1cIid0ZXN0IGl0ZW0gJyArIGl0ZW1cIj48L0xhYmVsPlxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvTGlzdFZpZXc+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gICAgY291bnRlcjogbnVtYmVyID0gMDtcbiAgICBlbnRyaWVzOiBBcnJheTxhbnk+O1xuXG4gICAgb25Mb2FkZWQoZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTGFiZWwgbG9hZGVkIFwiICsgKCsrdGhpcy5jb3VudGVyKSArIFwiIHRpbWVzXCIpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5lbnRyaWVzID0gdGhpcy5nZXRFbnRyaWVzKCk7XG4gICAgfVxuICAgIFxuICAgIGdldEVudHJpZXMoKSB7XG4gICAgICByZXR1cm4gWzEsIDIsIDMsIDQsIDVdO1xuICAgIH1cbn1cbiJdfQ==