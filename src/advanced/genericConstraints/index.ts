type BaseName = { firstName: string; lastName: string };

function returnWithFullName<T extends BaseName>(
    object: T
): T & { fullName: string } {
    return {
        ...object,
        fullName: `${object.firstName} ${object.lastName}`,
    };
}

type ContactWithPhone = { phone: string } & BaseName;

const newReturnedName = returnWithFullName<ContactWithPhone>({
    firstName: "Pedro",
    lastName: "Cardozo",
    phone: "14 55123192391",
});

const anotherTest = returnWithFullName({
    firstName: "s",
    lastName: "d",
});

console.log(newReturnedName);
