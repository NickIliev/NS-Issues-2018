import { EventData, Observable } from 'data/observable';
import { Page } from 'ui/page';
import { ImageSource, fromFile, fromNativeSource } from "image-source";
import { Cache } from "ui/image-cache";
import * as fs from "file-system";

const vm = new Observable();

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;

    vm.set("imageSource", getCachedImageSource());

    page.bindingContext = vm;
}

export function getCachedImageSource() {
    const cache = new Cache();
    cache.placeholder = fromFile("~/images/icon.png");
    cache.maxRequests = 5;

    // Enable download while not scrolling
    cache.enableDownload();

    let imageSource: ImageSource;
    const URL = "https://github.com/NativeScript.png";
    // Try to read the image from the cache
    var image = cache.get(URL);
    if (image) {
        // If present -- use it.
        imageSource = fromNativeSource(image);
    }
    else {
        // If not present -- request its download.
        cache.push({
            key: URL,
            url: URL,
            completed: (image: any, key: string) => {
                if (URL === key) {
                    imageSource = fromNativeSource(image);
                    vm.set("imageSource", imageSource)
                    console.log("Download completed!");
                }
            }
        });

    }

    return cache.placeholder;
}