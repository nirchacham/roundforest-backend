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
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJobId = void 0;
const job_1 = require("../models/job");
const validateJobId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { job_id: jobId } = req.params;
    if (isNaN(+jobId))
        return res.status(401).send("Job id should be a number");
    if (!(yield job_1.Job.findOne({
        where: {
            id: jobId,
            paid: false
        },
    })))
        return res.status(404).send("Job was not found or has been paid already");
    next();
});
exports.validateJobId = validateJobId;
//# sourceMappingURL=validateJobId.js.map