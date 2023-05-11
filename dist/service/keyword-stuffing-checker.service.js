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
exports.checkStuffing = void 0;
const checkStuffing = (keywords, content) => __awaiter(void 0, void 0, void 0, function* () {
    let highlighted = content;
    let count = {};
    keywords.forEach((keyword) => {
        const regex = new RegExp(keyword, "gi");
        highlighted = highlighted.replace(regex, `<span style="background-color: yellow;">${keyword}</span>`);
        const matches = content.match(regex);
        count[keyword] = matches ? matches.length : 0;
    });
    return { highlighted, count };
});
exports.checkStuffing = checkStuffing;
