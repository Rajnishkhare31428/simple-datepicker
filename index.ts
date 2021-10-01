import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);
import { DateTimePicker } from '@syncfusion/ej2-calendars';

/**
 * Range DateTimePicker sample
 */

let today: Date = new Date();
let currentYear: number = today.getFullYear();
let currentMonth: number = today.getMonth();

let dateTimeInstance: DateTimePicker = new DateTimePicker({
    min: new Date(currentYear, currentMonth, 7, 10, 0, 0),
    max: new Date(currentYear, currentMonth, 27, 22, 30, 0),
    value: new Date(currentYear, currentMonth, 14, 12, 0, 0),
    placeholder: 'Select a date and time',
    width: "233px"
});
dateTimeInstance.appendTo('#datetimepicker');
dateTimeInstance.show();


