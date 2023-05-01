"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBestClientsParams = void 0;
const moment_1 = __importDefault(require("moment"));
const validFormat = "YYYY-MM-DD HH:mm";
const validateBestClientsParams = (req, res, next) => {
    const startDate = req.query.start;
    const endDate = req.query.end;
    const { limit } = req.query;
    if (!(0, moment_1.default)(startDate, validFormat, true).isValid() ||
        !(0, moment_1.default)(endDate, validFormat, true).isValid()) {
        return res
            .status(400)
            .send("The date params must be in valid format: {YYYY-MM-DD HH:mm}");
    }
    if (limit && isNaN(+limit))
        return res.status(400).send("Limit param must be a number!");
    next();
};
exports.validateBestClientsParams = validateBestClientsParams;
//# sourceMappingURL=validateBestClientsParams.js.map