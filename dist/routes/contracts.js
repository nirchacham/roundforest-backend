"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contracts_controller_1 = __importDefault(require("../controllers/contracts.controller"));
const getProfile_1 = require("../middleware/getProfile");
const validateContractId_1 = require("../middleware/validateContractId");
const router = express_1.default.Router();
router.get("/", getProfile_1.getProfile, contracts_controller_1.default.getContracts);
/**
 * FIX ME!
 * @returns contract by id
 */
router.get("/:id", getProfile_1.getProfile, validateContractId_1.validateContractId, contracts_controller_1.default.getContractsByProfile);
exports.default = router;
//# sourceMappingURL=contracts.js.map