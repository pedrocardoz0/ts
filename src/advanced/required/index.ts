type RequiredType<T> = {
    [Item in keyof T]-?: T[Item];
};

type OptionalPoints = {
    x?: number;
    y?: number;
};

const centralRequiredPoints: RequiredType<OptionalPoints> = { x: 10, y: 10 };

const centalRequired: Required<OptionalPoints> = { x: 10, y: 20 };
