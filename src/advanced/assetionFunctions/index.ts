type Pedro = {
    name: "Pedro";
    birthDate: Date;
};
function assertDate(date: unknown): asserts date is Date {
    if (date instanceof Date) return;
    else throw new Error("Not Valid!");
}

const pedro: Pedro = { name: "Pedro", birthDate: new Date() };
console.log(assertDate(pedro.birthDate));
