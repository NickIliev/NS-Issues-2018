import { Observable } from 'data/observable';
import { DatePicker } from 'ui/date-picker';

export class HelloWorldModel extends Observable {

    private _date: Date;
    datePicker: DatePicker;

    constructor() {
        super();

        this.date = new Date("October 11, 1999");
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
        this.datePicker = <DatePicker>args.object;
    
        this.datePicker.on("dateChange", (args: any) => {
            console.log("Date Changed");
            console.log(args.value);
        })
    }
}
