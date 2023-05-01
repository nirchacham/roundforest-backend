"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAmountToDeposit = void 0;
const validateAmountToDeposit = (req, res, next) => {
    const { amount } = req.body;
    if (!amount)
        return res.status(400).send("amount is required");
    if (amount && isNaN(+amount))
        return res.status(400).send("Amount param must be a number");
    next();
};
exports.validateAmountToDeposit = validateAmountToDeposit;
//# sourceMappingURL=validateAmountToDeposit.js.map