function add(x: number, y: number): number {
    return x + y;
}

function log(message: string): void {
    console.log(`Log: ${message}`);
}

function sum(...values: number[]) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}

const sumValue = sum(1, 3, 4);

type FunctionType = (a: number, b: number) => number;

let functionCreated: FunctionType;

functionCreated = (x: number, y: number) => {
    return x + y;
};

const sumValueCustomFunction = functionCreated(1, 3);

console.log(`Sum Value`);
console.log(sumValue);

console.log(`Sum Value Custom Function`);
console.log(sumValueCustomFunction);
