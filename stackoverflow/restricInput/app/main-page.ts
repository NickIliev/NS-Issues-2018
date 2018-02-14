
import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { TextField } from "ui/text-field";
import { isAndroid } from "platform";

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
}

export function onTfLoaded(args) {
    let tf = <TextField>args.object;

    let nativeTF;
    if (isAndroid) {
        let nativeTF = <android.widget.EditText>tf.nativeView; // on Android is android.widget.EditText 

        nativeTF.setKeyListener(android.text.method.DigitsKeyListener.getInstance("zxc"));
    } else {
        let nativeTF = <UITextField>tf.nativeView;// for iOS is UITextView

    }
    console.log("editText: " + nativeTF);

}

