import { Observable } from 'data/observable';
import * as camera from "nativescript-camera";

export class HelloWorldModel extends Observable {
    constructor() {
        super();

        camera.requestPermissions();
    }

    public onTap() {
        console.log("taking picture!");
        camera.takePicture(<camera.CameraOptions>{
            saveToGallery: false
        }).then((imageAsset) => {
            console.log("Result is an image asset instance");
        });
    }

    // picture_path1 without savetToGallery (default value false)
    // picturePath_1: /storage/emulated/0/Android/data/org.nativescript.issue88/files/NSIMG_20180302_112625.jpg

    // picture_path1 with savetToGallery (default value false)
    // picturePath_1: /storage/emulated/0/Android/data/org.nativescript.issue88/files/NSIMG_20180302_112753.jpg
}
