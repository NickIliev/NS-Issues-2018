/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import "./bundle-config";
import * as application from 'application';

import {setActivityCallbacks, AndroidActivityCallbacks} from "ui/frame";

@JavaProxy("com.tns.NativeScriptActivity")
class Activity extends android.app.Activity {
    private _callbacks: AndroidActivityCallbacks;

    public onUserInteraction(): void {
        console.log("onUserInteraction overwritten from app.ts"); // OVERWRITTEN BEHAVIOUR
    }

    protected onCreate(savedInstanceState: android.os.Bundle): void {
        if (!this._callbacks) {
            setActivityCallbacks(this);
        }

        this._callbacks.onCreate(this, savedInstanceState, super.onCreate);
    }

    protected onSaveInstanceState(outState: android.os.Bundle): void {
        this._callbacks.onSaveInstanceState(this, outState, super.onSaveInstanceState);
    }

    protected onStart(): void {
        this._callbacks.onStart(this, super.onStart);
    }

    protected onStop(): void {
        this._callbacks.onStop(this, super.onStop);
    }

    protected onDestroy(): void {
        this._callbacks.onDestroy(this, super.onDestroy);
    }

    public onBackPressed(): void {
        this._callbacks.onBackPressed(this, super.onBackPressed);
    }

    public onRequestPermissionsResult(requestCode: number, permissions: Array<String>, grantResults: Array<number>): void {
        this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined /*TODO: Enable if needed*/);
    }

    protected onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent): void {
        this._callbacks.onActivityResult(this, requestCode, resultCode, data, super.onActivityResult);
    }
}


application.start({ moduleName: 'main-page' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
