"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
    }
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <ListView [items]=\"[1, 2, 3, 4, 5, 6, 7, 8]\" rowHeight=\"40\">\n        <ng-template>\n            <StackLayout>\n              <Label height=\"40\" text=\"Label\" style.background-color=\"#bbbbbb\"></Label>\n            </StackLayout>\n        </ng-template>\n    </ListView>\n  "
        })
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBYzFDO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBWjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsa1NBUVQ7U0FDRixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtBQUFsQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cIlsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XVwiIHJvd0hlaWdodD1cIjQwXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgICAgPExhYmVsIGhlaWdodD1cIjQwXCIgdGV4dD1cIkxhYmVsXCIgc3R5bGUuYmFja2dyb3VuZC1jb2xvcj1cIiNiYmJiYmJcIj48L0xhYmVsPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L0xpc3RWaWV3PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IHsgfSJdfQ==