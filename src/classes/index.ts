class Animal {
    protected name: string;

    constructor(_name: string) {
        this.name = _name;
    }

    public move(distance: number): void {
        console.log(`${this.name} moved ${distance}m.`);
    }
}

class Bird extends Animal {
    fly(distance: number) {
        console.log(`${this.name} flew ${distance}m.`);
    }
}

const rabbit = new Animal("Rabbit");
rabbit.move(20);
rabbit.name;

const kiwi = new Bird("Kiwi");
kiwi.move(10);
