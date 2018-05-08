"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var second_modal_1 = require("./second-modal");
// >> passing-parameters
var ModalViewComponent = /** @class */ (function () {
    function ModalViewComponent(modalService, params, page, vcRef) {
        var _this = this;
        this.modalService = modalService;
        this.params = params;
        this.page = page;
        this.vcRef = vcRef;
        this.page.on("unloaded", function () {
            // using the unloaded event to close the modal when there is user interaction
            // e.g. user taps outside the modal page
            _this.params.closeCallback();
        });
    }
    ModalViewComponent.prototype.ngOnInit = function () { };
    ModalViewComponent.prototype.submit = function (args) {
        var _this = this;
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false,
        };
        this.modalService.showModal(second_modal_1.SecondModalViewComponent, options).then(function (res) {
            console.log("first modal promise");
            _this.params.closeCallback(res);
        });
    };
    ModalViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./first-modal.html",
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService, modal_dialog_1.ModalDialogParams, page_1.Page, core_1.ViewContainerRef])
    ], ModalViewComponent);
    return ModalViewComponent;
}());
exports.ModalViewComponent = ModalViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3QtbW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJzdC1tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4RTtBQUM5RSxrRUFBOEc7QUFFOUcsZ0NBQStCO0FBRS9CLCtDQUEwRDtBQUUxRCx3QkFBd0I7QUFLeEI7SUFHSSw0QkFBb0IsWUFBZ0MsRUFBVSxNQUF5QixFQUFVLElBQVUsRUFBVSxLQUF1QjtRQUE1SSxpQkFNQztRQU5tQixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN4SSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDckIsNkVBQTZFO1lBQzdFLHdDQUF3QztZQUN4QyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHFDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRVAsbUNBQU0sR0FBYixVQUFjLElBQUk7UUFBbEIsaUJBV0M7UUFURyxJQUFNLE9BQU8sR0FBdUI7WUFDaEMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDNUIsVUFBVSxFQUFFLEtBQUs7U0FDcEIsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHVDQUF3QixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1lBQ2xDLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXhCUSxrQkFBa0I7UUFKOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7eUNBSW9DLGlDQUFrQixFQUFrQixnQ0FBaUIsRUFBZ0IsV0FBSSxFQUFpQix1QkFBZ0I7T0FIbkksa0JBQWtCLENBeUI5QjtJQUFELHlCQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF6QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nTW9kdWxlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zLCBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IFNlY29uZE1vZGFsVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3NlY29uZC1tb2RhbFwiO1xuXG4vLyA+PiBwYXNzaW5nLXBhcmFtZXRlcnNcbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9maXJzdC1tb2RhbC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGN1cnJlbnRkYXRlOiBEYXRlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgdGhpcy5wYWdlLm9uKFwidW5sb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gdXNpbmcgdGhlIHVubG9hZGVkIGV2ZW50IHRvIGNsb3NlIHRoZSBtb2RhbCB3aGVuIHRoZXJlIGlzIHVzZXIgaW50ZXJhY3Rpb25cbiAgICAgICAgICAgIC8vIGUuZy4gdXNlciB0YXBzIG91dHNpZGUgdGhlIG1vZGFsIHBhZ2VcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cblxuICAgIHB1YmxpYyBzdWJtaXQoYXJncykge1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoU2Vjb25kTW9kYWxWaWV3Q29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcnN0IG1vZGFsIHByb21pc2VcIilcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcbiAgICAgICAgfSlcbiAgICB9XG59Il19