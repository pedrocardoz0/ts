function error(message: string): never {
    throw new Error(message);
}

const neverWithString: never = "Hello";
const neverStringReturn: string = error("");
const booleanReturn: boolean = error("");

type UnionWithNever = string | never;

type Empty<T> = T extends null | undefined ? never : T;

type Example = Empty<string | null>;

type Example01 = Empty<string> | Empty<null>;

type Example02 =
    | (string extends null | undefined ? never : string)
    | (null extends null | undefined ? never : string);

type End = string | never;
type Result = string;
