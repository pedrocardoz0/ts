type Point5D = { a: number; b: number; c: number; d: number; e: number };
type Point6D = {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
};
type ContactInformation = { email: string; password: string };

let object5D: Point5D = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let object6D: Point6D = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
let personObject: ContactInformation = {
    email: "blabla@email.com",
    password: "blabla",
};

object5D = object6D;
//object6D = object5D as Point6D; // Compiler Accept

personObject = object6D as unknown as ContactInformation;

console.log(personObject);
