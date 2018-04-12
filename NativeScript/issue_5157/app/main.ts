// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";

import { android as androidApp, AndroidApplication, AndroidActivityBundleEventData } from "tns-core-modules/application";
import { ad } from "tns-core-modules/utils/utils";

declare let com: any;
declare let android: any;

if (androidApp) {
    console.log("androidApp")

    const context = ad.getApplicationContext();

    androidApp.on(AndroidApplication.activityCreatedEvent, (args: AndroidActivityBundleEventData) => {
        let builder = new android.os.StrictMode.VmPolicy.Builder(); //red squiggly line appears under android here
        android.os.StrictMode.setVmPolicy(builder.build()); //red squiggly line appears under android here

        // Needed for corner cases with HTTP request using TSL on Android API19
        com.google.android.gms.security.ProviderInstaller.installIfNeededAsync(
            context,
            new com.google.android.gms.security.ProviderInstaller.ProviderInstallListener({
                onProviderInstalled: () => {
                    console.log("Provider Installed!");
                },
                onProviderInstallFailed: (errorCode, intent) => {
                    console.log("Error: " + errorCode);
                }
            }));
    });
}
platformNativeScriptDynamic().bootstrapModule(AppModule);
