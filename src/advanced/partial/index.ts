type PartialGenerator<T> = {
    [Item in keyof T]?: T[Item];
};

type Central = { x: 10; y: 20 };

type PartialCentral = PartialGenerator<Central>;

const objectCentral: PartialCentral = { x: 10 };

type CentralPartial = Partial<Central>;

const objectCentralPartial: CentralPartial = { y: 20 };
