import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {


    private _items: Array<any>;

    constructor() {
        super();

        this.items = [
            {
                title: "1", footer: "10", headerText: "First", footerText: "4",
                items: [
                    { text: "Stop", image: "https://d2odgkulk9w7if.cloudfront.net/images/default-source/default-album/logo.png?sfvrsn=a9520ffe_0"},
                    { text: "Drop", image: "https://mobidev.biz/content/blog/AngularNative/NA-NS3.png" }
                ]
            }
        ]
    }

    get items(): Array<any> {
        return this._items;
    }

    set items(value: Array<any>) {
        if (this._items !== value) {
            this._items = value;
            this.notifyPropertyChange('items', value)
        }
    }
}
