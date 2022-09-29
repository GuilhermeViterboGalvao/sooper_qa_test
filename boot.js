const { bootRoutes } = require("./routes");

const boot = async () => {
    bootRoutes();
};

module.exports = {
    boot
};