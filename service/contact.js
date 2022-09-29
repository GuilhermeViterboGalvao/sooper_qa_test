const ContactRepository = require("../repository/contact");

const insert = (contact) => {
    return ContactRepository.insert(contact);
};

const update = (id, contact) => {
    return ContactRepository.update({
        id,
        ...contact
    });
};

const getAll = () => {
    return ContactRepository.getAll();
};

const get = (id) => {
    return ContactRepository.get(id);
};

const _delete = (id) => {
    return ContactRepository._delete(id);
};

module.exports = {
    insert,
    update,
    getAll,
    get,
    _delete
};