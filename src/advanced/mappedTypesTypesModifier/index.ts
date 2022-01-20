class StateUpdate<T> {
    constructor(public args: T) {}

    updateState(value: Partial<T>) {
        this.args = { ...this.args, ...value };
    }
}

const central = new StateUpdate({ x: 10, y: 20, z: 30 });
central.updateState({ y: 500 });
console.log(central.args);

type CentralPoint = {
    x: number;
    y: number;
    z: number;
};

let centralInstance: CentralPoint = {
    x: 20,
    y: 40,
    z: 40,
};

function updateValues<T>(value: T, update: Partial<T>): T {
    return {
        ...value,
        ...update,
    };
}

centralInstance = updateValues(centralInstance, { x: 1000, y: 1000, z: 1000 });
console.log(centralInstance);
