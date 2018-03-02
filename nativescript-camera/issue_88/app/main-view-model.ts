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

}
