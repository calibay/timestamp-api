

exports.convert = function convert(value) {
    var unix = null;
    var natural = null;

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

    if (/^[0-9]+$/.test(value)) {
        if (Math.abs(value) <= 2147485547) {
            unix = value;
            var date = new Date(value * 1000);
            var month = monthNames[date.getMonth()];
            var day = date.getDate();
            var year = date.getYear() + 1900;
            natural = month + " " + day + ', ' + year;
        }
        
    }

    return {unix: +unix, natural: natural};
};