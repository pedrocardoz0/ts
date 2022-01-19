type PointGenerated = {
    new (x: number, y: number): { x: number; y: number };
};

const pointGenerated: PointGenerated = new (class {
    constructor(public x: number, public y: number) {}
})(10, 20);
