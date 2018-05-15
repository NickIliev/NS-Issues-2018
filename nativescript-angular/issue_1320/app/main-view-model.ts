import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {

    private _counter: number;
    private _source: Array<any>;

    constructor() {
        super();

        this.source = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    }

    get source(): Array<any> {
        return this._source;
    }

    set source(value: Array<any>) {
        if (this._source !== value) {
            this._source = value;
            this.notifyPropertyChange('source', value)
        }
    }
}
