"use strict";
class QueueNew {
    constructor() {
        this.data = [];
    }
    push(x) {
        this.data.push(x);
    }
    pop() {
        return this.data.shift();
    }
}
const queue = new QueueNew();
queue.push(10);
queue.pop();
