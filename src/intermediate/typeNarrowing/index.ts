class Cat {
    meow(): void {
        console.log("Meow!");
    }
}

class Dog {
    bark(): void {
        console.log("Hoff!");
    }
}

type AnimalType = Dog | Cat;

function speak(animal: AnimalType) {
    if (animal instanceof Cat) {
        animal.meow();
    }
    if (animal instanceof Dog) {
        animal.bark();
    }
}

type Square = { size: number; kind: string };
type Rectangle = { width: number; height: number };

type Shape = Square | Rectangle;

function area(geometricObject: Shape) {
    if ("size" in geometricObject) {
        console.log(geometricObject.size ** 2);
    }

    if ("width" in geometricObject) {
        console.log(geometricObject.width * geometricObject.height);
    }
}

const squareObject: Square = { size: 10 };
const rectangleObject: Rectangle = { width: 10, height: 20 };

area(squareObject);
area(rectangleObject);
