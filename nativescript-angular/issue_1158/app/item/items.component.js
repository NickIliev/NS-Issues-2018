"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
        this.isOn = false;
    }
    ItemsComponent.prototype.onTap = function () {
        this.isOn = !this.isOn;
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "animation-states",
            template: "\n        <StackLayout>\n            <Button text=\"Touch me!\" [@state]=\"isOn ? 'active' : 'inactive'\" (tap)=\"onTap()\"></Button>\n        </StackLayout>",
            animations: [
                animations_1.trigger("state", [
                    animations_1.state("inactive", animations_1.style({
                        backgroundColor: "red",
                        transform: "scale(0.7)",
                    })),
                    animations_1.state("active", animations_1.style({
                        backgroundColor: "green",
                        transform: "scale(2)",
                    })),
                    animations_1.transition("* => active", [animations_1.animate("600ms ease-out")]),
                    animations_1.transition("* => inactive", [animations_1.animate("600ms ease-out")]),
                ])
            ]
        })
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGtEQU02QjtBQTBCN0I7SUF4QkE7UUF5QkksU0FBSSxHQUFHLEtBQUssQ0FBQztJQUtqQixDQUFDO0lBSEcsOEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFMUSxjQUFjO1FBeEIxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsK0pBR1M7WUFDbkIsVUFBVSxFQUFFO2dCQUNSLG9CQUFPLENBQUMsT0FBTyxFQUFFO29CQUViLGtCQUFLLENBQUMsVUFBVSxFQUFFLGtCQUFLLENBQUM7d0JBQ3BCLGVBQWUsRUFBRSxLQUFLO3dCQUN0QixTQUFTLEVBQUUsWUFBWTtxQkFDMUIsQ0FBQyxDQUFDO29CQUNILGtCQUFLLENBQUMsUUFBUSxFQUFFLGtCQUFLLENBQUM7d0JBQ2xCLGVBQWUsRUFBRSxPQUFPO3dCQUN4QixTQUFTLEVBQUUsVUFBVTtxQkFDeEIsQ0FBQyxDQUFDO29CQUVILHVCQUFVLENBQUMsYUFBYSxFQUFFLENBQUUsb0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFFLENBQUM7b0JBQ3hELHVCQUFVLENBQUMsZUFBZSxFQUFFLENBQUUsb0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFFLENBQUM7aUJBRTdELENBQUM7YUFDTDtTQUNKLENBQUM7T0FDVyxjQUFjLENBTTFCO0lBQUQscUJBQUM7Q0FBQSxBQU5ELElBTUM7QUFOWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gICAgdHJpZ2dlcixcbiAgICBzdHlsZSxcbiAgICBhbmltYXRlLFxuICAgIHN0YXRlLFxuICAgIHRyYW5zaXRpb24sXG59IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFuaW1hdGlvbi1zdGF0ZXNcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJUb3VjaCBtZSFcIiBbQHN0YXRlXT1cImlzT24gPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSdcIiAodGFwKT1cIm9uVGFwKClcIj48L0J1dHRvbj5cbiAgICAgICAgPC9TdGFja0xheW91dD5gLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcihcInN0YXRlXCIsIFtcblxuICAgICAgICAgICAgc3RhdGUoXCJpbmFjdGl2ZVwiLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgwLjcpXCIsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBzdGF0ZShcImFjdGl2ZVwiLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDIpXCIsXG4gICAgICAgICAgICB9KSksXG5cbiAgICAgICAgICAgIHRyYW5zaXRpb24oXCIqID0+IGFjdGl2ZVwiLCBbIGFuaW1hdGUoXCI2MDBtcyBlYXNlLW91dFwiKSBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oXCIqID0+IGluYWN0aXZlXCIsIFsgYW5pbWF0ZShcIjYwMG1zIGVhc2Utb3V0XCIpIF0pLFxuXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCAge1xuICAgIGlzT24gPSBmYWxzZTtcblxuICAgIG9uVGFwKCkge1xuICAgICAgICB0aGlzLmlzT24gPSAhdGhpcy5pc09uO1xuICAgIH1cbn1cblxuXG5cblxuXG4iXX0=