const ContactService = require("../service/contact");

const insert = async (request, reply) => {
    const contacts = ContactService.insert(request?.body);
    return {
        contacts
    };
};

const update = async (request, reply) => {
    const { id } = request.params;
    const contact = ContactService.update(Number(id || 0), request?.body);
    return {
        contact
    };
};

const getAll = async (request, reply) => {
    const contacts = ContactService.getAll();
    return {
        contacts
    };
};

const get = async (request, reply) => {
    const { id } = request.params;
    const contact = ContactService.get(Number(id || 0));
    return {
        contact
    };
};

const _delete = async (request, reply) => {
    const { id } = request.params;
    const contactRemoved = ContactService._delete(Number(id || 0));
    return {
        contactRemoved
    };
};

module.exports = {
    insert,
    update,
    getAll,
    get,
    _delete
};