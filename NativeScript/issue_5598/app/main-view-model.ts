import { Observable } from 'data/observable';
import { DatePicker } from 'ui/date-picker';

export class HelloWorldModel extends Observable {

    private _date: Date;

    constructor() {
        super();

        this.date = new Date();
    }

    get date(): Date {
        return this._date;
    }
    
    set date(value: Date) {
        if (this._date !== value) {
            this._date = value;
            this.notifyPropertyChange('date', value)
        }
    }

    onDatePickerLoaded(args) {
        console.log("onDatePickerLoaded")
        const datePicker = <DatePicker>args.object;

        datePicker.on(Observable.propertyChangeEvent, (args) => {
            console.log("Date Changed");
        })
    }

}
