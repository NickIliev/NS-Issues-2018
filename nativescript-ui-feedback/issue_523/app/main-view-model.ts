import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {

    private _dataItems: Array<any>;
    public counter: number;

    constructor() {
        super();

        this.dataItems = [1, 2, 3];
        
        this.counter = 0;
    }

    get dataItems(): Array<any> {
        return this._dataItems;
    }

    set dataItems(value: Array<any>) {
        if (this._dataItems !== value) {
            this._dataItems = value;
            this.notifyPropertyChange('dataItems', value)
        }
    }

    onStackLoaded() {
        console.log("onStackLoaded");

    }

    onItemLoading(args) {
        console.log("onItemLoadinfg");
        console.log("Item INDEX: " + args.index);
        console.log("item loading fired " + (++this.counter) + " times!");
    }
}
