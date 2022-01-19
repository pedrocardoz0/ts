import { TupleType } from "typescript";

// Array
let array: Array<number> = [1, 2, 3];
let arrayOther: number[] = [1, 2, 3];

array = [2];
array = [1, 3, "1"];

// Tuples
let tuple: [number, number] = [1, 2];

tuple = [1, 2];
tuple = ["string", "string"];
