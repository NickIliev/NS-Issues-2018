import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {

    private _htmlString: string;

    constructor() {
        super();

        // Initialize default values.
        this.htmlString = "<table style='width:100%'><tr><th>Firstname</th><th>Lastname</th> <th>Age</th></tr><tr><td>Jill</td><td>Smith</td> <td>50</td></tr><tr><td>Eve</td><td>Jackson</td><td>94</td></tr></table>";
    }

    get htmlString(): string {
        return this._htmlString;
    }
    
    set htmlString(value: string) {
        if (this._htmlString !== value) {
            this._htmlString = value;
            this.notifyPropertyChange('htmlString', value)
        }
    }
}
