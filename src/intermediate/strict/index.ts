type User = {
    name: string;
    age: number;
};

const users: User[] = [
    { name: "James", age: 30 },
    { name: "Jhosh", age: 40 },
];

function getUserAgeByName(name: string): number {
    const user = users.find((item) => item.name === name);

    if (user === undefined) {
        throw new Error("User not found!");
    }

    return user.age;
}
