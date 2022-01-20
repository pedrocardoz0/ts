type IsArray<T> = T extends Array<any> ? "array" : "other";

type TypeWithArray = IsArray<[]>;
type TypeWithOther = IsArray<number>;

type IsArrayInfer<T> = T extends Array<infer A> ? A : T;

type TypeOfArrayString = IsArrayInfer<string[]>;
type TypeOfArrayNumber = IsArrayInfer<number[]>;
type TypeString = IsArrayInfer<string>;

function returnWithFullName(first: string, second: string) {
    return {
        firstName: first,
        secondName: second,
        fullName: `${first} ${second}`,
    };
}

type ReturnTypeWithFullName = ReturnType<typeof returnWithFullName>;

function Log(person: ReturnTypeWithFullName): void {
    console.log(`
      Person
      First Name: ${person.firstName};
      Second Name: ${person.secondName};
      Full Name: ${person.fullName};
    `);
}

const person = returnWithFullName("Git", "Hub");

Log(person);
