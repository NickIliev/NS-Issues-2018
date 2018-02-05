"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var file_system_1 = require("file-system");
var imagePicker = require("nativescript-imagepicker");
var tempImageFolderName = "nsimagepicker";
var noop = function () { }; // tslint:disable-line no-empty
var MY_IMAGE_ADD_REMOVE_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MyImageAddRemoveComponent; }),
    multi: true
};
/* ***********************************************************
* The MyImageAddRemove custom component uses an imagepicker plugin to let the user select
* an image and provides custom logic and design to the process.
*************************************************************/
var MyImageAddRemoveComponent = /** @class */ (function () {
    function MyImageAddRemoveComponent() {
        // placeholder for the callback later provided by the ControlValueAccessor
        this.propagateChange = noop;
        this.innerImageUrl = "";
    }
    MyImageAddRemoveComponent_1 = MyImageAddRemoveComponent;
    Object.defineProperty(MyImageAddRemoveComponent, "imageTempFolder", {
        get: function () {
            return file_system_1.knownFolders.temp().getFolder(tempImageFolderName);
        },
        enumerable: true,
        configurable: true
    });
    MyImageAddRemoveComponent.clearImageTempFolder = function () {
        MyImageAddRemoveComponent_1.imageTempFolder.clear();
    };
    Object.defineProperty(MyImageAddRemoveComponent.prototype, "imageUrl", {
        get: function () {
            return this.innerImageUrl;
        },
        set: function (value) {
            if (this.innerImageUrl !== value) {
                this.innerImageUrl = value;
                this.propagateChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    // ControlValueAccessor implementation
    MyImageAddRemoveComponent.prototype.writeValue = function (value) {
        if (this.innerImageUrl !== value) {
            this.innerImageUrl = value;
        }
    };
    // ControlValueAccessor implementation
    MyImageAddRemoveComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    // ControlValueAccessor implementation
    // tslint:disable-next-line:no-empty
    MyImageAddRemoveComponent.prototype.registerOnTouched = function (fn) {
    };
    MyImageAddRemoveComponent.prototype.onImageAddRemoveTap = function () {
        if (this.imageUrl) {
            this.handleImageChange(null);
            return;
        }
        MyImageAddRemoveComponent_1.clearImageTempFolder();
        this.pickImage();
    };
    MyImageAddRemoveComponent.prototype.pickImage = function () {
        var _this = this;
        var context = imagePicker.create({
            mode: "single"
        });
        context
            .authorize()
            .then(function () { return context.present(); })
            .then(function (selection) { return selection.forEach(function (selectedAsset) {
            selectedAsset.getImage({ maxHeight: 768 })
                .then(function (imageSource) { return _this.handleImageChange(imageSource); });
        }); }).catch(function (errorMessage) { return console.log(errorMessage); });
    };
    MyImageAddRemoveComponent.prototype.handleImageChange = function (source) {
        var raisePropertyChange = true;
        var tempImagePath = null;
        if (source) {
            tempImagePath = file_system_1.path.join(MyImageAddRemoveComponent_1.imageTempFolder.path, Date.now() + ".jpg");
            raisePropertyChange = source.saveToFile(tempImagePath, "jpeg");
        }
        if (raisePropertyChange) {
            this.imageUrl = tempImagePath;
        }
    };
    MyImageAddRemoveComponent = MyImageAddRemoveComponent_1 = __decorate([
        core_1.Component({
            selector: "MyImageAddRemove",
            moduleId: module.id,
            templateUrl: "./my-image-add-remove.component.html",
            styleUrls: ["./my-image-add-remove.component.scss"],
            providers: [MY_IMAGE_ADD_REMOVE_CONTROL_VALUE_ACCESSOR]
        })
    ], MyImageAddRemoveComponent);
    return MyImageAddRemoveComponent;
    var MyImageAddRemoveComponent_1;
}());
exports.MyImageAddRemoveComponent = MyImageAddRemoveComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktaW1hZ2UtYWRkLXJlbW92ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteS1pbWFnZS1hZGQtcmVtb3ZlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRTtBQUNyRSx3Q0FBeUU7QUFDekUsMkNBQXlEO0FBRXpELHNEQUF3RDtBQUV4RCxJQUFNLG1CQUFtQixHQUFHLGVBQWUsQ0FBQztBQUM1QyxJQUFNLElBQUksR0FBRyxjQUFRLENBQUMsQ0FBQyxDQUFDLCtCQUErQjtBQUV2RCxJQUFNLDBDQUEwQyxHQUFHO0lBQy9DLE9BQU8sRUFBRSx5QkFBaUI7SUFDMUIsV0FBVyxFQUFFLGlCQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixDQUFDO0lBQ3hELEtBQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQztBQUVGOzs7OERBRzhEO0FBUTlEO0lBUEE7UUFnQkksMEVBQTBFO1FBQ2xFLG9CQUFlLEdBQXFCLElBQUksQ0FBQztRQUV6QyxrQkFBYSxHQUFXLEVBQUUsQ0FBQztJQXVFdkMsQ0FBQztrQ0FuRlkseUJBQXlCO0lBQ2xDLHNCQUFXLDRDQUFlO2FBQTFCO1lBQ0ksTUFBTSxDQUFDLDBCQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDOUQsQ0FBQzs7O09BQUE7SUFFYyw4Q0FBb0IsR0FBbkM7UUFDSSwyQkFBeUIsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQU9ELHNCQUFJLCtDQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO2FBRUQsVUFBYSxLQUFhO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQzNC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ImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGb2xkZXIsIGtub3duRm9sZGVycywgcGF0aCB9IGZyb20gXCJmaWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBJbWFnZVNvdXJjZSB9IGZyb20gXCJpbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0ICogYXMgaW1hZ2VQaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xyXG5cclxuY29uc3QgdGVtcEltYWdlRm9sZGVyTmFtZSA9IFwibnNpbWFnZXBpY2tlclwiO1xyXG5jb25zdCBub29wID0gKCkgPT4geyB9OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWVtcHR5XHJcblxyXG5jb25zdCBNWV9JTUFHRV9BRERfUkVNT1ZFX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE15SW1hZ2VBZGRSZW1vdmVDb21wb25lbnQpLCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWZvcndhcmQtcmVmXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiBUaGUgTXlJbWFnZUFkZFJlbW92ZSBjdXN0b20gY29tcG9uZW50IHVzZXMgYW4gaW1hZ2VwaWNrZXIgcGx1Z2luIHRvIGxldCB0aGUgdXNlciBzZWxlY3RcclxuKiBhbiBpbWFnZSBhbmQgcHJvdmlkZXMgY3VzdG9tIGxvZ2ljIGFuZCBkZXNpZ24gdG8gdGhlIHByb2Nlc3MuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiTXlJbWFnZUFkZFJlbW92ZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbXktaW1hZ2UtYWRkLXJlbW92ZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL215LWltYWdlLWFkZC1yZW1vdmUuY29tcG9uZW50LnNjc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtNWV9JTUFHRV9BRERfUkVNT1ZFX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeUltYWdlQWRkUmVtb3ZlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gICAgc3RhdGljIGdldCBpbWFnZVRlbXBGb2xkZXIoKTogRm9sZGVyIHtcclxuICAgICAgICByZXR1cm4ga25vd25Gb2xkZXJzLnRlbXAoKS5nZXRGb2xkZXIodGVtcEltYWdlRm9sZGVyTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2xlYXJJbWFnZVRlbXBGb2xkZXIoKTogdm9pZCB7XHJcbiAgICAgICAgTXlJbWFnZUFkZFJlbW92ZUNvbXBvbmVudC5pbWFnZVRlbXBGb2xkZXIuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwbGFjZWhvbGRlciBmb3IgdGhlIGNhbGxiYWNrIGxhdGVyIHByb3ZpZGVkIGJ5IHRoZSBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gICAgcHJpdmF0ZSBwcm9wYWdhdGVDaGFuZ2U6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xyXG5cclxuICAgIHByaXZhdGUgaW5uZXJJbWFnZVVybDogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBnZXQgaW1hZ2VVcmwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbm5lckltYWdlVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBpbWFnZVVybCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5uZXJJbWFnZVVybCAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbm5lckltYWdlVXJsID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50YXRpb25cclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmlubmVySW1hZ2VVcmwgIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5uZXJJbWFnZVVybCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRhdGlvblxyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRhdGlvblxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5XHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbWFnZUFkZFJlbW92ZVRhcCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZVVybCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUltYWdlQ2hhbmdlKG51bGwpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTXlJbWFnZUFkZFJlbW92ZUNvbXBvbmVudC5jbGVhckltYWdlVGVtcEZvbGRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnBpY2tJbWFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBpY2tJbWFnZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gaW1hZ2VQaWNrZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgbW9kZTogXCJzaW5nbGVcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb250ZXh0XHJcbiAgICAgICAgICAgIC5hdXRob3JpemUoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiBjb250ZXh0LnByZXNlbnQoKSlcclxuICAgICAgICAgICAgLnRoZW4oKHNlbGVjdGlvbikgPT4gc2VsZWN0aW9uLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAoc2VsZWN0ZWRBc3NldDogaW1hZ2VQaWNrZXIuU2VsZWN0ZWRBc3NldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQXNzZXQuZ2V0SW1hZ2UoeyBtYXhIZWlnaHQ6IDc2OCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoaW1hZ2VTb3VyY2U6IEltYWdlU291cmNlKSA9PiB0aGlzLmhhbmRsZUltYWdlQ2hhbmdlKGltYWdlU291cmNlKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApLmNhdGNoKChlcnJvck1lc3NhZ2U6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVJbWFnZUNoYW5nZShzb3VyY2U6IEltYWdlU291cmNlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJhaXNlUHJvcGVydHlDaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0ZW1wSW1hZ2VQYXRoID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHNvdXJjZSkge1xyXG4gICAgICAgICAgICB0ZW1wSW1hZ2VQYXRoID0gcGF0aC5qb2luKE15SW1hZ2VBZGRSZW1vdmVDb21wb25lbnQuaW1hZ2VUZW1wRm9sZGVyLnBhdGgsIGAke0RhdGUubm93KCl9LmpwZ2ApO1xyXG4gICAgICAgICAgICByYWlzZVByb3BlcnR5Q2hhbmdlID0gc291cmNlLnNhdmVUb0ZpbGUodGVtcEltYWdlUGF0aCwgXCJqcGVnXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJhaXNlUHJvcGVydHlDaGFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVVybCA9IHRlbXBJbWFnZVBhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==