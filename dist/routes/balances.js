"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const balances_controller_1 = __importDefault(require("../controllers/balances.controller"));
const validateAmountToDeposit_1 = require("../middleware/validateAmountToDeposit");
const validateClient_1 = require("../middleware/validateClient");
const router = express_1.default.Router();
router.post("/deposit/:userId", validateAmountToDeposit_1.validateAmountToDeposit, validateClient_1.validateClient, balances_controller_1.default.depositMoneyToUser);
exports.default = router;
//# sourceMappingURL=balances.js.map