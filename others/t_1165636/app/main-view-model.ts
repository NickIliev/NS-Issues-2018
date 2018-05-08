import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {

    bullet: string;
    longtext: string;
    private _message: string;


    constructor() {
        super();

        this.longtext = "very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long text!";
        this.message = "some message";
        this.bullet = String.fromCharCode(0xf111);
    }

    get message(): string {
        return this._message;
    }
    
    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value)
        }
    }
}
