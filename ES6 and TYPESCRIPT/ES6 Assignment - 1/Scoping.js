"use strict";
function forScope() {
    for (var i = 0; i < 5; i++) {
        console.log(i); //prints the values 0 through 4;
    }
    console.log(i); //prints 5;
}
forScope();
