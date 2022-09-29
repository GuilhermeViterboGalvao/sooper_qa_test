const { fastify } = require("../singleton/fastify");
const HealthController = require("../controller/health");
const ContactController = require("../controller/contact");

const { schema: contactSchema } = require("../schema/contact");

const bootRoutes = () => {
    fastify.get("/", HealthController.health);
    fastify.get("/contacts", ContactController.getAll);
    fastify.post("/contact", contactSchema, ContactController.insert);
    fastify.put("/contact/:id", contactSchema, ContactController.update);
    fastify.get("/contact/:id", ContactController.get);
    fastify.delete("/contact/:id", ContactController._delete);
};

module.exports = {
    bootRoutes
};