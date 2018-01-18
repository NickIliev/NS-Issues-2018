import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {


    private _clr: string;

    constructor() {
        super();

        this.clr = "red";
    }

    get clr(): string {
        return this._clr;
    }
    
    set clr(value: string) {
        if (this._clr !== value) {
            this._clr = value;
            this.notifyPropertyChange('clr', value)
        }
    }

}
