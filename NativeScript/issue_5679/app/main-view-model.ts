import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {

    private _searchbarVisible: boolean;

    constructor() {
        super();
    }

    get searchbarVisible(): boolean {
        return this._searchbarVisible;
    }
    
    set searchbarVisible(value: boolean) {
        if (this._searchbarVisible !== value) {
            this._searchbarVisible = value;
            this.notifyPropertyChange('searchbarVisible', value)
        }
    }
}
