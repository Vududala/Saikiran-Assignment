Array.prototype.diff = function(arr) {
    var ret = [ ];
    for(var i in this) {
        if( arr.indexOf( this[i] ) > - 1 ) {
            ret.push( this[i] );
        }
    }
    return ret;
};

var array1 = [ "Hey", "I", "am", "Saikiran"] ;
var array2 = [ "Do" , "you", "know", "Javascript"] ;
console.log(array1.diff(array2));