"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
// >> passing-parameters
var SecondModalViewComponent = /** @class */ (function () {
    function SecondModalViewComponent(params, page) {
        var _this = this;
        this.params = params;
        this.page = page;
        this.page.on("unloaded", function () {
            // using the unloaded event to close the modal when there is user interaction
            // e.g. user taps outside the modal page
            _this.params.closeCallback();
        });
    }
    SecondModalViewComponent.prototype.ngOnInit = function () { };
    SecondModalViewComponent.prototype.submit = function () {
        this.params.closeCallback("SECOND modal context!!!");
    };
    SecondModalViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./second-modal.html",
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams, page_1.Page])
    ], SecondModalViewComponent);
    return SecondModalViewComponent;
}());
exports.SecondModalViewComponent = SecondModalViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kLW1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Vjb25kLW1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTREO0FBQzVELGtFQUFzRTtBQUV0RSxnQ0FBK0I7QUFFL0Isd0JBQXdCO0FBS3hCO0lBR0ksa0NBQW9CLE1BQXlCLEVBQVUsSUFBVTtRQUFqRSxpQkFNQztRQU5tQixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ3JCLDZFQUE2RTtZQUM3RSx3Q0FBd0M7WUFDeEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwyQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVQLHlDQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFmUSx3QkFBd0I7UUFKcEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUscUJBQXFCO1NBQ3JDLENBQUM7eUNBSThCLGdDQUFpQixFQUFnQixXQUFJO09BSHhELHdCQUF3QixDQWdCcEM7SUFBRCwrQkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG4vLyA+PiBwYXNzaW5nLXBhcmFtZXRlcnNcbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zZWNvbmQtbW9kYWwuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBTZWNvbmRNb2RhbFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBjdXJyZW50ZGF0ZTogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgICAgIHRoaXMucGFnZS5vbihcInVubG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vIHVzaW5nIHRoZSB1bmxvYWRlZCBldmVudCB0byBjbG9zZSB0aGUgbW9kYWwgd2hlbiB0aGVyZSBpcyB1c2VyIGludGVyYWN0aW9uXG4gICAgICAgICAgICAvLyBlLmcuIHVzZXIgdGFwcyBvdXRzaWRlIHRoZSBtb2RhbCBwYWdlXG4gICAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbiAgICBwdWJsaWMgc3VibWl0KCkge1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKFwiU0VDT05EIG1vZGFsIGNvbnRleHQhISFcIik7XG4gICAgfVxufSJdfQ==