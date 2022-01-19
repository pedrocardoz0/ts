type Point4D = {
    readonly x: number;
    readonly y: number;
    readonly z: number;
    readonly w: number;
};

// After the assignment will be possible anymore to assign any particular value to that element!
const fourDimensions: Point4D = {
    x: 10,
    y: 20,
    z: 30,
    w: 40,
};

fourDimensions.x = 290;

class Soldier {
    public readonly name: string;

    constructor(_name: string) {
        this.name = _name;
    }
}

const rywanDoll = new Soldier("Ryan");
rywanDoll.name = "Carlos";
