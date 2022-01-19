type CarType = {
    name: string;
    accelerate(): string;
};

class Ferrari implements CarType {
    constructor(public name: string) {}
    accelerate(): string {
        return "100KM/h - 1s";
    }
}
