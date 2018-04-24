import { Observable } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { SSE } from 'nativescript-sse';
declare const EventSource;
export class HelloWorldModel extends Observable {
    list: ObservableArray<any>;
    sse: any;

    constructor() {
        super();
        this.list = new ObservableArray();
        this.sse = new SSE('http://localhost:8000', { 'X-Token': 'Test1234' });
 
        this.sse.events.on('onConnect', data => {
            console.log("onConnect");
            console.log(data.object.connected);
        });

        this.sse.events.on('onMessage', data => {
            console.log("onMessage");

            this.list.push(JSON.parse(data.object.message.data));
            console.log(JSON.parse(data.object.message.data));
        });

        this.sse.events.on('onError', data => {
            console.log("onError");

            console.log(data.object.error);
        });
    }
}