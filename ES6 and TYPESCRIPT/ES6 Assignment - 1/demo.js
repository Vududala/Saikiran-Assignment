"use strict";
var Add = /** @class */ (function () {
    function Add(x, y) {
        this.x = x;
        this.y = y;
    }
    Add.prototype.Display = function () {
        console.log(this.x);
        console.log(this.y);
        console.log((this.x + this.y));
    };
    return Add;
}());
var add = new Add(10, 20);
add.Display();
