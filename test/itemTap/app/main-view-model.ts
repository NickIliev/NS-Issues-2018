import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {

    private _items: Array<string>;

    constructor() {
        super();

        this.items = ["ala", "bala", "nica", "some", "ala", "bala", "nica", "some", "ala", "bala", "nica", "some"];
    }

    get items(): Array<string> {
        return this._items;
    }

    set items(value: Array<string>) {
        if (this._items !== value) {
            this._items = value;
            this.notifyPropertyChange('items', value)
        }
    }
}
