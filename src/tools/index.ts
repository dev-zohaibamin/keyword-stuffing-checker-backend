import express from "express";
const controller = require("./keywordStuffingChecker.tool.controller");
const router = express.Router();

router.post("/kwcheck", controller.check);

export = router;
