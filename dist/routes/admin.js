"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_controller_1 = __importDefault(require("../controllers/admin.controller"));
const validateBestProfessionParams_1 = require("../middleware/validateBestProfessionParams");
const validateBestClientsParams_1 = require("../middleware/validateBestClientsParams");
const router = express_1.default.Router();
router.get("/best-profession", validateBestProfessionParams_1.validateBestProfessionParams, admin_controller_1.default.getBestProfession);
router.get("/best-clients", validateBestClientsParams_1.validateBestClientsParams, admin_controller_1.default.getBestClients);
exports.default = router;
//# sourceMappingURL=admin.js.map