"use strict";
function add(x, y) {
    return x + y;
}
function log(message) {
    console.log(`Log: ${message}`);
}
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
const sumValue = sum(1, 3, 4);
let functionCreated;
functionCreated = (x, y) => {
    return x + y;
};
const sumValueCustomFunction = functionCreated(1, 3);
console.log(`Sum Value`);
console.log(sumValue);
console.log(`Sum Value Custom Function`);
console.log(sumValueCustomFunction);
