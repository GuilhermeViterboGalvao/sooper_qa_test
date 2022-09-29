const S = require("fluent-json-schema").default;

const ContactBody = S.object()
.prop("id", S.number())
.prop("name", S.string())
.prop("phone", S.string());

const schema = {
    body: ContactBody
};

module.exports = {
    schema
};