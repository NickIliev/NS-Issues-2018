"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("ui/frame");
var Activity = (function (_super) {
    __extends(Activity, _super);
    function Activity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Activity.prototype.onCreate = function (savedInstanceState) {
        if (!this._callbacks) {
            frame_1.setActivityCallbacks(this);
        }
        this._callbacks.onCreate(this, savedInstanceState, _super.prototype.onCreate);
    };
    Activity.prototype.onSaveInstanceState = function (outState) {
        this._callbacks.onSaveInstanceState(this, outState, _super.prototype.onSaveInstanceState);
    };
    Activity.prototype.onStart = function () {
        this._callbacks.onStart(this, _super.prototype.onStart);
    };
    Activity.prototype.onStop = function () {
        this._callbacks.onStop(this, _super.prototype.onStop);
    };
    Activity.prototype.onDestroy = function () {
        this._callbacks.onDestroy(this, _super.prototype.onDestroy);
    };
    Activity.prototype.onBackPressed = function () {
        this._callbacks.onBackPressed(this, _super.prototype.onBackPressed);
    };
    Activity.prototype.onRequestPermissionsResult = function (requestCode, permissions, grantResults) {
        this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined /*TODO: Enable if needed*/);
    };
    Activity.prototype.onActivityResult = function (requestCode, resultCode, data) {
        this._callbacks.onActivityResult(this, requestCode, resultCode, data, _super.prototype.onActivityResult);
    };
    Activity.prototype.dispatchKeyEvent = function (event) {
        // Which direction did the key move (up/down)
        var action = event.getAction();
        // What keywas pressed
        var keyCode = event.getKeyCode();
        switch (keyCode) {
            case android.view.KeyEvent.KEYCODE_VOLUME_UP:
                // Check your event code (KeyEvent.ACTION_DOWN, KeyEvent.ACTION_UP etc)
                console.log("KEYCODE_VOLUME_UP");
                return true;
            case android.view.KeyEvent.KEYCODE_VOLUME_DOWN:
                // Check your event code (KeyEvent.ACTION_DOWN, KeyEvent.ACTION_UP etc)
                console.log("KEYCODE_VOLUME_DOWN");
                return true;
            default:
                // Let the system do what it wanted to do
                return _super.prototype.dispatchKeyEvent.call(this, event);
        }
    };
    Activity = __decorate([
        JavaProxy("org.myApp.MainActivity")
    ], Activity);
    return Activity;
}(android.app.Activity));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuYW5kcm9pZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2aXR5LmFuZHJvaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQ0FBd0U7QUFHeEU7SUFBdUIsNEJBQW9CO0lBQTNDOztJQTREQSxDQUFDO0lBekRhLDJCQUFRLEdBQWxCLFVBQW1CLGtCQUFxQztRQUNwRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25CLDRCQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsaUJBQU0sUUFBUSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVTLHNDQUFtQixHQUE3QixVQUE4QixRQUEyQjtRQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsaUJBQU0sbUJBQW1CLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRVMsMEJBQU8sR0FBakI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsaUJBQU0sT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVTLHlCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGlCQUFNLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFUyw0QkFBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxpQkFBTSxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sZ0NBQWEsR0FBcEI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsaUJBQU0sYUFBYSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVNLDZDQUEwQixHQUFqQyxVQUFrQyxXQUFtQixFQUFFLFdBQTBCLEVBQUUsWUFBMkI7UUFDMUcsSUFBSSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsU0FBUyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDbkksQ0FBQztJQUVTLG1DQUFnQixHQUExQixVQUEyQixXQUFtQixFQUFFLFVBQWtCLEVBQUUsSUFBNEI7UUFDNUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsaUJBQU0sZ0JBQWdCLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRU0sbUNBQWdCLEdBQXZCLFVBQXdCLEtBQUs7UUFDekIsNkNBQTZDO1FBQzdDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUUvQixzQkFBc0I7UUFDdEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWpDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZCxLQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQjtnQkFDeEMsdUVBQXVFO2dCQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUI7Z0JBQ3RDLHVFQUF1RTtnQkFDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCO2dCQUNJLHlDQUF5QztnQkFDekMsTUFBTSxDQUFDLGlCQUFNLGdCQUFnQixZQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUM7SUFDTCxDQUFDO0lBM0RDLFFBQVE7UUFEYixTQUFTLENBQUMsd0JBQXdCLENBQUM7T0FDOUIsUUFBUSxDQTREYjtJQUFELGVBQUM7Q0FBQSxBQTVERCxDQUF1QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0E0RDFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXRBY3Rpdml0eUNhbGxiYWNrcywgQW5kcm9pZEFjdGl2aXR5Q2FsbGJhY2tzfSBmcm9tIFwidWkvZnJhbWVcIjtcclxuXHJcbkBKYXZhUHJveHkoXCJvcmcubXlBcHAuTWFpbkFjdGl2aXR5XCIpXHJcbmNsYXNzIEFjdGl2aXR5IGV4dGVuZHMgYW5kcm9pZC5hcHAuQWN0aXZpdHkge1xyXG4gICAgcHJpdmF0ZSBfY2FsbGJhY2tzOiBBbmRyb2lkQWN0aXZpdHlDYWxsYmFja3M7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQ3JlYXRlKHNhdmVkSW5zdGFuY2VTdGF0ZTogYW5kcm9pZC5vcy5CdW5kbGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2NhbGxiYWNrcykge1xyXG4gICAgICAgICAgICBzZXRBY3Rpdml0eUNhbGxiYWNrcyh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5vbkNyZWF0ZSh0aGlzLCBzYXZlZEluc3RhbmNlU3RhdGUsIHN1cGVyLm9uQ3JlYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25TYXZlSW5zdGFuY2VTdGF0ZShvdXRTdGF0ZTogYW5kcm9pZC5vcy5CdW5kbGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3Mub25TYXZlSW5zdGFuY2VTdGF0ZSh0aGlzLCBvdXRTdGF0ZSwgc3VwZXIub25TYXZlSW5zdGFuY2VTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLm9uU3RhcnQodGhpcywgc3VwZXIub25TdGFydCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3Mub25TdG9wKHRoaXMsIHN1cGVyLm9uU3RvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3Mub25EZXN0cm95KHRoaXMsIHN1cGVyLm9uRGVzdHJveSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQmFja1ByZXNzZWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLm9uQmFja1ByZXNzZWQodGhpcywgc3VwZXIub25CYWNrUHJlc3NlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUmVxdWVzdFBlcm1pc3Npb25zUmVzdWx0KHJlcXVlc3RDb2RlOiBudW1iZXIsIHBlcm1pc3Npb25zOiBBcnJheTxTdHJpbmc+LCBncmFudFJlc3VsdHM6IEFycmF5PG51bWJlcj4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3Mub25SZXF1ZXN0UGVybWlzc2lvbnNSZXN1bHQodGhpcywgcmVxdWVzdENvZGUsIHBlcm1pc3Npb25zLCBncmFudFJlc3VsdHMsIHVuZGVmaW5lZCAvKlRPRE86IEVuYWJsZSBpZiBuZWVkZWQqLyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQWN0aXZpdHlSZXN1bHQocmVxdWVzdENvZGU6IG51bWJlciwgcmVzdWx0Q29kZTogbnVtYmVyLCBkYXRhOiBhbmRyb2lkLmNvbnRlbnQuSW50ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLm9uQWN0aXZpdHlSZXN1bHQodGhpcywgcmVxdWVzdENvZGUsIHJlc3VsdENvZGUsIGRhdGEsIHN1cGVyLm9uQWN0aXZpdHlSZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwYXRjaEtleUV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgLy8gV2hpY2ggZGlyZWN0aW9uIGRpZCB0aGUga2V5IG1vdmUgKHVwL2Rvd24pXHJcbiAgICAgICAgbGV0IGFjdGlvbiA9IGV2ZW50LmdldEFjdGlvbigpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gV2hhdCBrZXl3YXMgcHJlc3NlZFxyXG4gICAgICAgIGxldCBrZXlDb2RlID0gZXZlbnQuZ2V0S2V5Q29kZSgpO1xyXG4gICAgXHJcbiAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgYW5kcm9pZC52aWV3LktleUV2ZW50LktFWUNPREVfVk9MVU1FX1VQOlxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgeW91ciBldmVudCBjb2RlIChLZXlFdmVudC5BQ1RJT05fRE9XTiwgS2V5RXZlbnQuQUNUSU9OX1VQIGV0YylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiS0VZQ09ERV9WT0xVTUVfVVBcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgY2FzZSBhbmRyb2lkLnZpZXcuS2V5RXZlbnQuS0VZQ09ERV9WT0xVTUVfRE9XTjpcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayB5b3VyIGV2ZW50IGNvZGUgKEtleUV2ZW50LkFDVElPTl9ET1dOLCBLZXlFdmVudC5BQ1RJT05fVVAgZXRjKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJLRVlDT0RFX1ZPTFVNRV9ET1dOXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyBMZXQgdGhlIHN5c3RlbSBkbyB3aGF0IGl0IHdhbnRlZCB0byBkb1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cGVyLmRpc3BhdGNoS2V5RXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==