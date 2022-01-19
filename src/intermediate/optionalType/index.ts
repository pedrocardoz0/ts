type PersonData = {
    name: string;
    email: string;
    phone?: string;
};

const bruce: PersonData = {
    name: "bruce",
    email: "bruce@email.com",
};

console.log(bruce.phone);
