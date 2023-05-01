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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../models/model"));
const response_1 = __importDefault(require("../responses/response"));
class AdminHandler {
    static getBestProfession(startDate, endDate) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT p.profession, SUM(j.price) AS totalEarned
        FROM Jobs AS j
        LEFT JOIN Contracts AS c ON j.ContractId = c.id 
        LEFT JOIN Profiles AS p ON c.ContractorId = p.id
        WHERE j.paid = true AND j.paymentDate BETWEEN '${startDate}' AND '${endDate}'
        GROUP BY p.profession
        ORDER BY totalEarned DESC
        LIMIT 1`;
            const bestProfession = yield model_1.default.sequelize
                .query(query)
                .then((res) => {
                return res[0][0];
            });
            return bestProfession
                ? new response_1.default(200, bestProfession.profession)
                : new response_1.default(404, "Best profession was not found in those dates");
        });
    }
    static getBestClients(startDate, endDate, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT p.id AS id, p.firstName || ' ' || p.lastName AS fullName,
        SUM(j.price) AS paid
        FROM Jobs AS j
        LEFT JOIN Contracts AS c ON j.ContractId = c.id 
        LEFT JOIN Profiles AS p ON c.ClientId = p.id
        WHERE j.paid = true AND j.paymentDate BETWEEN '${startDate}' AND '${endDate}'
        GROUP BY fullName
        ORDER BY paid DESC
        LIMIT ${limit}`;
            const bestClients = yield model_1.default.sequelize
                .query(query)
                .then((res) => {
                return res[0];
            });
            return bestClients && bestClients.length
                ? new response_1.default(200, bestClients)
                : new response_1.default(404, "No clients were found!");
        });
    }
}
exports.default = AdminHandler;
//# sourceMappingURL=admin.handler.js.map