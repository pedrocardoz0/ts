class CardinalPoints {
    x!: number;
    y!: number;

    constructor() {
        this.defineNewPoints();
    }

    defineNewPoints() {
        this.x = Math.random();
        this.y = Math.random();
    }
}
