export const  numberWithCommas = (x) => {
    if(!x) return ''
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const convertRegularNumber10 = (number) => {
    if(number < 10) return '0' + number;
    return number;
}

export const convertSeconds2DHMS = (time) => {
    let remainSeconds = time;
    let days = Math.floor(remainSeconds / 86400);
    remainSeconds = remainSeconds - days * 86400;
    let hours = Math.floor(remainSeconds / 3600);
    remainSeconds = remainSeconds - hours * 3600;
    let minutes = Math.floor(remainSeconds / 60);
    let seconds = remainSeconds - minutes * 60;

    days = convertRegularNumber10(days);
    hours = convertRegularNumber10(hours);
    minutes = convertRegularNumber10(minutes);
    seconds = convertRegularNumber10(seconds);
    
    return {
        days, hours, minutes, seconds
    }
}

export const mile2km = (mile) => {
    return 1.609344 * mile;
}