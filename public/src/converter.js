

exports.convert = function convert(value) {
    var unix = null,
    natural = null,
    month = '',
    day = '',
    year = '';

    var monthNames = [
        "January", "February", "March", 
        "April", "May", "June",
        "July", "August", "September", 
        "October", "November", "December"
        ];
    var monthShortNames = [
        "Jan", "Feb", "Mar", 
        "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", 
        "Oct", "Nov", "Dec"
        ];

    function findMonth(m) {
        var strToUpper = monthFromValue.charAt(0).toUpperCase() + monthFromValue.slice(1);
        return (m.includes(strToUpper));
    }
    if (/^[0-9]+$/.test(value)) {
        if (Math.abs(value) <= 2147485547) {
            unix = +value;
            var date = new Date(value * 1000);
            month = monthNames[date.getMonth()];
            day = date.getDate();
            year = date.getYear() + 1900;
            natural = month + " " + day + ', ' + year;
        }
    } else {
        var monthFromValue = value.match(/^[A-Za-z]+/);
        if (monthFromValue != null) {
            monthFromValue = monthFromValue[0];
            var monthIndex = monthNames.findIndex(findMonth);
            if (monthIndex != -1) {
                month = monthNames[monthIndex];
                value = value.slice(monthFromValue.length);
                value = value.replace(/ |,/g, "");
                if (!(value.length > 6) && !(value.length < 5)) {
                    if (value.length == 6) {
                        day = value.slice(0,2);
                    } else if (value.length == 5 ) {
                        day = value.slice(0,1);
                    }
                    year = value.slice(day.length);
                
                    natural = month + " " + day + ', ' + year;
                    unix = Date.parse(natural) / 1000;
                    console.log(unix);
                    if (isNaN(unix)) {
                        natural = null;
                    }
                }
            }            
        }

    }
    return {unix: unix, natural: natural };
};