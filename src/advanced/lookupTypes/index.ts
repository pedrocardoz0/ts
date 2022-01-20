type BigRequestType = {
    one: {
        a: number;
        b: number;
        C: boolean;
        d: string;
        e: boolean;
    };
    two: { o: number; c: boolean; d: string }[];
    name: string;
    second: number;
    telegram: {
        one: string;
        two: string;
    };
};

function getFields(): BigRequestType["telegram"]["one"] {
    return "Hello";
}

const mockObject = {
    a: 10,
    b: 20,
    c: 30,
} as const;

type TypeMockedObject = typeof mockObject;
