class Human {
    constructor(public name: string, public age: number) {}
}

const adam = new Human("Adam", 120000);
console.log(adam.name, adam.age);

function add(x: number, y: number) {
    return x + y;
}
