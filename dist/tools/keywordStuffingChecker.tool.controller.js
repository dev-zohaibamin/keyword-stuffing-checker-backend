"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = void 0;
const keyword_stuffing_checker_service_1 = require("../service/keyword-stuffing-checker.service");
const check = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { keywords, content } = req.body;
        if (!keywords.length) {
            res.status(400).json({ message: `Please Provide keywords` });
            return;
        }
        if (!content.length) {
            res.status(400).json({ message: `Please Provide Content` });
            return;
        }
        const result = yield (0, keyword_stuffing_checker_service_1.checkStuffing)(keywords, content);
        res.json({ result });
    }
    catch (err) {
        res.status(400).json({ message: `${err.message}` });
    }
});
exports.check = check;
