type ReadOnlyType<T> = {
    readonly [Item in keyof T]: T[Item];
};

type ReadOnlyModified = ReadOnlyType<CentralPoint>;

const pointsReadOnlyModified: ReadOnlyModified = {
    x: 10,
    y: 20,
    z: 30,
};

type ReadOnly = Readonly<CentralPoint>;

const pointsReadOnly: ReadOnly = {
    x: 20,
    y: 30,
    z: 50,
};
