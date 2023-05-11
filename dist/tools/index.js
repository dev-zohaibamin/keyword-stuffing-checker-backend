"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const controller = require("./keywordStuffingChecker.tool.controller");
const router = express_1.default.Router();
router.post("/kwcheck", controller.check);
module.exports = router;
