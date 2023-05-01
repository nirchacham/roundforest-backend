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
const sequelize_1 = __importDefault(require("sequelize"));
const response_1 = __importDefault(require("../responses/response"));
const db_handler_1 = __importDefault(require("./db.handler"));
// import model from "../models/model";
const Op = sequelize_1.default.Op;
const maxDepositPrecentage = 0.25;
class BalancesHandler {
    static depositMoneyToUser(userId, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deposit = yield db_handler_1.default.depositMoneyToUser(userId);
                if (deposit > 0 && amount > Math.floor(deposit * maxDepositPrecentage)) {
                    return new response_1.default(403, "The deposit amount exceeds the max precentage");
                }
                db_handler_1.default.incrementProfileBalance(userId, amount);
                return new response_1.default(200, "The deposit was done successfuly");
            }
            catch (err) {
                console.log("Deposit failed! ", err);
                return new response_1.default(401, "Deposit failed");
            }
        });
    }
}
exports.default = BalancesHandler;
//# sourceMappingURL=balances.handler.js.map