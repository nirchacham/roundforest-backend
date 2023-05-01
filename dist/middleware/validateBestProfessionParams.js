"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBestProfessionParams = void 0;
const moment_1 = __importDefault(require("moment"));
const validFormat = "YYYY-MM-DD HH:mm";
const validateBestProfessionParams = (req, res, next) => {
    const startDate = req.query.start;
    const endDate = req.query.end;
    if (!(0, moment_1.default)(startDate, validFormat, true).isValid() ||
        !(0, moment_1.default)(endDate, validFormat, true).isValid()) {
        return res
            .status(401)
            .send("The date params must be in valid format: {YYYY-MM-DD HH:mm}");
    }
    next();
};
exports.validateBestProfessionParams = validateBestProfessionParams;
//# sourceMappingURL=validateBestProfessionParams.js.map