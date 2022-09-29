const { fastify } = require("../singleton/fastify");
const { contacts } = require("../db");

const insert = (contact) => {
    contact.id = contacts.length + 1;
    contacts.push(contact);
    sortDB();
    fastify.log.info(contact);
    return contacts;
};

const update = (contact) => {
    _delete(contact.id);
    contacts.push(contact);
    sortDB();
    return contact;
};

const getAll = () => {
    return contacts;
};

const get = (id) => {
    const contact = contacts.find((contact) => contact.id === id);
    return contact;
};

const _delete = (id) => {
    const contacToBeRemoved = get(id);
    const constactsFiltered = contacts.filter((currentContact) => currentContact.id !== contacToBeRemoved?.id);
    contacts.length = 0;
    contacts.push(...constactsFiltered);
    sortDB();
    return contacToBeRemoved;
};

const sortDB = () => {
    contacts.sort((contact1, contact2) => {
        if (contact1.id < contact2.id) {
            return -1;
        }
        if (contact1.id > contact2.id) {
            return 1;
        }
        return 0;
    });
};

module.exports = {
    insert,
    update,
    getAll,
    get,
    _delete
};