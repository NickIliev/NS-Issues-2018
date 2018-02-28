

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

import { ImageAsset } from "tns-core-modules/image-asset/image-asset";
import { ImageSource, fromAsset } from "tns-core-modules/image-source";

export function onLoaded(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();

    let asset = getPath();

    fromAsset(asset).then(imageSource => {
        console.log("FromAsset");
        console.log("iamgeSource" + imageSource);
        console.log("imageSource.android: " + imageSource.android);
    }, (err) => {
        console.log("Error -> " + err.message);
    })
}

export function getPath(): ImageAsset {
    let picturePath = "~/images/icon.png";
    let asset = new ImageAsset(picturePath);

    console.log("asset.android: " + asset.android); // "~/images/icon.png"
    console.log("asset: " + asset);


    return asset;
}