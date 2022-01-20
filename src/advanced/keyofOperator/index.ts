type TypeKeyof = {
    nome: string;
    idade: number;
    car: string;
    endereco: string;
};

function getValue<A, B extends keyof A>(object: A, key: B) {
    const value = object[key];
    return value;
}

const jhon: TypeKeyof = {
    nome: "Jhon",
    idade: 22,
    endereco: "NYC",
    car: "Fiat",
};

const returned = getValue(jhon, "car");
