"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = __importStar(require("sequelize"));
const response_1 = __importDefault(require("../responses/response"));
const db_handler_1 = __importDefault(require("./db.handler"));
const validatePaymentParams_1 = require("../middleware/validatePaymentParams");
const Op = Sequelize.Op;
class JobsHandler {
    static getUnpaidJobs(profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            const unpaidJobs = yield db_handler_1.default.getUnpaidJobsForUser(profileId);
            return unpaidJobs.length ? new response_1.default(200, unpaidJobs) : new response_1.default(404, 'Unpaid jobs were not found');
        });
    }
    static payForJob(jobId) {
        return __awaiter(this, void 0, void 0, function* () {
            const paidJob = yield db_handler_1.default.findUnpaidJob(jobId);
            const contract = yield db_handler_1.default.getContract(paidJob === null || paidJob === void 0 ? void 0 : paidJob.ContractId);
            const client = yield yield db_handler_1.default.findProfile(contract === null || contract === void 0 ? void 0 : contract.ClientId);
            const contractor = yield db_handler_1.default.findProfile(contract === null || contract === void 0 ? void 0 : contract.ContractorId);
            const paramsAreNotValid = validatePaymentParams_1.validatePaymentParams(client, contractor);
            if (paramsAreNotValid) {
                return paramsAreNotValid;
            }
            if (client.balance < paidJob.price) {
                return new response_1.default(401, "Out of balance!");
            }
            const deposit = yield db_handler_1.default.performTransaction(client, contractor, paidJob, jobId);
            return new response_1.default(200, deposit);
        });
    }
}
exports.default = JobsHandler;
//# sourceMappingURL=jobs.handler.js.map