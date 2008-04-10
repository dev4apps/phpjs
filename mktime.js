function mktime() {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: baris ozdil
    // +      input by: gabriel paderni 
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: FGFEmperor
    // *     example 1: mktime( 14, 10, 2, 2, 1, 2008 );
    // *     returns 1: 1201871402
    
    var no, i = 0, d = new Date(), argv = arguments, argc = argv.length;
    d.setHours(0,0,0); d.setDate(1); d.setMonth(1); d.setYear(1972);

    var dateManip = {
        0: function(tt){ return d.setHours(tt); },
        1: function(tt){ return d.setMinutes(tt); },
        2: function(tt){ return d.setSeconds(tt); },
        3: function(tt){ return d.setMonth(parseInt(tt)-1); },
        4: function(tt){ return d.setDate(tt); },
        5: function(tt){ return d.setYear(tt); }
    };

    for( i = 0; i < argc; i++ ){
        no = parseInt(argv[i]);
        if(no && isNaN(no)){
            return false;
        } else if(no){
            // arg is number, let's manipulate date object
            if(!dateManip[i](no)){
                // failed
                return false;
            }
        }
    }

    return Math.floor(d.getTime()/1000);
}