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
const status = {
    NEW: "new",
    IN_PROGRESS: "in_progress",
    TERMINATED: "terminated",
};
const Op = Sequelize.Op;
class ContractsHandler {
    static getContracts(profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            result = yield db_handler_1.default.getActiveContracts(profileId);
            console.log(result);
            return (result === null || result === void 0 ? void 0 : result.length) ? new response_1.default(200, result) : new response_1.default(404, 'Contracts were not found');
        });
    }
    static getContractsByProfile(id, contractorId) {
        return __awaiter(this, void 0, void 0, function* () {
            const contracts = yield db_handler_1.default.findMatchingContractToId(id, contractorId);
            return contracts ? new response_1.default(200, contracts) : new response_1.default(404, 'Contract was not found or doesnt belong to the requesting profile');
        });
    }
}
exports.default = ContractsHandler;
//# sourceMappingURL=contracts.handler.js.map