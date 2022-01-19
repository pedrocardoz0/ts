"use strict";
let regularExp = new RegExp("ab+c");
let arrayOfNumbers = [1, 2, 3];
let setOfNumbers = new Set(arrayOfNumbers);
class Queue {
    constructor() {
        this.array = [];
    }
    push(item) {
        this.array.push(item);
    }
    pop() {
        return this.array.pop();
    }
}
const queueType = new Queue();
queueType.push(1);
console.log(queueType.pop());
