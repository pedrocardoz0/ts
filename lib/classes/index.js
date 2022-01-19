"use strict";
class Animal {
    constructor(_name) {
        this.name = _name;
    }
    move(distance) {
        console.log(`${this.name} moved ${distance}m.`);
    }
}
class Bird extends Animal {
    fly(distance) {
        console.log(`${this.name} flew ${distance}m.`);
    }
}
const rabbit = new Animal("Rabbit");
rabbit.move(20);
rabbit.name;
const kiwi = new Bird("Kiwi");
kiwi.move(10);
