/**
type Setting = {
    align: "left" | "center";
    padding: number;
};

function layout(settings: Setting) {
    console.log(`Padding: ${settings.padding}`);
    console.log(`Align: ${settings.align}`);
}

const example: Setting = {
    align: "left",
    padding: 10,
};

layout(example);
*/

function layout(settings: { align: "left" | "center"; padding: number }) {
    console.log(`Padding: ${settings.padding}`);
    console.log(`Align: ${settings.align}`);
}

const example = {
    align: "left",
    padding: 10,
} as const;

// const example = {
//     align: "left" as const,
//     padding: 10,
// };

layout(example);

type Customer = {
    email: "customer@email.com";
    phone: "+1 20 392-192";
    address: "NYC - Jhonson Block";
};

const objectCustomer: Customer = {
    email: "customer@email.com",
    phone: "+1 20 392-192",
    address: "NYC - Jhonson Block",
};

//objectCustomer.address = "Heu";
//console.log(objectCustomer);

const objectImmutableCustomer = {
    email: "customer@email.com",
    phone: "+1 20 392-192",
    address: "NYC - Jhonson Block",
} as const;
