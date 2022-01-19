interface Eletronic {
    name: string;
    price: number;
}

interface Mouse extends Eletronic {
    color: string;
}

interface Eletronic {
    quantity: number;
}

const redMouse: Mouse = {
    name: "Mouse Red",
    price: 50,
    color: "red",
    quantity: 1,
};
