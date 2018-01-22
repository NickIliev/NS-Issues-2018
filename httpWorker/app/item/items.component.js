"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemsComponent = (function () {
    function ItemsComponent(zone) {
        var _this = this;
        this.zone = zone;
        this.url = "default";
        this.ready = false;
        this.worker = new Worker("./http-string-worker");
        this.worker.onmessage = function (msg) {
            console.log("msg received");
            console.log(msg.data);
            _this.zone.run(function () {
                _this.url = msg.data["url"];
                _this.ready = true;
            });
        };
        this.worker.onerror = function (e) {
            _this.ready = true;
            throw e;
        };
    }
    ItemsComponent.prototype.ngOnInit = function () {
    };
    ItemsComponent.prototype.ngOnChanges = function () {
        console.log(this.ready);
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: __filename,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBEO0FBUzFEO0lBS0ksd0JBQW9CLElBQVk7UUFBaEMsaUJBY0M7UUFkbUIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUp6QixRQUFHLEdBQVcsU0FBUyxDQUFDO1FBQ3ZCLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsV0FBTSxHQUFHLElBQUksTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFHaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBQyxHQUFHO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN0QixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQTtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUMsQ0FBQztZQUNwQixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixNQUFNLENBQUMsQ0FBQztRQUNaLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBR0EsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBNUJRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FNNEIsYUFBTTtPQUx2QixjQUFjLENBNkIxQjtJQUFELHFCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IF9fZmlsZW5hbWUsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHVybDogc3RyaW5nID0gXCJkZWZhdWx0XCI7XG4gICAgcHJpdmF0ZSByZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgd29ya2VyID0gbmV3IFdvcmtlcihcIi4vaHR0cC1zdHJpbmctd29ya2VyXCIpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHsgXG4gICAgICAgIHRoaXMud29ya2VyLm9ubWVzc2FnZSA9IChtc2cpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibXNnIHJlY2VpdmVkXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cmwgPSBtc2cuZGF0YVtcInVybFwiXTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndvcmtlci5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBcblxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlYWR5KTtcbiAgICB9XG59Il19