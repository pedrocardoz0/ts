// Ex. 01
type MappedType = {
    readonly [Item in "x" | "y" | "z"]: number;
};

const GeograficPoint: MappedType = {
    x: 10,
    y: 20,
    z: 30,
};

// Ex. 02
type PointThird = {
    x: 0;
    y: 0;
    z: 0;
};

type MappedTypeEX02 = {
    readonly [Item in keyof PointThird]: number;
};

// Ex. 03
type MappedTypeEX03 = {
    readonly [Item in keyof PointThird]: PointThird[Item];
};

// Ex. 04
type MappedType04<T> = {
    readonly [Item in keyof T]: T[Item];
};

const centralPoint: MappedType04<PointThird> = {
    x: 0,
    y: 0,
    z: 0,
};

// centralPoint.x = 10; - Error

// ReadOnly - Operator

const centralPointEX02: Readonly<PointThird> = {
    x: 0,
    y: 0,
    z: 0,
};
