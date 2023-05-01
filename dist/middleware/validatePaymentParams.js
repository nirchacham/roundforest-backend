"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePaymentParams = void 0;
const response_1 = __importDefault(require("../responses/response"));
const validatePaymentParams = (client, contractor) => {
    if (!client) {
        return new response_1.default(404, "Client was not found");
    }
    if (!contractor) {
        return new response_1.default(404, "Contractor was not found");
    }
    return null;
};
exports.validatePaymentParams = validatePaymentParams;
//# sourceMappingURL=validatePaymentParams.js.map