"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jobs_controller_1 = __importDefault(require("../controllers/jobs.controller"));
const getProfile_1 = require("../middleware/getProfile");
const validateJobId_1 = require("../middleware/validateJobId");
const router = express_1.default.Router();
router.get("/unpaid", getProfile_1.getProfile, jobs_controller_1.default.getJobs);
router.post("/:job_id/pay", validateJobId_1.validateJobId, jobs_controller_1.default.payForJob);
exports.default = router;
//# sourceMappingURL=jobs.js.map