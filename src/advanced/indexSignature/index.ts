type Contact = {
    [contact: string]: string;
};

type ContactList = {
    [user: string]: Contact;
};

const contactList: ContactList = {};

contactList["Chrome"] = {
    email: "chrome@browser.com",
    phone: "+1 021 201-2923",
};

contactList["Firefox"];

console.log(contactList["Firefox"]);
