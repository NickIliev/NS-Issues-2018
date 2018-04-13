import { AndroidActivityCallbacks, setActivityCallbacks } from "ui/frame";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { Observable } from "rxjs/Observable";

const _intentSubject = new ReplaySubject<android.content.Intent>();

export const onNewIntent: Observable<android.content.Intent> = _intentSubject.asObservable();

@JavaProxy("com.test.TestActivity")
class Activity extends android.app.Activity {
    private _callbacks: AndroidActivityCallbacks;

    onCreate(savedInstanceState: android.os.Bundle): void {
        if (!this._callbacks) {
            setActivityCallbacks(this);
        }
        this._callbacks.onCreate(this, savedInstanceState, super.onCreate);

        const creationIntent = this.getIntent();
        _intentSubject.next(creationIntent);
    }

    onNewIntent(intent: android.content.Intent): void {
        super.onNewIntent(intent);
        this.setIntent(intent);
        _intentSubject.next(intent);
    }

    protected onSaveInstanceState(outState: android.os.Bundle): void {
        console.log("onSaveInstanceState");
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