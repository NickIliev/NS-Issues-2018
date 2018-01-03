import { EventData } from 'data/observable';
import { Page } from 'ui/page';

import * as geolocation from "nativescript-geolocation";

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;


    getDeviceLocation().then(location => {
        console.log(location)
    })
}

export function getDeviceLocation(): Promise<any> {

    return new Promise((resolve, reject) => {
        geolocation.isEnabled().then(() => {
            geolocation.getCurrentLocation({ desiredAccuracy: 3, timeout: 3000 }).then(location => {
                resolve(location);
            }).catch(error => {

                console.dir(error);
            });

        }, error => {

            geolocation.enableLocationRequest().then(() => {
                geolocation.getCurrentLocation({ timeout: 3000 }).then(location => {
                    resolve(location);
                }).catch(error => {
                    reject(error);
                    console.dir(error);
                });
            }, error => {
                console.dir(error);
            });
        });


    });

}