import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {


    private _dataItems: Array<number>;

    constructor() {
        super();

        this.dataItems = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    }

    get dataItems(): Array<number> {
        return this._dataItems;
    }

    set dataItems(value: Array<number>) {
        if (this._dataItems !== value) {
            this._dataItems = value;
            this.notifyPropertyChange('dataItems', value)
        }
    }

}
