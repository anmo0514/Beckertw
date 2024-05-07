const moment = require("moment-timezone");

const dateFormat = "YYYY-MM-DD";
const datetimeFormat = "YYYY-MM-DD HH:mm:ss";

const toDateString = (t) => moment(t).format(dateFormat);
const toDatetimeString = (t) => moment(t).format(datetimeFormat);

const dateHelper = (date, type='datetime') => {
    try{
        if(date){
            if(type === 'date') return toDateString(date);
            if(type === 'datetime') return toDatetimeString(date);
        }
     } catch (error) {
        console.error(error);
     }
     return date;
    
}


const switchHelper = (value) => {
    /**
     * For boolean (TintInt), convert checkbox default `checked` value to 1 and 0
     */
    if ([true, 'on', 1, 'checked'].includes(value))
        return 1;
    else return 0;
}

module.exports = {
    switchHelper,
    dateHelper,
}