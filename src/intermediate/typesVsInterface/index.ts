type onSubmitTypeInterface = () => void;

interface InterfaceExample {
    x: string;
    onSubmit: onSubmitTypeInterface;
}

type onSubmitType = () => void;

type TypeExample = {
    x: string;
    onSubmit: onSubmitType;
};

/**
 * Interfaces can't have primitives types and unions, like this:
 */

type PrimitiveExample = string;

// IMPOSSIBLE!
// interface PrimitiveExampleInterface {
//     string;
// }

type UnionExample = string | number;

// IMPOSSIBLE!
// interface UnionExample {
//     string | number;
// }

class ABC implements TypeExample {
    x: string = "a";
    onSubmit: onSubmitType = () => console.log;
}
