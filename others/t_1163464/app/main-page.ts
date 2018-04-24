import { EventData, Observable } from 'data/observable';
import { Page } from 'ui/page';
import { Color } from "color";
const PhotoViewer = require("nativescript-photoviewer");

var imageFromURL3 = "https://apod.nasa.gov/apod/image/1804/IC4592_WiseAntonucci_5000.jpg";
var imageFromURL4 = "https://apod.nasa.gov/apod/image/1804/LyridCrater_Goldpaint_1920.jpg";
var imageFromURL1 = "https://apod.nasa.gov/apod/image/1804/FalconTessLaunchKraus.jpg";
var imageFromURL2 = "https://apod.nasa.gov/apod/image/1804/BubbleNebHST_kakitsev2048.jpg";
 
// Add to array and pass to showViewer
var myImages = [imageFromURL3, imageFromURL4, imageFromURL1, imageFromURL2];
const photoViewer = createPhotoViewer();

export function navigatingTo(args: EventData) {
    const page = <Page>args.object; 
}

export function loadViewer() {
    photoViewer.showViewer(myImages, 0);
}

function createPhotoViewer() {
    const photoViewer = new PhotoViewer();

// Caption font-style settings (optional - iOS only)
    photoViewer.fontFamily = "Avenir-Roman";
    photoViewer.titleFontSize = 20;
    photoViewer.summaryFontSize = 16;
    photoViewer.creditFontSize = 14;
    photoViewer.titleColor = new Color("#fff").ios;
    photoViewer.summaryColor = new Color("#99813c").ios;
    photoViewer.creditColor = new Color("#fed700").ios;
    
    photoViewer.completitionCallback = galleryLoaded; // iOS only
    photoViewer.startIndex = 0; // start index for the fullscreen gallery

    return photoViewer;
}

function galleryLoaded(){
    console.log(`gallery Loaded`);
}

