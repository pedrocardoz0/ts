type Circle = {
    kind: "Circle";
    radius: number;
};

type Triangle = {
    kind: "Triangle";
    base: number;
    height: number;
};

type Parallelogram = {
    kind: "Parallelogram";
    base: number;
    height: number;
};

type ShapesOption = Circle | Triangle | Parallelogram;

function raiseError(): never {
    throw new Error("Not Given Shape");
}

function Area(shape: ShapesOption): number {
    if (shape.kind === "Circle") {
        return Math.PI * shape.radius ** 2;
    }

    if (shape.kind === "Triangle") {
        return 0.5 * (shape.height * shape.base);
    }

    if (shape.kind === "Parallelogram") {
        return shape.base * shape.height;
    }

    raiseError();
}

console.log(Area({ kind: "Parallelogram", height: 2, base: 2 }));
