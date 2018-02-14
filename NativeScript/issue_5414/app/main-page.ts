import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();

    var input
    // var device = AVCaptureDevice.new();
    // try {
    //     input = AVCaptureDeviceInput.deviceInputWithDeviceError(device);
    // } catch (error) {
    //     console.log(error);
    // }
}