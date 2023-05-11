"use strict";
module.exports = function (server) {
    server.use("/tools", require("../tools/index"));
};
