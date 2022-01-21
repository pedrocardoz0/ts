type Akira = {
    name: "Akira";
};

type Ayako = {
    name: "Ayako";
};

type Maus = {
    name: "Maus";
};

type OptionsBooks = Maus | Ayako | Akira;

// function verifyBook<T>(book: T): book is T {
//     return true;
// }

function verifyAkira(book: OptionsBooks): book is Akira {
    return "Akira" === book.name;
}

function verifyAyako(book: OptionsBooks): book is Ayako {
    return "Ayako" === book.name;
}

function verifyMaus(book: OptionsBooks): book is Maus {
    return "Maus" === book.name;
}

function showAuthor(book: OptionsBooks): string {
    if (verifyAkira(book)) {
        return "Katsuhiro Otomo";
    }

    if (verifyAyako(book)) {
        return "Osamu Tezuka";
    }

    if (verifyMaus(book)) {
        return "Art";
    }

    const _ensureBook: never = book;
    return _ensureBook;
}

const ayakoBook: Ayako = { name: "Ayako" };
console.log(showAuthor(ayakoBook));
