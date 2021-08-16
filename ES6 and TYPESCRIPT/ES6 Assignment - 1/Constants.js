"use strict";
var colors = ['red'];
colors.push('green');
console.log(colors); // ["red", "green"]
colors.pop();
colors.pop();
console.log(colors); // []
colors = []; // TypeError
