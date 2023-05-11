"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((req, res, next) => {
    express_1.default.json()(req, res, next);
});
const options = {
    allowedHeaders: [
        "Access-Control-Allow-Headers",
        "*",
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token",
    ],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "*",
};
app.use((0, cors_1.default)(options));
require("./routes/index")(app);
app.get("/", (req, res, next) => {
    res.send("Welcome to Tools Management Server..");
});
app.use((req, res, next) => {
    next(new http_errors_1.default.NotFound());
});
/**
 * Error Handler
 * @param err
 * @param req
 * @param res
 * @param next
 */
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message,
    });
};
app.use(errorHandler);
app.listen(3000, () => {
    console.log("Server is Listening to Port 3000");
});
