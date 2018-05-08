import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: number;

    constructor() {
        super();

        this.message = 99;
    }

    get message(): number {
        return this._message;
    }
    
    set message(value: number) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value)
        }
    }
}
