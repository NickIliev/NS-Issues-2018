"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var first_modal_1 = require("./first-modal");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(modalService, vcRef) {
        this.modalService = modalService;
        this.vcRef = vcRef;
    }
    ItemsComponent.prototype.openModal = function () {
        var _this = this;
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false,
        };
        this.modalService.showModal(first_modal_1.ModalViewComponent, options).then(function (res) {
            console.log(res);
            _this.secondModalContext = res;
        });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService, core_1.ViewContainerRef])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9FO0FBRXBFLGtFQUEyRjtBQUMzRiw2Q0FBbUQ7QUFPbkQ7SUFHSSx3QkFBb0IsWUFBZ0MsRUFBVSxLQUF1QjtRQUFqRSxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtJQUFJLENBQUM7SUFFMUYsa0NBQVMsR0FBVDtRQUFBLGlCQVVDO1FBVEcsSUFBTSxPQUFPLEdBQXVCO1lBQ2hDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1lBQzVCLFVBQVUsRUFBRSxLQUFLO1NBQ3BCLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxnQ0FBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsS0FBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFmUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQUlvQyxpQ0FBa0IsRUFBaUIsdUJBQWdCO09BSDVFLGNBQWMsQ0FnQjFCO0lBQUQscUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBNb2RhbFZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9maXJzdC1tb2RhbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCB7XG4gICAgc2Vjb25kTW9kYWxDb250ZXh0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cblxuICAgIG9wZW5Nb2RhbCgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChNb2RhbFZpZXdDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICB0aGlzLnNlY29uZE1vZGFsQ29udGV4dCA9IHJlcztcbiAgICAgICAgfSlcbiAgICB9XG59Il19