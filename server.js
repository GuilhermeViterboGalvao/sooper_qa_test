const { fastify } = require("./singleton/fastify");
const { boot } = require("./boot");

const start = async () => {
    try {
        await boot();
        await fastify.listen({ port: 3000 });
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
};

start();