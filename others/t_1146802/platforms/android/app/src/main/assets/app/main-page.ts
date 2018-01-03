import { EventData, Observable } from 'data/observable';
import { Page } from 'ui/page';

import * as geolocation from "nativescript-geolocation";

let vm = new Observable();

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;

    vm.set("latitude", "loading latitude...");
    vm.set("longitude", "loading longitude...");

    page.bindingContext = vm;
}

export function getLocation() {
    getDeviceLocation().then(location => {
        console.log(location);

        vm.set("latitude", location.latitude);
        vm.set("longitude", location.longitude);
    })
}

function getDeviceLocation(): Promise<any> {

    return new Promise((resolve, reject) => {
        geolocation.isEnabled().then(() => {
            geolocation.getCurrentLocation({ desiredAccuracy: 3, timeout: 100 }).then(location => {
                resolve(location);
            })
        }, error => {
            geolocation.enableLocationRequest().then(() => {
                geolocation.getCurrentLocation({ timeout: 100 }).then(location => {
                    resolve(location);
                }).catch(error => {
                    reject(error);
                    console.log(error);
                });
            }, error => {
                console.dir(error);
            });
        });


    });

}