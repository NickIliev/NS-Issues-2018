"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var listview;
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(_page) {
        this._page = _page;
        // Use the component constructor to inject providers.
    }
    ItemsComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.items = [
            { id: 1, Description: "Item 1" },
            { id: 2, Description: "Item 2" },
            { id: 3, Description: "Item 3" },
            { id: 4, Description: "Item 4" },
            { id: 5, Description: "Item 5" },
            { id: 6, Description: "Item 6" },
            { id: 7, Description: "Item 7" },
            { id: 8, Description: "Item 8" },
            { id: 9, Description: "Item 9" }
        ];
    };
    ItemsComponent.prototype.onItemTap = function (args) {
        console.log("args.view: ", args.view);
        console.log("args.view.id: ", args.view.id);
        var lb = this._page.getViewById(args.view.id);
        console.log("lb: ", lb);
        lb.className = "item-selected";
        // the bugis that we have to manually refresh the scrollview on iOS
        var listview = args.object;
        listview.refresh();
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./items.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUErQjtBQU0vQixJQUFJLFFBQWtCLENBQUM7QUFRdkI7SUFHSSx3QkFBb0IsS0FBVTtRQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7UUFDMUIscURBQXFEO0lBQ3pELENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBQztZQUM5QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBQztZQUM5QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBQztZQUM5QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBQztZQUM5QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBQztZQUM5QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBQztZQUM5QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBQztZQUM5QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBQztZQUM5QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBQztTQUNqQyxDQUFDO0lBQ04sQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxJQUFtQjtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksRUFBRSxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFeEIsRUFBRSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFFL0IsbUVBQW1FO1FBQ25FLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFrQixDQUFDO1FBQ3ZDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBakNRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBSTRCLFdBQUk7T0FIckIsY0FBYyxDQWtDMUI7SUFBRCxxQkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBMaXN0VmlldywgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9saXN0LXZpZXdcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCI7XG5pbXBvcnQgeyBUb3VjaEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcblxuZGVjbGFyZSBsZXQgVUlUYWJsZVZpZXdDZWxsU2VsZWN0aW9uU3R5bGU6IGFueTtcbmxldCBsaXN0dmlldzogTGlzdFZpZXc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIGl0ZW1zOiBBcnJheTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTpQYWdlKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgICAgICB0aGlzLml0ZW1zID0gW1xuICAgICAgICAgICAge2lkOiAxLCBEZXNjcmlwdGlvbjogXCJJdGVtIDFcIn0sXG4gICAgICAgICAgICB7aWQ6IDIsIERlc2NyaXB0aW9uOiBcIkl0ZW0gMlwifSxcbiAgICAgICAgICAgIHtpZDogMywgRGVzY3JpcHRpb246IFwiSXRlbSAzXCJ9LFxuICAgICAgICAgICAge2lkOiA0LCBEZXNjcmlwdGlvbjogXCJJdGVtIDRcIn0sXG4gICAgICAgICAgICB7aWQ6IDUsIERlc2NyaXB0aW9uOiBcIkl0ZW0gNVwifSxcbiAgICAgICAgICAgIHtpZDogNiwgRGVzY3JpcHRpb246IFwiSXRlbSA2XCJ9LFxuICAgICAgICAgICAge2lkOiA3LCBEZXNjcmlwdGlvbjogXCJJdGVtIDdcIn0sXG4gICAgICAgICAgICB7aWQ6IDgsIERlc2NyaXB0aW9uOiBcIkl0ZW0gOFwifSxcbiAgICAgICAgICAgIHtpZDogOSwgRGVzY3JpcHRpb246IFwiSXRlbSA5XCJ9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhcmdzLnZpZXc6IFwiLCBhcmdzLnZpZXcpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFyZ3Mudmlldy5pZDogXCIsIGFyZ3Mudmlldy5pZCk7XG4gICAgICAgIGxldCBsYiA9IDxMYWJlbD50aGlzLl9wYWdlLmdldFZpZXdCeUlkKGFyZ3Mudmlldy5pZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGI6IFwiLCBsYik7XG5cbiAgICAgICAgbGIuY2xhc3NOYW1lID0gXCJpdGVtLXNlbGVjdGVkXCI7XG5cbiAgICAgICAgLy8gdGhlIGJ1Z2lzIHRoYXQgd2UgaGF2ZSB0byBtYW51YWxseSByZWZyZXNoIHRoZSBzY3JvbGx2aWV3IG9uIGlPU1xuICAgICAgICBsZXQgbGlzdHZpZXcgPSBhcmdzLm9iamVjdCBhcyBMaXN0VmlldztcbiAgICAgICAgbGlzdHZpZXcucmVmcmVzaCgpO1xuICAgIH1cbn1cbiJdfQ==