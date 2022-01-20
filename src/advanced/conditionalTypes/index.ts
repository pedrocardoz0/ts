type IsNumber<T> = T extends number ? "number" : "other";

type WithNumberType = IsNumber<number>;
type WithOtherType = IsNumber<string>;

function logicEqual(value: unknown): WithNumberType | WithOtherType {
    if (typeof value === "number") {
        return "number";
    } else {
        return "other";
    }
}

const withNumber = logicEqual(10);

type TypedName<T> = T extends string
    ? "string"
    : T extends number
    ? "number"
    : T extends boolean
    ? "boolean"
    : "object";

function returnType<T>(typeParam: T): TypedName<T> {
    return typeof typeParam as TypedName<T>;
}

const stringType = returnType<string>("s");
const numberType = returnType<number>(10);
const booleanType = returnType<boolean>(false);
const objectType = returnType<object>({});
