type TupleOfNumbers = [number, number, number, number];
type ImmutableTupleType = readonly [number, number, number, number];

function sortArray(points: ImmutableTupleType) {
    return points.slice().sort().reverse() as TupleOfNumbers;
}

const start: TupleOfNumbers = [1, 2, 3, 4];
const end: TupleOfNumbers = sortArray(start);

console.log(`Start > `, start);
console.log(`End > `, end);
