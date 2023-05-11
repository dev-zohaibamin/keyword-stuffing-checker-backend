import { Application } from "express";


export = function (server: Application) {
  server.use("/tools", require("../tools/index"));

};
